"use client"

import { notFound } from 'next/navigation'
import { blogPosts } from '@/content/blog/posts'
import { Badge } from '@/components/ui/badge'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose dark:prose-invert prose-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-primary">
            {post.title}
          </h1>
          <div className="flex space-x-2 mb-4">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground">发布日期：{post.date}</p>
        </div>

        <MDXRemote 
          source={post.content} 
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            }
          }} 
        />
      </article>
    </div>
  )
}
