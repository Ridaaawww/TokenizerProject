# 🧠 Can You Think Like GPT?

> A fast-paced, addictive token guessing game to help you understand how AI breaks down language — one token at a time.
---
>  What is this?

**LLMs (Large Language Models)** like GPT-4 don’t read sentences like humans — they read tokens.  
This game lets you **guess how GPT tokenizes everyday sentences** — and in the process, helps you crack open the black box of how LLMs *actually* think.

---
 Features

- 🕹️ **Token Guessing Game** – Type your guess and see how close you are to GPT-4.
- 🔥 **Streak Counter** – Track your intuition and challenge your friends.
- 🎓 **Learn Mode** – Break down any sentence and see token-by-token highlights (Coming Soon).
- 🌌 **Beautiful UI/UX** – Monospace fonts, dark mode, typewriter animation, and “GPT-style” feel.

---

## 🛠️ Tech Stack

| Frontend        | Deployment         | Tokenizer           |
|-----------------|--------------------|----------------------|
| React + Vite    | Vercel / Netlify   | [tiktoken](https://github.com/dqbd/tiktoken) |

---

## 🧠 Why this matters

Most people use ChatGPT, but **few know how it actually reads text**.  
This project gamifies tokenization so that:
- AI enthusiasts can sharpen their understanding
- Students can visualize what models see
- You can have fun while learning GPT internals

---

## 📦 Running Locally

```bash
git clone https://github.com/YOUR_USERNAME/token-guessing-game.git
cd token-guessing-game
npm install
npm run dev
