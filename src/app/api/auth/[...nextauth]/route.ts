import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

const handler = NextAuth(authConfig)

export const GET = handler
export const POST = handler
export { auth as middleware } from "./auth.config"

// Add proper type declarations for Next.js API route
export type AuthRouteHandlerType = typeof auth 