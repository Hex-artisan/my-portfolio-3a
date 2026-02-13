import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            I'm a web developer with a passion for creating clean, functional, and beautiful web applications. 
            With experience in modern web technologies, I strive to build solutions that are both user-friendly and efficient.
          </p>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Frontend: React, Next.js, TypeScript</li>
              <li>Styling: Tailwind CSS, CSS</li>
              <li>Backend: Node.js, SQL</li>
              <li>Tools: Git, VS Code</li>
            </ul>
          </div>
          
          <p>
            I believe in writing clean code, staying updated with latest trends, and continuously improving my skills. 
            When I'm not coding, I enjoy learning new technologies and collaborating with other developers.
          </p>
        </div>
        
        <div className="mt-8">
          <Link href="/projects">
            <Button>View My Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}