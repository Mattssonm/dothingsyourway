import { Open_Sans, Oswald } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display" });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-sans: ${openSans.style.fontFamily};
						--font-display: ${oswald.style.fontFamily};
					}
				`}
			</style>
			{children}
		</>
	);
}
