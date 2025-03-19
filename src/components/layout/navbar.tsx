import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Code, Briefcase, User, Mail, FileDown } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: <User className="h-4 w-4 mr-2" /> },
  { path: "/projects", label: "Projects", icon: <Briefcase className="h-4 w-4 mr-2" /> },
  { path: "/skills", label: "Skills", icon: <Code className="h-4 w-4 mr-2" /> },
  { path: "/contact", label: "Contact", icon: <Mail className="h-4 w-4 mr-2" /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if the nav item is active with hash router
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.includes(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 sm:px-20 px-4 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
            <Code className="absolute inset-0 h-full w-full p-1 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gradient">Mahesh</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <div className="flex gap-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={cn(
                    "transition-all duration-200",
                    isActive(item.path) && "rgb-border"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1" asChild>
              <a href="docs/Mahesh_Doiphode.pdf" download="Mahesh_Doiphode.pdf">
                <FileDown className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="sm:hidden" asChild>
              <a href="docs/Mahesh_Doiphode.pdf" download="Mahesh_Doiphode.pdf">
                <FileDown className="h-4 w-4" />
                <span className="sr-only">Resume</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="container pb-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
            {/* Resume download button for mobile menu */}
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <a href="docs/Mahesh_Doiphode.pdf" download="Mahesh_Doiphode.pdf">
                <FileDown className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
