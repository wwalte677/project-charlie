@echo off
title Project Charlie

echo Starting backend...
start "" cmd /c "cd backend && java -jar backend.jar"

echo Waiting 4 seconds for backend to boot...
timeout /t 4 > nul

echo Starting frontend...
start "" cmd /c "cd frontend && npm run preview"

echo Waiting 2 seconds for frontend to boot...
timeout /t 2 > nul

echo Opening browser...
start http://localhost:4173/

echo Application is running. You may close this window.
pause > nul