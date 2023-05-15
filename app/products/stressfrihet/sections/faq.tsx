"use client";
import Section from "@/components/Section";
import { Accordion } from "flowbite-react";
import Image from "next/image";
import Button from "@/components/Button";

const FAQSection = () => {
	return (
		<Section className="flex flex-col items-center">
			<h2 className="font-display text-center uppercase text-3xl md:text-5xl text-primary mb-8">
				Vanliga frågor
			</h2>
			<Image
				src="/images/questions.png"
				width={600}
				height={400}
				alt="An illustration of two people standing beside a huge question mark"
			/>
			<div className="w-full max-w-4xl">
				<Accordion flush={true}>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							Hur funkar det?
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Du kommer direkt idag få tillgång till fyra moduler med med 38
								korta videor, övningar och PDFer. Sen kommer du hänga med live i
								12 gruppcoachingstillfällen där alla deltagare coachas och vi lär av varandra. Materialet
								från de två sista modulerna kommer du få senare då de uppdateras
								och optimeras utifrån feedback från tidigare kursdeltagare.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							Hur ska jag hinna med detta?
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Jag förstår att du har mycket att göra redan som det är så därför 
								är det första som jag lagt tidmodulen allra först. I den modulen 
								kommer du få konkreta strategier för att få loss minst 3 timmar 
								extra i veckan. 
								Gruppcoachingtillfällena är på 1 timme och en kvart i veckan.
								Tanken är att du ska lägga ungefär 1 timme i veckan på videorna
								och övningar. Men om du har svårt att hinna med så har du tillgång 
								till modulerna på livstid så du kan göra dom i din egen takt. 
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							Funkar detta för mig?
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Detta funkar för alla som har problem med stress oavsett ålder
								och yrke. Även antalet barn, ev. sjukskrivning och hur många
								marsvin du har kommer inte påverka ditt resultat. 🐹
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							Hur länge har jag tillgång till materialet?
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Du har tillgång till materialet på livstid och kan gå igenom
								kursen i din egen takt.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							Finns det någon ångerrätt?
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Jag vill att du ska känna att ditt köp är fullständigt
								riskfritt. Därför har du 30 dagars öppet köp. Bara skriv ett
								mail och säg att du vill ha pengarna tillbaka så fixar vi det.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							Är det live?
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Alla gruppcoachingstillfällen är live medan kursmaterialet är
								färdiginspelat.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							Vilka betalningsmetoder finns att välja på?
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Av säkerhetsskäl erbjuder jag endast kortbetalning. Vill du ha
								ett annat kvitto/faktura än bekräftelsen på mailen när du betalt
								kan du maila mig på markus@dothingsyourway.com så fixar vi det.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							Är detta avdragsgillt i företaget?
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								På kvittot du får kommer det stå “produktivitet för företagare”
								och att 25% moms är inkluderat. Detta är avdragsgillt som du kan
								ta med i ditt företag. Har du inget företag idag kan du spara
								kvittot och ta med det den dagen du startar företaget i upp till
								5 år.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
			</div>
			<Button type="link" href="#purchase">
				Ja, jag vill bli fri från negativ stress!
			</Button>
		</Section>
	);
};

export default FAQSection;
