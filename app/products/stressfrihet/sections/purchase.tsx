import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";
import RemainingSpots from "./remainingSpots";

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
				{/* <p className="text-xs uppercase text-gray-500 tracking-wide">
					Stressfrihet - 12-veckorsprogrammet
				</p>
				<Image
					className="rounded-xl"
					width="400"
					height="150"
					src="https://automatehero.io/api/path/UkJ1TW85TFdRd1RX/gif"
					alt="countdown"
				/> */}
				{/* <h3>Sista dag för anmälan är den 18 Juni!</h3> */}
				{/* <h3 className="font-display text-xl md:text-2xl w-full text-secondary-darkest">
					Upplägg
				</h3>
				<p>
					Kursen innehåller sex moduler som du kan arbeta med i egen takt. Du får
					tillgång till alla videor och övningar idag och sen ses vi varje vecka
					för gruppcoaching. Där får du chans och ställa frågor och få coaching
					så att du direkt ska kunna tillämpa dina nya kunskaper.
				</p>
				<h3 className="font-display text-xl md:text-2xl w-full text-secondary-darkest">
					När sätter det igång?
				</h3>
				<p>
					Kurstart är den <span className="font-bold">tisdagen den 20 Juni</span> och innehåller 12 coachingtillfällen. Alla tillfällen är på tisdagar
					mellan kl 18:00 – 19:15. Vecka 29 och 30 är det semesteruppehåll. Därmed blir det sista tillfället den 19 September.
				</p> */}
				<h3 className="font-display text-xl md:text-2xl w-full text-secondary-darkest">
					Vad du får:
				</h3>
				<ul className="list-disc ml-8 flex flex-col gap-4">
					<li>
						Sex moduler med tillhörande arbetsmaterial (pdf:er, övningar m.m.) 
						<p><span className="italic font-bold">(värde 9 000 kr)</span></p>
					</li>
					<li>
						<span className="font-bold">Bonus 1</span> - 
						En timmes coachingsamtal med mig, Markus. Detta bokas in direkt efter att du köpt 
						kursen för att ge dig den absolut bästa starten på ditt nya liv i stressfrihet.
						<p><span className="italic font-bold">(värde 1 000 kr)</span></p>
					</li>
					<li>
						<span className="font-bold">Bonus 2</span> – Dessutom kommer du få videoserien {`"Hållbara Dagar"`}, som
						består av tre videor på sammanlagt en timme som lär dig allt om hur
						du skapar hållbarhet i din energi och ekonomi 
						<p><span className="italic font-bold">(värde 500 kr)</span></p>
					</li>
				</ul>
				<h3 className="">Totalt värde: 10 500 kr</h3>
				{/* <h3 className="font-bold mt-10 text-xl md:text-2xl">Pris: 2 970 kr</h3> */}
				<h3 className="font-display text-xl md:text-2xl text-secondary-darkest">
					Pris: 2 970 kr
				</h3>
				<h2 className="">Just nu får du <span className="font-bold text-red-600">50% Rabatt</span> under begränsad tid</h2>
				{/* <h3 className="font-bold mt-10 text-xl md:text-2xl "> Du betalar alltså endast: <span className="text-red-600">1 485 kr</span></h3> */}
				<h3 className="mb-5 font-display text-xl md:text-2xl text-secondary-darkest">
					Du betalar alltså endast: <span className="text-red-600">1485 kr</span>
				</h3>
				<Button
					variant="secondary"
					type="link"
					href="https://dothingsyourway.thrivecart.com/stressfrihet/"
					target="_blank"
				>
					Ge mig tillgång till kursen nu!
				</Button>
			</div>
		</Section>
	);
};

export default PurchaseSection;
