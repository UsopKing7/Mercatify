export const errorFormat = (error: unknown) => 
  error instanceof Error
    ? error.message || error.name || error.stack || error.cause
    : error

