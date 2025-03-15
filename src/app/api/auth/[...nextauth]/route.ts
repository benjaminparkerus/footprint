import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

const { auth, signIn, signOut, handlers } = NextAuth(authConfig)

// Export the handler directly as GET and POST
export { handlers as GET, handlers as POST } 