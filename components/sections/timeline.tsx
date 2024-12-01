"use client"

import React from "react"
import { motion } from "framer-motion"

const timelineItems = [
  {
    year: "2023",
    title: "社区成立",
    description: "Yixin黑客松社区正式成立，开始组织第一次线下活动",
  },
  {
    year: "2023 Q2",
    title: "首次黑客松",
    description: "成功举办首届黑客松大赛，吸引了众多开发者参与",
  },
  {
    year: "2023 Q3",
    title: "技术沙龙",
    description: "定期举办技术分享会，邀请行业专家进行交流",
  },
  {
    year: "2023 Q4",
    title: "社区扩展",
    description: "社区规模持续扩大，建立了完善的线上交流平台",
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          发展历程
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          见证我们的成长历程和重要里程碑
        </p>
      </motion.div>
      <div className="mt-16 space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:flex-row md:gap-8"
          >
            <div className="md:w-1/4">
              <div className="text-2xl font-bold text-primary">{item.year}</div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
