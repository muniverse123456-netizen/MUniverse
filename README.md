# MUniverse Project

Follow these steps to set up and run the project locally.

## 1. Install `pnpm` (if not already installed)

```bash
npm install -g pnpm
```

## 2. Install Dependencies

From the project root directory, run:

```bash
pnpm install
```

## 3. Start the Development Server

```bash
pnpm dev
```

## 4. Access the Website

Open your browser and go to:

[http://localhost:3000](http://localhost:3000)

### Environment Variables

```plaintext
CONVEX_DEPLOY_KEY=dev:modest-camel-529|eyJ2MiI6IjdlZGM5ZThjMzcwNjRkMGFhMDMxOTBmNGY5N2I0ZGRmIn0=

# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:modest-camel-529 # team: muniverse, project: muniverse

NEXT_PUBLIC_CONVEX_URL=https://modest-camel-529.convex.cloud

NEXT_PUBLIC_CONVEX_SITE_URL=https://modest-camel-529.convex.site

# Clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_d2FybS1hbGllbi04NS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_AZXo2Qf5d95DoZbUgm4WRVzDcaMCcylO6TLy5KCpuw

CLERK_FRONTEND_API_URL=https://warm-alien-85.clerk.accounts.dev

# Clerk sign-in / sign-up routing
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
```
