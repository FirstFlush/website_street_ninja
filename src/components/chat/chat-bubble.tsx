
import Image from 'next/image';

interface ChatBubbleProps {
  text: string;
  isUser: boolean;
  timestamp: string;
}

const ChatBubble = ({ text, isUser, timestamp }: ChatBubbleProps) => {

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} items-start mb-2 relative`}>

      { 
      // isUser ? "" : <UserCircle2 size={48} className="mr-4" />
      isUser ? ""  : <Image alt="Street Ninja logo" width={64} height={64} src="/images/favicon.ico" className="mr-4"/>
      }
      <div
        className={`shadow-md text-sm  relative px-4 py-2  sm:max-w-[100%] md:max-w-[70%] my-2 rounded-2xl text-white ${
          // isUser ? "bg-blue-500" : "bg-[#f2f6bc]"
          // isUser ? "bg-primary text-white" : "bg-[#eef3b0]"
          isUser ? "bg-primary-dark-20/80 text-white" : "bg-[#555555]"
        }`}
      >
        {text}
        <div className="text-xs text-gray-300 mt-1">{timestamp}</div>

        {/* <div
          className={`absolute w-0 h-0 border-t-16  border-transparent ${
            isUser
              ? "right-[-15px] bottom-[10px] border-l-blue-500 border-l-16"
              : "left-[-15px] bottom-[10px] border-r-gray-300 border-r-16"
          }`}
        /> */}
      </div>
    </div>
  );
};

export default ChatBubble;
