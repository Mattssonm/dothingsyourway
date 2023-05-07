"use client";
import { Open_Sans, Oswald } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display" });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<style jsx global>
				{`
					:root {
						--font-sans: ${openSans.style.fontFamily};
						--font-display: ${oswald.style.fontFamily};
					}
				`}
			</style>
			<body>{children}</body>
		</html>
	);
}
