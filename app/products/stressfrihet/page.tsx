import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import FAQSection from "./sections/faq";
import About from "@/components/About";
import Image from "next/image";

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
					<Button>Anmäl dig nu</Button>
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
				<Button>Vill du vara med?</Button>
			</Section>
			<About />
			<FAQSection />
			<Footer />
		</>
	);
}
