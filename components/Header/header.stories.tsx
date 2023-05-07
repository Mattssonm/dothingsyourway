import { Meta, StoryObj } from "@storybook/react";
import Header, { HeaderProps } from "./index";
import ComponentWrapper from "../ComponentWrapper";

export default {
	title: "Components/Header",
	component: Header,
} as Meta<typeof Header>;

export const Dark: StoryObj<typeof Header> = (args: HeaderProps) => (
	<ComponentWrapper>
		<Header {...args} />
	</ComponentWrapper>
);

Dark.args = {
	variant: "dark",
};

export const Light: StoryObj<typeof Header> = (args: HeaderProps) => (
	<ComponentWrapper>
		<Header {...args} />
	</ComponentWrapper>
);

Light.args = {
	variant: "light",
};
