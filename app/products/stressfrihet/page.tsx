import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";

export const metadata = {
	title: "Do Things Your Way | Stressfrihet",
};

export default function Page() {
	return (
		<>
			<Header variant="light" />
			<section className="bg-primary-dark">
				<div className="container mx-auto text-text-light text-sm md:text-base py-64 px-4 flex-column justify-end text-right space-y-4">
					<h2 className="text-4xl md:text-6xl font-display uppercase">
						Stressfrihet
					</h2>
					<h3 className="font-display text-xl md:text-2xl">
						Öka din arbetsförmåga med 10 timmar i veckan OCH må bra!
					</h3>
					<p className="font-thin italic">
						Bli fri från stress, få massvis med energi och mer gjort än
						någonsin!
					</p>
					<Button>Köp nu</Button>
				</div>
			</section>
		</>
	);
}
