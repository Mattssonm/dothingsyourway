import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";

export const metadata = {
	title: "Do Things Your Way | Stressfrihet",
};

export default function Page() {
	return (
		<>
			<Header variant="light" />
			<Section
				backgroundColor="primary-dark"
				textColor="text-light"
				className="text-right"
			>
				<h2 className="text-4xl md:text-6xl font-display uppercase">
					Stressfrihet
				</h2>
				<h3 className="font-display text-xl md:text-2xl">
					Öka din arbetsförmåga med 10 timmar i veckan OCH må bra!
				</h3>
				<p className="font-thin italic">
					Bli fri från stress, få massvis med energi och mer gjort än någonsin!
				</p>
				<Button>Köp nu</Button>
			</Section>
			<Section>
				<p>Här kommer en sälj-video?</p>
			</Section>
			<Footer />
		</>
	);
}
