// Button.stories.tsx
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./index";
import ComponentWrapper from "../ComponentWrapper";

export default {
	title: "Components/Button",
	component: Button,
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = (args: ButtonProps) => (
	<ComponentWrapper>
		<Button {...args} />
	</ComponentWrapper>
);

Primary.args = {
	children: "Click me",
};
