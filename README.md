# Diya Maheshwari - Portfolio Website

A stunning 3D portfolio website showcasing my skills, experience, and projects in AI/ML and software development.

## Features

- ✨ **3D Interactive Background** - Animated particles using Three.js
- 🎨 **Modern Design** - Beautiful gradients and glassmorphism effects
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Smooth Animations** - Scroll animations and interactive elements
- 🎯 **Professional Sections** - About, Experience, Projects, Skills, Contact

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, Backdrop-filter)
- JavaScript (ES6+)
- Three.js for 3D effects
- Font Awesome for icons
- Google Fonts (Poppins)

## How to Host Your Portfolio

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at:**
   ```
   https://yourusername.github.io/portfolio
   ```

### Option 2: Netlify (Free)

1. **Drag & Drop Method**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag your entire portfolio folder to the deploy area
   - Your site will be live instantly!

2. **GitHub Integration**
   - Connect your GitHub account
   - Select your portfolio repository
   - Netlify will automatically deploy and update

### Option 3: Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts and your site will be live!**

### Option 4: Firebase Hosting (Free)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy**
   ```bash
   firebase deploy
   ```

## Customization

### Colors
The main color scheme is defined in `styles.css`:
- Primary: `#ff6b6b` (Coral)
- Secondary: `#4ecdc4` (Turquoise)
- Background: Gradient from `#667eea` to `#764ba2`

### Content
- Update your information in `index.html`
- Replace `IMG_5739.jpg` with your own photo
- Modify project links and descriptions
- Update contact information

### 3D Background
The particle system can be customized in `script.js`:
- Change particle count: `const particleCount = 1000;`
- Adjust particle size: `size: 0.05`
- Modify animation speed in the `animate()` function

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── IMG_5739.jpg        # Profile photo
└── README.md           # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Tips

1. **Optimize Images**
   - Compress your profile photo
   - Use WebP format if possible
   - Keep file sizes under 500KB

2. **Minimize Dependencies**
   - The site uses CDN links for external libraries
   - Consider downloading and hosting locally for better performance

3. **Enable Compression**
   - Most hosting platforms automatically enable gzip compression
   - This reduces file sizes by 60-80%

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## Contact

For any questions or customization help:
- Email: diyamaheshwari2412@gmail.com
- LinkedIn: [Diya Maheshwari](https://www.linkedin.com/in/diya-maheshwari2005)
- GitHub: [diyamaheshwari24](https://github.com/diyamaheshwari24)

---

**Happy Hosting! 🚀** 