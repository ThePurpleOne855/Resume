# Deployment to Vercel

This project is ready to be deployed on Vercel. Follow these steps:

## Prerequisites
- A GitHub, GitLab, or Bitbucket account
- A Vercel account (free tier available)

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Create React App settings

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://yourproject.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Deploy to production

## Configuration

The project includes:
- ✅ `vercel.json` - Vercel configuration for routing
- ✅ Build script: `npm run build`
- ✅ Output directory: `build/`
- ✅ Rewrites for React Router (if needed)

## Environment Variables

If you need environment variables (like EmailJS keys), add them in:
- Vercel Dashboard → Project Settings → Environment Variables

## Custom Domain

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS settings as instructed
4. Update the URLs in `public/index.html` to match your domain

## Build Verification

The project builds successfully with:
- ✅ React 18.2.0
- ✅ TailwindCSS 3.1.6
- ✅ All dependencies resolved
- ✅ Optimized production build (~53KB gzipped)

## Post-Deployment

After deployment, update:
- EmailJS configuration in the Contact component (if used)
- Social media links
- Portfolio images (og-image.jpg, twitter-image.jpg)

## Need Help?

- Vercel Docs: https://vercel.com/docs
- React Deployment: https://reactjs.org/docs/deployment.html
