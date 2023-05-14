import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";
import RemainingSpots from "./remainingSpots";

const PurchaseSection = () => {
  return (
		<Section className="flex flex-col items-center" id="purchase">
			<h2 className="font-display text-primary text-3xl md:text-5xl uppercase mb-16 text-center">
				Bli fri från stress idag!
			</h2>
			<h3>Upplägg</h3>
			<p>
				Programmet består av sex delar och pågår under 12 veckor. Du får
				tillgång till alla videor och övningar idag och sen ses vi varje vecka
				för gruppcoaching. Där får du chans och ställa frågor och få coaching så
				att du direkt ska kunna tillämpa dina nya kunskaper. Du kan läsa mer om
				varje del om du skrollar lite längre ner.
			</p>
			<h3>När sätter det igång?</h3>
			<p>
				Kurstart är den tisdagen den 13 Juni. Alla tillfällen är på tisdagar
				mellan kl 18:00 – 19:15.
			</p>
			<h3>Vad du får:</h3>
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
					produktivitet. Detta systemet får du behålla för alltid och jag kommer
					lära dig hur du anpassar det efter dina behov (Värde 15000 kr).
				</li>
				<li>
					BONUS Dessutom kommer du få videoserien Hållbara Dagar, som är tre
					videor på sammanlagt en timme som lär dig allt om hur du skapar
					hållbarhet i din energi och ekonomi. (Värde 2000 kr).
				</li>
			</ul>
			<h3>Totalt värde: 57 000 kr</h3>

			<h3>Du betalat endast: 9970 kr</h3>
			<Button
				type="link"
				href="https://automatehero.io/api/path/UkJDTG85TFdRd1RW"
				target="_blank"
			>
				Jag vill ha tillgång till kursen nu!
			</Button>

			<h3>Sista dag för anmälan är den 4 Juni!</h3>
			<Image
				width="400"
				height="150"
				src="https://automatehero.io/api/path/UkJ1TW85TFdRd1RX/gif"
				alt="countdown"
			/>
			<RemainingSpots />
		</Section>
	);
}

export default PurchaseSection;