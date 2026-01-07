
const API_URL = process.env.API_URL || 'http://localhost:3333';

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  _limit?: number;
  reating_like?: string;
}

export const defaultRequestOptions: RequestOptions = {
  page: 1,
  _limit: 10,
};

export function buildQueryString(params: ApiQueryParams): string {
    const queryString = Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, encodeURIComponent(String(value))])

    return `?${new URLSearchParams(Object.fromEntries(queryString)).toString()}`;
}

export async function apiRequest(
    endpoint: string, 
    query: ApiQueryParams = {},
    options: RequestOptions = {}
) {
    const mergedOptions: RequestOptions = { ...defaultRequestOptions, ...options };
    const queryString: string = buildQueryString({ ...query, ...mergedOptions });
    try {
        const response = await fetch(`${API_URL}/${endpoint}${queryString}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        throw error;
    
    }
}