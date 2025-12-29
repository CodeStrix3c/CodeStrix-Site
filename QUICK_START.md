# ⚡ Codestrix - Quick Start Guide

## 🚀 **Get Started in 3 Steps**

### **1. Install Dependencies**
```bash
cd Codestrix-website
npm install
```
*Takes ~2-3 minutes*

### **2. Run Development Server**
```bash
npm run dev
```
*Server starts on port 3001*

### **3. Open in Browser**
```
http://localhost:3001
```

**That's it! Your website is live!** 🎉

---

## 📋 **Quick Reference**

### **Project Info**
- **Name**: Codestrix
- **Type**: Software IT Company Website
- **Port**: 3001
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

### **Pages** (7 Total)
1. **Home** - `/` - Hero, services, portfolio, testimonials
2. **Services** - `/services` - 8 services with details
3. **About** - `/about` - Story, team, values
4. **Portfolio** - `/portfolio` - 6 projects (filterable)
5. **Contact** - `/contact` - Form and info
6. **Careers** - `/careers` - Jobs and benefits
7. **Blog** - `/blog` - Article listing

### **Key Files**
- `app/page.tsx` - Home page
- `app/globals.css` - Global styles
- `components/Header.tsx` - Navigation
- `components/Footer.tsx` - Footer
- `tailwind.config.ts` - Design system

---

## 🎨 **Customize**

### **Change Colors**
`tailwind.config.ts` → Line 13-23

### **Update Logo**
`components/Header.tsx` → Line 30-50

### **Edit Home Content**
`app/page.tsx` → Full file

### **Change Contact Info**
`components/Footer.tsx` → Line 60-90

---

## 📜 **Scripts**

```bash
npm run dev    # Development (port 3001)
npm run build  # Production build
npm start      # Run production
npm run lint   # Check code quality
```

---

## 🎯 **Features At a Glance**

### **Design**
✅ Dark theme with neon accents
✅ Glassmorphism effects
✅ Gradient backgrounds
✅ Smooth animations

### **Responsive**
✅ Mobile-first
✅ Touch-friendly
✅ All screen sizes

### **Performance**
✅ Fast loading
✅ Optimized images
✅ Code splitting

### **SEO**
✅ Meta tags
✅ Semantic HTML
✅ Alt attributes

---

## 📂 **Directory Structure**

```
Codestrix-website/
├── app/              # All pages
│   ├── page.tsx      # Home
│   ├── about/        # About page
│   ├── services/     # Services
│   └── ...
├── components/       # Header & Footer
├── public/           # Static files
└── tailwind.config.ts # Styles
```

---

## 🚀 **Deploy**

### **Vercel (Easy)**
```bash
npm i -g vercel
vercel
```

### **Build Manually**
```bash
npm run build
npm start
```

---

## 📚 **Documentation**

- **README.md** - Complete guide
- **SETUP.md** - Detailed setup
- **FEATURES.md** - All features
- **PROJECT_SUMMARY.md** - Overview

---

## 🎊 **You're Ready!**

Your Codestrix website is:
- ✅ Installed
- ✅ Running on port 3001
- ✅ Ready to customize
- ✅ Ready to deploy

**Open** `http://localhost:3001` **and start exploring!**

---

## 💡 **Pro Tips**

1. **Development**: Changes auto-reload
2. **Images**: Place in `public/` folder
3. **Colors**: Change in `tailwind.config.ts`
4. **Content**: Edit page files directly
5. **Deploy**: Vercel is easiest

---

## ❓ **Need Help?**

1. Check `SETUP.md` for troubleshooting
2. Read `FEATURES.md` for details
3. Review code comments
4. Check Next.js docs

---

**Happy coding!** 💻✨

**Your website is live at**: `http://localhost:3001`

