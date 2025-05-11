import { API_ROUTES } from "@/config/apiRoutes";
import { baseFetch } from "./baseFetch";
import { ApiResponse } from "@/types/apiResponse";

export const submitContactForm = async (data: any) => {

    try {
        return await baseFetch<ApiResponse<void>>(
            API_ROUTES.contact,
            {
                method: "POST",
                headers: { "Content-Type":"application/json" },
                body: JSON.stringify(data),
            }
        );
    } catch (error) {
        console.error("Error submitting contact form:", error)
        return { success: false, message: "Failed to send message. Please try again later." };
    }

};