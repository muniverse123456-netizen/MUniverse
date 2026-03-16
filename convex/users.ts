import { mutation, query } from "./_generated/server";

/**
 * Called client-side right after authentication is confirmed.
 * Inserts the user on first sign-in; updates their name/email on subsequent logins.
 */
export const upsertUser = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const claims = identity as Record<string, unknown>;

        const firstName =
            typeof claims.firstname === "string"
                ? claims.firstname
                : typeof claims.given_name === "string"
                    ? claims.given_name
                    : null;
        const lastName =
            typeof claims.lastname === "string"
                ? claims.lastname
                : typeof claims.family_name === "string"
                    ? claims.family_name
                    : null;
        const email =
            typeof claims.email === "string"
                ? claims.email
                : identity.email ?? null;

        const existing = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
            .unique();

        if (existing) {
            await ctx.db.patch(existing._id, { firstName, lastName, email, role: existing.role });
            return existing._id;
        }

        return await ctx.db.insert("users", {
            clerkId: identity.subject,
            firstName,
            lastName,
            email,
            role: "student",
        });
    },
});

export const getCurrentUser = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Not authenticated");
        }

        const claims = identity as Record<string, unknown>;
        const firstName =
            typeof claims.firstname === "string"
                ? claims.firstname
                : typeof claims.given_name === "string"
                    ? claims.given_name
                    : null;
        const lastName =
            typeof claims.lastname === "string"
                ? claims.lastname
                : typeof claims.family_name === "string"
                    ? claims.family_name
                    : null;
        const audience =
            typeof claims.aud === "string"
                ? claims.aud
                : Array.isArray(claims.aud) && typeof claims.aud[0] === "string"
                    ? claims.aud[0]
                    : null;

        return {
            subject: identity.subject,
            audience,
            email:
                typeof claims.email === "string"
                    ? claims.email
                    : identity.email ?? "(no email claim)",
            firstname: firstName,
            lastname: lastName,
            fullName:
                firstName && lastName
                    ? `${firstName} ${lastName}`
                    : firstName ?? lastName ?? identity.name ?? null,
        };
    },
});
