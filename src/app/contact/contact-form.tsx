'use client';
import { TextField, SelectField, TextareaField } from "@/components/ui/fields";
import { useForm } from "react-hook-form";
import { contactSchema, ContactSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const ContactForm = () => {

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

    const onSubmit = (data: any) => {
        console.log('submitted data: ', data)
        console.log(typeof data)
    }

    return (
    
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            method="POST"
            className="space-y-8 max-w-md mx-auto"
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
                Submit
            </Button>
        </form>

    )
}

export default ContactForm;