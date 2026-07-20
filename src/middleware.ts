import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.drutilio.net";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const requestHost = request.headers.get("host")?.toLowerCase();
  const forwardedProto =
    request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "");

  const needsHostRedirect =
    requestHost === "drutilio.net" || requestHost === CANONICAL_HOST;
  const needsProtocolRedirect = forwardedProto !== "https";

  if (
    (needsHostRedirect && requestHost !== CANONICAL_HOST) ||
    (requestHost === CANONICAL_HOST && needsProtocolRedirect)
  ) {
    const redirectUrl = new URL(request.nextUrl.pathname, CANONICAL_ORIGIN);
    redirectUrl.search = request.nextUrl.search;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
