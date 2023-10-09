import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";
import RemainingSpots from "./remainingSpots";

const HeroSection = () => {
	return (
		<Section className="bg-primary-dark text-text-light text-right md:min-h-screen items-center flex flex-col md:flex-row space-x-8 space-y-16">
			<div>
				<Image
					src="/images/organizing.svg"
					width={1200}
					height={600}
					alt="Organizing"
				/>
			</div>
			<div className="w-full flex flex-col justify-center items-end space-y-4 p-4">
				<h2 className="text-4xl md:text-6xl font-display uppercase">
					Stressfrihet
				</h2>
				<h3 className="font-display text-xl md:text-2xl">
					Få mer gjort, må fantastiskt bra och bli mer effektiv
				</h3>
				<p className="font-thin italic w-96">
					En onlinekurs för dig som vill starta företag eller redan har gjort det.
				</p>
				{/* <h3 className="font-bold mt-100 text-xl md:text-2xl "><span className="text-red-600">JUST NU!</span></h3>
				<p>De 5 första som anmäler sig innan den 21 maj får <span className="text-red-600">Pre-Early Bird rabatt på 3000 kr.</span></p>
				<RemainingSpots /> */}
				<Button type="link" href="#purchase">
					Jag vill ha tillgång till kursen nu!
				</Button>
			</div>
		</Section>
	);
};

export default HeroSection;
