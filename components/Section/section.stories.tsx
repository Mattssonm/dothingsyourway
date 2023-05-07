import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Section, { SectionProps } from "./index";
import ComponentWrapper from "../ComponentWrapper";

export default {
	title: "Components/Section",
	component: Section,
} as Meta<typeof Section>;

export const Primary: StoryObj<typeof Section> = (args: SectionProps) => (
	<ComponentWrapper>
		<Section {...args} />
	</ComponentWrapper>
);

Primary.args = {
	children: (
		<div>
			<h2>This is some content</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
				illum esse, soluta ut nobis, magni qui tempora ullam commodi laudantium
				praesentium asperiores repellat voluptas, quod vel odit deserunt
				temporibus consectetur.
			</p>
		</div>
	),
};

export const WithBackground: StoryObj<typeof Section> = (
	args: SectionProps
) => (
	<ComponentWrapper>
		<Section {...args} />
	</ComponentWrapper>
);

WithBackground.args = {
	backgroundColor: "primary-dark",
	textColor: "text-light",
	children: (
		<div>
			<h2>This is some content</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
				illum esse, soluta ut nobis, magni qui tempora ullam commodi laudantium
				praesentium asperiores repellat voluptas, quod vel odit deserunt
				temporibus consectetur.
			</p>
		</div>
	),
};
