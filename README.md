# 🌟 Star Wars Movies Listing

A modern, responsive React application built with Next.js 14 and TypeScript that showcases the Star Wars Movies. Features a beautiful, interactive interface with sorting capabilities, detailed movie information, and a mobile-first design approach.

<img width="2878" height="1674" alt="image" src="https://github.com/user-attachments/assets/0da9c087-2c7f-404e-bf9e-bc580288416f" />

## ✨ Features

### Core Functionality
- **📋 Complete Movie Listing**: Display all Star Wars movies in an elegant, sortable table
- **🔍 Detailed Movie Views**: Click any movie to see comprehensive details including opening crawls, cast statistics, and production info
- **📱 Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **🎯 Sorting**: Sort by episode number, title, director, or release date with visual indicators

### Technical Highlights
- **⚡ Next.js 14**: Latest App Router with TypeScript support
- **🎨 Modern UI/UX**: Beautiful gradients, animations, and Star Wars-themed design
- **🔄 Error Handling**: Comprehensive error boundaries and loading states
- **♿ Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **📦 Component Architecture**: Reusable, well-structured components
- **🎭 Custom Hooks**: Clean data fetching and state management

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Source**: Star Wars API (SWAPI)
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/starwars-movies-app.git
   cd starwars-movies-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── movie/
│       └── [id]/
│           └── page.tsx   # Movie detail page
├── components/            # React components
│   ├   
│   ├── loading-spinner.tsx
│   ├──  error-boundary.tsx
│   ├──back-button.tsx
│   ├── movies-table.tsx  # Main movies table
│   ├── movie-details.tsx # Movie detail view
│   
├── lib/                  # Utilities and types
    ├── api.ts           # API functions
    ├── types.ts         # TypeScript interfaces
    └── utils.ts         # Helper functions

```

## 🎨 Design Philosophy

### Visual Design
- **Star Wars Aesthetic**: Yellow (#FFE81F) and cyan color scheme inspired by the franchise
- **Glassmorphism**: Modern glass-like effects with backdrop blur
- **Smooth Animations**: Subtle transitions and hover effects for enhanced UX
- **Gradient Backgrounds**: Dynamic gradients creating depth and visual interest

### User Experience
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Mobile-First**: Responsive design that looks great on all devices
- **Performance**: Optimized images, lazy loading, and efficient rendering
- **Accessibility**: Screen reader friendly, keyboard navigation, proper contrast ratios


## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

## 🔧 Configuration


### Next.js Configuration
- App Router enabled
- Image optimization configured
- TypeScript strict mode enabled

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push


