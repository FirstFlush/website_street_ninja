import { API_ROUTES } from "@/config/apiRoutes";
import { baseFetch } from "./baseFetch";
import { ApiResponse } from "@/types/apiResponse";
import { MapData } from "@/types/MapData";

export async function fetchMapData() {
    const res = await baseFetch<ApiResponse<MapData>>(API_ROUTES.resources, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return res
}

export async function fetchMapPinSingle(resourceType:string, id: number): Promise<ApiResponse<string>> {
    const fullRoute = `${API_ROUTES.mapPin}/${resourceType}/${id}/`
    const res = await baseFetch<ApiResponse<string>>(fullRoute, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    return res
}