// Extends the definition of Session and JWT to include the accessToken property,
// which is used in the nextAuth config to provide access tokens to the user on getSession()

import NextAuth, { Account, DefaultSession, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Types } from "mongoose";

declare module "next-auth" {
	interface Session {
		id: Types.ObjectId;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: Types.ObjectId;
	}
}
