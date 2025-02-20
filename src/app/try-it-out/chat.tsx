"use client";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { MessageDirection } from "@chatscope/chat-ui-kit-react/src/types/unions";



interface ChatMessage {
    message: string;
    sentTime: string;
    sender: string;
    direction: MessageDirection;
    position: "single" | "first" | "normal" | "last";
  }


const ChatBox = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { message: "Welcome to Street Ninja!", sentTime: "now", sender: "Street Ninja", direction: "incoming" as MessageDirection, position: "first" as "first" },
    { message: "Try it out! Type like an SMS: 'shelter 222 main st' or 'food main & hastings'.", sentTime: "now", sender: "Street Ninja", direction: "incoming" as MessageDirection, position: "last" as "last"},
  ]);


  const handleSend = (text: string) => {
    if (!text.trim()) return;
  
    setMessages(prevMessages => {
      const lastMessage = prevMessages[prevMessages.length - 1]; 
      let position: "single" | "first" | "normal" | "last" = "single";
  
      if (lastMessage && lastMessage.sender === "You") {
        if (lastMessage.position === "single") {
          lastMessage.position = "first";
          position = "last";
        } else {
          lastMessage.position = "normal";
          position = "last";
        }
      }
  
      return [
        ...prevMessages,
        { 
          message: text, 
          sentTime: "now", 
          sender: "You", 
          direction: "outgoing" as MessageDirection, 
          position
        }
      ];
    });
  };
  
  
  return (
    <div className="lg:px-0 px-4 relative h-[420px] md:h-[500px] w-[100%] max-w-[600px] min-w-[300px] md:min-w-[380px] my-0 mx-auto">
      <MainContainer>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Content userName="Street Ninja Chat" info="Try it out" />
          </ConversationHeader>
          <MessageList>
            {messages.map((msg, idx) => (
              <Message key={idx} model={msg} />
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBox;
