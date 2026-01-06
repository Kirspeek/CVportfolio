// API Constants and Configuration

// Base URLs
export const API_BASE_URLS = {
  LOGO_CLEARBIT: "https://logo.clearbit.com",
  ICONS_CDN: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons",
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  // Logo and Icon APIs
  ASSETS: {
    BANK_LOGO: (domain: string, size: number = 48) =>
      `${API_BASE_URLS.LOGO_CLEARBIT}/${domain}.com?size=${size}&format=png`,
    ICON: (iconName: string) => `${API_BASE_URLS.ICONS_CDN}/${iconName}.svg`,
  },
} as const;

// API Configuration
export const API_CONFIG = {
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
  CACHE_DURATION: 10 * 60 * 1000, // 10 minutes
} as const;

// Error messages
export const API_ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error occurred",
  TIMEOUT_ERROR: "Request timed out",
  INVALID_RESPONSE: "Invalid response from server",
  RATE_LIMIT: "Rate limit exceeded",
  UNAUTHORIZED: "Unauthorized access",
  NOT_FOUND: "Resource not found",
} as const;

// HTTP Status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  RATE_LIMIT: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const;
