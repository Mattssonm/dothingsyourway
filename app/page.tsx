import { Open_Sans, Oswald } from "next/font/google";

export const metadata = {
	title: "Do Things Your Way",
	description: "Stress coaching",
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<h1 className="font-display font-thin text-3xl">
					DO THINGS
					<span className="font-semibold"> YOUR</span> WAY
				</h1>
				<p className="font-sans">Detta är lite brödtext</p>
			</div>
		</main>
	);
}
