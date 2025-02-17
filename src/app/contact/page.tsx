import ContactForm from "./contact-form"
import { SlimLayout } from "@/components/layout/slim-layout";
import Footer from "@/components/nav/footer";
import SectionHeader from "@/components/layout/section-header";


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