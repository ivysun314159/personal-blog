"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "小孙的文章",
    description: "记录生活感悟、技术探索和个人成长的独特视角",
    icon: "code",
    linkText: "阅读文章",
    linkHref: "/blog"
  },
  {
    title: "小孙的朋友圈",
    description: "分享生活瞬间，记录与朋友们的美好时光和精彩瞬间",
    icon: "users",
  }
]

const Features: React.FC = () => {
  return React.createElement(
    "section",
    { id: "features", className: "container py-24 sm:py-32" },
    React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true },
        className: "flex flex-col items-center gap-4 text-center",
      },
      React.createElement(
        "div",
        { className: "inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm" },
        "PERSONAL.sys v1.0.24"
      ),
      React.createElement(
        "h2",
        {
          className:
            "bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent md:text-4xl",
        },
        "// PERSONAL_SPACE"
      ),
      React.createElement(
        "p",
        { className: "max-w-[700px] text-lg text-muted-foreground" },
        "< 记录生活，分享精彩 />"
      )
    ),
    React.createElement(
      "div",
      { className: "mt-16 grid gap-8 sm:grid-cols-2" },
      features.map((feature, index) =>
        React.createElement(
          motion.div,
          {
            key: feature.title,
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.1 },
            viewport: { once: true },
          },
          React.createElement(
            Card,
            {
              className:
                "group relative overflow-hidden border-primary/50 transition-colors hover:border-primary",
            },
            React.createElement("div", {
              className:
                "absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/80 to-background",
            }),
            React.createElement(
              "div",
              { className: "absolute inset-0 z-0" },
              React.createElement("div", {
                className:
                  "h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] opacity-20",
              })
            ),
            React.createElement(
              CardHeader,
              { className: "relative z-20" },
              React.createElement(
                "div",
                { className: "mb-2 inline-block rounded-lg bg-primary/10 p-3" },
                React.createElement(
                  "div",
                  { className: "relative" },
                  React.createElement("div", {
                    className:
                      "absolute -inset-1 animate-glow rounded-lg bg-primary/50 opacity-25 blur group-hover:opacity-50",
                  }),
                  Icons[feature.icon as keyof typeof Icons] &&
                    React.createElement(Icons[feature.icon as keyof typeof Icons], {
                      className:
                        "relative h-6 w-6 transition-transform group-hover:scale-110",
                    })
                )
              ),
              React.createElement("h3", { className: "text-xl font-bold" }, feature.title)
            ),
            React.createElement(
              CardContent,
              { className: "relative z-20 space-y-4" },
              React.createElement(
                "p",
                { className: "text-sm text-muted-foreground" },
                feature.description
              ),
              feature.linkText && feature.linkHref && 
                React.createElement(
                  Link,
                  { href: feature.linkHref },
                  React.createElement(
                    Button,
                    { variant: "outline", className: "w-full" },
                    feature.linkText
                  )
                )
            ),
            React.createElement("div", {
              className:
                "absolute bottom-0 left-0 right-0 h-px animate-glow bg-gradient-to-r from-transparent via-primary/50 to-transparent",
            }),
            React.createElement("div", {
              className:
                "absolute left-0 top-0 h-16 w-px animate-glow bg-gradient-to-b from-transparent via-primary/50 to-transparent",
            })
          )
        )
      )
    )
  )
}

export { Features }
