import dbConnect from "@/lib/dbConnect";
import userSchema, { IUser } from "@/models/user";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
	const session = await getServerSession(authOptions);

	if (session) {
		// Signed in
		return NextResponse.json(session);
	} else {
		// Not signed in
		return NextResponse.json({ error: "You are not signed in" }, { status: 401 });
	}
};

export const POST = async (request: NextRequest) => {
	await dbConnect();
	const newUser = await request.json();

	// Create a new user in the database
	try {
		const user = await userSchema.create(newUser);
		return NextResponse.json({ success: true, data: user }, { status: 201 });
	} catch (err) {
		return NextResponse.json({ success: false, error: err }, { status: 400 });
	}
};
