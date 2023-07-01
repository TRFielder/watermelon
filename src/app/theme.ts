import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import { menuTheme } from "./Components/NavBar/menuTheme";
import { containerTheme } from "./Components/CheckIn/containerTheme";

// Colour palette http://paletton.com/#uid=53y0u0kleqtbzEKgVuIpcmGtdhZ

const theme = extendTheme({
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	styles: {
		global: (props: any) => ({
			body: {
				bg: "#346288",
				color: "white",
			},
		}),
	},
	components: {
		Menu: menuTheme,
		Container: containerTheme,
	},
});

export default theme;
