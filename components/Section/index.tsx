import { Color } from "@/tailwind.config";

export interface SectionProps {
	className?: string;
	children: React.ReactNode;
}

const Section = ({ children, className }: SectionProps) => {
	return (
		<section className={className}>
			<div
				className={[
					`container mx-auto text-sm md:text-base py-64 px-4 flex-column space-y-4`,
					className,
				].join(" ")}
			>
				{children}
			</div>
		</section>
	);
};

export default Section;
