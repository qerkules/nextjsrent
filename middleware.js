import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "az"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|ru|az)/:path*"],
};
