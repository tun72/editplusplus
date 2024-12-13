//////////////////////////////////////////////////////////////////////////

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export  clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",

//     "/",
//     "/(de|en)/:path*",
//   ],
// };

import createIntlMiddleware from "next-intl/middleware";
import { locales } from "./navigation";

export default createIntlMiddleware({
  locales,
  defaultLocale: "en",
});

export const config = {
  // Skip all non-content paths
  matcher: ["/", "/(en|mm)/:path*"],
};

/////////////////////////////////////////////////////////////////////////////////////

// import { clerkMiddleware } from "@clerk/nextjs/server";
// import createIntlMiddleware from "next-intl/middleware";
// import { locales } from "./navigation";
// import { NextRequest, NextFetchEvent } from "next/server";

// // Combine middlewares into a single handler

// // Create a combined middleware function
// const combinedMiddleware = async (req: NextRequest, res: NextFetchEvent) => {
//   // Run Clerk middleware first
//   const clerk = await clerkMiddleware()(req, res);

//   // Then run Intl middleware
//   if (clerk) return clerk;
//   return intlMiddleware(req, res);
// };

// // export default combinedMiddleware;

// export default createIntlMiddleware({
//   locales,
//   defaultLocale: "en",
// });

// // Unified matcher configuration
// export const config = {
//   matcher: [
//     // Apply middleware for content routes
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//     // Root and localized routes
//     "/",
//     "/(en|mm)/:path*",
//   ],
// };

//////////////////////////////////////////////////////////////////////////////////////////////
// middleware.js (or middleware.ts in TypeScript)
// import { clerkMiddleware } from "@clerk/nextjs/server";
// import createIntlMiddleware from "next-intl/middleware";
// import { locales } from "./navigation";
// import { NextRequest, NextFetchEvent } from "next/server";

// // Configure Intl middleware
// const intlMiddleware = createIntlMiddleware({
//   locales,
//   defaultLocale: "en",
// });

// // Combine Clerk and Intl middleware
// const combinedMiddleware = async (req: NextRequest, res: NextFetchEvent) => {
//   // Run Clerk middleware
//   const clerkResult = await clerkMiddleware()(req, res);

//   // If Clerk middleware passes, run Intl middleware

//   intlMiddleware(req, res);

//   return clerkResult;
// };

// export default combinedMiddleware;

// // Middleware matcher configuration
// export const config = {
//   matcher: [
//     // Match all routes that require Clerk and localization
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",
//     "/",
//     "/(en|mm)/:path*",
//   ],
// };


///////////////////////////////////////////////////////////////
// import { NextRequest, NextResponse } from "next/server";
// import { clerkMiddleware } from "@clerk/nextjs/server";
// import createIntlMiddleware from "next-intl/middleware";
// import { locales } from "@/navigation";

// // Initialize Intl Middleware
// const intlMiddleware = createIntlMiddleware({
//   locales,
//   defaultLocale: "en",
// });

// // Define a type for middleware functions
// type MiddlewareFunction = (req: NextRequest, res: NextResponse) => Promise<void | NextResponse>;

// // Middleware chaining function
// const middlewareChain = (...middlewares: MiddlewareFunction[]) => {
//   return async (req: NextRequest, res: NextResponse) => {
//     for (const middleware of middlewares) {
//       const result = await middleware(req, res);
//       if (result) {
//         // Stop the chain if a middleware ends the response
//         return result;
//       }
//     }
//     return undefined;
//   };
// };

// // Combine Clerk and Intl middleware
// const combinedMiddleware = middlewareChain(
//   clerkMiddleware(), // Clerk middleware for authentication
//   intlMiddleware // Intl middleware for localization
// );

// export default combinedMiddleware;

// // Middleware matcher configuration
// export const config = {
//   matcher: [
//     // Match all dynamic routes and APIs
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",

//     // Root and localized routes
//     "/",
//     "/(en|mm)/:path*",
//   ],
// };
