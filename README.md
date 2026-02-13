# Joseph George Wahba - Portfolio Website

Professional portfolio website showcasing my work in Cybersecurity, Engineering, Software Development, and AI.

## 🚀 Live Website

Visit the portfolio at: [https://joseph-george1.github.io](https://joseph-george1.github.io)

## 📋 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark mode UI with smooth animations
- **Dynamic Projects**: Automatically fetches and displays GitHub repositories
- **Interactive Navigation**: Smooth scrolling and active section highlighting
- **Certificate Showcase**: Display your achievements and certifications
- **Contact Section**: Easy ways to get in touch

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (ES6+)
- GitHub Pages for hosting
- GitHub API for dynamic project loading
- Font Awesome icons

## 📝 Customization Guide

### Update Personal Information

1. **Email Address**: Edit the email link in the Contact section (line 421 in index.html)
   ```html
   <a href="mailto:your-email@example.com" class="contact-method">
   ```

2. **LinkedIn Profile**: Update the LinkedIn URL (lines 48 and 429 in index.html)
   ```html
   <a href="https://linkedin.com/in/your-profile" target="_blank">
   ```

3. **GitHub Username**: The JavaScript automatically uses 'joseph-george1' - update if needed in script.js (line 71)

### Add Certificate URLs

Replace the `#` placeholders with your actual certificate URLs in index.html:

```html
<a href="YOUR_CERTIFICATE_URL_HERE" class="certificate-link" data-cert="cert-id">
    <i class="fas fa-external-link-alt"></i> View Certificate
</a>
```

Certificate placeholders to update:
- Zewail City AI Courses (line 369)
- Google AI Courses (line 379)
- Cyber Champions - ZinadIT (line 389)
- Egypt Cybersecurity Conference (line 399)
- Additional certificates (lines 409 and 419)

### Add More Projects

To add manual projects (not from GitHub), duplicate this structure in the projects section:

```html
<div class="project-card">
    <div class="project-header">
        <i class="fas fa-icon-name"></i>
        <h3>Project Name</h3>
    </div>
    <p class="project-description">Your project description</p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
    <div class="project-links">
        <a href="project-url" class="project-link">
            <i class="fab fa-github"></i> View Project
        </a>
    </div>
</div>
```

## 🚀 Deployment to GitHub Pages

1. **Create a repository** named exactly: `joseph-george1.github.io` (replace with your username)

2. **Push these files** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/joseph-george1/joseph-george1.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Click Save

4. **Wait a few minutes** and visit: `https://joseph-george1.github.io`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Color Scheme

The portfolio uses a professional dark theme with accent colors:
- Primary Background: `#0a0e27`
- Secondary Background: `#151933`
- Card Background: `#1a1f3a`
- Accent Color: `#64ffda`
- Secondary Accent: `#5c6bc0`

## 📄 File Structure

```
joseph-george1.github.io/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and GitHub API
└── README.md          # This file
```

## ⚙️ Customization Tips

1. **Change Colors**: Update CSS variables in `:root` section of styles.css
2. **Add Sections**: Copy existing section structure and modify content
3. **Modify Animations**: Adjust animation timings in CSS keyframes
4. **Update Icons**: Use Font Awesome icons from [fontawesome.com](https://fontawesome.com/icons)

## 🐛 Troubleshooting

**GitHub Projects Not Loading?**
- Check browser console for errors
- Verify GitHub username in script.js
- Ensure repositories are public
- Check GitHub API rate limits

**Styling Issues?**
- Clear browser cache
- Verify all CSS file is properly linked
- Check for console errors

**Mobile Menu Not Working?**
- Verify JavaScript is loading
- Check browser console for errors

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Contact: joseph.george@example.com

## 📜 License

This portfolio template is free to use and modify for personal use.

---

**Built with ❤️ by Joseph George Wahba**

Last Updated: February 2026
