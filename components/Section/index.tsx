import { Color } from "@/tailwind.config";

export interface SectionProps {
	className?: string;
	children: React.ReactNode;
	id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
	return (
		<section className={className} id={id}>
			<div
				className={[
					`container mx-auto text-sm md:text-base py-32 md:py-64 px-4 flex-column space-y-4`,
					className,
				].join(" ")}
			>
				{children}
			</div>
		</section>
	);
};

export default Section;
