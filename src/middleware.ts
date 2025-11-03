import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import {
  cookieName,
  defaultLocale as defaultLocaleConfig,
  localePrefix,
  locales,
  pathnames,
} from './locales/config';

type TAddPathName = (request: NextRequest, response: NextResponse) => void;

const addPathName: TAddPathName = (request, response): void => {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  response.headers.set('x-current-pathname', pathname);
};

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  // Determine the default locale from the cookie or config
  const defaultLocale = request.headers.get(cookieName) ?? defaultLocaleConfig;

  // Initialize the internationalization routing middleware
  const i18nMiddleware = createMiddleware({
    defaultLocale: defaultLocaleConfig,
    locales,
    localePrefix,
    pathnames,
  });

  // Check if the path contains a supported locale
  const hasSupportedLocale = locales.some((locale) =>
    request.nextUrl.pathname.startsWith(`/${locale}`),
  );

  // If the requested path doesn't start with a supported locale and is not a Next.js specific path,
  // redirect to the default locale
  if (!hasSupportedLocale && !request.nextUrl.pathname.startsWith('/_next')) {
    const response = NextResponse.rewrite(
      new URL(
        `/${defaultLocaleConfig}${request.nextUrl.pathname}`,
        request.url,
      ),
    );
    addPathName(request, response);
    return response;
  }

  // Use the i18nMiddleware to handle routing and set the locale cookie
  const response = i18nMiddleware(request);
  response.headers.set(cookieName, defaultLocale);

  addPathName(request, response);

  return response;
}

export const config = {
  matcher: [
    // Enable redirection to the default locale at the root
    '/',

    // Apply middleware to paths with locale prefixes
    '/:locale(en|fa)/:path*',

    // Apply middleware to paths without locale prefixes
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
