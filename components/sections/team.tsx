"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const teamMembers = [
  {
    name: "孙孙",
    role: "主理人",
    description: "是一个好人",
    avatar: "/avatars/sun.jpg",
    specialties: ["AI", "Web3", "全栈开发"],
  },
  {
    name: "小孙",
    role: "主理人",
    description: "也是一个好人",
    avatar: "/avatars/xiaosun.jpg",
    specialties: ["区块链", "智能合约", "DeFi"],
  },
]

export function Team() {
  return (
    <section id="team" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
          TEAM.OS v2.0.24
        </div>
        <h2 className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent md:text-4xl">
          // CORE_TEAM_MEMBERS
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {"< 驱动创新的核心力量 />"}
        </p>
      </motion.div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden border-primary/50 transition-colors hover:border-primary">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/80 to-background" />
              <div className="absolute inset-0 z-0">
                <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] opacity-20" />
              </div>
              <CardHeader className="relative z-20">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20">
                    <div className="absolute -inset-0.5 z-0 animate-pulse rounded-full bg-gradient-to-r from-primary to-primary-foreground opacity-75 blur" />
                    <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {member.name}
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        [{member.role}]
                      </span>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-20">
                <div className="mt-2 flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center rounded border border-primary/50 bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary transition-colors group-hover:border-primary group-hover:bg-primary/10"
                    >
                      #{specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-px animate-glow bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute left-0 top-0 h-16 w-px animate-glow bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
