import Section from "@/components/Section";
import Image from "next/image";

const TimeAndEnergySection = () => {
	return (
		<Section className="flex flex-col">
			<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
				Hantering av tid och energi har aldrig varit viktigare
			</h2>
			<div className="flex flex-col-reverse md:flex-row items-center mb-16">
				<div className="w-full basis-1/2 flex flex-col space-y-4 bg-background p-16 rounded-2xl text-text-dark">
					<h3 className="font-display mb-4 text-primary text-2xl">
						Det absolut viktigaste du har i ditt liv är din tid och energi...
					</h3>
					<p>
						Men stressen och en hela tiden ökande mängd av saker som måste göras
						gör att tiden och energin känns omöjligt att få till…
					</p>
					<p>
						Och det värsta av allt är att det bara blir värre ju längre man
						skjuter på det...
					</p>
					<p>
						Tänk på hur många år av ditt liv du redan mått dåligt av stressen
						och varit frustrerad över att du inte kommer framåt snabbare.
					</p>
					<p>
						Hur länge till ska du undvika stress och försöka återhämta dig mer
						när det uppenbarligen inte fungerar?
					</p>
					<p>Inte en sekund till...</p>
					<p>
						Eftersom du nu kommer lära dig hur du förvandlar negativ stress till
						positiv så att du inte längre kommer behöver lika mycket
						återhämtning!
					</p>
					<p>
						Med min metod för att jobba med stress, energi och produktivitet
						kommer du avsevärt kunna öka antalet timmar du kan jobba OCH må bra!
					</p>
					<p>
						Genom att jobba med ditt mindset, skapa bra strukturer och stärka
						dig som människa kommer du må bättre och få bättre resultat än
						någonsin tidigare.
					</p>
					<p>
						Detta program har dessutom särskilt designats för dig som är eller
						vill bli företagare då det kräver en helt annan metod jämfört med
						annan stresshantering.
					</p>
				</div>
				<div className="basis-2/5">
					<Image
						src="/images/time-management.png"
						width={700}
						height={600}
						alt="Illustration of woman sitting in front of a huge clock"
					/>
				</div>
			</div>
		</Section>
	);
};

export default TimeAndEnergySection;
