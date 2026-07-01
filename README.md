# Emily Whitney - Personal Website

A beautiful, nature-inspired personal website built with React and glassmorphism design principles.

## Features

- **Hero Section**: Elegant name display with nature-inspired gradient background
- **Navigation Tabs**: Smooth tab navigation between different sections
- **Glassmorphism Design**: Beautiful transparent glass panels with backdrop blur effects
- **Four Content Sections**:
  - **Timeline**: Interactive coding journey with milestones
  - **Currently**: Grid of current activities and interests
  - **Links**: Social and professional links with copy-to-clipboard functionality
  - **Bio**: Brief introduction and technology stack
- **Smooth Animations**: Fade-in transitions and hover effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Nature Theme**: Calming earth tones with green color palette

## Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **CSS3** - Styling with glassmorphism effects
- **JavaScript ES6+** - Modern JavaScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd wemsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run the linter

## Project Structure

```
wemsite/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with name
│   │   ├── Hero.css
│   │   ├── Navigation.jsx     # Tab navigation
│   │   ├── Navigation.css
│   │   ├── GlassPanel.jsx     # Glassmorphism container
│   │   ├── GlassPanel.css
│   │   ├── Timeline.jsx       # Coding journey timeline
│   │   ├── Timeline.css
│   │   ├── Currently.jsx      # Current activities
│   │   ├── Currently.css
│   │   ├── Links.jsx          # Social/professional links
│   │   ├── Links.css
│   │   ├── Bio.jsx            # About section
│   │   └── Bio.css
│   ├── App.jsx                # Main app component
│   ├── App.css
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Your Information

1. **Name**: Edit `src/components/Hero.jsx` to change the displayed name
2. **Timeline**: Modify the milestones array in `src/components/Timeline.jsx`
3. **Activities**: Update the activities array in `src/components/Currently.jsx`
4. **Links**: Change URLs and add/remove links in `src/components/Links.jsx`
5. **Bio**: Edit the bio text and skills in `src/components/Bio.jsx`

### Color Scheme

The nature-inspired color palette can be customized in `src/index.css`:
- `--nature-dark`: #1a4d2e
- `--nature-mid`: #2d5f3f
- `--nature-light`: #4a7c59
- `--nature-accent`: #7da87b

### Background

The hero section background gradient can be modified in `src/components/Hero.css`

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/wemsite",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Note: Glassmorphism effects require `backdrop-filter` support.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Design inspired by Sanctuary Computer
- Nature-themed color palette for a calming aesthetic
- Glassmorphism design trend for modern UI
