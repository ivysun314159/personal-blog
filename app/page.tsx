"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Timeline } from "@/components/sections/timeline"
import { Team } from "@/components/sections/team"
import { Partners } from "@/components/sections/partners"
import { Footer } from "@/components/sections/footer"

export default function IndexPage() {
  const { toast } = useToast()

  return (
    <main className="dark-gradient grid-pattern min-h-screen">
      <Hero />
      <Features />
      <Team />
      <Partners />
      <Footer />
    </main>
  )
}
