import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_CONTEXT } from "../constants";

let chatSession: Chat | null = null;

export const initializeChat = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: PORTFOLIO_CONTEXT,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "I'm sorry, I cannot connect to the AI service at the moment. Please check the API key configuration.";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I didn't get a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Something went wrong while thinking about that. Please try again.";
  }
};
