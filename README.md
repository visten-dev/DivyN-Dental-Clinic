# DivyN Dental Clinic

A modern, high-performance web application for **DivyN Dental Clinic & Implant Centre**, Sithalapakkam, Chennai. Built with React 19, TypeScript, Tailwind CSS, Lucide icons, and an optional Express + Google Gemini AI assistant backend.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, or pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/visten-dev/DivyN-Dental-Clinic.git
cd DivyN-Dental-Clinic
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your Google Gemini API key if you want to use the server-side AI chatbot:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```
*(If no API key is set, the clinic website works fully, and the chat widget provides direct contact details and clinic info).*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment Guides

### Option 1: Vercel (Recommended - 1 Click)

#### As a Static Site (SPA):
1. Import repository `visten-dev/DivyN-Dental-Clinic` into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npx vite build`
4. Output Directory: `dist`
5. Click **Deploy**.

#### Optional: `vercel.json` for Client-Side Routing
If you need routing rewrites on Vercel:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

### Option 2: Netlify

1. Connect your GitHub repository in [Netlify](https://netlify.com).
2. Set Build Command: `npx vite build`
3. Set Publish Directory: `dist`
4. To handle single-page routing on page refresh, a `public/_redirects` file with `/*  /index.html  200` is supported.
5. Click **Deploy Site**.

---

### Option 3: Full-Stack Node Hosting (Render, Railway, Fly.io, Cloud Run)

To run both the Vite frontend and the Express backend (`server.ts`):
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Environment Variable**: `GEMINI_API_KEY=your_key`

---

## 🛠️ Tech Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS, Vite
- **Icons**: Lucide React
- **Backend / AI**: Node.js, Express, `@google/genai`
- **Styling**: Tailored Dark Theme, Responsive Viewport Clipping, Glassmorphism
