$nodeDir = "C:\Users\Design-ai\.gemini\antigravity\scratch\node-portable\node-v20.11.1-win-x64"
$env:Path = "$nodeDir;" + $env:Path

Write-Host "🚀 جاري تشغيل خادم تطوير البورتفوليو على المحرك المحلي..." -ForegroundColor Cyan
npm run dev
