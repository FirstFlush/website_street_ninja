"use client";
import React, { useEffect, useState } from "react";
import ChatBubble from "./chat-bubble";

interface ConversationProps {
  messages: { text: string; isUser: boolean }[];
}

const getRandomDelay = (isUser: boolean) => {
  return isUser
    ? Math.floor(Math.random() * 60) * 1000
    : (Math.floor(Math.random() * (10 - 2 + 1)) + 2) * 60 * 1000
};

const Conversation = ({ messages }: ConversationProps) => {
  const [timestamps, setTimestamps] = useState<string[]>([]);

  useEffect(() => {
    let currentTimestamp = Date.now();
    const generatedTimestamps = messages.map((msg) => {
      const formattedTime = new Date(currentTimestamp).toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      currentTimestamp += getRandomDelay(msg.isUser);
      return formattedTime;
    });

    setTimestamps(generatedTimestamps);
  }, [messages]);
  
  return (
    <div
      className="select-none mx-auto lg:mx-0 w-[100%] lg:w-max h-[680px] overflow-hidden max-w-screen lg:max-w-full px-4 py-12 rounded-2xl"
      // className="w-[800px] rounded-2xl"
      style={{
        backgroundImage: "url('/images/bg-abstract-white.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {messages.map((msg, index) => (
        <ChatBubble key={index} text={msg.text} isUser={msg.isUser} timestamp={timestamps[index] || ""} />
      ))}
    </div>
  );
};

export default Conversation;
