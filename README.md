# Full Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases all sections from the original HTML designs converted into reusable React components.

## 🚀 Features

- **Hero Section** - Eye-catching introduction with rotating text animation
- **About Section** - Philosophy and core values with interactive icons
- **Career Journey** - Interactive timeline displaying work experience and education
- **Tech Stack** - Comprehensive display of technical skills organized by category
- **Featured Projects** - Expandable project cards with detailed case studies
- **Contact Form** - Functional contact form with validation
- **Responsive Design** - Fully responsive across all device sizes
- **Smooth Scrolling** - Seamless navigation between sections
- **Dark Mode Toggle** - Light/dark theme switching capability

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Inter, Plus Jakarta Sans)
- **Icons**: Material Symbols Outlined

## 📦 Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page integrating all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section with animated text
│   ├── AboutSection.tsx    # About/Philosophy section
│   ├── CareerJourney.tsx   # Timeline component
│   ├── TechStack.tsx       # Tech skills display
│   ├── FeaturedProjects.tsx # Projects showcase
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx          # Footer with social links
└── public/                 # Static assets
```

## 🎨 Customization

### Update Personal Information

Edit the content in each component file:

- **Name & Title**: `components/HeroSection.tsx`
- **About Text**: `components/AboutSection.tsx`
- **Work Experience**: `components/CareerJourney.tsx` (update `timelineData` array)
- **Tech Skills**: `components/TechStack.tsx` (update `techStack` array)
- **Projects**: `components/FeaturedProjects.tsx` (update `projects` array)

### Update Colors

Colors are defined in `app/globals.css` using CSS custom properties:

```css
:root {
  --primary: #34d399;
  --background: #f8fafc;
  --text-dark: #0f172a;
  /* ... more colors */
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## ✨ Sections Overview

### 1. Hero Section
- Animated rotating job titles
- Call-to-action buttons
- Professional headshot with glow effect

### 2. About Section
- Personal philosophy
- Core values with interactive icons
- Responsive grid layout

### 3. Career Journey
- Vertical timeline design
- Alternating left/right layout (desktop)
- Hover effects on timeline items

### 4. Tech Stack
- Organized by category (Backend, Frontend, Databases, DevOps)
- Clickable tech items with icons
- Hover animations

### 5. Featured Projects
- Project cards with images
- Expandable detailed case studies
- Tech stack badges
- Links to GitHub and live demos

### 6. Contact Section
- Validated contact form
- Responsive input fields
- Form submission handling

## 🔧 Configuration

The project uses Next.js App Router with:
- TypeScript for type safety
- Tailwind CSS v4 for styling
- Client-side components for interactivity
- Smooth scroll behavior
- Optimized fonts loading

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Next Steps

1. Replace placeholder images with your own
2. Update social media links in `Footer.tsx`
3. Implement actual form submission in `ContactSection.tsx`
4. Add your real projects and work experience
5. Customize colors to match your brand
6. Add analytics (Google Analytics, Vercel Analytics)
7. Set up a custom domain

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js and Tailwind CSS
