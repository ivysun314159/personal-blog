"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 md:flex-row md:justify-between"
        >
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-xl font-bold">{siteConfig.name}</h3>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              创新无界，技术有我
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32">
              <Image
                src={siteConfig.links.wechat}
                alt="WeChat QR Code"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">关注公众号获取最新动态</p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="space-y-2 text-center md:text-right">
              <p className="text-sm text-muted-foreground">联系我们</p>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-sm hover:underline"
              >
                {siteConfig.links.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
