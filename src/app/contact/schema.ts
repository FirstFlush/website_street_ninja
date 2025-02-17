import z from 'zod';


const stringRule = z.string().min(2, "Minimum 2 characters").max(256, "Maximum 256 characters");
const emailRule = z.string().email("Invalid email").min(2, "Minimum 2 characters").max(256, "Maximum 256 characters");
const phoneRule = z.string().min(10, "Minimum 10 characters").max(20, "Maximum 20 characters");

export const contactSchema = z.object({
    name: stringRule,
    organization: z.string().optional(),
    email: emailRule,
    phone: phoneRule,
    contactMethod: z.enum(["email", "text", "whatsapp", "phone"]).default("email"),
    msg: z.string().min(2, "Minimum 2 characters").max(2000, "Maximum 2,000 characters"),
})


export type ContactSchema = z.infer<typeof contactSchema>;
