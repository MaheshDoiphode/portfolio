import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 items-start">
          {/* Brand Column */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-primary shadow-md">
                <Code className="absolute inset-0 h-full w-full p-1.5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gradient">Mahesh</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              A modern portfolio showcasing my work and skills as a developer.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 text-center md:text-left">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
                <a href="https://github.com/MaheshDoiphode" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
                <a href="https://www.linkedin.com/in/maheshdoiphode/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mahesh Doiphode. All rights reserved.
            </p>
            <p className="text-center text-xs text-muted-foreground/70">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
