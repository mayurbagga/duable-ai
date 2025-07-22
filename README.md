# LaunchIO Hackathon Project

This project was built for the [LaunchIO Hackathon](https://dorahacks.io/hackathon/launchio/buidl) as a demonstration of rapid, AI-powered application generation and preview.

## 🚀 Overview

This app showcases how to use the [IO Intelligence Agents API and IO Intelligence Models API](https://docs.io.net/reference/getting-started-with-api-agents) to generate, manage, and preview modern web applications with minimal manual effort.

- Built for hackathon speed and extensibility
- Uses the latest AI APIs for code generation and workflow automation
- **Provides a boilerplate for blockchain-enabled apps**: Every generated app includes wallet connection and Web3 integration, making it easy to build blockchain-ready projects.

## ✨ Features

- **AI-powered code generation**: Instantly scaffold a full React app with a single prompt
- **Automatic dev server & preview**: See your app running as soon as code is generated
- **Modern tech stack**: Vite, React, TypeScript, and Tailwind CSS
- **Easy extensibility**: Add new features or pages by simply describing them in natural language
- **Hackathon-ready**: Built for rapid prototyping and demoing at events like LaunchIO
- **Web3/Blockchain support**: Boilerplate includes wallet connection and blockchain integration for every app

## 🏅 Key Innovation Areas

- 🧠 **Conversational AI App Builder:** Instantly turn natural language prompts into production-ready web3 or web apps, powered by IO Intelligence Agents API.
- ⚡ **In-Browser Node.js Development:** Build, preview, and run full-stack apps directly in the browser using WebContainer—no local setup required.
- 🔗 **Plug-and-Play Blockchain Support:** Every generated app can include wallet connection and smart contract boilerplate, making blockchain integration seamless for hackathon teams.
- 📊 **Smart dApp Analytics:** Leverage knowledge graph intelligence for advanced dApp discovery, analytics, and insights—perfect for hackathon demos and judging.
- 🔄 **Live AI Collaboration:** Experience real-time, streaming AI code generation and editing, enabling teams to iterate and build together faster than ever.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS
- **AI APIs**: [IO Intelligence Agents API](https://docs.io.net/reference/getting-started-with-api-agents), IO Intelligence Models API
- **Preview/Dev Environment**: WebContainer (browser-based Node.js runtime)

## 📝 Setup Instructions

1. **Clone the repo**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Open the app**
   - Visit [http://localhost:5173/](http://localhost:5173/) in your browser
   - Use the chat interface to generate or modify your app

## 🤖 About IO Intelligence APIs

This project leverages the [IO Intelligence Agents API and Models API](https://docs.io.net/reference/getting-started-with-api-agents) to:
- Generate code and project files from natural language prompts
- Automate workflows and app scaffolding
- Enable rapid prototyping for hackathons and demos

## 🏆 Hackathon Context

This project was created for the [LaunchIO Hackathon](https://dorahacks.io/hackathon/launchio/buidl) to demonstrate the power of AI-driven development and instant app previews.

---

## 🏗️ Technical Architecture

<!-- Add architecture diagram or description here -->

## 🧠 IO Intelligence API Integration (Hackathon Use)

This project was built for the LaunchIO Hackathon and deeply integrates the [IO Intelligence Agents API and Models API](https://docs.io.net/reference/getting-started-with-api-agents) for all AI-powered code generation and workflow automation.

**Where is the IO Intelligence API used?**
- **AI Code Generation:**
  - The backend calls the IO Intelligence API to generate code, project files, and actions from user prompts. This is handled in:
    - The AI provider implementation (OpenAI-compatible client for IO Intelligence)
    - The main chat API route (handles code generation requests and passes API keys)
    - The frontend chat interface (manages API key and model selection)
    - System prompt engineering (instructs the AI on file generation format)
- **Knowledge Graph Intelligence:**
  - The IO Intelligence API is also used for dApp analytics and insights in the knowledge graph intelligence and analytics modules.

**Example: IO Intelligence API Provider Implementation**

```ts
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  baseURL: 'https://api.intelligence.io.solutions/api/v1',
  apiKey, 
});

return openai(model); // Used for all code generation and chat
```

**Summary:**
- All AI-driven features (code, file, and workflow generation) are powered by the IO Intelligence API.
- The API key is securely loaded from `.env.local` and passed through the backend to the provider.
- This integration was a core part of the hackathon work and enabled rapid, in-browser app generation and preview.

**Happy hacking!**
