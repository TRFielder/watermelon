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
	callbacks: {
		async jwt({ token, account }) {
			//This is where we would, in theory, fetch the access token from the API and store it against the
			//Persist the OAuth access_token to the token object after signing in
			if (account) token.accessToken = account.access_token;
			return token;
		},
		async session({ session, token }) {
			//Send properties to the client, like an access token from a provider
			session.accessToken = token.accessToken;
			return session;
		},
	},
};

export default NextAuth(authOptions);
