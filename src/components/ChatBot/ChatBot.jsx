import React from "react";
import { GoogleGenAI } from "@google/genai";
import { useEffect, useState } from "react";
import "./ChatBot.css";
import { motion } from "framer-motion";

const ChatBot = () => {
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const sendQ = function () {
    setAiResponse("Loading..."); // Show loading immediately on button click
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_APP_GEMINI_API_KEY,
    });

    const formatText = function (text) {
      return text
        .split("*")
        .map((item) => item.trim())
        .filter((item) => item.length > 0)
        .map((item) => {
          return item.replace(/\*\*(.*?)\*\*/g, ">> $1 <<");
        })
        .map((item) => "" + item)
        .join("\n");
    };

    async function main() {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-1.5-flash",
          contents: aiQuestion,
        });
        setAiResponse(formatText(response.text));
      } catch (error) {
        console.error("Error generating content:", error);
        setAiResponse("Error generating content. if you are from iran, change your IP!");
      }
    }

    main();
  };

  return (
    <div className="con-chatBox">
      <div className="con-question">
        <textarea
          className="question-box "
          onChange={(e) => setAiQuestion(e.target.value)}
          placeholder="ask your question!"
        ></textarea>
        <motion.button
          className="btn-send"
          onClick={sendQ}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
        >
          send
        </motion.button>
      </div>
      <div className="con-chatBot-answer">
        {aiResponse && <p>{aiResponse}</p>}
      </div>
    </div>
  );
};

export default ChatBot;
