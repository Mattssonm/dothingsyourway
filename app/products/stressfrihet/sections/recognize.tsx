import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";

const RecognizeSection = () => {
	return (
		<>
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
								Du är trött på att <span className="font-bold">må dåligt av stressen</span>
							</li>
							<li className="list-disc">
								Du känner att du <span className="font-bold">aldrig hinner ikapp</span> och att det hela tiden är
								mer och mer att göra
							</li>
							<li className="list-disc">
								Du tror att du kanske <span className="font-bold">måste sänka dina ambitioner</span> och
								kompromissa med dina drömmar
							</li>
							<li className="list-disc">
								<span className="font-bold">Du är egenföretagare</span> och känner att ditt företags ekonomi är
								hotat om du inte hittar ett sätt att få mer gjort
							</li>
							<li className="list-disc">
								<span className="font-bold">Du vill starta företag</span> men är rädd att du aldrig kommer få
								tillräckligt med tid och energi att våga satsa på det
							</li>
							<li className="list-disc">
								Du har <span className="font-bold">dåligt samvete</span> för att du inte kan ge familj och vänner
								tilläckligt av din uppmärksamhet
							</li>
							<li className="list-disc">
								Du upplever att hur mycket du än försöker skapa struktur och
								rutin <span className="font-bold">så blir allting rörigt ändå</span>
							</li>
						</ul>
					</div>
				</div>
			</Section>
			<Section className="bg-primary-dark flex flex-col items-center">
				<h2 className="font-display text-3xl md:text-5xl text-primary-light">
					Då har du kommit helt rätt!
				</h2>
				<p className="italic pb-8 text-primary-light">
					Faktum är att jag vet precis hur frustrerande det är...
				</p>
				<Button type="link" href="#purchase">
					Jag vill ha tillgång till kursen nu!
				</Button>
			</Section>
		</>
	);
};

export default RecognizeSection;
