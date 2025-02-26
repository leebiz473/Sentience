import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

/**
 * Base HTTP Client for API requests.
 * This allows different services to extend and define their own base URLs.
 */
export class HttpClient {
    protected readonly instance: AxiosInstance;

    constructor(baseURL: string, config: AxiosRequestConfig = {}) {
        this.instance = axios.create({
            baseURL,
            timeout: 5000,  // Set a default timeout for all requests
            headers: {
                'Content-Type': 'application/json',
            },
            ...config,
        });

        this._initializeResponseInterceptor();
    }

    /**
     * Initializes the response interceptor for handling success and errors.
     */
    private _initializeResponseInterceptor() {
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => response, // Handle successful responses
            (error: AxiosError) => this._handleError(error)    // Handle errors globally
        );
    }

    /**
     * Global error handler for HTTP requests.
     */
    private _handleError(error: AxiosError): Promise<never> {
        // Log error (can be improved to use a logger library like `winston`)
        console.error('HTTP Error:', error);

        // Distinguish network errors from other types of errors
        if (error.isAxiosError) {
            // Network issues or timeout errors
            if (!error.response) {
                // No response, likely network issue
                return Promise.reject(new Error('Network Error. Please check your connection.'));
            }

            // Handling different HTTP status codes
            switch (error.response.status) {
                case 400:
                    return Promise.reject(new Error('Bad Request: Invalid input.'));
                case 401:
                    return Promise.reject(new Error('Unauthorized: Please login.'));
                case 403:
                    return Promise.reject(new Error('Forbidden: You don\'t have permission.'));
                case 404:
                    return Promise.reject(new Error('Not Found: The requested resource could not be found.'));
                case 500:
                    return Promise.reject(new Error('Internal Server Error. Please try again later.'));
                default:
                    return Promise.reject(new Error(`Unexpected Error: ${String(error.response.status)}`));
            }
        }

        // If it's not an AxiosError, return the generic error message
        return Promise.reject(new Error('An unknown error occurred.'));
    }

    /**
     * Performs a GET request to the given URL.
     */
    protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.instance.get<T>(url, config);
            return response.data;
        } catch (error) {
            // Type the error as AxiosError to ensure proper handling
            throw await this._handleError(error as AxiosError);
        }
    }

    /**
     * Performs a POST request to the given URL.
     */
    protected async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.instance.post<T>(url, data, config);
            return response.data;
        } catch (error) {
            // Type the error as AxiosError to ensure proper handling
            throw await this._handleError(error as AxiosError);
        }
    }

    /**
     * Performs a PUT request to the given URL.
     */
    protected async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.instance.put<T>(url, data, config);
            return response.data;
        } catch (error) {
            // Type the error as AxiosError to ensure proper handling
            throw await this._handleError(error as AxiosError);
        }
    }

    /**
     * Performs a DELETE request to the given URL.
     */
    protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.instance.delete<T>(url, config);
            return response.data;
        } catch (error) {
            // Type the error as AxiosError to ensure proper handling
            throw await this._handleError(error as AxiosError);
        }
    }
}
