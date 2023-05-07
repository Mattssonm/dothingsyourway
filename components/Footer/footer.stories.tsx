import { Meta, StoryObj } from "@storybook/react";
import Footer from "./index";
import ComponentWrapper from "../ComponentWrapper";

export default {
	title: "Components/Footer",
	component: Footer,
} as Meta<typeof Footer>;

export const Default: StoryObj<typeof Footer> = () => (
	<ComponentWrapper>
		<Footer />
	</ComponentWrapper>
);

Default.args = {};
