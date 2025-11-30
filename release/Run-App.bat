@echo off
title Project Charlie Launcher

set ROOT=%~dp0

echo Starting backend...
start "Backend" cmd /k "cd /d %ROOT%backend && java -jar backend.jar"

echo Waiting for backend...
timeout /t 3 > nul

echo Starting frontend...
start "Frontend" cmd /k "cd /d %ROOT%frontend && ..\node\npm.cmd run preview"

echo Opening browser...
timeout /t 3 > nul
start http://localhost:4173

pause
