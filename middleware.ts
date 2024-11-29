// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
////////////////////////////////////////////////

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//     "/",
//     "/(fr|en)/:path*",
//   ],
// };

/////////////////////////////////////////////////////////////////////////
// export default createMiddleware({
//   locales: ["en", "fr"],
//   defaultLocale: "en",
// });

// export const config = {
//   matcher: ["/", "/(fr|en)/:path*"],
// };

// import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
// import { clerkMiddleware } from "@clerk/nextjs/server";
// import createMiddleware from "next-intl/middleware";

// const combinedMiddleware = async (
//   req: NextRequest,
//   ev: NextFetchEvent
// ): Promise<NextResponse | undefined> => {
//   // Run Clerk middleware
//   const clerkResult = clerkMiddleware()(req, ev);
//   if (clerkResult instanceof NextResponse) {
//     return clerkResult;
//   }

//   // Run Internationalization middleware
//   const intlResult = createMiddleware({
//     locales: ["en", "fr"],
//     defaultLocale: "en",
//   })(req, ev);
//   if (intlResult instanceof NextResponse) {
//     return intlResult;
//   }

//   // Fallback in case neither middleware handles the request
//   return undefined;
// };

// export default combinedMiddleware;

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//     // Include paths for localization
//     "/",
//     "/(fr|en)/:path*",
//   ],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";



export default clerkMiddleware();

// export function createMiddleware(routing);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",

    "/",
    "/(de|en)/:path*",
  ],
};

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/en", request.url));
// }
