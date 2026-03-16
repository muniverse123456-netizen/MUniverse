import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    "/",
    "/sign-in(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    if (!isPublicRoute(req)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [
        // Skip all internal Next.js paths, static files, and payment callback routes
        // (CCAvenue POSTs back to /api/payment/response — Clerk must NOT intercept it)
        // Note: We only exclude /api/payment/response, NOT /api/payment/initiate (which needs auth)
        "/((?!_next|ingest|api/payment/response|api/payment/merch-response|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|avif|png|gif|svg|ttf|txt|otf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|pdf)).*)",
        // Always run for API routes EXCEPT payment response callback (external POST, no Clerk cookie)
        "/((?!api/payment/response)(?!api/payment/merch-response)(?:api|trpc))(.*)",
    ],
};