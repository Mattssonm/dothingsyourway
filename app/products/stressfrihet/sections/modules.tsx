"use client";
import Section from "@/components/Section";
import { Accordion } from "flowbite-react";
import Button from "@/components/Button";
import Image from "next/image";

const ModulesSection = () => {
	return (
		<Section className="flex flex-col items-center bg-primary-dark gap-12">
			<h2 className="font-display text-primary-light text-3xl md:text-5xl uppercase text-center">
				De sex modulerna
			</h2>
			<Image
				src="/images/at-work.svg"
				width={300}
				height={200}
				alt="Illustration of a woman with a coffee mug standing in front of a huge document"
			/>
			<div className="w-full max-w-4xl mt-0 p-8 bg-background rounded-2xl">
				<Accordion flush={true}>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							1. Tid - Hur du lägger upp dina dagar effektivt så du får mer tid
							över till annat
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Först och främst måste vi frigöra tid för att du ska kunna jobba
								på dig själv. Därför börjar vi med att fastställa ditt varför
								och vilka personer du egentligen vill lägga din tid på.
								Problemet är inte att du inte har tid. Problemet är att du
								slösar bort den på saker som inte gör ditt liv bätttre. När du
								vet varför du är här och vad du ska göra med ditt liv blir det
								enkelt att säga nej till allt annat. Därefter kommer du få 3
								konkreta strategier till att frigöra mer tid direkt!
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							2. Stress - Hur du aldrig igen mår dåligt av stress med nytt
							mindset
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Den senaste forskningen visar faktiskt att stress inte är
								farligt – så länge vi inte tror att det är farligt. Ja, du hörde
								rätt! Vårt tankesätt påverkar hur stress, på en rent biologisk
								nivå, påverkar vår kropp och vår hälsa. I denna del av
								programmet, kommer vi gå igenom forskningen så att du vet exakt
								hur du ska göra för att stress ska påverka dig på ett optimalt
								och hållbart sätt.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							3. Självkänsla - Hur du står upp för dig själv och får det du vill
							ha och behöver
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Jag får ofta höra från stressade människor att de antingen inte
								har problem med självkänslan eller att den inte vara lika dålig
								som förr. Men sanningen är att en av de största anledningnarna
								till varför man stressar fel är för att man är rädd för att vara
								otillräcklig. En hög självkänsla är en av de viktigaste
								komponenterna i ett hållbart, produktivt och lyckligt liv. Du
								kommer inte få några övningar när du ska stå i spegeln och säga
								3 saker som är bra med dig själv. Det funkar inte i längden.
								Istället kommer du få lära dig på djupet om vem du egentligen är
								och då kommer du aldrig igen känna att du behöver jämföra dig
								själv med någon annan. Det du gör kommer kännas enkelt och du
								kommer inte längre vara rädd för att inte vara tillräckligt bra.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							4. Energi - Hur du skapar massvis av energi som räcker hela dagen
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								I denna del får du lära dig de bästa verktygen för att hålla en
								hög energinivå hela dagen. Förutom att gå igenom hur du optimalt
								hanterar din sömn, träning och fritid, kommer du även att lära
								dig hur du ska göra för att hantera dina tankar och känslor för
								att få massvis av energi. Efter denna del kommer du bygga upp
								rutiner och tankestrukturer som gör att du varje dag kommer
								känna dig mer och mer energifylld.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							5. Riktning - Hur du får din vision, dina mål och dina drömmar att
							bli verklighet
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Du skapar fullständig klarhet i varje ögonblick i ditt liv med
								hjälp av två saker – fokus och riktning. Att ha riktning i sitt
								liv innebär att veta var man är, vart man ska och hur man ska ta
								sig dit. Du kommer lära dig strategierna jag själv använder för
								att se till så att du varje dag inte bara gör många saker utan
								rätt saker som är i linje med vad du verkligen vill uppnå i ditt
								liv.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title className="font-display text-lg md:text-xl font-normal text-primary hover:text-primary-dark transition-colors">
							6. Fokus - Hur du skapar maximal produktivitet igenom effektiv men
							enkel struktur
						</Accordion.Title>
						<Accordion.Content>
							<p className="max-w-screen-sm text-text-dark">
								Del fem handlar om hur du tar vara på din tid och är så effektiv
								och produktiv som möjligt. Du lär dig skapa fullständig klarhet
								i vad som behöver göras och hur du bibehåller fokus på de
								viktigaste uppgifterna du har att göra för dagen. Du kommer även
								att lära dig hur du ska hantera både digitala och sociala
								distraktioner som hindrar dig från att nå dina mål.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
			</div>
			<Button type="link" href="#purchase">
				Ja jag vill skapa mer frihet redan idag
			</Button>
		</Section>
	);
};

export default ModulesSection;
