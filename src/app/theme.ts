import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import { menuTheme } from "./Components/NavBar/menuTheme";

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	styles: {
		global: (props: any) => ({
			body: {
				bg: mode("#8ecae6", "#023047")(props),
				color: mode("#1A202C", "#EDF2F7")(props),
			},
		}),
	},
	components: {
		Menu: menuTheme,
	},
});

export default theme;
