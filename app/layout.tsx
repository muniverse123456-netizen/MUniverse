import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import Header from "@/components/Header";
import SyncUser from "@/components/SyncUser";
import { dark } from '@clerk/ui/themes'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUniverse",
  description: "MUniverse with Clerk + Convex auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider
          appearance={{
            theme: dark,
            elements: {
              modalBackdrop: "fixed inset-0 grid place-items-center",
              card: "max-w-md w-full",
              modalContent: "items-center",
            }
          }}
        >
          <ConvexClientProvider>
            <SyncUser />
            <Header />
            {children}
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
