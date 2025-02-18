// import ChatBubble from "@/components/chat/chat-bubble";
import Conversation from "@/components/chat/conversation";
import { standardQuery } from "@/data/chatData";


const ChatPage = () => {

    return (
        <div 
            className=" mx-auto mt-20"
        >

            <Conversation 
                messages={standardQuery}
            />

        </div>
    )

}

export default ChatPage;