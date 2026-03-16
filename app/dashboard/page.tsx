"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Authenticated, Unauthenticated } from "convex/react";

export default function DashboardPage() {
    return (
        <>
            <AuthGuard>
                <main className="min-h-[calc(100vh-4rem)] p-8">
                    {/* Blank dashboard — protected route (content to be added) */}
                </main>
            </AuthGuard>
        </>
    );
}

function AuthGuard({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Authenticated>{children}</Authenticated>
            <Unauthenticated>
                <RedirectToHome />
            </Unauthenticated>
        </>
    );
}

function RedirectToHome() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/");
    }, [router]);
    return null;
}
