import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import FAQSection from "./sections/faq";
import About from "@/components/About";
import Image from "next/image";
import CourseContent from "./sections/courseContent";
import Testimonials from "./sections/testimonials";
import RemainingSpots from "./sections/remainingSpots";

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
						Få mer gjort och må fantastiskt bra utan att stressa mindre
					</h3>
					<p className="font-thin italic w-96">
						En 12-veckors kurs där du lär dig förvandla all negativ stress till positiv igenom att installera nytt mindset. 
					</p>
					<Button>Ja jag vill bli fri från negativ stress</Button>
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
								Du är trött på att må dåligt av stressen
							</li>
							<li className="list-disc">
								Du känner att du aldrig hinner ikapp och att det hela tiden är
								mer och mer att göra
							</li>
							<li className="list-disc">
								Du tänker att du kanske måste sänka dina ambitioner och kompromissa med dina drömmar
							</li>
							<li className="list-disc">
								Du är egenföretagare och känner att ditt företags ekonomi är hotat om du inte hittar ett sätt att få mer gjort
							</li>
							<li className="list-disc">
								Du vill starta företag men är rädd att du aldrig kommer få tillräckligt med tid och
								energi att våga satsa på det
							</li>
							<li className="list-disc">
								Du har dåligt samvete för att du inte kan ge familj och vänner
								tilläckligt av din uppmärksamhet
							</li>
							<li className="list-disc">
								Du upplever att hur mycket du än försöker skapa struktur och
								rutin så blir allting rörigt ändå
							</li>
						</ul>
					</div>
				</div>
				{/* <div className="bg-primary-dark p-12 rounded-xl max-w-3xl text-text-light font-light">
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
				</div> */}
				<h2 className="font-display text-primary text-3xl md:text-5xl pt-32">
					Då har du kommit helt rätt!
				</h2>
				<p className="italic pb-8">
					Faktum är att jag vet precis hur frustrerande det är...
				</p>
				<Button>Ja jag vill bli fri från negativ stress</Button>
			</Section>
			<Section className="flex flex-col">
				<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Hanteringen av tiden och energin har aldrig varit viktigare
				</h2>
				<p>De absolut viktigaste du har i ditt liv är din tid och energi.</p>
				<p>
					Men stressen och en hela tiden ökande mängd av saker som måste göras,
					gör att det tiden och energin känns omöjligt att få till…
				</p>
				<p>
					Och det värsta av allt är att det bara blir värre desto längre tid man skjuter på det...
				</p>
				<p>
					Tänk på hur många år av ditt liv du redan mått dåligt av stressen och varit 
					frustrerad över att du inte kommer framåt snabbare.
				</p>
				<p>
					Hur länge till ska du försöka undvika stress och försöka återhämta dig mer när det uppenbarligen inte fungerar?
				</p>
				<p>
					Inte en sekund till...
				</p>
				<p>
					Eftersom du nu kommer lära dig hur förvandlar all negativ stress till positiv så du inte längre kommer behöver lika mycket återhämtning.
				</p>
				<p> 
					Med detta som jag ska visa dig nu kommer du kunna öka antalet timmar du kan jobba OCH må bra med 20 timmar i veckan. 
				</p>
				<p>
					Det är det du kan förvänta dig när du följer min metod för att jobba med stress, energi 
					och produktivitet.
				</p>
				<p>
					Igenom att jobba med ditt mindset, skapa bra strukturer och stärka dig som människa, kommer du må bättre och få mer resultat än du någonsin fått gjort.
				</p>
				<p>
					Detta har särskilt designats för dig som är eller vill bli företagare då det kräver en helt annan metod jämfört med annan stresshantering.
				</p>
			</Section>
			<About />
			<Section className="flex flex-col bg-primary-dark items-center">
				<h2 className="font-display text-3xl md:text-5xl uppercase mb-16 text-center text-primary-light">
					3 anledningar till varför denna metod förändrar allt 
				</h2>
				<div className="bg-background p-16 rounded-2xl max-w-4xl flex flex-col gap-4">
				<p>
					1. Stressen är bra för dig och du behöver inte undvika den om du lär
					dig skifta ditt mindset
				</p>
				<p>
					Den senaste forskningen har visat att när du ändrar ditt mindset och slutar tänka
					att stress är farligt, så kommer det inte längre vara farligt.
				</p>
				<p>
					Detta har upprepats på tusentals människor tidigare och du kommer lära
					dig allt i programmet för att göra detta med.
				</p>
				<p>
					2. Förbättra din självkänsla på djupet igenom att förändra din
					relation till dig själv
				</p>
				<p>
					Istället för att du ska skriva 3 saker som är bra med dig själv, som
					är oerhört ineffektivt, jobbar vi istället på djupet med den du
					verkligen är.
				</p>
				<p>
					När du lär dig detta kommer du inse att istället för att försöka höja
					dig själv i rankningen mot andra, så kommer du få en djupare
					förståelse om att vi alla är en och samma.
				</p>
				<p>
					Och därför kommer du aldrig igen höja eller sänka dig själv oavsett om
					du misslyckas eller lyckas.
				</p>
				<p>
					3. Du kommer få riktiga system som naturligt kommer göra dig produktiv och effektiv.
				</p>
				<p>
					Istället för att du ska få en massa produktivitetstips som är svåra att implementera,
					så kommer du få system, alltså faktiska datorsystem som kommer hjälpa
					dig att göra det du behöver.
				</p>
				<p>
					Du kommer få kunskaper varvat med mallar från den populära
					produktivitetsappen Notion, där du skapar rutiner och sätter mål som du
					sedan enkelt kan följa i din mobil, padda eller dator.
				</p>
				<p>
					Detta kommer göra att livet känns enkelt och roligt. 
					Du kommer ständigt vara i flow och varje dag komma närmare dagen då du lever ditt drömliv
				</p>
				<p>
					Och bäst av allt! 
				</p>
				<p>
					Det finns gott om personer som upplevt dessa resultat i deras egna liv!
				</p>
				</div>
			</Section>
			<Testimonials />
			<CourseContent />
			<Section className="flex flex-col items-center">
				<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
					Bli fri från stress idag!
				</h2>
				<h3>
					Upplägg
				</h3>
				<p>
					Programmet består av sex delar och pågår under 12 veckor. Du får
					tillgång till alla videor och övningar idag och sen ses vi varje vecka
					för gruppcoaching. Där får du chans och ställa frågor och få coaching
					så att du direkt ska kunna tillämpa dina nya kunskaper. Du kan läsa
					mer om varje del om du skrollar lite längre ner.
				</p>
				<h3>
					När sätter det igång?
				</h3>
				<p>
					Kurstart är den tisdagen den 13 Juni. Alla tillfällen är på tisdagar
					mellan kl 18:00 – 19:15.
				</p>
				<h3>
					Vad du får:
				</h3>
				<ul>
					<li>
						Sex moduler med tillhörande arbetsmaterial (pdf:er, övningar
						m.m.) (Värde 16000 kr).
					</li>
					<li>12 gruppcoachningstillfällen (Värde 15000 kr).</li>
					<li>
						Tre månaders i sluten facebook grupp där där du kan få svar på dina
						frågor och där vi gemensamt pushar varandra (värde 9000 kr).
					</li>
					<li>
						En kopia av mitt moderna och avancerade affärssystemet jag själv
						använder för mitt företagande, min personliga utveckling och
						produktivitet. Detta systemet får du behålla för alltid och jag
						kommer lära dig hur du anpassar det efter dina behov (Värde 15000
						kr).
					</li>
					<li>
						BONUS Dessutom kommer du få videoserien Hållbara Dagar, som är tre
						videor på sammanlagt en timme som lär dig allt om hur du skapar
						hållbarhet i din energi och ekonomi. (Värde 2000 kr).
					</li>
				</ul>
				<h3>Totalt värde: 57 000 kr</h3>

				<h3>Du betalat endast: 9970 kr</h3>
				<Button onClick={"https://automatehero.io/api/path/UkJDTG85TFdRd1RW"}>Jag vill ha tillgång till kursen nu!</Button>

				<h3>Sista dag för anmälan är den 4 Juni!</h3>
				<Image
					width="400"
					height="150"
					src="https://automatehero.io/api/path/UkJ1TW85TFdRd1RX/gif"
					alt="countdown"
				/>
				<RemainingSpots />
			</Section>
			<Section className="flex flex-col bg-primary-dark items-center">
					<h2 className="font-display text-3xl md:text-5xl uppercase mb-16 text-center text-primary-light">
						Fel mindset kan göra dig allvarligt sjuk! 
					</h2>
					<p>
						I en studie frågade man 30.000 amerikaner: 
					</p>
					<ul>
						<li>Hur mycket stress har du upplevt det senaste året?</li>
						<li>Tror du att stress är skadligt för din hälsa?</li>
					</ul>
					<p>8 år senare tittade man på vilka som fortfarande levde.</p>
					<p>Det visade sig att de som hade upplevt mycket stress hade ökad risk att dö med hela 43%!</p>
					<p>Men endast om man också trodde att stress var skadligt...</p>
					<p>Det absolut mest häpnadsväckande var att de som sa att de hade upplevt mycket stress och sa att stress inte påverkade deras hälsa hade lägst risk att dö av alla i hela studien!</p>
					<p>Mycket positiv stress är alltså det bästa för din hälsa medan mycket negativ stress är direkt livsfarligt!</p>
					<p>Jag menar inte att skrämma dig...</p>
					<p>Jag vill bara att du tar detta på allvar och gör allt du kan för att skydda din hälsa och uppnå det du vill i ditt liv.</p>
					<p>Så tryck på knappen nedan för att gå med i programmet och få tillgång till kursmaterialet idag!</p>
					<Button>Jag vill ha tillgång till kursen nu!</Button>
				</Section>
			<FAQSection />
			<Footer />
		</>
	);
}
