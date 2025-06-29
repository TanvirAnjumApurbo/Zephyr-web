# 🚀 Zephyr Website Deployment Guide

## Quick Deployment Steps

### 1. Initialize Git and Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Zephyr Weather App website"

# Add remote repository
git remote add origin https://github.com/TanvirAnjumApurbo/Zephyr-web.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)
1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import `TanvirAnjumApurbo/Zephyr-web` repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### 3. Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 📋 Pre-deployment Checklist

- ✅ All static assets are in the `public/` folder
- ✅ Environment variables are set (if any)
- ✅ Build passes locally (`npm run build`)
- ✅ No console errors in production build
- ✅ All images are optimized
- ✅ Meta tags and SEO are configured

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint check
npm run lint
```

## 🌍 Environment Variables

No environment variables are required for this project as it's a static website.

## 📱 Post-Deployment

After successful deployment:
1. Test the website on various devices
2. Check mobile responsiveness
3. Verify all animations work properly
4. Test download functionality
5. Update the live demo link in README.md

---

**Happy Deploying! 🎉**
