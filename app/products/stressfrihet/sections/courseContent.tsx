"use client";
import Section from "@/components/Section";
import { Accordion } from "flowbite-react";
import Image from "next/image";
import Button from "@/components/Button";

const CourseContent = () => {
	return (
		<Section className="flex flex-col items-center">
			<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Du kommer lära dig hur du gör för att:
				</h2>
				<div className="bg-primary-dark p-12 rounded-xl max-w-3xl text-text-light font-light">
					<ul className="list-disc pl-4 space-y-6">
						<li className="">
							<span className="font-bold">Effektivt hantera din tid & energi</span> så att du varje dag, får mer gjort utan må dåligt.
						</li>
						<li className="">
							Installera det <span className="font-bold">nya mindsetet om stress</span> så stressen 
							blir något du kan utnyttja och må bra av.
						</li>
						<li className="">
							Skapa <span className="font-bold">struktur och klarhet</span> så att du varje dag 
							fokuserar på det som snabbast ger dig resultat
						</li>
						<li className="">
							Känna att du varje dag kommer närmare 
							<span className="font-bold">den frihet som du alltid velat ha</span>
						</li>
						<li className="">
							Skapa ett starkt och fokuserat sinne som gör dig 
							<span className="font-bold">fullständigt ostoppbar mot alla motgångar</span>
						</li>
					</ul>
				</div>
				<p>
					Du kommer få 6 moduler med förinspelade videor, pdfer och övningar som du kan gå igenom i egen takt.
				</p>
			<div className="w-full max-w-4xl">
				<Accordion flush={true}>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							1. Tid - Hur du hanterar din tid för att få rätt saker gjorda
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Först och främst måste vi frigöra tid för att du ska kunna jobba på dig själv. Därför börjar vi med att fastställa ditt varför och vilka personer du egentligen vill lägga din tid på. Problemet är inte att du inte har tid. Problemet är att du slösar bort den på saker som inte gör ditt liv bätttre. När du vet varför du är här och vad du ska göra med ditt liv blir det enkelt att säga nej till allt annat.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							2. Stress - Hur du aldrig igen mår dåligt av stress med nytt mindset
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
							Den senaste forskningen visar faktiskt att stress inte är farligt – så länge vi inte tror att det är farligt. Ja, du hörde rätt! Vårt tankesätt påverkar hur stress, på en rent biologisk nivå, påverkar vår kropp och vår hälsa. I denna del av programmet får du lära dig exakt hur du ska göra för att stress ska påverka dig på ett optimalt och hållbart sätt.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							3. Självkänsla - Hur du står upp för dig själv och får det du vill ha och behöver
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Självkärlek är en av de viktigaste komponenterna i ett hållbart, produktivt och lyckligt liv. Du kan helt enkelt inte ta hand om dig själv på ett bra sätt om du inte förstår på djupet att du förtjänar det. I denna del får du en djup förståelse av hur oerhört värdefull du är och varför hela världen blir en bättre plats när du känner så. Jag ger dig också kanonbra övningar för att stärka upp denna relationen med dig själv.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							4. Energi - Hur du skapar massvis av energi som räcker hela dagen
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								I denna del får du lära dig de bästa verktygen för att hålla en hög energinivå hela dagen. Förutom att gå igenom det uppenbara som sömn, träning och fritid, kommer du även att lära dig hur dina tankar, känslor och relationer påverkar energin. Efter denna del kommer du veta exakt vad du ska göra för att ha massvis av energi varje dag.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							5. Fokus - Hur du skapar maximal produktivitet igenom gedigen men enkel struktur
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Del fem handlar om hur du tar vara på din tid och är så effektiv och produktiv som möjligt. Du lär dig skapa fullständig klarhet i vad som behöver göras och hur du bibehåller fokus på de viktigaste uppgifterna du har att göra för dagen. Du kommer även att lära dig hur du ska hantera både digitala och sociala distraktioner som hindrar dig från att nå dina mål.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
						6. Riktning - Hur du skapar en tydlig riktning i ditt liv som tar dig dit du vill
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Du skapar fullständig klarhet i varje ögonblick i ditt liv med hjälp av två saker – fokus och riktning. Att ha riktning i sitt liv innebär att veta var man är, vart man ska och hur man ska ta sig dit. I denna delen sätter vi upp mål och en konkret plan för när du äntligen ska få säga upp dig och jobba med det du brinner för på heltid.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
			</div>
			<Button>Vill du vara med?</Button>
		</Section>
	);
};

export default CourseContent;
