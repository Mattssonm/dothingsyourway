import Image from "next/image";
import Section from "../Section";

const About = () => {
	return (
		<Section className="bg-primary-dark text-text-light min-h-screen">
			<div className="flex flex-col-reverse md:flex-row space-x-4 space-y-8 items-center justify-center font-light">
				<div className="space-y-4 max-w-screen-sm basis-3/4 mt-8">
					<h2 className="font-display text-3xl md:text-5xl font-normal text-primary-light uppercase mb-8">
						Hej, jag heter Markus...
					</h2>
					<p>
						...och stressen fullkomligt förstörde två år av mitt liv. I min jakt
						på frihet, framgång och lycka blev jag utmattad och så sjuk att jag
						vissa dagar inte kunde resa mig upp ur sängen. Jag insåg snart att
						om jag någonsin skulle kunna få det liv jag ville ha så var jag
						tvungen att bli expert på att optimera min tid och energi.
					</p>
					<p>
						Under hösten 2021 jobbade jag heltid samtidigt som jag drev mitt
						företag 20 timmar i veckan. Idag är jag egenföretagare på heltid och
						lever drömmen jag längtat efter i så många år!
					</p>
					<p>
						Min framgång har dels berott på att jag har ett system som hjälper
						mig att hålla mig produktiv och att jag gör rätt saker. Men det har
						också berott på att jag har bättre kunskap om stress och att jag
						inte slösar min värdefulla energi på saker som inte gör mitt liv
						bättre, såsom: negativa tankar och oro för vad folk ska tycka m.m.
						Viktigast av allt är helt enkelt att veta vad exakt man ska göra
						just idag för att snabbast komma vidare och lära sig säga nej till
						allt annat. Det gjorde att jag kunde njuta av processen och vara
						lycklig långt innan jag nått mitt mål.
					</p>
					<p>
						Därför har jag skapat detta programmet för dig! Jag vill ge dig alla
						förutsättningar du behöver för att kunna nå ditt mål att äntligen
						bli fri och skapa ett tryggt liv som företagare!
					</p>
				</div>
				<div className="w-max-m h-auto flex align-center justify-center">
					<Image
						src="/images/markus.jpg"
						width={500}
						height={350}
						alt="Markus"
						className="rounded-full h-auto w-auto"
					/>
				</div>
			</div>
		</Section>
	);
};

export default About;
