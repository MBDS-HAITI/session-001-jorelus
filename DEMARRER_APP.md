# 🚀 DÉMARRER L'APPLICATION 3-TIERS

## Étape 1 : Installer les dépendances

### Backend
```powershell
cd c:\Users\ore68\session-001-jorelus\server
npm install
```

### Frontend
```powershell
cd c:\Users\ore68\session-001-jorelus\session01
npm install
```

---

## Étape 2 : Lancer MongoDB (2 options)

### Option A : MongoDB Local (Windows)
```powershell
# Installer MongoDB Community si pas encore fait :
# https://www.mongodb.com/try/download/community

# Lancer MongoDB
mongod
```

### Option B : MongoDB Atlas (Cloud - Recommandé)
1. Créer un compte : https://www.mongodb.com/cloud/atlas
2. Créer un cluster gratuit
3. Copier votre URI (exemple: `mongodb+srv://user:pass@cluster.mongodb.net/mbds`)
4. Mettre à jour `server\.env` :
   ```
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/mbds
   ```

---

## Étape 3 : Lancer le Backend

Ouvrir **Terminal PowerShell #1** :
```powershell
cd c:\Users\ore68\session-001-jorelus\server
npm run dev
```

Vérifier dans le navigateur : **http://localhost:5000/api/health**
(Vous devez voir : `{"status":"✅ Serveur actif"}`)

---

## Étape 4 : Charger les données (Seed)

Ouvrir **Terminal PowerShell #2** :
```powershell
cd c:\Users\ore68\session-001-jorelus\server
npm run seed
```

✅ Vous devez voir :
```
✅ MongoDB connecté
🗑️ Collections vidées
✅ 1102 notes importées
✅ 100 étudiants importés
✅ 12 matières importées
✅ Seed terminé avec succès
```

---

## Étape 5 : Lancer le Frontend

Ouvrir **Terminal PowerShell #3** :
```powershell
cd c:\Users\ore68\session-001-jorelus\session01
npm run dev
```

Ouvrir dans le navigateur : **http://localhost:5173**

---

## ✅ Vérifications finales

### 1. Notes.jsx fonctionne
- Cliquez sur "📝 Notes" → Doivent charger depuis la base de données
- Testez recherche + tri + pagination

### 2. Etudiants.jsx fonctionne
- Cliquez sur "👥 Étudiants" → Doivent charger depuis l'API

### 3. Matieres.jsx fonctionne
- Cliquez sur "📚 Matières" → Stats calculées avec les données MongoDB

### 4. Apropos fonctionne
- Cliquez sur "ℹ️ À Propos" → Affiche stats globales

---

## 🐛 Troubleshooting

| Problème | Solution |
|----------|----------|
| **CORS error** | Vérifier `REACT_APP_API_URL` dans `session01\.env` = `http://localhost:5000/api` |
| **MongoDB connexion échoue** | Vérifier MongoDB lancé ou URI MongoDB Atlas correcte |
| **Seed échoue** | Vérifier `server\scripts\seed.js` ligne 3 a le bon chemin vers data.json |
| **Notes vides** | Relancer `npm run seed` dans `server/` |
| **Port 5000 occupé** | Changer PORT dans `server\.env` ou fermer autre app |

---

## 📁 Structure créée

```
c:\Users\ore68\session-001-jorelus\
├── server/                           ← Backend (Node/Express)
│   ├── models/                       (Note, Etudiant, Matiere)
│   ├── routes/                       (/api/notes, /api/etudiants, /api/matieres)
│   ├── config/db.js                  (Connexion MongoDB)
│   ├── scripts/seed.js               (Importer data.json → MongoDB)
│   ├── server.js                     (Entry point)
│   ├── package.json
│   └── .env
│
└── session01/                        ← Frontend (React)
    ├── src/
    │   ├── api/apiClient.js          (HTTP client)
    │   ├── hooks/useAPI.js           (Hooks: useNotes, useEtudiants, useMatieres)
    │   └── composants/pages/         (Notes, Etudiants, Matieres - MISES À JOUR)
    ├── .env                          (Config API_URL)
    └── package.json
```

---

## 🎯 Prochaines étapes (Optionnel)

- [ ] Ajouter JWT authentification backend
- [ ] Ajouter formulaires pour CRUD (créer/edit/delete notes)
- [ ] Déployer backend (Heroku, Railway, Render)
- [ ] Déployer frontend (Vercel, Netlify)
- [ ] Ajouter websockets pour live updates
