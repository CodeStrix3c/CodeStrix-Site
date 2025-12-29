# 🚀 Step-by-Step Hostinger Deployment Guide

## ✅ Pre-Deployment Checklist

Your build is already complete! The `.next` folder contains your production-ready files.

---

## 📋 Method 1: Using Hostinger Node.js Hosting (Recommended)

### Step 1: Access Hostinger hPanel
1. Login to your Hostinger account
2. Go to **hPanel** dashboard
3. Find **Node.js** or **Advanced** section

### Step 2: Enable Node.js Application
1. Navigate to **Node.js** in hPanel
2. Click **Create Node.js App** or **Add Application**
3. Select your domain
4. Choose Node.js version: **18.x** or **20.x** (recommended)
5. Set application root: `/public_html` or your domain folder

### Step 3: Upload Your Files

**Option A: Using File Manager**
1. Go to **File Manager** in hPanel
2. Navigate to your domain folder (usually `public_html` or `domains/yourdomain.com/public_html`)
3. **Delete any existing files** (if this is a fresh deployment)
4. Upload these files/folders:
   ```
   ✅ .next/          (entire folder - this is your build)
   ✅ public/         (entire folder - static assets)
   ✅ app/           (entire folder - source pages)
   ✅ components/    (entire folder - React components)
   ✅ package.json
   ✅ package-lock.json
   ✅ next.config.js
   ✅ tsconfig.json
   ✅ tailwind.config.ts
   ✅ postcss.config.js
   ✅ .env.local     (optional - better to use hPanel env vars)
   ```

**Option B: Using FTP (FileZilla, WinSCP, etc.)**
1. Get FTP credentials from Hostinger hPanel
2. Connect using FTP client
3. Upload the same files as above

### Step 4: Set Environment Variables
1. In hPanel, go to **Node.js** → **Environment Variables**
2. Add these variables:
   ```
   NODE_ENV=production
   GMAIL_USER=codestrixsolution@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   PORT=3000
   ```
   ⚠️ **Important**: Replace `your-16-character-app-password` with your actual Gmail App Password

### Step 5: Install Dependencies
1. In hPanel, go to **Node.js** → **Terminal** or use **SSH**
2. Navigate to your domain folder:
   ```bash
   cd ~/domains/yourdomain.com/public_html
   # OR
   cd ~/public_html
   ```
3. Install production dependencies:
   ```bash
   npm install --production
   ```
   This installs only production packages (faster, smaller)

### Step 6: Configure Start Command
1. In hPanel → **Node.js** → **Your Application**
2. Set **Start Command**: `npm start`
3. Set **Build Command**: `npm run build` (if auto-build is enabled)
4. Click **Save** or **Deploy**

### Step 7: Start the Application
1. In Node.js dashboard, click **Start** or **Restart**
2. Wait for the application to start (usually 30-60 seconds)
3. Check the logs to ensure no errors

### Step 8: Configure Domain Routing (If Needed)
If your app doesn't load, you may need to create a `.htaccess` file:

Create `.htaccess` in your root directory:
```apache
RewriteEngine On
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

Or configure reverse proxy in Hostinger's Node.js settings.

---

## 📋 Method 2: Using Git Deployment (Easier Updates)

### Step 1: Push to Git Repository
```bash
git add .
git commit -m "Production build for Hostinger"
git push origin main
```

### Step 2: Connect Git in Hostinger
1. In hPanel → **Node.js** → **Git**
2. Click **Connect Repository**
3. Enter your Git repository URL
4. Select branch: `main` or `master`
5. Set build command: `npm run build`
6. Set start command: `npm start`

### Step 3: Set Environment Variables
Same as Method 1, Step 4

### Step 4: Deploy
1. Click **Deploy** or **Pull & Deploy**
2. Hostinger will automatically:
   - Pull your code
   - Run `npm install`
   - Run `npm run build`
   - Start the application

---

## 📋 Method 3: Manual SSH Deployment

### Step 1: Get SSH Access
1. In hPanel → **Advanced** → **SSH Access**
2. Enable SSH if not already enabled
3. Note your SSH credentials

### Step 2: Connect via SSH
```bash
ssh username@yourdomain.com
# OR
ssh username@your-server-ip
```

### Step 3: Navigate to Domain Folder
```bash
cd ~/domains/yourdomain.com/public_html
```

### Step 4: Upload Files
Use `scp` or `rsync` to upload files:
```bash
# From your local machine
scp -r .next public app components package*.json *.js *.ts username@yourdomain.com:~/domains/yourdomain.com/public_html/
```

### Step 5: Install and Start
```bash
npm install --production
npm start
```

### Step 6: Keep Process Running (PM2)
Install PM2 to keep the app running:
```bash
npm install -g pm2
pm2 start npm --name "codestrix" -- start
pm2 save
pm2 startup
```

---

## 🔧 Configuration Files Needed

### Create `.htaccess` (if using Apache)
If Hostinger uses Apache and you need routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Update `package.json` Start Script
Make sure your `package.json` has:
```json
{
  "scripts": {
    "start": "next start -p 3000"
  }
}
```

---

## ✅ Post-Deployment Checklist

### 1. Test Your Website
- [ ] Visit your domain: `https://yourdomain.com`
- [ ] Check homepage loads correctly
- [ ] Test navigation between pages
- [ ] Verify images load properly
- [ ] Test mobile responsiveness

### 2. Test Contact Form
- [ ] Go to `/contact` page
- [ ] Fill out and submit the form
- [ ] Check if email arrives at `Info@codestrix.com`
- [ ] Verify no errors in browser console

### 3. Test All Pages
- [ ] Home (`/`)
- [ ] About (`/about`)
- [ ] Services (`/services`)
- [ ] Portfolio (`/portfolio`)
- [ ] Blog (`/blog`)
- [ ] Contact (`/contact`)
- [ ] Privacy (`/privacy`)
- [ ] Terms (`/terms`)
- [ ] Cookies (`/cookies`)

### 4. Check Performance
- [ ] Run Google PageSpeed Insights
- [ ] Check Lighthouse scores
- [ ] Verify images are optimized

---

## 🐛 Troubleshooting

### Problem: "Cannot GET /"
**Solution**: 
- Check if Node.js app is running
- Verify port is correct (usually 3000)
- Check reverse proxy configuration

### Problem: "Module not found"
**Solution**:
```bash
cd ~/domains/yourdomain.com/public_html
rm -rf node_modules
npm install --production
```

### Problem: "Email not sending"
**Solution**:
- Verify environment variables are set correctly
- Check Gmail App Password is valid (16 characters, no spaces)
- Check server logs for errors

### Problem: "Build failed"
**Solution**:
- Check Node.js version (should be 18+)
- Verify all dependencies in `package.json`
- Check build logs in Hostinger dashboard

### Problem: "Port already in use"
**Solution**:
- Change port in `package.json` to a different port
- Update Hostinger Node.js settings to match

### Problem: "404 on routes"
**Solution**:
- Ensure `.htaccess` is configured correctly
- Check Next.js routing configuration
- Verify all pages are in `app/` directory

---

## 📞 Hostinger Support

If you encounter issues:
1. Check Hostinger Knowledge Base
2. Contact Hostinger Support via live chat
3. Check server logs in hPanel → Node.js → Logs

---

## 🔄 Updating Your Site

### After Making Changes:
1. Make changes locally
2. Test with `npm run build` and `npm start`
3. Push to Git (if using Git deployment)
4. Or upload changed files via File Manager/FTP
5. Restart Node.js app in hPanel

---

## 📝 Quick Reference

**Build Command**: `npm run build`  
**Start Command**: `npm start`  
**Port**: `3000` (default, check your Hostinger settings)  
**Node Version**: `18.x` or `20.x`  
**Environment Variables**: Set in hPanel → Node.js → Environment Variables

---

## 🎉 Success!

Once deployed, your Codestrix website will be live at:
- `https://yourdomain.com`
- `https://www.yourdomain.com`

Make sure to:
- Set up SSL certificate (usually automatic in Hostinger)
- Configure custom domain if needed
- Test all functionality
- Monitor performance

---

**Need Help?** Check the main `HOSTINGER_DEPLOYMENT.md` file for additional details.

