"use client";
import { signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";
const SignOut = () => (
	<Button rounded={"full"} bg={"blue.400"} color={"white"} _hover={{ bg: "blue.500" }} onClick={() => signOut({ callbackUrl: "/" })}>
		Sign Out
	</Button>
);

export default SignOut;
