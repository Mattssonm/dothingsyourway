import Section from "@/components/Section";
import Image from "next/image";

const MethodSection = () => {
	return (
		<Section className="flex flex-col items-center">
			<h2 className="font-display text-3xl md:text-5xl uppercase mb-16 text-center text-primary">
				Tre anledningar till varför denna metod förändrar allt
			</h2>
			<Image
				src="/images/processing.png"
				width={700}
				height={600}
				alt="Illustration of a woman and a man sitting in chairs discussing"
			/>
			<div className="bg-background p-16 rounded-2xl max-w-4xl flex flex-col gap-4">
				<h2 className="font-display text-xl md:text-2xl text-primary">
					1. Stressen är bra för dig och du behöver inte undvika den om du lär
					dig skifta ditt mindset
				</h2>
				<p>
					Den senaste forskningen har visat att när du ändrar ditt mindset och
					slutar tänka att stress är farligt, så kommer det inte längre vara
					farligt.
				</p>
				<p>
					Detta har upprepats på tusentals människor tidigare och du kommer lära
					dig allt i programmet för att göra detta med.
				</p>
				<h2 className="font-display text-xl md:text-2xl text-primary mt-8">
					2. Förbättra din självkänsla på djupet genom att förändra din relation
					till dig själv
				</h2>
				<p>
					Istället för att du ska skriva tre saker som är bra med dig själv,
					vilket är oerhört ineffektivt, jobbar vi istället på djupet med den du
					verkligen är.
				</p>
				<p>
					När du lär dig detta kommer du inse att istället för att försöka höja
					dig själv i jämförelsen med andra, så kommer du få en djupare
					förståelse om att vi alla är en och samma.
				</p>
				<p>
					Därför kommer du aldrig igen höja eller sänka dig själv oavsett om du
					misslyckas eller lyckas!
				</p>
				<h2 className="font-display text-xl md:text-2xl text-primary mt-8">
					3. Du kommer lära dig system som leder till att du blir mer produktiv
					och effektiv.
				</h2>
				<p>
					Istället för att du ska få ett gäng produktivitetstips som är svåra
					att implementera, så kommer du få system, alltså faktiska datorsystem
					som kommer hjälpa dig att göra det du behöver.
				</p>
				<p>
					Du kommer få kunskaper varvat med mallar från den populära
					produktivitetsappen Notion, där du skapar rutiner och sätter mål som
					du sedan enkelt kan följa i din mobil, padda eller dator.
				</p>
				<p>
					Detta kommer göra att livet känns enkelt och roligt. Du kommer
					ständigt vara i flow och varje dag komma närmare dagen då du lever
					ditt drömliv.
				</p>
				<p>
					Och bäst av allt! – Det finns gott om personer som upplevt dessa
					resultat i deras egna liv!
				</p>
			</div>
		</Section>
	);
};

export default MethodSection;
