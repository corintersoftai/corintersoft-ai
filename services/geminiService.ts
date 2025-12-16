import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// Ideally, in a production app, we would handle this via a backend proxy to hide the key,
// but for this client-side demo per instructions, we use the env var directly.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are 'Cori', the expert AI academic advisor for CorinterSoft AI. 
Your goal is to help users understand our Generative AI courses and encourage them to enroll.

Key Information about CorinterSoft AI:
- We teach state-of-the-art models: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3, Mistral Large.
- Benefits: Official Certification, Practical RAG Projects, Expert Mentorship from Senior Engineers, Updated Content, Job Board, Hackathons.
- Target Audience: Developers, Data Scientists, and Tech Leaders wanting to master LLMs.

Tone: Professional, futuristic, encouraging, concise, and helpful. 
Language: Spanish (as the website is in Spanish).

If asked about pricing, say "Nuestros precios varían según el plan. Por favor, agenda una demo para una cotización personalizada."
If asked about prerequisites, say "Se recomienda experiencia básica en programación (Python preferred)."
`;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key no configurada. Por favor configura process.env.API_KEY.";
  }

  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Lo siento, no pude procesar tu respuesta en este momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hubo un error conectando con el servidor de IA. Por favor intenta más tarde.";
  }
};