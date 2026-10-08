import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API client lazily
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", clinic: "DivyN - The DENTIST", time: new Date().toISOString() });
});

// AI Dental Assistant Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();

    const systemInstruction = `You are "DivyN AI Dental Care Assistant", the friendly and highly knowledgeable digital concierge for DivyN – The DENTIST clinic in Sithalapakkam, Chennai.
Clinic Details:
- Name: DivyN – The DENTIST
- Location: 674, Venous Colony, Sithalapakkam, Chennai, Tamil Nadu – 600131
- Phone: +91 79047 19986
- Rating: 5.0 Stars (122+ Google Reviews)
- Hours: Mon-Sat 10:00 AM - 1:30 PM & 5:00 PM - 10:00 PM; Sun 10:00 AM - 1:30 PM
- Key Features: Painless root canals, German-grade dental implants, invisible braces/aligners, smile designing, laser teeth whitening, pediatric care, emergency dental care, 100% sterilized equipment.

Guidelines for AI:
- Answer questions warmly, empathetically, and professionally in clear English (or Tamil if requested).
- Emphasize painless treatment techniques, affordable pricing, and high hygiene standards.
- Always offer to help book an appointment or guide the user to call +91 79047 19986 for urgent emergencies.
- Keep responses concise, well-structured, and easy to read.`;

    const model = "gemini-2.5-flash";
    
    // Construct simplified prompt with context
    const fullPrompt = `${systemInstruction}\n\nUser Question: ${message}`;

    const response = await ai.models.generateContent({
      model,
      contents: fullPrompt,
    });

    const reply = response.text || "I am here to help you at DivyN - The DENTIST. Please call +91 79047 19986 or book an appointment online!";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return res.status(500).json({
      error: "Failed to generate AI response",
      details: error?.message || "Server error",
      fallback: "Our AI assistant is temporarily offline, but you can directly call DivyN - The DENTIST at +91 79047 19986 or click 'Book Appointment' to schedule a consultation!"
    });
  }
});

async function startServer() {
  // Serve static files / Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
