

export interface ApiResponse<T = Record<string, any>> {
    success: boolean;
    data?: T;
    msg?: string | null;
}