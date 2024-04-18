import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "az", "tr"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|ru|az|tr)/:path*"],
};
