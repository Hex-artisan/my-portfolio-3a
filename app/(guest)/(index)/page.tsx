import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="py-20">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">Hi, I'm Ian Faith Fernandez</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          A passionate web developer dedicated to building clean, simple, and effective solutions. 
          I focus on creating user-friendly interfaces and robust applications.
        </p>
        <div className="flex gap-4">
          <Link href="/about">
            <Button>Learn More</Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline">View My Work</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}