/**
 * Array of public routes that do not require Authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    
];




/**
 * An Array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login", 
    "/auth/register",
    "/auth/error",
];




/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";



/**
 * The default redirect path after loggin in. 
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";