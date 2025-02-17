'use client';
import { useState } from "react";
import { TextField, SelectField, TextareaField } from "@/components/ui/fields";
import { useForm } from "react-hook-form";
import { contactSchema, ContactSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Loader } from "lucide-react";
import { submitContactForm } from "@/api/submitContactForm";
import Notification from "@/components/ui/notification";


const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ContactSchema>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: "",
        organization: "",
        email: "",
        phone: "",
        contactMethod: "email",
        msg: "",
      },
    });

    const onSubmit = async (data: any) => {
        setError(null);
        setLoading(true);
        try {
            const responseData = await submitContactForm(data);
            if (responseData.success) {
                setSubmitted(true)
            } else {
                setError("Failed the submit the form. Please try again later");
            }
        } catch (err) {
            setError("Failed to submit the form. Please try again later");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className=" max-w-md mx-auto my-8">
            {submitted ? 
            <Notification 
                title="Received!"
                variant="success"
                message="Thanks for reaching out. We will get back to you as soon as possible."
            /> :
            <form 
            onSubmit={handleSubmit(onSubmit)} 
            method="POST"
            className="space-y-8"
            // className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"
            >
            <TextField
                label="Name"
                name="name"
                control={control}
            />
            <TextField
                label="Organization"
                name="organization"
                control={control}
                placeholder="Optional"
            />
            <TextField
                label="Email"
                name="email"
                control={control}
            />
            <TextField
                label="Phone"
                name="phone"
                control={control}
            />
            <TextareaField 
                label="Message"
                name="msg"
                control={control}
                placeholder="Tell us how you’d like to get involved—or just say hi!"
            />
            <SelectField
                label="Preferred contact method"
                name="contactMethod"
                control={control}
            >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text</option>
                <option value="whatsapp">Whatsapp</option>
            </SelectField>

            <Button
                color="primary"
                variant="solid"
                type="submit"
            >
                <span className="mr-1">Get in touch</span>
                { loading ? 
                <Loader className="animate-spin" size={24} /> :
                <ArrowRight />
                }
            </Button>
            { error && 
                <p className="absolute text-sm text-red-500">{error}</p>
            }
        </form>
        }
        </div>


    )
}

export default ContactForm;