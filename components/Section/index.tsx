import { Color } from "@/tailwind.config";

export interface SectionProps {
	backgroundColor?: Color;
	textColor?: Color;
	className?: string;
	children: React.ReactNode;
}

const Section = ({
	backgroundColor = "white",
	children,
	textColor = "black",
	className,
}: SectionProps) => {
	return (
		<section className={`bg-${backgroundColor}`}>
			<div
				className={[
					`container mx-auto text-${textColor} text-sm md:text-base py-64 px-4 flex-column space-y-4`,
					className,
				].join(" ")}
			>
				{children}
			</div>
		</section>
	);
};

export default Section;
