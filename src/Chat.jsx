import React, { useState } from "react";
import Groq from "groq-sdk";

import ChatHistory from "./ChatHistory";
import Loading from "./Loading";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Groq Client
  const groq = new Groq({
    apiKey: "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", // Apka Groq API Key
    dangerouslyAllowBrowser: true, // Browser me allow karne ke liye
  });

  // Send message function
  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);

    try {
      const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant.",
          },
          {
            role: "user",
            content: userInput,
          },
        ],
      });

      const aiText = response.choices[0].message.content;

      // Update chat history
      setChatHistory((prev) => [
        ...prev,
        { type: "user", message: userInput },
        { type: "bot", message: aiText },
      ]);
    } catch (err) {
      console.error("Error from Groq:", err);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  // Clear chat
  const clearChat = () => setChatHistory([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-4">
        Chatbot 
      </h1>

      <div className="chat-container rounded-lg shadow-md p-4">
        <ChatHistory chatHistory={chatHistory} />
        <Loading isLoading={isLoading} />
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="text-white flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <button
          className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          onClick={sendMessage}
          disabled={isLoading}
        >
          Send
        </button>
      </div>

      <button
        className="mt-4 block px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 focus:outline-none"
        onClick={clearChat}
      >
        Clear Chat
      </button>
    </div>
  );
};

export default App;