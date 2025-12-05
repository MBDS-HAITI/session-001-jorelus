# MBDS - Application 3-Tiers (React + Node/Express + MongoDB)

## Architecture

```
┌─────────────────┐         ┌──────────────────┐        ┌──────────────┐
│  React (Port    │ ←HTTP→  │ Node/Express     │ ←→    │  MongoDB     │
│   3000)         │         │ (Port 5000)      │        │ (Port 27017) │
└─────────────────┘         └──────────────────┘        └──────────────┘
  Frontend (src)            Backend (server)           Base de données
```

## Installation

### 1. Prérequis
- Node.js v16+
- MongoDB Community (local ou Atlas)

### 2. Setup Backend

```bash
cd server
npm install
```

Configurer `.env` :
```
MONGODB_URI=mongodb://localhost:27017/mbds
PORT=5000
```

### 3. Setup Frontend

```bash
cd session01
npm install
```

Configurer `session01/.env` :
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Lancement

### Terminal 1 - MongoDB (si local)
```bash
mongod
```
Ou utiliser MongoDB Atlas (cloud) en mettant à jour `server/.env` avec votre URI.

### Terminal 2 - Backend
```bash
cd server
npm run dev
```
Vérifier : `http://localhost:5000/api/health`

### Terminal 3 - Frontend
```bash
cd session01
npm run dev
```
Ouvrir : `http://localhost:5173`

## Seed initial des données

Remplir MongoDB avec `data.json` :
```bash
cd server
npm run seed
```

## Structure Backend

```
server/
├── config/
│   └── db.js              # Connexion MongoDB
├── models/
│   ├── Note.js            # Schéma Note
│   ├── Etudiant.js        # Schéma Etudiant
│   └── Matiere.js         # Schéma Matière
├── routes/
│   ├── notes.js           # API /api/notes
│   ├── etudiants.js       # API /api/etudiants
│   └── matieres.js        # API /api/matieres
├── scripts/
│   └── seed.js            # Seeding initial
├── server.js              # Entry point
├── package.json
└── .env
```

## Endpoints API

### Notes
- `GET /api/notes` - Toutes les notes
- `GET /api/notes/:id` - Une note
- `POST /api/notes` - Créer note
- `PUT /api/notes/:id` - Mettre à jour note
- `DELETE /api/notes/:id` - Supprimer note

### Etudiants
- `GET /api/etudiants` - Tous les étudiants
- `POST /api/etudiants` - Créer étudiant
- `PUT /api/etudiants/:id` - Mettre à jour
- `DELETE /api/etudiants/:id` - Supprimer

### Matieres
- `GET /api/matieres` - Toutes les matières
- `POST /api/matieres` - Créer matière
- `PUT /api/matieres/:id` - Mettre à jour
- `DELETE /api/matieres/:id` - Supprimer

## Frontend - Utiliser l'API

### Hook personnalisé
```jsx
import { useNotes, useEtudiants, useMatieres } from '../hooks/useAPI';

export default function MyComponent() {
  const { notes, loading, error } = useNotes();
  const { etudiants } = useEtudiants();
  const { matieres } = useMatieres();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return <div>{/* Afficher notes, etudiants, matieres */}</div>;
}
```

### API Client directe
```jsx
import apiClient from '../api/apiClient';

// Récupérer notes
const notes = await apiClient.getNotes();

// Créer note
await apiClient.createNote({ student: {...}, grade: 15, course: 'Math' });

// Mettre à jour
await apiClient.updateNote(noteId, { grade: 18 });

// Supprimer
await apiClient.deleteNote(noteId);
```

## Troubleshooting

| Problème | Solution |
|----------|----------|
| MongoDB connexion échoue | Vérifier MongoDB est lancé ou URI MongoDB Atlas correcte |
| CORS error | Vérifier `REACT_APP_API_URL` dans `session01/.env` |
| Seed échoue | Vérifier chemin relatif de data.json dans `server/scripts/seed.js` |
| API vide | Lancer `npm run seed` dans server/ |

## Prochaines étapes
- [ ] Remplacer `useNotes()` dans `Notes.jsx`
- [ ] Remplacer `useEtudiants()` dans `Etudiants.jsx`
- [ ] Remplacer `useMatieres()` dans `Matieres.jsx`
- [ ] Ajouter authentification backend (JWT)
- [ ] Déployer backend (Heroku, Railway, Render)
- [ ] Déployer frontend (Vercel, Netlify)
