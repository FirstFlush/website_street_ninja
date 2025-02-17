


const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:8000/api"

export const API_ROUTES = {
    contact: `${API_BASE_URL}/contact/`,
    resources: `${API_BASE_URL}/resources/all/`,
}