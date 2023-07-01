import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
	list: {
		bg: "#0E395C",
		color: "white",
	},
	item: {
		bg: "#08395C",
		_hover: {
			bg: "#4FA783",
			color: "white",
		},
	},
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
