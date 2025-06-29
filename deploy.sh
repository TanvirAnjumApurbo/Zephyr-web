#!/bin/bash

# Zephyr Website Deployment Script
echo "🚀 Preparing Zephyr Website for deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
fi

# Add all files
echo "📂 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Initial commit: Zephyr Weather App website ready for deployment"

# Add remote origin if not exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/TanvirAnjumApurbo/Zephyr-web.git
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🌐 Now you can deploy to Vercel:"
echo "   1. Go to https://vercel.com"
echo "   2. Import your GitHub repository"
echo "   3. Deploy automatically!"
