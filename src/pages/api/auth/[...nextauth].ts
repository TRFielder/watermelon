import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OAUTH_ID!,
			clientSecret: process.env.GOOGLE_OAUTH_SECRET!,
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 12 * 60 * 60, // twelve hours
	},
};

export default NextAuth(authOptions);