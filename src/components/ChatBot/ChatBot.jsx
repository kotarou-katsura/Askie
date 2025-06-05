import React from "react";
import { GoogleGenAI } from "@google/genai";
import  { useEffect, useState } from "react";
import "./ChatBot.css"

const ChatBot = () => {
  const [aiQuestion, setAiQuestion] = useState(""); 
  const [aiResponse, setAiResponse] = useState(""); 

   const sendQ=function (){
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_APP_GEMINI_API_KEY,
    });

    const formatText= function (text) {
  return text
    .split('*')
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map(item => {
      return item.replace(/\*\*(.*?)\*\*/g, '>> $1 <<');
    })
    .map(item => '' + item)
    .join('\n');
}




    async function main() {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-1.5-flash",
          contents: aiQuestion,
        });
        console.log(formatText(response.text));
        setAiResponse(formatText(response.text));
      } catch (error) {
        console.error("Error generating content:", error);
      }
    }

    main();
  };


  return (
    <div className="con-chatBox">
      <div className="con-question">
        <textarea className="question-box " onChange={e=>setAiQuestion(e.target.value)}
          placeholder="ask your question!"
        //   cols={100%}
        //   rows={100%}
        ></textarea>
        <button className="sendMassege" onClick={sendQ}>send</button>
      </div>
      <div className="con-chatBot-answer">
        <p>{aiResponse || "Loading..."}</p>
      </div>
    </div>
  );
};

export default ChatBot;
