export function isPublicPath(pathname: string): boolean {
  const publicPaths = [
    '/',
    '/sign-in',
    '/sign-up',
    '/favicon.ico',
    '/robots.txt',
  ];

  if (publicPaths.includes(pathname)) return true;

  // Allow static asset prefixes
  if (pathname.startsWith('/public/') || pathname.startsWith('/_next/')) return true;

  return false;
}
