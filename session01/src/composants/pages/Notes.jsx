import { useState, useMemo, useEffect } from 'react';
import { notes } from '../../data';

export default function Notes() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [q, setQ] = useState(''); // debounced search value
  const [qInput, setQInput] = useState(''); // input value
  const [sortKey, setSortKey] = useState('id');
  const [sortDir, setSortDir] = useState('asc');

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return notes.filter(({ id, student, course }) => {
      if (!s) return true;
      const name = `${student?.firstname ?? ''} ${student?.lastname ?? ''}`.toLowerCase();
      return String(id).includes(s) || name.includes(s) || (course ?? '').toLowerCase().includes(s);
    });
  }, [notes, q]);

  // debounce search input -> q
  useEffect(() => {
    const t = setTimeout(() => setQ(qInput), 180);
    return () => clearTimeout(t);
  }, [qInput]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const A = (a[sortKey] ?? '').toString().toLowerCase();
      const B = (b[sortKey] ?? '').toString().toLowerCase();
      if (A < B) return sortDir === 'asc' ? -1 : 1;
      if (A > B) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortDir]);

  const total = sorted.length;
  const totalPages = pageSize === 0 ? 1 : Math.max(1, Math.ceil(total / pageSize));
  const visible = useMemo(() => {
    if (pageSize === 0) return sorted;
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, pageSize]);

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
    setPage(1);
  };

  return (
    <main className="Main page-content">
      <header style={{display:'flex',justifyContent:'space-between',gap:12,alignItems:'center'}}>
        <div>
          <h1>📝 Notes</h1>
          <p style={{margin:0,color:'#64748b'}}>Total: {total}</p>
        </div>

        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <input
            value={qInput}
            onChange={e=>{ setQInput(e.target.value); setPage(1); }}
            placeholder="Rechercher id, étudiant, matière"
            style={{padding:6,borderRadius:6}}
          />
          <select value={pageSize} onChange={e=>{ setPageSize(Number(e.target.value)); setPage(1); }}>
            <option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={0}>Tous</option>
          </select>
        </div>
      </header>

      <table style={{width:'100%',marginTop:12}}>
        <thead>
          <tr>
            <th onClick={()=>toggleSort('id')}>ID</th>
            <th onClick={()=>toggleSort('student')}>Étudiant</th>
            <th onClick={()=>toggleSort('course')}>Matière</th>
            <th onClick={()=>toggleSort('date')}>Date</th>
            <th onClick={()=>toggleSort('note')}>Note</th>
          </tr>
        </thead>
        <tbody>
          {visible.map(({ id, student, course, date, note }, i) => (
            <tr key={id ?? i}>
              <td>{id ?? (i+1)}</td>
              <td>{student?.firstname ?? '-'} {student?.lastname ?? ''}</td>
              <td>{course ?? 'Non renseignée'}</td>
              <td>{date ?? '-'}</td>
              <td style={{textAlign:'right'}}>{note ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {pageSize !== 0 && (
        <footer style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
          <div style={{color:'#64748b'}}>Page {page} / {totalPages}</div>

          <div style={{display:'flex',gap:8}}>
            <button onClick={() => { setPage(1); }} disabled={page===1} style={{padding:8,borderRadius:6}}>« First</button>
            <button onClick={() => { setPage(p => Math.max(1, p-1)); }} disabled={page===1} style={{padding:8,borderRadius:6}}>‹ Prev</button>
            <button onClick={() => { setPage(p => Math.min(totalPages, p+1)); }} disabled={page===totalPages} style={{padding:8,borderRadius:6}}>Next ›</button>
            <button onClick={() => { setPage(totalPages); }} disabled={page===totalPages} style={{padding:8,borderRadius:6}}>Last »</button>
          </div>
        </footer>
      )}
    </main>
  );
}