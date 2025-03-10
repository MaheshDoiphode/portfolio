import { Globe, Server, Terminal, Database } from "lucide-react"
import utilitiesImage from '/src/public/utilities.jpg'
import timelogImage from '/src/public/projects/timelog.png'

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;  // Brief description for home page
  tags: string[];
  image: string;
  github: string;
  live: string | null;
  icon: JSX.Element;
  link: string;
  featured?: boolean;
  category?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hi App (Singtel, Singapore)",
    shortDescription: "Led migration to reactive programming and implemented BFF layer for microservices architecture.",
    description: `
* Led migration to **reactive programming** and implemented **BFF layer** for microservices architecture
* Optimized batch processing with custom **DMF flow architecture**
* Drove technical improvements across **Prepaid Division** projects
* Achieved **30% improvement** in system performance
    `,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Spring Boot", "AWS", "Reactive Programming", "Microservices"],
    category: "web",
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
    image: "https://www.proofhub.com/articles/wp-content/uploads/2020/02/Best-Task-Management-App-%E2%80%93-Keep-Your-Business-On-Track.jpg",
    tags: ["Spring Boot", "Angular", "Docker", "PostgreSQL"],
    category: "web",
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
    category: "web",
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
    github: "https://github.com/MaheshDoiphode/collection-of-utilities",
    live: null
  }
]