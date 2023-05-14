import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";

const HeroSection = () => {
	return (
		<Section className="bg-primary-dark text-text-light text-right md:min-h-screen items-center flex flex-col md:flex-row space-x-8 space-y-16">
			<div>
				<Image
					src="/images/organizing.svg"
					width={800}
					height={600}
					alt="Organizing"
				/>
			</div>
			<div className="flex flex-col justify-center items-end space-y-4">
				<h2 className="text-4xl md:text-6xl font-display uppercase">
					Stressfrihet
				</h2>
				<h3 className="font-display text-xl md:text-2xl">
					Få mer gjort och må fantastiskt bra utan att stressa mindre
				</h3>
				<p className="font-thin italic w-96">
					En 12-veckors kurs där du lär dig förvandla all negativ stress till
					positiv genom att installera ett nytt mindset
				</p>
				<Button type="link" href="#purchase">
					Ja, jag vill bli fri från negativ stress!
				</Button>
			</div>
		</Section>
	);
};

export default HeroSection;
