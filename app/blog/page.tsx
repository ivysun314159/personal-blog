"use client"

import Link from 'next/link'
import { blogPosts } from '@/content/blog/posts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'

const blogCategories = [
  {
    title: "TECH_HORIZON",
    description: "// Deep dive into programming, tech trends, and innovation",
    posts: [
      { title: "NEXT.JS_15_DECODED", date: "2024-03-15" },
      { title: "MODERN_FRONTEND_PARADIGMS", date: "2024-02-20" },
      { title: "AI_WEB_CONVERGENCE", date: "2024-01-10" }
    ]
  },
  {
    title: "LIFE_SIGNALS",
    description: "// Personal growth, reflections, and urban narratives",
    posts: [
      { title: "DEVELOPER_MINDSET_PROTOCOL", date: "2024-02-05" },
      { title: "URBAN_DRIFT_ALGORITHM", date: "2024-01-25" },
      { title: "WORK_LIFE_BALANCE_SCRIPT", date: "2024-03-01" }
    ]
  },
  {
    title: "CYBER_CULTURE",
    description: "// Exploring tech aesthetics, future visions, and human-machine interfaces",
    posts: [
      { title: "CYBERPUNK_AESTHETIC_ENGINE", date: "2024-03-10" },
      { title: "TECH_HUMANITY_BOUNDARY", date: "2024-02-15" },
      { title: "DIGITAL_IDENTITY_MATRIX", date: "2024-01-30" }
    ]
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        {/* Sidebar Navigation */}
        <div className="hidden md:block">
          <div className="sticky top-8 space-y-4 bg-[#0a0a0a] border border-primary/20 rounded-lg p-4 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <h2 className="text-2xl font-bold text-primary border-b border-primary/30 pb-2 uppercase tracking-wider">
              FEATURE_LOGS
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {blogCategories.map((category, index) => (
                <AccordionItem 
                  value={`category-${index}`} 
                  key={category.title}
                  className="border-primary/20"
                >
                  <AccordionTrigger className="hover:text-primary uppercase tracking-wider text-left">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-xs text-muted-foreground mb-2 italic">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.posts.map((post) => (
                        <li 
                          key={post.title} 
                          className="text-sm hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-2"
                        >
                          <Link href={`/blog/${post.title}`} className="flex justify-between items-center">
                            <span className="truncate">{post.title}</span>
                            <span className="text-xs text-muted-foreground ml-2 opacity-70">
                              {post.date}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div>
          <h1 className="text-4xl font-bold mb-8 text-primary uppercase tracking-wider">
            FEATURE_LOGS
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <Card className="group border border-primary/20 bg-[#0a0a0a] hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors uppercase tracking-wider">
                      {post.title}
                    </CardTitle>
                    <div className="flex space-x-2 mt-2">
                      {post.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="border-primary/50 text-primary/80"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {post.summary}
                    </p>
                    <div className="text-xs text-muted-foreground opacity-70 uppercase tracking-wider">
                      LOGGED: {post.date}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
