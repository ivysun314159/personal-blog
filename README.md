# Next.js Shadcn Template
[English](README.md) | [中文](README.zh-CN.md)

A modern, feature-rich Next.js template with Shadcn UI components. It's particularly suitable for AI code editor development (like Cursor / Windsurf)

## Example AI Projects Based on This Template
- [HackathonWeekly Website - Modern Clean Style](https://hackweek.pages.dev/)
- [HackathonWeekly Website - Terminal Style](https://terminal-style.hackweek.pages.dev/)

## Features

- ⚡️ Next.js 15 with App Directory
- 🎨 Shadcn UI Components
- 🎭 Tailwind CSS
- 📱 Responsive Design
- 🌙 Dark Mode Support
- 🔍 SEO Optimized
- 📊 Built-in Analytics Support
- 🚀 Fast Page Loads
- 🛠️ Easy to Customize
- 📦 Production Ready
- AI Friendly (For Cursor / Windsurf)
- Icons from [Lucide](https://lucide.dev)
- Tailwind CSS class sorting, merging and linting.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/jackiexiao/next-shadcn-template.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Deploy

Easy deploy to Cloudflare Pages:
```bash
npm run deploy
```

## AI Development Support

This template works great with AI coding assistants:
- 🌊 Windsurf
- 🔍 Cursor
- 👨‍💻 GitHub Copilot

Just open this repo in your preferred AI assistant and start coding!

## Recommended VSCode Extensions

For the best development experience, install these extensions:

- 🎨 Tailwind CSS IntelliSense
- 📝 PostCSS Language Support
- ✨ Prettier
- 🔍 ESLint
- 🏷️ Auto Rename Tag
- 📖 Code Spell Checker
- 🎯 Error Lens
- 📊 Import Cost
- 🛠️ Path Intellisense
- 🔧 Pretty TypeScript Errors
- 🧵 Template String Converter

## Development Tips

1. Customize components:
   - Check `components/ui` for base components
   - Add new components in `components/`
   - Modify themes in `app/globals.css`

## Cloudflare Deployment (Optional)
See: https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/

Ensure all server-rendered routes use the Edge Runtime
```js
export const runtime = "edge";
```

## License

MIT License - feel free to use this template for any project!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
