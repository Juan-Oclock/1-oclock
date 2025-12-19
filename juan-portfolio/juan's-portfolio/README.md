# Juan's Portfolio

A modern, interactive portfolio website showcasing software engineering work, projects, and experience. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## Features

- **Interactive Project Showcase** - Detailed project presentations with problem statements, challenges, and outcomes
- **Experience Timeline** - Professional experience with key achievements and technologies
- **AI-Powered Chat** - Interactive assistant to answer questions about skills, experience, and projects
- **Blog Section** - Technical writing and insights
- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Scroll-based animations and floating particle effects
- **Clean UI/UX** - Built with Tailwind CSS and custom Visby font family

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Integration**: Google Generative AI (Gemini)

## Project Structure

```
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── Projects.tsx    # Project showcase
│   ├── Experience.tsx  # Work experience
│   ├── BlogList.tsx    # Blog posts
│   ├── Contact.tsx     # Contact section
│   ├── AIChat.tsx      # AI assistant
│   └── ...
├── custom-fonts/       # Visby font family
├── services/           # API services
├── hooks/              # Custom React hooks
├── constants.ts        # Portfolio data and content
├── types.ts            # TypeScript type definitions
└── styles.css          # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Juan-Oclock/1-oclock.git
   cd juan's-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Gemini API key (optional - only needed for AI chat feature):
     ```
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

### Update Portfolio Content

Edit `constants.ts` to customize:
- Personal information and bio
- Projects and case studies
- Work experience
- Blog posts
- Skills and technologies
- Contact information

### Modify Styling

- Global styles: `styles.css`
- Component-specific styles: Inline Tailwind classes
- Theme colors: Update Tailwind configuration in component files

## Features Breakdown

### Projects Section
Each project includes:
- Title and description
- Problem statement and solution
- Role and timeline
- Challenges and outcomes
- Technologies used
- Links to live demos and repositories

### AI Chat Assistant
- Answers questions about skills and experience
- Provides project details
- Shares contact information
- Powered by Gemini AI with custom context

### Blog
- Technical articles and insights
- Read time estimates
- Category tags
- Full article view with navigation

## Deployment

Build the project for production:
```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

This project is open source and available under the MIT License.

## Contact

For questions or collaboration opportunities, reach out through the contact form on the website or via:
- GitHub: [github.com/juan](https://github.com/juan)
- Email: juan@example.com
