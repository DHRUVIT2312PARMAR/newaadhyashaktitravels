# GitHub Push Helper Script
Write-Host "GitHub Upload Helper" -ForegroundColor Green
Write-Host ""

# Show commits to push
Write-Host "Commits to push:" -ForegroundColor Yellow
git log --oneline origin/main..main

# Get token from user
Write-Host ""
Write-Host "To push to GitHub, you need a Personal Access Token:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://github.com/settings/tokens" -ForegroundColor White
Write-Host "2. Click 'Generate new token (classic)'" -ForegroundColor White
Write-Host "3. Select 'repo' scope" -ForegroundColor White
Write-Host "4. Generate and copy the token" -ForegroundColor White
Write-Host ""

$token = Read-Host "Paste your GitHub Personal Access Token"

if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Host "No token provided. Exiting." -ForegroundColor Red
    exit 1
}

# Set remote with token
$remoteUrl = "https://$token@github.com/DHRUVIT2312PARMAR/newaadhyashaktitravels.git"
git remote set-url origin $remoteUrl

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow

# Try to push
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to https://github.com/DHRUVIT2312PARMAR/newaadhyashaktitravels" -ForegroundColor White
    Write-Host "2. Redeploy your application on Vercel" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "Push failed!" -ForegroundColor Red
}

# Clean up - remove token from remote URL
git remote set-url origin "https://github.com/DHRUVIT2312PARMAR/newaadhyashaktitravels.git"
