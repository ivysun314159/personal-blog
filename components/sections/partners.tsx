"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Partners() {
  return (
    <section id="partners" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          合作伙伴
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          感谢这些优秀的合作伙伴对我们的支持
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <div className="relative h-[200px] w-full max-w-3xl">
          <Image
            src="/WX20241201-150439@2x.png"
            alt="Partners"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  )
}
