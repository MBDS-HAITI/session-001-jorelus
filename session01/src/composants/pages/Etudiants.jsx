// ...existing code...
import { useState, useMemo } from 'react';
import { etudiants } from '../../data';

export default function Etudiants() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const total = etudiants.length;
  const totalPages = pageSize === 0 ? 1 : Math.max(1, Math.ceil(total / pageSize));

  const sorted = useMemo(() => {
    return [...etudiants].sort((a, b) => {
      const la = (a.lastname ?? '').toLowerCase();
      const lb = (b.lastname ?? '').toLowerCase();
      if (la < lb) return -1;
      if (la > lb) return 1;
      const fa = (a.firstname ?? '').toLowerCase();
      const fb = (b.firstname ?? '').toLowerCase();
      return fa < fb ? -1 : fa > fb ? 1 : 0;
    });
  }, [etudiants]);

  const visible = useMemo(() => {
    if (pageSize === 0) return sorted;
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, pageSize]);

  const goTo = (n) => setPage(Math.min(Math.max(1, n), totalPages));
  const next = () => goTo(page + 1);
  const prev = () => goTo(page - 1);

  return (
    <main className="Main page-content">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20 }}>
        <div>
          <h1>👥 Étudiants</h1>
          <p style={{ margin: 0, color: '#64748b' }}>
            {`Affichage ${pageSize === 0 ? 'de tous' : `des ${pageSize} par page`} — Total : ${total}`}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <label style={{ fontSize: 12, color: '#475569' }}>Afficher</label>
          <select
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
            style={{ padding: 6, borderRadius: 6 }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={0}>Tous</option>
          </select>
        </div>
      </header>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e6eef8' }}>ID</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e6eef8' }}>Prénom</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e6eef8' }}>Nom</th>
          </tr>
        </thead>
        <tbody>
          {visible.map(({ id, firstname, lastname }, i) => (
            <tr key={id ?? i}>
              <td style={{ padding: 8, borderBottom: '1px solid #f1f5f9' }}>{id ?? (i + 1)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f1f5f9' }}>{firstname ?? '-'}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f1f5f9' }}>{lastname ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {pageSize !== 0 && (
        <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
          <div style={{ color: '#64748b' }}>Page {page} / {totalPages}</div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => goTo(1)} disabled={page === 1} style={{ padding: 8, borderRadius: 6 }}>« First</button>
            <button onClick={prev} disabled={page === 1} style={{ padding: 8, borderRadius: 6 }}>‹ Prev</button>
            <button onClick={next} disabled={page === totalPages} style={{ padding: 8, borderRadius: 6 }}>Next ›</button>
            <button onClick={() => goTo(totalPages)} disabled={page === totalPages} style={{ padding: 8, borderRadius: 6 }}>Last »</button>
          </div>
        </footer>
      )}
    </main>
  );
}
// ...existing code...