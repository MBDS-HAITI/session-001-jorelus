# Script PowerShell pour démarrer le serveur Node.js et React ensemble
# Usage: .\start.ps1

$rootPath = "D:\DossierPrincipale\session-001-jorelus"
$serverPath = "$rootPath\server"
$frontendPath = "$rootPath\session01"

Write-Host "========================================"
Write-Host "  Démarrage de l'application MBDS"
Write-Host "========================================"
Write-Host ""

# Arrêter tout processus Node existant
Write-Host "🛑 Arrêt des anciens processus Node..."
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

Write-Host "✅ Anciens processus arrêtés"
Write-Host ""

# Démarrer le serveur backend
Write-Host "🚀 Démarrage du serveur backend..."
Start-Process powershell -ArgumentList "-NoExit -Command `"cd $serverPath; `$env:PORT=8010; node server.js`"" -WindowStyle Normal

Start-Sleep -Seconds 3

# Démarrer le serveur React
Write-Host "⚡ Démarrage du serveur React..."
Start-Process powershell -ArgumentList "-NoExit -Command `"cd $frontendPath; npm run dev`"" -WindowStyle Normal

Write-Host ""
Write-Host "========================================"
Write-Host "  Les deux serveurs ont été lancés!"
Write-Host ""
Write-Host "  Backend:  http://localhost:8010"
Write-Host "  Frontend: http://localhost:5173"
Write-Host "========================================"
Write-Host ""
