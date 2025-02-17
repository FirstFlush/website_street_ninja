
/**
 * A reusable fetch wrapper with timeout and error handling.
 * 
 * @param {string} url - The API endpoint to fetch.
 * @param {RequestInit} [config={}] - Fetch options (method, headers, body, etc.).
 * @param {number} [timeout=8000] - Timeout in milliseconds before the request is aborted.
 * @returns {Promise<{ success: boolean, data?: any }>} 
 *   A promise resolving to an object:
 *   - `{ success: true, data: any }` on success
 *   - Throws an error on failure
 * 
 * @throws {Error} - If the fetch request fails or times out.
 */
export const baseFetch = async (
    url: string,
    config: RequestInit = {},
    timeout: number = 8000
) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...config,
            signal: controller.signal,
        });

        clearTimeout(id);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json()
        return {
            "data": data,
            "success": true,
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
};
