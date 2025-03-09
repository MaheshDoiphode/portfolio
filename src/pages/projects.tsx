import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ReactMarkdown from 'react-markdown';

export function ProjectsPage() {
  return (
    <div className="flex flex-col sm:px-20 px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
        <p className="text-muted-foreground">
          A collection of my work across various domains and technologies.
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full h-fit">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
        </TabsList>

        {["all", "web", "mobile", "ai", "design", "backend"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => category === "all" || project.category === category)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48 w-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                          {project.icon}
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <div className="prose prose-sm dark:prose-invert">
                            <ReactMarkdown 
                              components={{
                                ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-4 text-muted-foreground space-y-1" {...props} />,
                                li: ({node, ...props}) => <li className="text-muted-foreground" {...props} />,
                                strong: ({node, ...props}) => <strong className="font-semibold text-foreground" {...props} />
                              }}
                            >
                              {project.description}
                            </ReactMarkdown>
                          </div>
                        </div>
                        <div className="space-y-4 mt-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i}>{tag}</Badge>
                            ))}
                          </div>
                          <div className="flex justify-between gap-4">
                            <Button asChild className="w-[50%]">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                View Source
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                            <Button asChild className="w-[50%]">
                              {project.live ? (
                                <a href={project.live as string} target="_blank" rel="noopener noreferrer">
                                  Live
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                              ) : (
                                <span>
                                  Soon
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}