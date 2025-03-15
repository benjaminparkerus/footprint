import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

// Create the handler but only export GET and POST
const handler = NextAuth(authConfig)

// Only export GET and POST - nothing else!
export const GET = handler
export const POST = handler 