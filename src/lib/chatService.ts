import { ChatTogetherAI } from "@langchain/community/chat_models/togetherai";
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";

const chat = new ChatTogetherAI({
  apiKey: "tgp_v1_9R97-XivXXexlQOmpEhL6uZ9XanGhAbfMZadYezc3_0", 
  modelName: "mistralai/Mistral-7B-Instruct-v0.2",
  temperature: 0.7,
});

const systemPrompt = `You are a helpful assistant for Soft-Sell, a software license resale marketplace.
Your goal is to assist users with questions about buying and selling software licenses.
Be concise, friendly, and helpful. If you don't know something, admit it and offer to connect them with support.

Key information about Soft-Sell:
- Users can buy and sell unused software licenses securely
- We verify all sellers and licenses before listing
- Payments are held in escrow until license transfer is confirmed
- We support licenses for most major software products
- Commission is 10% of the sale price
- Support is available via email at support@soft-sell.com

Do not make up information that isn't provided here.`;

let conversationHistory: (SystemMessage | HumanMessage | AIMessage)[] = [
  new SystemMessage(systemPrompt)
];

export async function processMessage(userMessage: string): Promise<string> {
  try {
    const humanMessage = new HumanMessage(userMessage);
    conversationHistory = [];
    conversationHistory.push(humanMessage);

    const response = await chat.call(conversationHistory);
    
    conversationHistory.push(response);
    
    if (conversationHistory.length > 10) {
      conversationHistory = [
        conversationHistory[0],
        ...conversationHistory.slice(conversationHistory.length - 9)
      ];
    }
    
    return response.content.toString();
  } catch (error) {
    console.error("Error processing message:", error);
    return "Sorry, I encountered an error. Please try again later.";
  }
}
