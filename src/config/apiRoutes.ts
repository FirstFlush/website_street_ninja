

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://streetninja.ca/api"

export const API_ROUTES = {
    contact: `${API_BASE_URL}/contact/`,
    resources: `${API_BASE_URL}/resources/map/`,
    query: `${API_BASE_URL}/sms/web-query/`
}