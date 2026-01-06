# 💼 Iryna Cherepenko - Portfolio

A modern, responsive portfolio website showcasing my work as a Software Engineer. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring a clean design and seamless user experience.

> **📍 Live at**: [kirspeek.dev](https://kirspeek.dev)

## ✨ Features

### 📋 **About Me Section**
- Professional introduction and background
- Skills showcase with categorized technologies
- Work experience timeline
- Responsive design for all devices

### 🚀 **Projects Showcase**
- Interactive project previews
- Live demo links
- GitHub repository links
- Detailed project descriptions with tech stacks

### 📧 **Contact Form**
- Direct email contact form
- Integration with Resend API
- Contact links (Email, LinkedIn, GitHub, Telegram)

### 🎨 **Design Highlights**
- Retro-inspired computer animation
- Clean, modern UI with glassmorphism effects
- Dark/Light theme support
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions

## 🛠️ Technical Stack

### **Core Technologies**
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Email**: Resend API

### **Key Libraries**
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter, Space Mono, Fira Sans

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Kirspeek/CVportfolio.git
cd CVportfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_FROM_NAME=Portfolio Contact
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   └── page.tsx           # Main page
├── sections/
│   └── about-me/          # About me section
│       ├── components/    # React components
│       ├── data/          # JSON data files
│       ├── hooks/         # Custom hooks
│       ├── styles/        # CSS files
│       └── types/         # TypeScript types
├── components/
│   ├── common/            # Shared components
│   └── widgets/           # Widget components
├── hooks/                 # Global hooks
├── styles/                # Global styles
└── theme/                 # Theme configuration
```

## 🎯 Sections

### About Me
- Personal introduction
- Skills and technologies
- Work experience
- Professional background

### Projects
- **ShopApp**: E-commerce platform with React, MUI, and Stripe
- **Chart Dashboard**: Advanced analytics dashboard (separate project)

### Contact
- Email contact form
- Direct contact links
- Social media profiles

## 🔧 Configuration

### **Email Setup**

The contact form uses Resend for email delivery. To enable email functionality:

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Verify your domain
3. Add your API key and email to `.env.local`

### **Theme Customization**

Themes can be customized in `src/theme/colorsTheme.ts` and `src/styles/globals.css`.

## 📱 Responsive Design

The portfolio is fully responsive with:
- **Mobile**: Optimized layouts for phones
- **Tablet**: Adaptive designs for tablets
- **Desktop**: Full-featured desktop experience

## 🚀 Deployment

The application is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

### **Build Commands**

```bash
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code linting
```

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the design system
- **Resend** for email delivery

---

**Built with ❤️ by Iryna Cherepenko**

_Visit my portfolio at [kirspeek.dev](https://kirspeek.dev)_
