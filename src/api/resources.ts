


export async function fetchResources() {

    const API_RESOURCES = process.env.NEXT_PUBLIC_API_RESOURCES
    if (!API_RESOURCES) {
        throw new Error("Missing environment variable for fetchResources");
    }
    const res = await fetch(API_RESOURCES)
    if (!res.ok) throw new Error("Failed to fetch resources")
    return await res.json()
  }