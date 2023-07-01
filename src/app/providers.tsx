"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const Providers = ({ children }: { children: React.ReactNode }) => (
	<CacheProvider>
		<ChakraProvider theme={theme}>{children}</ChakraProvider>
	</CacheProvider>
);

export default Providers;
