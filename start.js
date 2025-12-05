#!/usr/bin/env node

/**
 * Script de démarrage automatique pour MBDS
 * Lance le backend Node.js et le frontend React
 * Usage: node start.js
 */

const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const isWindows = os.platform() === 'win32';
const rootPath = __dirname;
const serverPath = path.join(rootPath, 'server');
const frontendPath = path.join(rootPath, 'session01');

console.log('\n========================================');
console.log('  🚀 Démarrage de l\'application MBDS');
console.log('========================================\n');

// Configuration des serveurs
const servers = [
  {
    name: 'Backend',
    path: serverPath,
    command: isWindows ? 'node' : 'node',
    args: ['server.js'],
    port: 8010,
  },
  {
    name: 'Frontend',
    path: frontendPath,
    command: isWindows ? 'npm' : 'npm',
    args: ['run', 'dev'],
    port: 5173,
  },
];

// Démarrer chaque serveur
let processCount = 0;

servers.forEach((server, index) => {
  console.log(`⏳ ${index + 1}. Démarrage de ${server.name}...`);

  const process = spawn(server.command, server.args, {
    cwd: server.path,
    stdio: 'inherit',
    shell: isWindows,
  });

  process.on('error', (err) => {
    console.error(`❌ Erreur ${server.name}:`, err);
  });

  process.on('exit', (code) => {
    console.log(`\n⛔ ${server.name} arrêté (code: ${code})`);
    processCount++;
    
    if (processCount === servers.length) {
      console.log('\n========================================');
      console.log('  ✅ Application arrêtée');
      console.log('========================================\n');
      process.exit(0);
    }
  });
});

// Afficher les informations de démarrage
setTimeout(() => {
  console.log('\n========================================');
  console.log('  ✅ Tous les serveurs sont lancés!');
  console.log('');
  console.log('  📍 Backend  : http://localhost:8010');
  console.log('  📍 Frontend : http://localhost:5173');
  console.log('');
  console.log('  Appuyez sur Ctrl+C pour arrêter');
  console.log('========================================\n');
}, 3000);

// Gestion de l'arrêt gracieux
process.on('SIGINT', () => {
  console.log('\n\n🛑 Arrêt de l\'application...');
  process.exit(0);
});
