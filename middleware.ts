import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");

  if (isArabic) {
    const cleanPath = pathname.replace(/^\/ar/, "") || "/";
    const rewrittenUrl = new URL(cleanPath + search, request.url);
    const response = NextResponse.rewrite(rewrittenUrl);
    response.headers.set("x-locale", "ar");
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("x-locale", "en");
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
