import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Database,
  Server,
  Layers,
  Terminal,
  GitBranch,
  Cpu,
  Cloud
} from "lucide-react";

const skills = {
  proficient: [
    { name: "Java", level: 95, icon: <Code className="h-6 w-6" />, color: "bg-blue-700" },
    { name: "Spring Boot", level: 90, icon: <Code className="h-6 w-6" />, color: "bg-green-600" },
    { name: "PostgreSQL", level: 88, icon: <Database className="h-6 w-6" />, color: "bg-blue-600" },
    { name: "AWS", level: 85, icon: <Cloud className="h-6 w-6" />, color: "bg-orange-500" },
    { name: "Docker", level: 90, icon: <Layers className="h-6 w-6" />, color: "bg-blue-600" },
    { name: "Microservices", level: 85, icon: <Layers className="h-6 w-6" />, color: "bg-purple-600" },
    { name: "CI/CD", level: 80, icon: <Terminal className="h-6 w-6" />, color: "bg-green-500" },
    { name: "Redis", level: 85, icon: <Database className="h-6 w-6" />, color: "bg-red-600" },
  ],
  familiar: [
    { name: "Kubernetes", level: 75, icon: <Layers className="h-6 w-6" />, color: "bg-blue-500" },
    { name: "MongoDB", level: 78, icon: <Database className="h-6 w-6" />, color: "bg-green-500" },
    { name: "Git", level: 85, icon: <GitBranch className="h-6 w-6" />, color: "bg-red-500" },
    { name: "Angular", level: 70, icon: <Code className="h-6 w-6" />, color: "bg-red-600" },
    { name: "Tailwind CSS", level: 75, icon: <Code className="h-6 w-6" />, color: "bg-cyan-500" },
    { name: "Jenkins", level: 70, icon: <Server className="h-6 w-6" />, color: "bg-gray-600" },
    { name: "Android (Kotlin)", level: 65, icon: <Cpu className="h-6 w-6" />, color: "bg-green-600" },
  ],
  projects: [
    { name: "Reactive Programming", level: 85, icon: <Code className="h-6 w-6" />, color: "bg-purple-500" },
    { name: "BFF Architecture", level: 80, icon: <Layers className="h-6 w-6" />, color: "bg-indigo-500" },
    { name: "RESTful API Design", level: 90, icon: <Server className="h-6 w-6" />, color: "bg-teal-600" },
    { name: "Containerization", level: 85, icon: <Layers className="h-6 w-6" />, color: "bg-blue-600" },
    { name: "Batch Processing", level: 80, icon: <Server className="h-6 w-6" />, color: "bg-orange-600" },
    { name: "UI/UX Design", level: 75, icon: <Layers className="h-6 w-6" />, color: "bg-pink-500" },
  ],
  tools: [
    { name: "VS Code", level: 90, icon: <Terminal className="h-6 w-6" />, color: "bg-blue-500" },
    { name: "IntelliJ IDEA", level: 95, icon: <Terminal className="h-6 w-6" />, color: "bg-purple-600" },
    { name: "Postman", level: 85, icon: <Server className="h-6 w-6" />, color: "bg-orange-500" },
    { name: "GitHub", level: 85, icon: <GitBranch className="h-6 w-6" />, color: "bg-gray-700" },
    { name: "AWS Console", level: 80, icon: <Cloud className="h-6 w-6" />, color: "bg-yellow-600" },
    { name: "Docker Desktop", level: 85, icon: <Layers className="h-6 w-6" />, color: "bg-blue-600" },
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

      <Tabs defaultValue="proficient" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-fit">
          <TabsTrigger value="proficient">Proficient</TabsTrigger>
          <TabsTrigger value="familiar">Familiar</TabsTrigger>
          <TabsTrigger value="projects">Project Skills</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>

        {Object.entries(skills).map(([category, skillList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`${skill.color} p-2 rounded-md text-white`}>
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">{skill.level}%</p>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
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