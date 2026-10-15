@echo off
chcp 65001 >nul
echo ========================================================
echo   KHỞI ĐỘNG HỆ THỐNG VIOLYMPIC TOÁN LỚP 2
echo ========================================================
echo.
echo Đang khởi chạy máy chủ thử nghiệm tại máy của bạn...
echo Vui lòng chờ trong giây lát...
echo.

start "" "http://localhost:5188"
call npm run dev
pause
