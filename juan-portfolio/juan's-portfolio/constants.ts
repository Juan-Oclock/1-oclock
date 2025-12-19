import { Project, Experience, BlogPost } from './types';

// This text is fed to the AI so it knows who you are.
export const PORTFOLIO_CONTEXT = `
You are an AI assistant for Juan, a Senior Software Engineer.
Your goal is to answer questions about Juan's experience, skills, and projects based on the following resume data.
Keep answers concise, professional, yet friendly.

About Juan:
Software engineer who builds useful apps before anyone asks.
Specializes in React, TypeScript, and pragmatic product engineering. Focuses on clean code, performance, and intuitive UX.

Premise:
- Useful software doesn't wait for permission. It solves problems first.

Skills:
- Frontend: React, TypeScript, Tailwind CSS, Next.js
- Backend: Node.js, Express, PostgreSQL, GraphQL
- Tools: Git, Docker, AWS, Figma

Experience:
- Senior Frontend Engineer at TechFlow Inc (2021-Present): Led a team of 5, improved site performance by 40%.
- Software Developer at Creative Solutions (2018-2021): Built e-commerce platforms for major retail clients.

Projects:
- Tab Slayer: A small tool that removes big friction from repeat workflows.
- Quiet Metrics: A dashboard that makes "where is the data?" a solved problem.
- Meeting-Proof MVP: A rapid prototype kit for shipping before the meeting does.

Contact:
- Email: juan@example.com
- GitHub: github.com/juan
- LinkedIn: linkedin.com/in/juan
`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Tab Slayer',
    description: 'A tiny tool that turns 10 clicks into one.',
    longDescription: 'Tab Slayer started as a personal annoyance: too many tabs, too many steps, too much context switching. I built a small command-first interface that bundles common actions (open the right links, run the right scripts, and surface the right context) into one place. The goal is simple: less friction, more shipping.',
    problemStatement: 'Repeat tasks were eating my focus.',
    category: 'Workflow Tool',
    role: 'Builder (Personal Project)',
    year: '2025',
    challenges: [
        'Designing a UI that stays fast under heavy keyboard-driven usage.',
        'Keeping state predictable while supporting multiple workflows and shortcuts.',
        'Building a plugin-like structure without turning the project into a framework.'
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    imageUrl: 'https://picsum.photos/1200/800?random=1',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Quiet Metrics',
    description: 'A dashboard that answers "what changed?" without asking.',
    longDescription: 'Quiet Metrics is a personal experiment in making data usable. Instead of charts for the sake of charts, it focuses on a handful of metrics that actually drive decisions, with clear annotations and change detection. It is built to reduce the time between "something feels off" and "here is the reason."',
    problemStatement: 'Reports that needed a meeting to explain.',
    category: 'Dashboard',
    role: 'Builder (Personal Project)',
    year: '2024',
    challenges: [
        'Normalizing messy events into a consistent metric pipeline.',
        'Building fast tables and charts without overwhelming the UI.',
        'Making the "why" as clear as the "what" with annotations and diffs.'
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    imageUrl: 'https://picsum.photos/1200/800?random=2',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Meeting-Proof MVP',
    description: 'A rapid prototype kit for shipping before the calendar does.',
    longDescription: 'Meeting-Proof MVP is my playground for turning product ideas into working prototypes fast. It includes opinionated patterns for auth, forms, onboarding, and UI states so I can validate an idea quickly. The point is not perfection; it is momentum.',
    problemStatement: 'Ideas dying in endless review cycles.',
    category: 'MVP',
    role: 'Builder (Personal Project)',
    year: '2023',
    challenges: [
        'Keeping components flexible without losing a consistent design system.',
        'Avoiding premature architecture while still staying scalable.',
        'Making the "first usable" version feel polished enough to demo.'
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    imageUrl: 'https://picsum.photos/1200/800?random=3',
    link: '#',
    github: '#'
  },
  {
    id: '4',
    title: 'Ops Buddy',
    description: 'A CLI-turned-UI for operations that just work.',
    longDescription: 'Ops Buddy wraps common DevOps scripts in a simple web interface so non-technical teammates can run them safely. It started as a Slack bot, became a CLI, and eventually earned a UI when I realized "just run the script" was not helpful advice.',
    problemStatement: 'Scripts I got tired of explaining.',
    category: 'Automation',
    role: 'Builder (Personal Project)',
    year: '2024',
    challenges: [
        'Sandboxing script execution without overcomplicating permissions.',
        'Designing a UI that feels safe for non-engineers to click around.',
        'Logging everything without making the logs overwhelming.'
    ],
    tags: ['Node.js', 'React', 'Docker', 'Tailwind'],
    imageUrl: 'https://picsum.photos/1200/800?random=4',
    link: '#',
    github: '#'
  },
  {
    id: '5',
    title: 'Focus Mode',
    description: 'A distraction blocker built for how I actually work.',
    longDescription: 'Focus Mode is a browser extension that blocks distracting sites during work hours—but with a twist: it makes you wait 30 seconds and type why you need the site before unblocking. That friction is the feature.',
    problemStatement: 'Tabs multiplying faster than my focus.',
    category: 'Workflow Tool',
    role: 'Builder (Personal Project)',
    year: '2023',
    challenges: [
        'Building a Chrome extension with minimal permissions.',
        'Designing friction that feels helpful, not annoying.',
        'Syncing block lists across devices without a backend.'
    ],
    tags: ['Chrome Extension', 'TypeScript', 'Tailwind'],
    imageUrl: 'https://picsum.photos/1200/800?random=5',
    link: '#',
    github: '#'
  },
  {
    id: '6',
    title: 'Invoice Zero',
    description: 'Dead-simple invoicing for freelancers who hate invoicing.',
    longDescription: 'Invoice Zero removes every unnecessary field from the invoicing process. You enter the client, amount, and due date—it handles the rest. PDF export, email reminders, and a dashboard that shows who owes you money.',
    problemStatement: 'Invoicing that took longer than the work.',
    category: 'Automation',
    role: 'Builder (Personal Project)',
    year: '2024',
    challenges: [
        'Generating clean PDFs that look professional on any device.',
        'Building email reminders without a dedicated mail server.',
        'Keeping the UI minimal while still being flexible for edge cases.'
    ],
    tags: ['Next.js', 'TypeScript', 'Resend', 'Tailwind'],
    imageUrl: 'https://picsum.photos/1200/800?random=6',
    link: '#',
    github: '#'
  },
  {
    id: '7',
    title: 'Changelog.new',
    description: 'A micro-tool for updates people actually scan.',
    longDescription: 'Changelog.new is a tiny app that helps you write release notes in a consistent format. It nudges you toward user-facing language and outputs Markdown, HTML, or a shareable link. No more "misc bug fixes."',
    problemStatement: 'Changelogs no one reads.',
    category: 'Workflow Tool',
    role: 'Builder (Personal Project)',
    year: '2025',
    challenges: [
        'Designing templates that guide without restricting.',
        'Supporting multiple output formats from a single source.',
        'Making the tool fast enough to use mid-deploy.'
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    imageUrl: 'https://picsum.photos/1200/800?random=7',
    link: '#',
    github: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'TechFlow Inc.',
    role: 'Senior Frontend Engineer',
    period: '2021 - Present',
    description: [
      'Architected a micro-frontend architecture reducing build times by 50%.',
      'Mentored junior developers and established code quality standards.',
      'Collaborated with UX/UI designers to implement pixel-perfect designs.'
    ]
  },
  {
    id: '2',
    company: 'Creative Solutions',
    role: 'Software Developer',
    period: '2018 - 2021',
    description: [
      'Developed full-stack web applications using MERN stack.',
      'Integrated third-party payment gateways like Stripe and PayPal.',
      'Optimized database queries for high-traffic endpoints.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Shipping Before You Feel Ready',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    category: 'Shipping',
    summary: 'A practical way to ship useful software when you do not have permission, buy-in, or a perfect plan.',
    content: `
      <p>Sometimes the best software starts as a quiet annoyance. No ticket. No roadmap. Just a problem that keeps showing up.</p>

      <h2>The "useful" test</h2>
      <p>If I would use it twice this week, it is worth building once. The first version is allowed to be small, ugly, and incomplete. It just has to be real.</p>

      <h3>How I ship anyway</h3>
      <ul>
        <li>Start with the smallest thing that removes friction</li>
        <li>Make it easy to use (keyboard, defaults, no ceremony)</li>
        <li>Measure something simple (time saved, steps removed, fewer mistakes)</li>
        <li>Iterate until it feels obvious</li>
      </ul>

      <p>Useful software does not wait for permission. It solves problems first, and then it earns the meeting.</p>
    `
  },
  {
    id: '2',
    title: 'Small Tools > Big Platforms',
    date: 'Sep 28, 2024',
    readTime: '7 min read',
    category: 'Product',
    summary: 'Why I keep building small, sharp tools that do one thing well (and why it works).',
    content: `
      <p>Big platforms are impressive. Small tools are useful. I like useful.</p>

      <h2>Why small wins</h2>
      <p>Small tools ship faster, get used sooner, and teach you what matters. They are easier to maintain and easier to abandon when the lesson is learned.</p>

      <h3>My rule of thumb</h3>
      <ul>
        <li>If it saves time, it is a feature</li>
        <li>If it reduces confusion, it is a UX win</li>
        <li>If it removes steps, it is a product</li>
      </ul>

      <p>Most of my favorite builds started as side projects. Some stayed small. The good ones became indispensable.</p>
    `
  },
  {
    id: '3',
    title: 'Designing for People Who Hate Friction',
    date: 'Aug 15, 2024',
    readTime: '4 min read',
    category: 'UX',
    summary: 'A checklist I use when building apps that should feel fast, obvious, and quietly confident.',
    content: `
      <p>My favorite compliment is not "cool". It is "that was easy".</p>

      <h2>What I optimize for</h2>
      <ul>
        <li>Speed: the UI should respond immediately</li>
        <li>Clarity: the next step should be obvious</li>
        <li>Defaults: smart choices that reduce decisions</li>
        <li>Delight: subtle, never distracting</li>
      </ul>

      <p>When software feels frictionless, users stop thinking about the tool and start finishing the work. That is the whole point.</p>
    `
  }
];