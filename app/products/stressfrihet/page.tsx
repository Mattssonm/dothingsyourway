import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import FAQSection from "./sections/faq";
import About from "@/components/About";
import Image from "next/image";
import CourseContent from "./sections/courseContent";
import Testimonials from "./sections/testimonials";
import Script from 'next/script';

export const metadata = {
	title: "Do Things Your Way | Stressfrihet",
};

export default function Page() {
	return (
		<>
			<Header variant="light" />
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
						Bli fri från stress, få massvis med energi och mer gjort än
						någonsin!
					</h3>
					<p className="font-thin italic w-96">
						Ett 12-veckors coaching- och utbildningsprogram med fokus på stress,
						energi och produktivitet
					</p>
					<Button>Ja jag vill bli fri från stress</Button>
				</div>
			</Section>
			<Section className="bg-primary-darkest flex items-center justify-center md:min-h-screen">
				<iframe
					title="vimeo-player"
					src="https://player.vimeo.com/video/819764615?h=658f9043e9"
					width="1024"
					height="768"
					allowFullScreen
				></iframe>
				<Button>Ja jag vill bli fri från stress</Button>
			</Section>
			<Section className="flex flex-col items-center">
				<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Känner du igen dig i något av det här?
				</h2>
				<div className="flex flex-col md:flex-row items-center mb-16">
					<div className="basis-2/5">
						<Image
							src="/images/working.png"
							width={700}
							height={600}
							alt="Markus"
						/>
					</div>
					<div className="w-full basis-3/5 flex flex-col space-y-4 text-text-dark">
						<ul className="pl-8 space-y-2 mb-8">
							<li className="list-disc">
								Du är orolig för vad stressen gör med din hälsa
							</li>
							<li className="list-disc">
								Du tänker att du kanske måste sänka dina ambitioner för att må
								bra
							</li>
							<li className="list-disc">
								Du känner att ditt företags ekonomi är hotad om du inte mår
								bättre snart
							</li>
							<li className="list-disc">
								Du är rädd att du aldrig kommer få tillräckligt med tid och
								energi att starta upp ditt företag
							</li>
							<li className="list-disc">
								Du har dåligt samvete för att du inte kan ge familj och vänner
								tilläckligt av din tid och energi
							</li>
							<li className="list-disc">
								Du känner att du aldrig hinner ikapp och att det hela tiden är
								mer och mer att göra
							</li>
							<li className="list-disc">
								Du upplever att hur mycket du än försöker skapa struktur och
								rutin så blir allting rörigt ändå
							</li>
						</ul>
					</div>
				</div>
				<div className="bg-primary-dark p-12 rounded-xl max-w-3xl text-text-light font-light">
					<ul className="list-disc pl-4 space-y-6">
						<li className="">
							Är du en <span className="font-bold">egenföretagare</span> som
							vill lära dig att hantera stress på ett sätt som faktiskt funkar
							för dom som har höga mål?
						</li>
						<li className="">
							Är du en <span className="font-bold">blivande företagare </span>
							som vill starta eget men tiden och energin räcker inte till för
							att satsa på företaget?
						</li>
						<li className="">
							Har du varit <span className="font-bold">utbränd</span> och vill
							få tillbaka all den energi du haft och mer därtill, trots att
							läkaren sagt att det aldrig kommer gå?
						</li>
						<li className="">
							Vill du se till så att du{" "}
							<span className="font-bold">aldrig riskerar</span> att gå i väggen
							och samtidigt få den snabbaste vägen till att känna dig fri från
							all stress i ditt liv?
						</li>
						<li className="">
							Vill du bygga upp en <span className="font-bold">struktur</span> i
							ditt liv som gör att du mår bra och får mer mycket gjort?
						</li>
					</ul>
				</div>
				<h2 className="font-display text-primary text-3xl md:text-5xl pt-32">
					Då har du kommit helt rätt!
				</h2>
				<p className="italic pb-8">
					Faktum är att jag vet precis hur frustrerande det är, så därför
					bestämde jag mig för att fixa det…
				</p>
				<Button>Ja jag vill bli fri från stress</Button>
			</Section>
			<Section className="flex flex-col items-center">
				<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Upplägg
				</h2>
				<p>Programmet består av sex delar och pågår under 12 veckor. Du får tillgång till alla videor och övningar idag och sen ses vi varje vecka för gruppcoaching. Där får du chans och ställa frågor och få coaching så att du direkt ska kunna tillämpa dina nya kunskaper. Du kan läsa mer om varje del om du skrollar lite längre ner.</p>
				<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					När sätter det igång?
				</h2>
				<p>Kurstart är den tisdagen den 13 Juni. Alla tillfällen är på tisdagar mellan kl 18:00 – 19:15.</p>
				<Button>Ja jag vill bli fri från stress</Button>
			</Section>
			<CourseContent/>
			<Section className="flex flex-col">				
				<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Hanteringen av tiden och energin har aldrig varit viktigare
				</h2>
				<p>
					De absolut viktigaste du har i ditt liv är din tid och energi. 
				</p>
				<p>
					Men stressen och en hela tiden ökande mängd av saker som måste göras, gör att det tiden och energin känns omöjligt att få till…
				</p>
				<p>
					Jag har träffat så många som har försökt i åratal att undvika stress för att må bättre. 
				</p>
				<p>
					Men hur fasen ska vi någonsin kunna undvika stress när den finns överallt? 
				</p>
				<p>
					Det går inte… 
				</p>
				<p>
					Dom flesta har provat på allt möjligt, avslappning, meditation, skogspromenader, terapi, yoga och att hänga upp och ner från taket samtidigt som man sjunga kumbaya. 
				</p>
				<p>
					Men inget har fungerat på djupet och vem sjutton har egentligen tid att lägga timmar varje dag på det?
				</p>
				<p>
					Det har aldrig någonsin varit så svårt att hantera stressen, när varje person måste göra mer och mer och världen blir allt mer komplex.
				</p>
				<p>
					Att du använder din tid och energi på ett optimalt sätt kommer direkt avgöra hur du mår, hur mycket pengar du tjänar och vad du kan åstadkomma i ditt liv. 
				</p>
				<p>
					Och det kräver experthjälp, strategisk planering och rätt metod för att få till detta…
				</p>
				<p>
					3 sätt detta är annorlunda än andra stressprogram:
				</p>
				<p>
					1. Stressen är bra för dig och du behöver inte undvika den om du lär dig skifta ditt mindset
				</p>
				<p>
					Forskningen har visat att när du ändrar ditt mindset och slutar tänka att stress är farligt, så kommer det inte längre vara farligt. 
				</p>
				<p>
					Detta har upprepats på tusentals människor tidigare och du kommer lära dig allt i programmet för att göra detta med. 
				</p>
				<p>
					2. Förbättra din självkänsla på djupet igenom att förändra din relation till dig själv
				</p>
				<p>
					Om du känner att du redan har en bra självkänsla så har du inte känt hur det är när den är riktigt, riktigt bra. 
				</p>
				<p>
					Istället för att du ska skriva 3 saker som är bra med dig själv, som är oerhört ineffektivt, jobbar vi istället på djupet med den du verkligen är. 
				</p>
				<p>
					När du lär dig detta kommer du inse att istället för att försöka höja dig själv i rankningen mot andra, så kommer du få en djupare förståelse om att vi alla är en och samma. 
				</p>
				<p>
					Och därför kommer du aldrig igen höja eller sänka dig själv oavsett om du misslyckas eller lyckas. 
				</p>
				<p>
					3. Inga fler produktivitetstips. Istället får du riktiga system som kommer tvinga dig att bli strukturerad och effektiv. 
				</p>
				<p>
					Istället för att du ska få en massa råd som är svåra att implementera, så kommer du få system, alltså faktiska datorsystem som kommer hjälpa dig att göra det du behöver.
				</p>
				<p>
					Du kommer få kunskaper varvat med mallar från en populär produktivitetsapp (Notion) där du skapar rutiner och sätter mål som du sedan enkelt kan följa i din mobil, padda eller dator. 
				</p>
				<p>
					Jag har själv varit utbränd. 
				</p>
				<p>
					Jag har själv haft problem med depression hela mitt vuxna liv.  
				</p>
				<p>
					Jag har haft så mycket problem så jag var tvungen att hitta en lösning. 
				</p>
				<p>
					Efter att ha prövat allt möjligt på mig själv så har jag utvecklat en metod som sedan testats och noggrant utvecklats på många stressade företagare. 
				</p>
				<p>
					Denna metod har jag sammanställt i en enkel, steg för steg process, för att du också ska få känna hur det är att leva i Stressfrihet.
				</p>
			</Section>
			<Section className="flex flex-col">
				<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Du kommer att öka din arbetsförmåga med minst 10 timmar i veckan…
				</h2>
				<p>
					När du följer den nya metoden för att jobba med stress så är det det du kan förvänta dig. 
				</p>
				<p>
					Materialet i detta program har tidigare endast varit tillgängligt i mina mer exklusiva coachingprogram som kostat minst 20.000 kr. 
				</p>
				<p>
					Men när du går med nu får du det för endast 9970 kr. 
				</p>
				<p>
					Detta är lösningen för dig som har testat allt för att bli fri från stressen men där inget funkat… 
				</p>
				<p>
					Det är eftersom jag inte lär ut att du ska undvika stressen utan istället skifta ditt mindset så att du inte längre har ont av den stress som oundvikligen kommer finnas i ditt liv.
				</p>
				<p>
					Detta är inte ännu en stresskurs som handlar om avslappning och att sänka kraven. 
				</p>
				<p>
					Istället behåller vi dina ambitioner och ändrar din relation till stress så du inte behöver lika mycket återhämtning som tidigare.
				</p>
				<p>
					Det totala värdet för detta är 57.000 kr men om du är snabb och snor åt dig en av de 5 första platserna får du allt detta för endast 6970 kr. 
				</p>
				<p>
					Dock finns det en hake… 
				</p>
				<p>
					Jag jobbar endast med personer som vill ha ett företag där det huvudsakliga mål är att faktiskt göra skillnad för andra. 
				</p>
				<p>
					Om du bara vill driva ditt företag för din egen skull eller vill försöka bli rik utan att ge något tillbaka, så är detta inte för dig. 
				</p>
				<p>
					Så länge du kan lova mig det så har vi en deal!
				</p>
				<p>
					Efter dessa 3 månader kommer du inte längre vara rädd för stressen. 
				</p>
				<p>
					Du kommer ha skapat en struktur som hjälper dig hålla koll på allt och som gör dig superproduktiv. 
				</p>
				<p>
					Du kommer känna att det är enkelt att stå upp för dig själv och du kommer må bättre än du någonsin gjort förut. 
				</p>
				<p>
					Och det är särskilt designat för dig som är eller vill bli företagare…
				</p>
				<p>
					Och bäst av allt! 
				</p>
				<p>
					Det finns gott om personer som kan intyga om att detta program har gjort oerhört stor skillnad i deras liv. 
				</p>
			</Section>
			<Testimonials />
			<About />
			<Section className="flex flex-col">
				<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Bli fri från stress redan idag!
				</h2>
				<h3 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Vad du får:
				</h3>
				<ul>
					<li>
						Sex moduler med tillhörande arbetsmaterial (pdf:er, övningar m.m.) (Värde 16000 kr).
					</li>
					<li>
						12 gruppcoachningstillfällen (Värde 15000 kr).
					</li>
					<li>
						Tre månaders i sluten facebook grupp där där du kan få svar på dina frågor och där vi gemensamt pushar varandra (värde 9000 kr).
					</li>
					<li>
						En kopia av mitt moderna och avancerade affärssystemet jag själv använder för mitt företagande, min personliga utveckling och produktivitet. Detta systemet får du behålla för alltid och jag kommer lära dig hur du anpassar det efter dina behov (Värde 15000 kr).
					</li>
					<li>
						BONUS Dessutom kommer du få videoserien Hållbara Dagar, som är tre videor på sammanlagt en timme som lär dig allt om hur du skapar hållbarhet i din energi och ekonomi. (Värde 2000 kr).
					</li>
					</ul>
				<h3>Totalt värde: 57 000 kr</h3>

				<h3>Du betalat endast: 9970 kr</h3>
				<Button>Ja jag vill bli fri från stress</Button>
				
				<h3>Sista dag för anmälan är den 4 Juni!</h3>
				<img src="https://automatehero.io/api/path/UkJ1TW85TFdRd1RX/gif"/>
				{/* <p>Total: [!total!] Taken: [!taken!] Remaining:[!remaining!]</p> */}
				{/* <Script src="https://automatehero.io/js/scarcity.js?v=2&hero=UkJDTG85TFdRd1RX" /> */}
			</Section>
			<FAQSection />
			<Footer />
		</>
	);
}
