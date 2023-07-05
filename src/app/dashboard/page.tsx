import { Flex, Text, Heading } from "../Components/ClientChakra";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import CheckIn from "../Components/CheckIn/CheckIn";

const Dashboard = async () => {
	const session = await getServerSession(authOptions);

	return (
		<Flex direction="column" align="center" maxW="50%" justify="space-evenly" height="100%">
			<Heading>Welcome to the dashboard,</Heading>
			<Text align="center" margin="10px">
				{session?.user?.name}
			</Text>
			<CheckIn />
		</Flex>
	);
};

export default Dashboard;
