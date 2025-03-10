import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Layers,
  Terminal,
  GitBranch
} from "lucide-react";
import { ReactNode } from "react";

// Helper function to conditionally render icon or image
const renderIconOrImage = (name: string, icon: string | ReactNode): ReactNode => {
  // If icon is a string, it's a path to an image
  if (typeof icon === 'string') {
    return (
      <img 
        src={icon} 
        alt={name} 
        className="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    );
  } 
  // Otherwise it's a Lucide icon component
  return icon;
};

// Define a type for our skill items
interface Skill {
  name: string;
  icon: string | ReactNode;
}

// Import all images directly
import javaIcon from '/src/public/java.png';
import springbootIcon from '/src/public/springboot.png';
import postgresIcon from '/src/public/postgres.png';
import awsIcon from '/src/public/AWS.png';
import dockerIcon from '/src/public/docker.png';
import cicdIcon from '/src/public/cicd.png';
import redisIcon from '/src/public/redis.png';
import kubernetesIcon from '/src/public/kubernetes.png';
import mongodbIcon from '/src/public/mongodb.png';
import githubIcon from '/src/public/github.png';
import angularIcon from '/src/public/angular.png';
import tailwindIcon from '/src/public/tailwind.png';
import jenkinsIcon from '/src/public/jenkins.png';
import androidIcon from '/src/public/android.png';
import postmanIcon from '/src/public/postman.png';
import bitbucketIcon from '/src/public/bitbucket.png';
import bambooIcon from '/src/public/bamboo.png';
import helmIcon from '/src/public/helm.png';
import kafkaIcon from '/src/public/kafka.png';

const skills: Record<string, Skill[]> = {
  "core-tech": [
    { name: "Java", icon: javaIcon },
    { name: "Spring Boot", icon: springbootIcon },
    { name: "Angular", icon: angularIcon },
    { name: "PostgreSQL", icon: postgresIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Redis", icon: redisIcon },
    { name: "Apache Kafka", icon: kafkaIcon },
    { name: "Android", icon: androidIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
  ],
  "cloud-devops": [
    { name: "AWS", icon: awsIcon },
    { name: "Docker", icon: dockerIcon },
    { name: "Kubernetes", icon: kubernetesIcon },
    { name: "Jenkins", icon: jenkinsIcon },
    { name: "CI/CD", icon: cicdIcon },
    { name: "Helm", icon: helmIcon },
    { name: "Git", icon: <GitBranch className="h-12 w-12" /> },
  ],
  "tools": [
    { name: "VS Code", icon: <Terminal className="h-12 w-12" /> },
    { name: "IntelliJ IDEA", icon: <Terminal className="h-12 w-12" /> },
    { name: "Postman", icon: postmanIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "BitBucket", icon: bitbucketIcon },
    { name: "Bamboo", icon: bambooIcon },
  ],
  "expertise": [
    { name: "Microservices", icon: <Layers className="h-12 w-12" /> },
    { name: "System Design", icon: <Layers className="h-12 w-12" /> },
    { name: "RESTful APIs", icon: <Code className="h-12 w-12" /> },
    { name: "Cloud Architecture", icon: awsIcon },
    { name: "Reactive Programming", icon: <Code className="h-12 w-12" /> },
  ]
};

export function SkillsPage() {
  return (
    <div className="flex sm:flex-col flex-col sm:px-20 px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">My Skills</h1>
        <p className="text-muted-foreground">
          A comprehensive overview of my technical skills and expertise.
        </p>
      </div>

      <Tabs defaultValue="core-tech" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-fit">
          <TabsTrigger value="core-tech">Core Tech</TabsTrigger>
          <TabsTrigger value="cloud-devops">Cloud & DevOps</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="expertise">Expertise</TabsTrigger>
        </TabsList>

        {Object.entries(skills).map(([category, skillList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg border border-border/50 hover:border-primary/50 overflow-hidden">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                      <div className="mb-4 relative h-16 w-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {renderIconOrImage(skill.name, skill.icon)}
                      </div>
                      <h3 className="font-medium">{skill.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">B.E. in Information Technology</h3>
              <p className="text-muted-foreground">Dhole Patil College of Engineering, 2018-2022</p>
              <p className="text-muted-foreground">CGPA: 7.98/10</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Microsoft Azure Fundamentals (AZ-900)</h3>
              <p className="text-muted-foreground">Microsoft</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Docker Certified Associate</h3>
              <p className="text-muted-foreground">LinkedIn Learning</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Volunteering</h3>
              <ul className="text-muted-foreground list-disc pl-5 space-y-1">
                <li>Volunteer at Old Age Home Every 2nd Weekend</li>
                <li>Teach English to Children at Local Orphanages</li>
                <li>Tree Plantation Drives (Goal: 10000 trees)</li>
                <li>Historical Fort Conservation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}