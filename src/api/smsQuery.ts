import { API_ROUTES } from "@/config/apiRoutes";
import { baseFetch } from "./baseFetch";
import { ApiResponse } from "@/types/apiResponse";

export async function submitQuery(query: string) {
    const res = await baseFetch<ApiResponse<string>>(API_ROUTES.query, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ "query": query })
    })
    return res
}   