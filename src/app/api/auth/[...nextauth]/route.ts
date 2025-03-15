import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

const handler = NextAuth(authConfig)

// Export the handler directly as GET and POST
export { handler as GET, handler as POST } 