import NextAuth from "next-auth";
import { authOptions } from "@/config/auth-options";

const authHandler = NextAuth(authOptions)

export {authHandler as Get, authHandler as Post}