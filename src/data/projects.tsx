import { Globe, Server, Terminal, Database, CreditCard, Layers, Brain, GitBranch } from "lucide-react"
import utilitiesImage from '/src/public/utilities.jpg'
import timelogImage from '/src/public/projects/timelog.png'
import cinemaImage from '/src/public/projects/cinema.png'
import aiStuffImage from '/src/public/projects/aiStuff.png'
import mobileBankingImage from '/src/public/projects/mobileBanking.png'
import vmsImage from '/src/public/projects/vms.png'
import hiAppImage from '/src/public/projects/hiapp.png'
import sessionSyncImage from '/src/public/projects/sessionSync.png'
import copilotMcpImage from '/src/public/projects/copilot-mcp.png'
import mcpdataImage from '/src/public/projects/mcpdata.png'

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
    link: "",
    github: "",
    live: null
  },
  {
    id: 2,
    title: "AI-Powered Organizational Integration Tool",
    shortDescription: "Intelligent integration system connecting Bitbucket, Confluence, Jira, and AWS services with GitHub Copilot MCP servers.",
    description: `
* Developed an intelligent integration system that connects **Bitbucket, Confluence, Jira, and AWS services** (EC2, EKS, ECS, CloudWatch) with GitHub Copilot MCP servers.
* Enables GitHub Copilot to fetch and analyze organizational data from multiple platforms to provide **contextually accurate and comprehensive responses**.
* Streamlines developer workflows by providing **AI-assisted insights** across the entire development and operations ecosystem.
* Successfully proposed and demonstrated to **Singtel client**, receiving positive feedback and approval for enhanced development toward company-wide internal deployment.
    `,
    image: copilotMcpImage,
    tags: ["All", "Tools", "AI"],
    category: ["ai", "tools"],
    icon: <Brain className="h-10 w-10 text-purple-600" />,
    link: "",
    github: "",
    live: null
  },
  {
    id: 3,
    title: "Visitor Management System",
    shortDescription: "Developed a containerized visitor management system reducing manual effort by 90%.",
    description: `
* Developed containerized visitor management system reducing **manual effort by 90%**
* Enhanced UI/UX with streamlined **RESTful API integration**
* Implemented **real-time notifications** for visitor arrivals
* Integrated with **security systems** for automated access control
    `,
    image: vmsImage,
    tags: ["All", "Web", "Backend"],
    category: ["fullstack"],
    icon: <Globe className="h-10 w-10 text-secondary" />,
    link: "",
    github: "",
    live: null
  },
  {
    id: 4,
    title: "Time Log Tracker",
    shortDescription: "Designed UI/UX for time log management, reducing manager overhead by 70%.",
    description: `
* Designed UI/UX for time log management reducing **manager overhead by 70%**
* Implemented **automated time tracking** and reporting processes
* Created **intuitive dashboard** for quick insights
* Added **export functionality** for timesheet generation
    `,
    image: timelogImage,
    tags: ["All", "Web", "Backend"],
    category: ["fullstack"],
    icon: <Terminal className="h-10 w-10 text-accent" />,
    link: "",
    github: "",
    live: null
  },
  {
    id: 5,
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
    link: "",
    github: "",
    live: null
  },
  {
    id: 6,
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
    tags: ["All", "Web", "Backend"],
    category: ["fullstack"],
    icon: <Globe className="h-10 w-10 text-primary" />,
    link: "https://github.com/MaheshDoiphode/cinema-java",
    github: "https://github.com/MaheshDoiphode/cinema-java",
    live: null,
    featured: true
  },
  {
    id: 7,
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
    link: "https://github.com/MaheshDoiphode/ai-stuff",
    github: "https://github.com/MaheshDoiphode/ai-stuff",
    live: null
  },
  {
    id: 8,
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
    tags: ["All", "Web", "Backend"],
    category: ["fullstack"],
    icon: <CreditCard className="h-10 w-10 text-blue-600" />,
    link: "https://github.com/MaheshDoiphode/mobile-banking",
    github: "https://github.com/MaheshDoiphode/mobile-banking",
    live: null
  },
  {
    id: 9,
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
    link: "https://github.com/MaheshDoiphode/session-sync",
    github: "https://github.com/MaheshDoiphode/session-sync",
    live: null
  },
  {
    id: 10,
    title: "AI-Powered Documentation & Code Indexing System",
    shortDescription: "High-performance documentation and code indexing system enabling AI assistants to search across multiple repositories.",
    description: `
* Developed a high-performance documentation and code indexing system enabling AI assistants to search across multiple repositories and workspaces through **standardized MCP protocol integration**.
* Built parallel processing engine with intelligent content extraction supporting **15+ file types** including Markdown, Python, JavaScript, and configuration files, achieving **10-30x faster indexing** than traditional methods.
* Implemented sophisticated search algorithms with relevance ranking, fuzzy matching, and cross-workspace discovery, enabling **sub-100ms query response times** across enterprise-scale codebases (5000+ files).
* Created centralized registry system managing multiple workspaces with automatic incremental updates, backup mechanisms, and **optimized vector embeddings** for semantic search capabilities.
* Integrated seamlessly with **GitHub Copilot, Claude Desktop**, and other AI development tools through MCP server architecture, enhancing developer productivity by providing contextually accurate code and documentation insights.
    `,
    image: mcpdataImage,
    tags: ["All", "Web", "AI"],
    category: ["ai", "tools"],
    icon: <GitBranch className="h-10 w-10 text-indigo-600" />,
    link: "https://github.com/MaheshDoiphode/mcpdata",
    github: "https://github.com/MaheshDoiphode/mcpdata",
    live: null
  }
]