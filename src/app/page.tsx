import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Hero from "./Components/Hero";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<main>
			<Hero />
		</main>
	);
}
