import PageWrapper from "@/components/layout/page-wrap";
import ChatBox from "./chat";
import ChatInfo from "./chat-info";
import Footer from "@/components/nav/footer";
import { Container } from "@/components/layout/container";

const TryItOut = () => {

    
    return (
        <PageWrapper bgImage="/images/bg-abstract-white2.webp">
            <Container className="flex my-8 sm:my-16 !px-0 items-center md:items-start flex-col md:flex-row">
                <ChatBox />
                <ChatInfo />
            </Container>
            <Footer />
        </PageWrapper>
    )
}

export default TryItOut;