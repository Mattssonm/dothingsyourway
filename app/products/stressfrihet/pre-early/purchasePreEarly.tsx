import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";
import RemainingSpots from "../sections/remainingSpots";

const PurchaseSection = () => {
	return (
		<Section
			className="flex flex-col items-center bg-secondary-dark gap-16"
			id="purchase"
		>
			<h2 className="font-display text-white text-3xl md:text-5xl uppercase text-center">
				Bli fri från stress idag!
			</h2>
			<Image
				src="/images/organizer.svg"
				width={400}
				height={250}
				alt="Illustration of a woman and a man sitting in chairs discussing"
			/>
			<div className="bg-background p-16 rounded-2xl flex flex-col gap-4 max-w-screen-md items-center text-left">
				<p className="text-xs uppercase text-gray-500 tracking-wide">
					Stressfrihet - 12-veckorsprogrammet
				</p>
				<h3 className="font-display text-xl md:text-2xl w-full text-secondary-darkest">
					Upplägg
				</h3>
				<p>
					Programmet består av sex delar och pågår under 12 veckor. Du får
					tillgång till alla videor och övningar idag och sen ses vi varje vecka
					för gruppcoaching. Där får du chans och ställa frågor och få coaching
					så att du direkt ska kunna tillämpa dina nya kunskaper.
				</p>
				<h3 className="font-display text-xl md:text-2xl w-full text-secondary-darkest">
					När sätter det igång?
				</h3>
				<p>
					Kurstart är den <span className="font-bold">tisdagen den 13 Juni</span>. Alla tillfällen är på tisdagar
					mellan kl 18:00 – 19:15. Vecka 29 och 30 är det semesteruppehåll. Därför blir det sista tillfället den 12 September.
				</p>
				<h3 className="font-display text-xl md:text-2xl w-full text-secondary-darkest">
					Vad du får:
				</h3>
				<ul className="list-disc ml-8 flex flex-col gap-4">
					<li>
						Sex moduler med tillhörande arbetsmaterial (pdf:er, övningar m.m.) 
						<span className="italic font-bold">(värde 16 000 kr)</span>
					</li>
					<li>
						12 gruppcoachningstillfällen 
						<span className="italic font-bold">(värde 15 000 kr)</span>
					</li>
					<li>
						Tre månaders tillgång till sluten Facebookgrupp där där du kan få
						svar på dina frågor och där vi gemensamt pushar varandra{" "}
						<span className="italic font-bold">(värde 6000 kr)</span>
					</li>
					<li>
						<span className="font-bold">BONUS 1!</span> - 
						En kopia av mitt moderna och avancerade affärssystem som jag själv
						använder för mitt företagande, min personliga utveckling och
						produktivitet. Detta system får du behålla för alltid och jag kommer
						lära dig hur du anpassar det efter dina behov 
						<span className="italic font-bold">(värde 15 000 kr)</span>
					</li>
					<li>
						<span className="font-bold">BONUS 2!!</span> – Dessutom kommer du få videoserien {`"Hållbara Dagar"`}, som
						består av tre videor på sammanlagt en timme som lär dig allt om hur
						du skapar hållbarhet i din energi och ekonomi 
						<span className="italic font-bold">(värde 2000 kr)</span>
					</li>
				</ul>
				<h3 className="font-bold">Totalt värde: 54 000 kr</h3>
				<h3 className="font-bold text-xl md:text-2xl ">Priset för kursen: 9970 kr</h3>
				<h3 className="font-bold mt-10 text-xl md:text-2xl "><span className="text-red-600">JUST NU!</span></h3>
				<p>De 5 första som anmäler sig innan den 21 maj får Pre-Early Bird <span className="text-red-600 font-bold">rabatt på 3000 kr.</span></p>

				<Image
					className="rounded-xl"
					width="400"
					height="150"
					src="https://automatehero.io/api/path/UkJITm85TFdRd1RX/gif"
					alt="countdown"
				/>
				<h3>När timern gått ner kommer priset höjas</h3>


				<h3 className="font-bold mt-10 text-xl md:text-2xl "> Pre-Early Bird pris: <span className="text-red-600">6970 kr</span></h3>
				<Button
					variant="secondary"
					type="link"
					href="https://automatehero.io/api/path/UkJDTG85TFdRd1RW"
					target="_blank"
				>
					Reservera min plats nu
				</Button>
				<RemainingSpots />
			</div>
		</Section>
	);
};

export default PurchaseSection;
