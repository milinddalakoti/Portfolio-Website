@echo off
cd /d "%~dp0"
echo Previewing production build on port 4321...
start "http://localhost:4321/portfolio/"
call npm run preview -- --port 4321 --host localhost