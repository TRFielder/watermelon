"use client";
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Center, Text } from "../ClientChakra";
import { signOut, useSession } from "next-auth/react";

const NavBarMenu = () => {
	const { data: session } = useSession();

	return (
		<Menu>
			<MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
				<Avatar
					size={"sm"}
					src="https://api.dicebear.com/6.x/miniavs/svg?seed=Sophie&flip=true&rotate=350&scale=120&backgroundType=gradientLinear&backgroundColor=d1d4f9"
				/>
			</MenuButton>
			<MenuList alignItems={"center"}>
				<Center>
					<Avatar
						size={"2xl"}
						src="https://api.dicebear.com/6.x/miniavs/svg?seed=Sophie&flip=true&rotate=350&scale=120&backgroundType=gradientLinear&backgroundColor=d1d4f9"
					/>
				</Center>
				<br />
				<Center>
					<Text>{session?.user?.name}</Text>
				</Center>
				<br />
				<MenuDivider />
				<MenuItem as="a" href="/dashboard">
					My Melon
				</MenuItem>
				<MenuItem>Account Settings</MenuItem>
				<MenuItem onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default NavBarMenu;
