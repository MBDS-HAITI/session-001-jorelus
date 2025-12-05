# 🚀 MBDS Student Management - Guide de Démarrage

## 📋 Configuration Requise

- Node.js (v16+)
- npm
- MongoDB Atlas configuré
- Git (optionnel)

## 🎯 Démarrer l'Application Complète

### **Option 1 : Avec le script batch (Windows CMD)**
```bash
.\start.bat
```

### **Option 2 : Avec le script PowerShell**
```powershell
.\start.ps1
```

### **Option 3 : Manuellement (Deux terminaux)**

**Terminal 1 - Backend (Port 8010) :**
```bash
cd server
npm start
```

**Terminal 2 - Frontend (Port 5173) :**
```bash
cd session01
npm run dev
```

---

## 🔧 Commandes Disponibles

### **Backend**
```bash
cd server

# Démarrer le serveur
npm start

# Démarrer avec nodemon (hot reload)
npm run dev

# Seeder la base de données
npm run seed

# Seeder et démarrer le serveur
npm run seed-and-start
```

### **Frontend**
```bash
cd session01

# Démarrer en développement
npm run dev

# Build pour production
npm build

# Prévisualiser la build
npm run preview

# Linter le code
npm run lint
```

---

## 🌐 Accès à l'Application

- **Frontend** : http://localhost:5173
- **Backend API** : http://localhost:8010/api
- **Health Check** : http://localhost:8010/api/health

---

## 📚 Endpoints disponibles

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/students` | Récupérer tous les étudiants |
| GET | `/api/courses` | Récupérer tous les cours |
| GET | `/api/grades` | Récupérer toutes les notes |
| POST | `/api/students` | Créer un nouvel étudiant |
| PUT | `/api/students/:id` | Modifier un étudiant |
| DELETE | `/api/students/:id` | Supprimer un étudiant |

---

## 🗄️ Base de Données

- **Fournisseur** : MongoDB Atlas (Cloud)
- **URI** : Configurée dans `.env`
- **Collections** : Students, Courses, Grades

### Seeder la base de données

```bash
cd server
npm run seed
```

Cela va :
- Vider les collections existantes
- Importer 100 étudiants
- Importer 7 cours
- Importer 100 notes

---

## 🔑 Variables d'Environnement

Fichier `.env` du serveur :
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=8010
NODE_ENV=development
```

---

## ⚠️ Résolution des Problèmes

### Les serveurs ne se lancent pas
```bash
# Arrêter tous les processus Node
Get-Process -Name node | Stop-Process -Force
```

### Erreur MongoDB
- Vérifier que MongoDB Atlas a autorisé votre IP (0.0.0.0/0)
- Vérifier la connexion internet

### Port déjà utilisé
```bash
# Trouver le processus sur le port
netstat -ano | findstr :8010
# Tuer le processus (remplacer PID)
taskkill /PID <PID> /F
```

---

## 📦 Installation des Dépendances

Si vous venez de cloner le projet :

```bash
# Backend
cd server
npm install

# Frontend
cd ../session01
npm install
```

---

## 🚀 Déploiement

### Build Production Frontend
```bash
cd session01
npm run build
```

### Déployer sur Vercel, Netlify, etc.
- Connecter le repo GitHub
- Branche : `master`
- Build command : `npm run build`
- Output directory : `dist`

---

## 📞 Support

Pour toute question, consultez :
- `README.md` du backend
- `README.md` du frontend
- Documentation MongoDB Atlas

---

**Créé avec ❤️ pour MBDS**
