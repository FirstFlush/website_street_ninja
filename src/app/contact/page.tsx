import ContactForm from "./contact-form"
import { SlimLayout } from "@/components/layout/slim-layout";
import Footer from "@/components/nav/footer";
import SectionHeader from "@/components/layout/section-header";
import { CONTACT_EMAIL } from "@/data/contact";
import CopyToClipboard from "@/components/special/copy-to-clipboard";


const ContactPage = () => {

    return (
        <>
            <SlimLayout>
                <div className="mt-20">
                    <div className="mb-12 sm:mb-8">
                        <SectionHeader 
                            title="Contact"
                            subtitle="Questions, feedback, or interested in collaborating? Fill out the form below and we’ll get back to you as soon as possible!"
                            align="left"
                        />
                        <div className="mt-4 text-[85%]">Hate forms? Email us instead at <a href={`mailto:${CONTACT_EMAIL}`} className="link">{CONTACT_EMAIL}</a></div>
                        
                        {/* <div className="relative py-8">
                            <div className="absolute top-0">
                                <CopyToClipboard 
                                    text={`Hate forms? Email us instead at ${CONTACT_EMAIL}`}
                                />
                            </div>
                        </div> */}

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