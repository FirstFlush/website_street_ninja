import { API_ROUTES } from "@/config/apiRoutes";
import { baseFetch } from "./baseFetch";


export async function submitQuery(query: string) {
    const res = await baseFetch(API_ROUTES.query, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ "query": query })
    })
    return res
}   