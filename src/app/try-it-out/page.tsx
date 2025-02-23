import PageWrapper from "@/components/layout/page-wrap";
import ChatBox from "./chat";
import ChatInfo from "./chat-info";
import Footer from "@/components/nav/footer";

const TryItOut = () => {

    
    return (
        <PageWrapper bgImage="/images/bg-abstract-white2.jpg">
            <div className="flex my-8 sm:my-16 items-center md:items-start flex-col md:flex-row">
                <ChatBox />
                <ChatInfo />
            </div>
            <Footer />
        </PageWrapper>
    )
}

export default TryItOut;