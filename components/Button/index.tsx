export interface ButtonProps {
	variant?: "primary" | "secondary";
	children: React.ReactNode;
	onClick?: () => void;
}

const Button = ({ variant = "primary", children, onClick }: ButtonProps) => {
	return (
		<button
			className="bg-secondary text-text-light text-sm md:text-base px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors duration-200 ease-in-out"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
