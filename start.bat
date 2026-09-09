@echo off
cd /d "%~dp0"
echo Starting portfolio dev server on port 4321...
start "http://localhost:4321/portfolio/"
call npm run dev -- --port 4321 --host localhost