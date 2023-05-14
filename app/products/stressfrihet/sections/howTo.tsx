import Section from "@/components/Section";

const HowToSection = () => {
	return (
		<Section className="flex flex-col items-center gap-16">
			<h2 className="font-display text-primary text-3xl md:text-5xl uppercase text-center">
				Du kommer lära dig hur du gör för att
			</h2>
			<div className="bg-primary-dark p-12 rounded-xl max-w-3xl text-text-light font-light">
				<ul className="list-disc pl-4 space-y-6">
					<li className="">
						<span className="font-bold">
							Effektivt hantera din tid & energi
						</span>{" "}
						så att du varje dag, får mer gjort utan må dåligt.
					</li>
					<li className="">
						Installera det{" "}
						<span className="font-bold">nya mindsetet om stress</span> så
						stressen blir något du kan utnyttja och må bra av.
					</li>
					<li className="">
						Skapa <span className="font-bold">struktur och klarhet</span> så att
						du varje dag fokuserar på det som snabbast ger dig resultat
					</li>
					<li className="">
						Känna att du varje dag kommer närmare 
						<span className="font-bold">den frihet som du alltid velat ha</span>
					</li>
					<li className="">
						Skapa ett starkt och fokuserat sinne som gör dig 
						<span className="font-bold">
							fullständigt ostoppbar mot alla motgångar
						</span>
					</li>
				</ul>
			</div>
			<p>
				Du kommer få tillgång till sex olika moduler med förinspelade videor,
				pdfer och övningar som du kan gå igenom i egen takt.
			</p>
		</Section>
	);
};

export default HowToSection;
