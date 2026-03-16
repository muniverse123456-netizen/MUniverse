"use client";

import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between px-4 shadow-[0_2px_15px_rgba(255,255,255,0.08)]">
            {/* Left: Website Name */}
            <Link
                href="/"
                className="text-lg font-semibold text-white hover:text-zinc-700"
            >
                MUniverse
            </Link>

            {/* Right: Auth Controls */}
            <div className="flex items-center">
                <AuthLoading>
                    <span className="text-sm text-zinc-500">Loading...</span>
                </AuthLoading>

                <Authenticated>
                    <UserButton />
                </Authenticated>

                <Unauthenticated>
                    <Link
                        href="/sign-in"
                        className="cursor-pointer rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                    >
                        Sign in
                    </Link>
                </Unauthenticated>
            </div>
        </header>
    );
}