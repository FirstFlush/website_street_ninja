

"use client";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar
} from "@chatscope/chat-ui-kit-react";
import { useEffect, useRef, useState } from "react";
import { MessageDirection } from "@chatscope/chat-ui-kit-react/src/types/unions";
import { submitQuery } from "@/api/smsQuery";
import { motion } from "framer-motion";



interface ChatMessage {
  message: string;
  sentTime: string;
  sender: string;
  direction: MessageDirection;
  position: "single" | "first" | "normal" | "last";
}

const ChatBox = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Ask for food, shelter, water, or toilets and I'll find the closest spots.",
      sentTime: "now",
      sender: "Street Ninja",
      direction: "incoming",
      position: "single"
    }
  ]);

  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    handleMessageLogic(text); // user message
    setIsLoading(true);

    // show typing delay
    setTimeout(async () => {
      try {
        const response = await submitQuery(text);
        if (response.data) {
          addBotMessage(response.data);
        } else {
          addBotMessage("Sorry, an error occurred.\n\nTry something like\n'shelter 222 main st'");
        }
      } catch (err) {
        addBotMessage("Sorry, I didn't understand that.\n\nTry something like\n'shelter 222 main st'");
      } finally {
        setIsLoading(false);
      }
    }, 500); // slight delay before the bot reply kicks in
  };

  const handleMessageLogic = (text: string, direction: MessageDirection = "outgoing") => {
    setMessages(prev => {
      const last = prev[prev.length - 1];
      let position: "single" | "first" | "normal" | "last" = "single";

      if (last?.sender === "You") {
        if (last.position === "single") {
          last.position = "first";
          position = "last";
        } else {
          last.position = "normal";
          position = "last";
        }
      }

      return [
        ...prev,
        {
          message: text,
          sentTime: "now",
          sender: "You",
          direction,
          position
        }
      ];
    });
  };

  const addBotMessage = (text: string) => {
    setMessages(prev => [
      ...prev,
      {
        message: text,
        sentTime: "now",
        sender: "Street Ninja",
        direction: "incoming",
        position: "single"
      }
    ]);
  };

  return (
    <div className="lg:px-0 px-4 relative h-[420px] md:h-[500px] w-full max-w-[600px] min-w-[300px] md:min-w-[380px] mx-auto">
      <MainContainer className="shadow-xl rounded-md">
        <ChatContainer>
          <ConversationHeader>
            <Avatar src="/images/avatar.webp" name="Street Ninja" />
            <ConversationHeader.Content
              userName="Street Ninja SMS Chat"
              info={isLoading ? "typing..." : "Try it out"}
            />
          </ConversationHeader>

          <MessageList scrollBehavior="smooth" className="py-2">
            {messages.map((msg, idx) => {
              const isBot = msg.sender !== "You";
              if (isBot) {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 2, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Message model={msg} />
                  </motion.div>
                );
              }
              return <Message key={idx} model={msg} />;
            })}
          </MessageList>


          <MessageInput
            attachButton={false}
            placeholder="Type your message here"
            onSend={handleSend}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBox;









// "use client";
// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   ConversationHeader
// } from "@chatscope/chat-ui-kit-react";
// import { useState } from "react";
// import { MessageDirection } from "@chatscope/chat-ui-kit-react/src/types/unions";
// import { submitQuery } from "@/api/smsQuery";

// interface ChatMessage {
//     message: string;
//     sentTime: string;
//     sender: string;
//     direction: MessageDirection;
//     position: "single" | "first" | "normal" | "last";
//   }


// const ChatBox = () => {

//   const [isLoading, setIsLoading] = useState(false)
//   const [messages, setMessages] = useState<ChatMessage[]>([
//     // { message: "This chat works just like Street Ninja’s SMS.", sentTime: "now", sender: "Street Ninja", direction: "incoming" as MessageDirection, position: "first" as "first" },
//     { message: "Ask for food, shelter, water, toilets, or WiFi, and I'll find the closest spots.", sentTime: "now", sender: "Street Ninja", direction: "incoming" as MessageDirection, position: "single" as "single"},
//   ]);



//   const handleSend = async (text: string) => {
//     if (!text.trim()) return;
//     handleMessageLogic(text);
//     setIsLoading(true);
//     try {
//         const response = await submitQuery(text);
//         handleMessageLogic(response.data.data, "incoming")
//     } catch (err) {
//         handleMessageLogic("Sorry, I didn't understand that.\n\nTry something like\n'shelter 222 main st'", "incoming")
//     }
//     setIsLoading(false);
// }

//   const handleMessageLogic = (text: string, direction: string="outgoing") => {
//     setMessages(prevMessages => {
//       const lastMessage = prevMessages[prevMessages.length - 1]; 
//       let position: "single" | "first" | "normal" | "last" = "single";
  
//       if (lastMessage && lastMessage.sender === "You") {
//         if (lastMessage.position === "single") {
//           lastMessage.position = "first";
//           position = "last";
//         } else {
//           lastMessage.position = "normal";
//           position = "last";
//         }
//       }
  
//       return [
//         ...prevMessages,
//         { 
//           message: text, 
//           sentTime: "now", 
//           sender: "You", 
//           direction: direction as MessageDirection, 
//           position
//         }
//       ];
//     });
//   };
  
  
//   return (
//     <div className="lg:px-0 px-4 relative h-[420px] md:h-[500px] w-[100%] max-w-[600px] min-w-[300px] md:min-w-[380px] my-0 mx-auto">
//       <MainContainer className="shadow-xl rounded-md">
//         <ChatContainer>
//           <ConversationHeader>
//             <ConversationHeader.Content userName="Street Ninja SMS chat" info={ isLoading ? "typing..." : "Try it out"} />
//           </ConversationHeader>
//           <MessageList className="py-3">
//             {messages.map((msg, idx) => (
//               <Message key={idx} model={msg} />
//             ))}
//           </MessageList>
//           <MessageInput attachButton={false} placeholder="Type message here" onSend={handleSend} />
//         </ChatContainer>
//       </MainContainer>
//     </div>
//   );
// };

// export default ChatBox;
