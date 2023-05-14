export interface ButtonProps {
	variant?: "primary" | "secondary";
	type: "button" | "link";
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
	href?: string;
	props?: any;
}

const Button = ({
	variant = "primary",
	type = "button",
	children,
	onClick,
	className,
	href,
	...props
}: ButtonProps) => {
	const backgroundColor = variant === "primary" ? "bg-secondary" : "bg-primary";
	const buttonStyles =
		"text-text-light text-sm md:text-base px-8 py-4 rounded-md hover:bg-secondary-dark transition-colors duration-200 ease-in-out w-max";

	if (type === "link") {
		return (
			<a
				href={href}
				className={[buttonStyles, backgroundColor, className].join(" ")}
				{...props}
			>
				{children}
			</a>
		);
	} else {
		return (
			<button
				className={[buttonStyles, backgroundColor, className].join(" ")}
				onClick={onClick}
				{...props}
			>
				{children}
			</button>
		);
	}
};

export default Button;
