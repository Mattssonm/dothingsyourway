export interface HeaderProps {
	variant?: "dark" | "light";
}

const Header = ({ variant = "dark" }: HeaderProps) => {
	return (
		<header className={`${variant === "dark" ? "bg-primary-dark" : ""}`}>
			<div className={`container mx-auto py-4`}>
				<div className="px-4">
					<h1
						className={`uppercase font-display thin text-2xl md:text-4xl ${
							variant === "dark" ? "text-text-light" : "text-primary-dark"
						} text-primary-dark`}
					>
						Do things <span className="font-bold">your</span> way
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
