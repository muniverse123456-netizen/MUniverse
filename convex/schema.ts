import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        clerkId: v.string(),
        firstName: v.union(v.string(), v.null()),
        lastName: v.union(v.string(), v.null()),
        email: v.union(v.string(), v.null()),
        role: v.union(v.literal("student"), v.literal("faculty"), v.literal("admin")),
    }).index("by_clerk_id", ["clerkId"]),
});
