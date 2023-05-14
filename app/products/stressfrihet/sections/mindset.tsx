import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";

export const MindsetSection = () => {
	return (
		<Section className="flex flex-col bg-primary-dark items-center gap-16">
			<h2 className="font-display text-3xl md:text-5xl uppercase text-center text-primary-light">
				Fel mindset kan göra dig allvarligt sjuk!
			</h2>
			<div className="flex flex-col md:flex-row items-center gap-8">
				<Image
					src="/images/medicine.svg"
					width={700}
					height={600}
					alt="Illustration of a woman and a man sitting in chairs discussing"
				/>
				<div className="bg-background p-8 rounded-2xl max-w-2xl flex flex-col gap-2">
					<div className="flex flex-col items-center gap-4 mb-8 mt-4">
						<h2 className="font-display text-xl md:text-2xl text-primary">
							I en studie frågade man 30.000 amerikaner
						</h2>
						<ul className="font-display text-lg list-disc ml-8 text-primary">
							<li>Hur mycket stress har du upplevt det senaste året?</li>
							<li>Tror du att stress är skadligt för din hälsa?</li>
						</ul>
					</div>
					<p>Åtta år senare tittade man på vilka som fortfarande levde.</p>
					<p>
						Det visade sig att de som hade upplevt mycket stress hade ökat
						risken att dö med hela 43%!
					</p>
					<p>
						Men <span className="font-bold">endast</span> om man också trodde
						att stress var skadligt...
					</p>
					<p>
						Det absolut mest häpnadsväckande var att de som sa att de hade
						upplevt mycket stress och sa att stress inte påverkade deras hälsa
						hade lägst risk att dö av alla i hela studien!
					</p>
					<p>
						Mycket positiv stress är alltså det bästa för din hälsa medan mycket
						negativ stress är direkt livsfarligt!
					</p>
					<p>Jag menar inte att skrämma dig...</p>
					<p>
						Jag vill bara att du tar detta på allvar och gör allt du kan för att
						skydda din hälsa och uppnå det du vill i ditt liv.
					</p>
					<p>
						Så tryck på knappen nedan för att gå med i programmet och få
						tillgång till kursmaterialet idag!
					</p>
				</div>
			</div>
			<Button type="link" href="#purchase">
				Jag vill ha tillgång till kursen nu!
			</Button>
		</Section>
	);
};

export default MindsetSection;
