import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A clean, simple portfolio website built with Next.js and Tailwind CSS",
      tech: "Next.js, TypeScript, Tailwind CSS"
    },
    {
      title: "Weather App",
      description: "A weather application that displays real-time weather information",
      tech: "React, API Integration"
    },
    {
      title: "Todo Task Manager",
      description: "A simple task management app with local storage persistence",
      tech: "React, JavaScript"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Tech: {project.tech}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">Back Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}