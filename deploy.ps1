# Zephyr Website Deployment Script for Windows
Write-Host "🚀 Preparing Zephyr Website for deployment..." -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "📝 Initializing Git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host "📂 Adding files to Git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "Initial commit: Zephyr Weather App website ready for deployment"

# Add remote origin if not exists
$remoteExists = git remote get-url origin 2>$null
if (-not $remoteExists) {
    Write-Host "🔗 Adding GitHub remote..." -ForegroundColor Yellow
    git remote add origin https://github.com/TanvirAnjumApurbo/Zephyr-web.git
}

# Push to GitHub
Write-Host "⬆️ Pushing to GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "🌐 Now you can deploy to Vercel:" -ForegroundColor Cyan
Write-Host "   1. Go to https://vercel.com" -ForegroundColor White
Write-Host "   2. Import your GitHub repository" -ForegroundColor White
Write-Host "   3. Deploy automatically!" -ForegroundColor White
