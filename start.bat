@echo off
REM Script pour démarrer le serveur Node.js et React ensemble
REM Démarrage sur Windows CMD

cd /d D:\DossierPrincipale\session-001-jorelus

echo.
echo ========================================
echo   Démarrage de l'application MBDS
echo ========================================
echo.
echo Starting backend server...
cd server
start "MBDS Backend" cmd /k "node server.js"
cd ..

timeout /t 3 /nobreak

echo Starting React development server...
cd session01
start "MBDS Frontend" cmd /k "npm run dev"
cd ..

echo.
echo ========================================
echo   Les deux serveurs ont été lancés!
echo   Backend: http://localhost:8010
echo   Frontend: http://localhost:5173
echo ========================================
echo.

pause
