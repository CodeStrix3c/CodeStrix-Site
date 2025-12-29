# Hostinger Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
Make sure your `.env.local` file has all required variables:
```env
GMAIL_USER=codestrixsolution@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

### 2. Build the Project
```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### 3. Test the Build Locally
```bash
npm start
```

Visit `http://localhost:3001` to verify everything works.

---

## Hostinger Deployment Steps

### Option 1: Using Hostinger File Manager

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files to Hostinger:**
   - Login to Hostinger hPanel
   - Go to File Manager
   - Navigate to `public_html` (or your domain folder)
   - Upload these files/folders:
     - `.next` folder (entire folder)
     - `public` folder (entire folder)
     - `package.json`
     - `package-lock.json`
     - `next.config.js`
     - `tsconfig.json`
     - `tailwind.config.ts`
     - `postcss.config.js`

3. **Set up environment variables:**
   - In Hostinger hPanel, go to Environment Variables
   - Add:
     - `GMAIL_USER=codestrixsolution@gmail.com`
     - `GMAIL_APP_PASSWORD=your-app-password`
     - `NODE_ENV=production`

4. **Install dependencies and start:**
   - SSH into your Hostinger account
   - Navigate to your domain folder
   - Run:
     ```bash
     npm install --production
     npm start
     ```

### Option 2: Using Git (Recommended)

1. **Push to Git repository:**
   ```bash
   git add .
   git commit -m "Production build"
   git push origin main
   ```

2. **In Hostinger:**
   - Connect your Git repository
   - Set build command: `npm run build`
   - Set start command: `npm start`
   - Add environment variables in Hostinger dashboard

### Option 3: Using Hostinger Node.js Hosting

1. **Prepare for deployment:**
   - Build the project: `npm run build`
   - Create `.htaccess` file (if needed for routing)

2. **Upload via FTP/SSH:**
   - Upload all files except `node_modules`
   - Run `npm install --production` on server
   - Set environment variables
   - Start with PM2 or similar process manager

---

## Important Files to Upload

✅ **Must Upload:**
- `.next` (build output)
- `public` (static files)
- `package.json`
- `package-lock.json`
- `next.config.js`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.js`

❌ **Don't Upload:**
- `node_modules` (install on server)
- `.env.local` (set in Hostinger environment variables)
- `.git` folder
- Development files

---

## Environment Variables in Hostinger

Set these in Hostinger hPanel → Environment Variables:

```env
NODE_ENV=production
GMAIL_USER=codestrixsolution@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
PORT=3000
```

---

## Post-Deployment

1. **Verify the site loads**
2. **Test contact form** - submit a test message
3. **Check email delivery** - verify emails arrive at Info@codestrix.com
4. **Test all pages** - ensure navigation works
5. **Check mobile responsiveness**

---

## Troubleshooting

### Build Errors
- Run `npm run build` locally first to catch errors
- Check for TypeScript errors: `npm run lint`
- Ensure all dependencies are installed

### Runtime Errors
- Check environment variables are set correctly
- Verify Node.js version (Hostinger should support Node 18+)
- Check server logs in Hostinger dashboard

### Email Not Working
- Verify Gmail App Password is correct
- Check environment variables are set
- Test email functionality after deployment

---

## Quick Build Command

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

The build will be in the `.next` folder, ready for deployment!

