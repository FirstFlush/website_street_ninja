import ContactForm from "./contact-form"
import { SlimLayout } from "@/components/layout/slim-layout";
import Footer from "@/components/nav/footer";
import SectionHeader from "@/components/layout/section-header";
import { CONTACT_EMAIL } from "@/data/contact";

const ContactPage = () => {

    return (<>
        <SlimLayout>
            <div className="mt-20">
                <div className="mb-12 sm:mb-8">
                    <SectionHeader 
                        title="Contact"
                        subtitle="Questions, feedback, or interested in collaborating? Fill out the form below and I’ll get back to you as soon as possible!"
                        align="left"
                    />
                    <div className="mt-4 text-[90%] text-gray-500">Hate forms? Email us instead at <span className="link">{CONTACT_EMAIL}</span></div>
                </div>
                <ContactForm />
            </div>
            
        </SlimLayout>
        <Footer />
        </>
    )
}

export default ContactPage;
// const ContactPage = () => {

//     return (
//         <SlimLayout
//             className=""
//             style={{
//                 backgroundImage: "url('/images/bg-abstract-white.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//         >
//             <div className="mt-24">
//                 <ContactForm />
//             </div>
            
//         </SlimLayout>
        
//     )
// }

// export default ContactPage;