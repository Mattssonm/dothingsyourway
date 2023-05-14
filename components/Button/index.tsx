export interface ButtonProps {
	variant?: "primary" | "secondary";
	type: "button" | "link";
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
	href?: string;
}

const Button = ({
	variant = "primary",
	type = "button",
	children,
	onClick,
	className,
	href,
}: ButtonProps) => {
	const buttonStyles =
		"bg-secondary text-text-light text-sm md:text-base px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors duration-200 ease-in-out w-max";

	if (type === "link") {
		return (
			<a href={href} className={[buttonStyles, className].join(" ")}>
				{children}
			</a>
		);
	} else {
		return (
			<button className={[buttonStyles, className].join(" ")} onClick={onClick}>
				{children}
			</button>
		);
	}
};

export default Button;
