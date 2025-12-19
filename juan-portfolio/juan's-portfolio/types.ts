export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  category: 'Automation' | 'Dashboard' | 'Workflow Tool' | 'MVP';
  role: string;
  year: string;
  challenges: string[];
  tags: string[];
  imageUrl: string;
  link: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}