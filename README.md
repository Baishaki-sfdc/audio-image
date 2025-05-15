# 🎙️ Voice-to-Image Generator

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It allows users to **record voice input**, transcribe it to text using OpenAI Whisper, generate an image prompt using GPT, and finally render an image via DALL·E 3—all in a sleek interface powered by modern React and TailwindCSS.

## 🚀 Features

- 🎤 Voice recording with `react-media-recorder`
- 🧠 AI transcription via **OpenAI Whisper**
- ✍️ Prompt generation via **GPT-3.5-Turbo**
- 🎨 Image generation using **DALL·E 3**
- 💨 Fast and optimized UI with TailwindCSS + ShadCN UI
- 🌗 Light/Dark theme support with custom design tokens

## 🧰 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org)
- **Styling:** Tailwind CSS + [tailwindcss-animate](https://github.com/benface/tailwindcss-animate)
- **Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Fonts:** [Geist](https://vercel.com/font)
- **AI APIs:** [OpenAI SDK](https://www.npmjs.com/package/openai)

---

## 🛠️ Setup & Development

### 📦 Prerequisites

- Node.js (>=18)
- OpenAI API Key in `.env.local`:

```bash
OPENAI_API_KEY=your_openai_api_key
