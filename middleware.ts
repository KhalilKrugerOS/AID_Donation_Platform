import { authMiddleware } from "@clerk/nextjs/server";

// FIXME: add all assets to public routes so unauth users may see them
export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhook/stripe",
    "/api/webhook/clerk",
    "/api/uploadthing",
    "/favicon.ico",
    "/assets/images/logo.svg",
    "/assets/images/dotted-pattern.png",
  ],
  ignoredRoutes: [
    "/api/webhook/stripe",
    "/api/webhook/clerk",
    "/api/uploadthing",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
