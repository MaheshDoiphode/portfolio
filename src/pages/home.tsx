import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Layers,
  Linkedin,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ImageModal } from "@/components/ImageModal";

// Import skill icons
import angularIcon from '/src/public/angular.png';
import awsIcon from '/src/public/AWS.png';
import dockerIcon from '/src/public/docker.png';
import helmIcon from '/src/public/helm.png';
import javaIcon from '/src/public/java.png';
import kubernetesIcon from '/src/public/kubernetes.png';
import springbootIcon from '/src/public/springboot.png';

interface Skill {
  name: string;
  icon: string | JSX.Element;
  isImage: boolean;
}

export function HomePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="px-4 gap-6 flex flex-col sm:px-20 py-12 w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Badge variant="outline" className="px-4 py-1 text-sm">
            Full-Stack Developer
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-gradient">Mahesh</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            I build modern, responsive web applications with cutting-edge technologies.
            Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="rgb-border">
            <Link to="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4"
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/MaheshDoiphode" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/maheshdoiphode/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover cursor-pointer"
                    onClick={() => handleImageClick(project.image, project.title)}
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                    {project.icon}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.shortDescription}</p>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i}>{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex justify-between gap-4">
                      {project.live ? (
                        <>
                          {project.link && (
                            <Button asChild variant="outline" className="w-[50%]">
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          <Button asChild variant="outline" className={project.link ? "w-[50%]" : "w-full"}>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              Live
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </>
                      ) : (
                        project.link && (
                          <Button asChild variant="outline" className="w-full">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              View Project
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {([
            { name: "Java", icon: javaIcon, isImage: true },
            { name: "Spring Boot", icon: springbootIcon, isImage: true },
            { name: "AWS", icon: awsIcon, isImage: true },
            { name: "Docker", icon: dockerIcon, isImage: true },
            { name: "Kubernetes", icon: kubernetesIcon, isImage: true },
            { name: "Helm", icon: helmIcon, isImage: true },
            { name: "Microservices", icon: <Layers className="h-6 w-6" />, isImage: false },
            { name: "Angular", icon: angularIcon, isImage: true },
          ] as Skill[]).map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              className="animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="h-full">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    {skill.isImage ? (
                      <img
                        src={skill.icon as string}
                        alt={skill.name}
                        className="h-6 w-6 object-contain"
                      />
                    ) : (
                      skill.icon
                    )}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link to="/skills">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Achievements & Recognition Section */}
      <section className="space-y-8">
        <div className="section-header">
          <h2 className="text-3xl font-bold tracking-tight">Achievements & Recognition</h2>
          <p className="text-muted-foreground">Professional milestones and recognition earned through exceptional delivery and leadership</p>
        </div>

        <div className="achievements-list space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="achievement-item bg-background/50 border border-border/50 rounded-lg p-8 hover:bg-background/80 hover:border-primary/30 transition-all duration-200"
          >
            <div className="achievement-header flex items-start gap-4 mb-4">
              <div className="achievement-icon w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-lg flex-shrink-0 mt-1">
                🏆
              </div>
              <div className="achievement-content flex-1">
                <h3 className="text-xl font-semibold mb-2">Executive Level Recognition</h3>
                <p className="text-muted-foreground mb-4">
                  Received exceptional appreciation from <span className="text-primary font-medium">Project Director</span> for outstanding project delivery. 
                  Recognition escalated through management hierarchy, reaching <span className="text-primary font-medium">Ranjan, CEO of offshore company</span>, 
                  demonstrating significant impact and quality of work delivered.
                </p>
                <div className="achievement-tags flex flex-wrap gap-2">
                  <Badge variant="secondary">Client Excellence</Badge>
                  <Badge variant="secondary">Executive Recognition</Badge>
                  <Badge variant="secondary">Quality Delivery</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="achievement-item bg-background/50 border border-border/50 rounded-lg p-8 hover:bg-background/80 hover:border-primary/30 transition-all duration-200"
          >
            <div className="achievement-header flex items-start gap-4 mb-4">
              <div className="achievement-icon w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-lg flex-shrink-0 mt-1">
                🎯
              </div>
              <div className="achievement-content flex-1">
                <h3 className="text-xl font-semibold mb-2">Technical Leadership & Knowledge Sharing</h3>
                <p className="text-muted-foreground mb-4">
                  <span className="text-primary font-medium">Co-led and delivered 2 seminars</span> in company-wide Tech Talk initiative, 
                  collaborating with management to drive technical excellence. Shared expertise across teams and contributed to 
                  organizational knowledge growth.
                </p>
                <div className="achievement-tags flex flex-wrap gap-2">
                  <Badge variant="secondary">Technical Leadership</Badge>
                  <Badge variant="secondary">Public Speaking</Badge>
                  <Badge variant="secondary">Knowledge Transfer</Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">GitHub Stats</h2>
            <p className="text-muted-foreground">My open source contributions</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4">
                {/* Main GitHub Stats Card */}
                <img
                  src="https://github-readme-stats.vercel.app/api?username=MaheshDoiphode&show_icons=true&count_private=true&include_all_commits=true&theme=tokyonight&card_width=495"
                  alt="GitHub Stats"
                  className="w-full max-w-xl h-auto rounded-lg"
                />

                {/* GitHub Streak Stats */}
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=MaheshDoiphode&theme=tokyonight&card_width=495&hide_border=true"
                  alt="GitHub Streak"
                  className="w-full max-w-xl h-auto rounded-lg"
                  onError={(e) => {
                    // Fallback if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = "https://streak-stats.demolab.com/?user=MaheshDoiphode&theme=tokyonight&card_width=495&hide_border=true";
                  }}
                />

                {/* Top Languages Card */}
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=MaheshDoiphode&layout=compact&theme=tokyonight&card_width=495&langs_count=6"
                  alt="Top Languages"
                  className="w-full max-w-xl h-auto rounded-lg"
                />

                <div className="flex justify-center mt-4">
                  <Button asChild variant="outline" className="gap-2">
                    <a href="https://github.com/MaheshDoiphode" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View GitHub Profile
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Keep the GitHub Badges */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://github.com/MaheshDoiphode" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/followers/MaheshDoiphode?style=social" alt="GitHub Followers" />
          </a>
          <a href="https://github.com/MaheshDoiphode" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/stars/MaheshDoiphode?style=social" alt="GitHub Stars" />
          </a>
          <a href="https://github.com/MaheshDoiphode" target="_blank" rel="noopener noreferrer">
            <img src="https://komarev.com/ghpvc/?username=MaheshDoiphode" alt="Profile Views" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Let's Work Together</h2>
          <p className="text-muted-foreground">
            I'm currently available for freelance work and open to new opportunities.
            If you have a project in mind or just want to chat, feel free to reach out.
          </p>
          <Button asChild size="lg" className="rgb-border">
            <Link to="/contact">
              Get in Touch
              <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        imageSrc={selectedImage?.src || ""}
        imageAlt={selectedImage?.alt || ""}
      />
    </div>
  );
}
