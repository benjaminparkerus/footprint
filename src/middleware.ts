import NextAuth from "next-auth"
import { authConfig } from "./app/api/auth/[...nextauth]/auth.config"

const { auth } = NextAuth(authConfig)

export default auth

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} 