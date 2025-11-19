@echo off
REM start-dev.bat — opens two cmd windows: backend and frontend

start "Grabber - Backend" cmd /k "cd /d "%~dp0backend" && echo Installing backend deps... && npm install && echo Starting backend... && node server.js"
start "Grabber - Frontend" cmd /k "cd /d "%~dp0frontend" && echo Starting static frontend on :3000... && npx --yes http-server "%~dp0frontend" -p 3000"

echo Launched backend and frontend windows.
exit /b 0
