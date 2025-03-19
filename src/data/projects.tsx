import { Globe, Server, Terminal, Database, CreditCard, Layers } from "lucide-react"
import utilitiesImage from '/src/public/utilities.jpg'
import timelogImage from '/src/public/projects/timelog.png'
import cinemaImage from '/src/public/projects/cinema.png'
import aiStuffImage from '/src/public/projects/aiStuff.png'
import mobileBankingImage from '/src/public/projects/mobileBanking.png'
import vmsImage from '/src/public/projects/vms.png'
import hiAppImage from '/src/public/projects/hiapp.png'
import sessionSyncImage from '/src/public/projects/sessionSync.png'

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  image: string;
  github: string;
  live: string | null;
  icon: JSX.Element;
  link: string;
  featured?: boolean;
  category?: string | string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hi App (Singtel, Singapore)",
    shortDescription: "Working on migration to reactive programming and implemented gateway layer for microservices architecture.",
    description: `
* Working on migration to **reactive programming** and implemented **BFF layer** for microservices architecture
* Optimized batch processing with custom **batch processing architecture**
    `,
    image: hiAppImage,
    tags: ["Spring Boot", "AWS", "Reactive Programming", "Microservices"],
    category: "backend",
    icon: <Server className="h-10 w-10 text-primary" />,
    link: "https://github.com/MaheshDoiphode",
    github: "https://github.com/MaheshDoiphode/hi-app",
    live: null
  },
  {
    id: 2,
    title: "Visitor Management System",
    shortDescription: "Developed a containerized visitor management system reducing manual effort by 90%.",
    description: `
* Developed containerized visitor management system reducing **manual effort by 90%**
* Enhanced UI/UX with streamlined **RESTful API integration**
* Implemented **real-time notifications** for visitor arrivals
* Integrated with **security systems** for automated access control
    `,
    image: vmsImage,
    tags: ["Spring Boot", "Angular", "Docker", "PostgreSQL"],
    category: ["fullstack"],
    icon: <Globe className="h-10 w-10 text-secondary" />,
    link: "https://github.com/MaheshDoiphode",
    github: "https://github.com/MaheshDoiphode/visitor-management-system",
    live: null
  },
  {
    id: 3,
    title: "Time Log Tracker",
    shortDescription: "Designed UI/UX for time log management, reducing manager overhead by 70%.",
    description: `
* Designed UI/UX for time log management reducing **manager overhead by 70%**
* Implemented **automated time tracking** and reporting processes
* Created **intuitive dashboard** for quick insights
* Added **export functionality** for timesheet generation
    `,
    image: timelogImage,
    tags: ["Angular", "Figma", "Tailwind CSS"],
    category: ["fullstack"],
    icon: <Terminal className="h-10 w-10 text-accent" />,
    link: "https://github.com/MaheshDoiphode",
    github: "https://github.com/MaheshDoiphode/time-log-tracker",
    live: null
  },
  {
    id: 4,
    title: "Collection of Utilities",
    shortDescription: "Built automation utilities saving 80% time on repetitive tasks.",
    description: `
* Built automation utilities saving **80% time** on repetitive tasks including:
  * Git workflow automations
  * Microsoft Teams meeting scheduler
  * Clipboard monitoring and backup
  * Docker container management
  * Email automation scripts
* Implemented **cross-platform compatibility**
* Added **configuration management** for easy customization
    `,
    image: utilitiesImage,
    tags: ["Python", "Spring Boot", "MongoDB", "Docker"],
    category: "tools",
    icon: <Database className="h-10 w-10 text-green-600" />,
    link: "https://github.com/MaheshDoiphode",
    github: "https://github.com/MaheshDoiphode/python-stuff",
    live: null
  },
  {
    id: 5,
    title: "Cinema Management System",
    shortDescription: "Full-stack cinema booking platform with role-based access and real-time seat management.",
    description: `
* Integrated **OMDB API** for rich movie metadata and automatic content updates
* Implemented **role-based access** system (Admin, Cinema Owner, Customer) with JWT
* Built features for dynamic projection scheduling and automated seat management
* Developed comprehensive payment system with refund workflow
* Created **real-time booking system** with conflict prevention
    `,
    image: cinemaImage,
    tags: ["Angular", "Spring Boot", "PostgreSQL", "OMDB API", "JWT"],
    category: ["fullstack"],
    icon: <Globe className="h-10 w-10 text-primary" />,
    link: "https://github.com/MaheshDoiphode",
    github: "https://github.com/MaheshDoiphode/cinema-angular",
    live: null,
    featured: true
  },
  {
    id: 6,
    title: "AI-Powered Code Analysis Tools",
    shortDescription: "Built AI-powered utilities for automated code review and optimization using Google's Gemini API.",
    description: `
* Developed intelligent code analysis tools using **Google's Gemini 1.5 Pro API**
* Features include:
* Automated code review and optimization suggestions
* Real-time error detection and fix proposals
* Smart code documentation generation
* Unit test case recommendations
* Built with **Flask-based web interface** for result visualization
* Integrated with **VS Code** for seamless developer experience
* Reduced code review time by **60%** and improved code quality
  `,
    image: aiStuffImage,
    tags: ["Python", "Google Gemini API", "Flask", "VS Code Extension"],
    category: ["ai", "tools"],
    icon: <Database className="h-10 w-10 text-green-600" />,
    link: "https://github.com/MaheshDoiphode",
    github: "https://github.com/MaheshDoiphode/ai-stuff",
    live: null
  },
  {
    id: 7,
    title: "Mobile Banking Application",
    shortDescription: "Full-stack secure banking system with real-time transactions, analytics and chatbot support",
    description: `
* Built with **Angular 16** frontend and **Spring Boot** backend
* Core Features:  
* JWT + OTP based secure authentication & transactions
* Fund transfers with favorite transactions support
* Visual expense analytics with MongoDB aggregation
* Real-time account tracking & statement generation
* AI-powered chatbot for customer support
* Tech Highlights:
* Dual DB architecture (PostgreSQL + MongoDB)
* Microservices pattern with Spring Cloud
* Material UI with responsive design & charts
* End-to-end encryption & role-based security
  `,
    image: mobileBankingImage,
    tags: ["Angular", "Spring Boot", "PostgreSQL", "MongoDB", "JWT", "Material UI"],
    category: ["fullstack"],
    icon: <CreditCard className="h-10 w-10 text-blue-600" />,
    link: "https://github.com/MaheshDoiphode/mobile-banking",
    github: "https://github.com/MaheshDoiphode/mobile-banking",
    live: null
  },
  {
    id: 8,
    title: "SessionSync",
    shortDescription: "Browser extension for managing sessions, tab organization, and profile switching with optimized storage.",
    description: `
* Built a Chrome extension with **session management** for saving and restoring browser states
* Implemented **profile management** to store domain-specific cookies and auth tokens
* Created **smart tab organization** with automatic grouping based on URL similarity
* Optimized storage through **LZMA compression** and chunking for large data
* Added seamless profile switching between different accounts for the same domain
    `,
    image: sessionSyncImage,
    tags: ["JavaScript", "Chrome Extension API", "LZMA Compression", "Browser Storage"],
    category: ["tools"],
    icon: <Layers className="h-10 w-10 text-blue-500" />,
    link: "https://github.com/MaheshDoiphode/SessionSync",
    github: "https://github.com/MaheshDoiphode/SessionSync",
    live: null
  }
]