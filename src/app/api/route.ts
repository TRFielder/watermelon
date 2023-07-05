import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest, response: NextResponse) => {
	return new NextResponse("This is the root route :)");
};
