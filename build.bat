@echo off
cd /d "%~dp0"
echo Building production site...
call npm run build
if %ERRORLEVEL% EQU 0 (
  echo Build complete. Run serve.bat to preview, or push dist/ to GitHub Pages.
)
pause