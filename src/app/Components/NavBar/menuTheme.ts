import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
	list: {
		bg: "#023047",
		color: "EDF2F7",
	},
	item: {
		bg: "#023047",
		_hover: {
			bg: "#8ECAE6",
			color: "#1A202C",
		},
	},
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
