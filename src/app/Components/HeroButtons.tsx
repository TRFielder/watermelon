"use client";
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Explainer from "./Explainer";
import { useDisclosure } from "@chakra-ui/react";

const HeroButtons = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button
				rounded={"full"}
				bg={"blue.400"}
				color={"white"}
				_hover={{ bg: "blue.500" }}
				rightIcon={<FcGoogle />}
				onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
			>
				Sign In with Google
			</Button>
			<Button onClick={onOpen} rounded={"full"}>
				About Watermelon
			</Button>
			<Explainer isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default HeroButtons;
