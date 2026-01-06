declare global {
  interface Window {
    // Global window types can be added here
    [key: string]: unknown;
  }
}

export {};
