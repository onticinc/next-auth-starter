import  NextAuth  from "next-auth"; 
import authConfig  from "@/auth.config";


import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {

    
    const { nextUrl } = req;

    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    console.log("IS LOGGED IN: ", isLoggedIn);
    console.log("ROUTE: ", req.nextUrl.pathname);
    console.log("PUBLIC: ", publicRoutes);
    console.log("AUTH ROUTES: ", authRoutes);
    console.log("API: ", apiAuthPrefix);
    console.log("AUTH: ", req.auth);

    if (isApiAuthRoute) {
        return;
    }
    
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl));
    }
    
    return;
    
});

// Optionally, don't invoke Middleware for specific routes
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trcp)(.*)'],
 }