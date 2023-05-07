import type { Preview } from "@storybook/react";
import React from "react";
import * as nextImage from "next/image";
import "../app/globals.css";

Object.defineProperty(nextImage, "default", {
	configurable: true,
	value: (props) => <img {...props} />,
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
};

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
