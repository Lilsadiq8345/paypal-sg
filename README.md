# PayPal Singapore Clone - Vue.js

A pixel-perfect clone of the PayPal Singapore homepage built with Vue.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### ✅ **Technology Stack**
- **Vue.js 3** with Composition API
- **TypeScript** for type safety
- **Tailwind CSS** for responsive design
- **Vite** for fast development and building

### ✅ **Singapore-Specific Features**
- **PayNow Integration** - Local Singapore payment system
- **SGD Support** - Singapore Dollar currency support
- **MAS Compliance** - Monetary Authority of Singapore regulations
- **Local Bank Integration** - Singapore bank account connections
- **Singapore-specific content** and testimonials

### ✅ **UI/UX Features**
- **Mega Menu** - Hover-activated navigation with detailed sections
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Pixel-Perfect Design** - Matches PayPal Singapore homepage
- **Smooth Animations** - CSS transitions and hover effects
- **Accessibility** - Proper semantic HTML and ARIA labels

### ✅ **Components**
- **Navigation** - With mega menu functionality
- **Hero Section** - Singapore-specific messaging and features
- **Features Section** - Local benefits and capabilities
- **Testimonials** - Singapore customer testimonials
- **CTA Section** - Singapore-focused call-to-action
- **Footer** - Comprehensive footer with local links

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>
cd paypal-sg-clone

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
paypal-sg-clone/
├── src/
│   ├── components/
│   │   ├── Navigation.vue      # Navigation with mega menu
│   │   ├── HeroSection.vue     # Hero section with Singapore features
│   │   ├── FeaturesSection.vue # Features and benefits
│   │   ├── TestimonialsSection.vue # Customer testimonials
│   │   ├── CTASection.vue      # Call-to-action section
│   │   └── Footer.vue          # Footer with local links
│   ├── assets/
│   │   └── main.css           # Tailwind CSS and custom styles
│   ├── App.vue                # Main app component
│   └── main.ts               # App entry point
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **PayPal Blue**: `#0070ba`
- **PayPal Blue Dark**: `#003087`
- **PayPal Yellow**: `#ffc439`
- **PayPal Navy**: `#001435`
- **PayPal Gray**: `#687173`

### Typography
- **Font Family**: Open Sans
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Rounded with hover effects
- **Cards**: Shadow with hover animations
- **Navigation**: Sticky with mega menu
- **Forms**: Clean and accessible

## 🌏 Singapore Localization

### Content
- Singapore-specific messaging
- Local payment methods (PayNow)
- Singapore dollar (SGD) support
- Local testimonials and statistics

### Features
- MAS (Monetary Authority of Singapore) compliance
- Local bank integration
- Singapore merchant partnerships
- Local regulatory information

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization

### Adding New Components
1. Create component in `src/components/`
2. Import in `App.vue`
3. Add to template

### Modifying Styles
1. Update `src/assets/main.css` for global styles
2. Use Tailwind classes in components
3. Modify `tailwind.config.js` for custom colors/animations

### Singapore Content
- Update testimonials in component files
- Modify hero section messaging
- Add new local features as needed

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist/ folder
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📄 License

This project is for educational purposes only. PayPal is a registered trademark of PayPal, Inc.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Note**: This is a clone project for educational purposes. All PayPal branding and trademarks belong to PayPal, Inc.
