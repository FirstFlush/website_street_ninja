import { API_ROUTES } from "@/config/apiRoutes";
import { baseFetch } from "./baseFetch";


export async function fetchResources() {
    const res = await baseFetch(API_ROUTES.resources, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return res.data
}

export async function fetchMapPinSingle(resourceType:string, id: number): Promise<string> {
    const fullRoute = `${API_ROUTES.mapPin}/${resourceType}/${id}/`
    const res = await baseFetch(fullRoute, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    return res.data
}