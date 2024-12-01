"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-[980px] flex-col items-center gap-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.8,
          }}
          className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary/50"
        >
          <Image
            src="/avatars/主页头像.png"
            alt="Profile Image"
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            priority
          />
          <div className="absolute inset-0 ring-2 ring-primary/20 ring-offset-2 ring-offset-background" />
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
            yixin 的个人主页
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            小孙的文章，相册和朋友圈
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-8 w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src="/赛博朋克.webp"
            alt="Cyberpunk Image"
            width={1200}
            height={600}
            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
