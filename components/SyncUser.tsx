"use client";

import { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useConvexAuth } from "convex/react";

/**
 * Syncs the authenticated Clerk user into the Convex `users` table.
 * Runs once per session whenever the Convex auth state becomes authenticated.
 * Must be rendered inside <ConvexProviderWithClerk>.
 */
export default function SyncUser() {
    const { isAuthenticated } = useConvexAuth();
    const upsertUser = useMutation(api.users.upsertUser);

    useEffect(() => {
        if (isAuthenticated) {
            upsertUser();
        }
    }, [isAuthenticated, upsertUser]);

    return null;
}
