import { ReactNode } from "react";
import { Box, Flex, Link, Stack } from "../ClientChakra";

import { BsSun, BsMoon } from "react-icons/bs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
	return (
		<>
			<Box bg={"gray.800"} px={4}>
				<Flex h={16} align={"center"} justify={"space-between"}>
					<Box>Watermelon</Box>

					<Flex align={"center"}>
						<Stack direction={"row"} spacing={7}>
							<NavBarMenu />
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

export default NavBar;
