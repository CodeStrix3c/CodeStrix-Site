# 🚀 Codestrix Website - Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have:
- ✅ **Node.js** 18.0 or higher
- ✅ **npm** or **yarn** or **pnpm**
- ✅ **Git** (optional)
- ✅ Code editor (VS Code recommended)

---

## ⚡ Quick Start (5 minutes)

### **Step 1: Navigate to Project**
```bash
cd Codestrix-website
```

### **Step 2: Install Dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

### **Step 3: Run Development Server**
```bash
npm run dev
```

### **Step 4: Open in Browser**
```
http://localhost:3001
```

**That's it! Your website is running!** 🎉

---

## 📦 Installation Details

### **What Gets Installed**

#### **Core Dependencies**
- `next` - React framework
- `react` & `react-dom` - React library
- `framer-motion` - Animation library
- `react-icons` - Icon library
- `zustand` - State management (optional)
- `react-hot-toast` - Notifications
- `react-intersection-observer` - Scroll animations

#### **Dev Dependencies**
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `eslint` - Code linting
- `postcss` & `autoprefixer` - CSS processing

### **Installation Time**
- First install: ~2-3 minutes
- Subsequent installs: ~30 seconds

---

## 🛠️ Development

### **Running the Server**
```bash
npm run dev
```
- Server starts on port **3001**
- Hot reload enabled
- Fast refresh for instant updates

### **Building for Production**
```bash
npm run build
```
- Creates optimized build
- Minifies assets
- Generates static pages
- Output in `.next` folder

### **Running Production Build**
```bash
npm start
```
- Serves production build
- Optimized performance
- Port 3001

### **Linting**
```bash
npm run lint
```
- Checks code quality
- Finds potential errors
- Enforces best practices

---

## 🎨 Customization

### **1. Change Colors**

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',  // Change this
    light: '#LIGHTER_SHADE',
    dark: '#DARKER_SHADE',
  },
}
```

### **2. Update Logo**

Edit `components/Header.tsx` and `components/Footer.tsx`:
```tsx
// Replace icon or text
<FiCode className="w-6 h-6 text-white" />  // Change icon
<span>Your Company</span>  // Change name
```

### **3. Edit Content**

#### **Home Page**
- File: `app/page.tsx`
- Edit hero text, services, stats, etc.

#### **Other Pages**
- Services: `app/services/page.tsx`
- About: `app/about/page.tsx`
- Portfolio: `app/portfolio/page.tsx`
- Contact: `app/contact/page.tsx`
- Careers: `app/careers/page.tsx`
- Blog: `app/blog/page.tsx`

### **4. Change Fonts**

Edit `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
```

Then update `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['YourFont', 'system-ui'],
}
```

### **5. Update Images**

Replace image URLs in page files:
```tsx
// From
src="https://images.unsplash.com/photo-xxx"

// To
src="/images/your-image.jpg"  // Place in public/images/
```

---

## 📁 Project Structure

```
Codestrix-website/
│
├── app/                      # Pages and routes
│   ├── about/               # About page
│   ├── blog/                # Blog page
│   ├── careers/             # Careers page
│   ├── contact/             # Contact page
│   ├── portfolio/           # Portfolio page
│   ├── services/            # Services page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
│
├── components/              # Reusable components
│   ├── Header.tsx           # Navigation
│   └── Footer.tsx           # Footer
│
├── public/                  # Static files
│   └── (add images here)
│
├── tailwind.config.ts       # Tailwind config
├── next.config.js           # Next.js config
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies
│
└── README.md                # Documentation
```

---

## 🎯 Key Files Explained

### **app/layout.tsx**
- Root layout for entire site
- Includes Header and Footer
- Sets up fonts and metadata
- Wraps all pages

### **app/page.tsx**
- Home page content
- Hero, services, portfolio, etc.
- Most complex page

### **components/Header.tsx**
- Navigation menu
- Logo
- Mobile menu
- Sticky on scroll

### **components/Footer.tsx**
- Footer content
- Links and contact info
- Social media icons

### **tailwind.config.ts**
- Color scheme
- Font configuration
- Custom animations
- Design tokens

### **app/globals.css**
- Custom CSS classes
- Tailwind directives
- Global styles
- Animations

---

## 🔧 Configuration

### **Port Number**

To change from 3001 to another port:

Edit `package.json`:
```json
"scripts": {
  "dev": "next dev -p 3002",  // Change port
  "start": "next start -p 3002"
}
```

### **Base URL**

For deployment, update:

`next.config.js`:
```js
module.exports = {
  basePath: '/your-path',  // If not root
}
```

### **Image Domains**

To allow images from other domains:

`next.config.js`:
```js
images: {
  domains: ['yourdomain.com'],
}
```

---

## 🚀 Deployment

### **Vercel (Recommended)**

1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

**Or use CLI:**
```bash
npm i -g vercel
vercel
```

### **Netlify**

1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`

### **Manual Hosting**

```bash
# Build
npm run build

# Start server
npm start
```

---

## 🐛 Troubleshooting

### **Port Already in Use**
```bash
# Kill process on port 3001
npx kill-port 3001

# Or change port in package.json
```

### **Module Not Found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Build Errors**
```bash
# Clean build
rm -rf .next
npm run build
```

### **Type Errors**
```bash
# Check TypeScript
npx tsc --noEmit
```

---

## 📚 Additional Resources

### **Documentation**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

### **Learning**
- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind Tutorial](https://tailwindcss.com/docs/utility-first)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎨 Design Resources

### **Icons**
- [React Icons](https://react-icons.github.io/)
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)

### **Images**
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

### **Colors**
- [Coolors](https://coolors.co/)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

### **Fonts**
- [Google Fonts](https://fonts.google.com/)
- [Font Pair](https://www.fontpair.co/)

---

## ✅ Checklist

### **Before Launching**
- [ ] Update all content
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Optimize images
- [ ] Set up analytics
- [ ] Add favicon
- [ ] Test on multiple browsers
- [ ] Set up SSL certificate
- [ ] Configure SEO meta tags
- [ ] Set up sitemap
- [ ] Test page speed
- [ ] Check accessibility

### **After Launching**
- [ ] Submit to search engines
- [ ] Set up monitoring
- [ ] Configure backups
- [ ] Update social media
- [ ] Announce launch
- [ ] Collect feedback
- [ ] Monitor analytics

---

## 🎊 You're Ready!

Your Codestrix website is **fully set up** and ready for customization!

### **Next Steps:**
1. ✅ Customize colors and fonts
2. ✅ Update content with your information
3. ✅ Add your own images
4. ✅ Configure contact form
5. ✅ Test thoroughly
6. ✅ Deploy to production

**Need help?** Check the documentation or open an issue!

---

**Happy coding!** 💻✨

