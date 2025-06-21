import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "se", "it", "jp"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const headers = { "accept-language": request.headers.get("accept-language") || "" };
  console.log("Accept-Language header:", headers["accept-language"]);
  const languages = new Negotiator({ headers }).languages();
  console.log("Parsed languages:", languages);
  const matchedLocale = match(languages, locales, defaultLocale);
  console.log("Matched locale:", matchedLocale);
  return matchedLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("Request pathname:", pathname);

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico")
  ) {
    console.log("Skipping middleware for:", pathname);
    return NextResponse.next();
  }

  // Check if the pathname includes a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  console.log("Pathname has locale:", pathnameHasLocale);

  if (pathnameHasLocale) {
    console.log("Proceeding with existing locale path:", pathname);
    return NextResponse.next();
  }

  // Redirect root (/) or non-locale paths to the detected locale
  const locale = getLocale(request);
  let newPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  
  // Handle invalid routes like /terms by redirecting to default locale
  if (!pathnameHasLocale && pathname !== "/") {
    newPath = `/${locale}${pathname}`;
  }
  
  console.log(`Redirecting ${pathname} to ${newPath}`);
  const newUrl = new URL(newPath, request.nextUrl.origin);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};