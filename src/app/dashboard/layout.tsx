import { NextAuthProvider } from "../Components/NextAuthProvider";
import { Flex, Text } from "../Components/ClientChakra";
import NavBar from "../Components/NavBar/NavBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
	<NextAuthProvider>
		<NavBar />
		<Flex direction="column" align="center" marginTop="10%">
			{children}
		</Flex>
	</NextAuthProvider>
);

export default DashboardLayout;
