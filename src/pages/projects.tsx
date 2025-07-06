import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { ImageModal } from "@/components/ImageModal";

export function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col sm:px-20 px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
        <p className="text-muted-foreground">
          A collection of my work across various domains and technologies.
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-8 relative">
        {/* Sticky category bar with shadow and backdrop blur - positioned below header */}
        <div className="sticky top-16 z-10 bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60 pb-4 pt-2 -mx-4 px-4 sm:-mx-20 sm:px-20 border-b shadow-sm">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-fit">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
          </TabsList>
        </div>

        {["all", "fullstack", "backend", "tools", "ai"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) =>
                  category === "all" ||
                  (Array.isArray(project.category)
                    ? project.category.includes(category)
                    : project.category === category)
                )
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col">
                      <div className="relative h-64 w-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openImageModal(project.image, project.title)}
                        />
                        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                          {project.icon}
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <div className="prose prose-sm dark:prose-invert">
                            <ReactMarkdown
                              components={{
                                ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-4 text-muted-foreground space-y-1" {...props} />,
                                li: ({ node, ...props }) => <li className="text-muted-foreground" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-semibold text-foreground" {...props} />
                              }}
                            >
                              {project.description}
                            </ReactMarkdown>
                          </div>
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
                                {project.github && (
                                  <Button asChild className="w-[50%]">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                      View Source
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                  </Button>
                                )}
                                <Button asChild className={project.github ? "w-[50%]" : "w-full"}>
                                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    Live
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </a>
                                </Button>
                              </>
                            ) : (
                              project.github && (
                                <Button asChild className="w-full">
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    View Source
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
          </TabsContent>
        ))}
      </Tabs>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
      />
    </div>
  );
}