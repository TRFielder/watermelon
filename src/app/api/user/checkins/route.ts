import dbConnect from "@/lib/dbConnect";
import userSchema, { ICheckIn, IUser } from "@/models/user";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
	const session = await getServerSession(authOptions);
	await dbConnect();

	if (session?.user) {
		// Find the user in the database
		const userData = await userSchema.findOne({ email: session.user.email });

		// Return just the array of their check ins
		return NextResponse.json({ data: userData.checkIns }, { status: 200 });
	} else {
		// Not signed in
		return NextResponse.json({ error: "You are not signed in" }, { status: 401 });
	}
};

export const POST = async (req: NextRequest) => {
	const session = await getServerSession(authOptions);
	const value: ICheckIn = await req.json();

	if (session?.user) {
		// Find the user in the database

		const userData = await userSchema.findOne({ email: session.user.email });
		userData.checkIns.push(value);
		const submitted = await userData.save();

		console.log(submitted);
		return NextResponse.json({ success: "We got your check in!", data: submitted }, { status: 201 });
	} else {
		// Not signed in
		return NextResponse.json({ error: "You are not signed in" }, { status: 401 });
	}
};
