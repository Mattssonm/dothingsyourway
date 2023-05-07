import { MapPin, Phone, Box, AtSign, Facebook, Instagram } from "react-feather";

const Footer = () => {
	return (
		<footer className="bg-primary-dark">
			<div className="container mx-auto text-text-light text-sm md:text-base py-16 px-4 flex-column space-y-4 font-thin">
				<a href="/">
					<p className="font-display text-2xl uppercase">
						Do things <span className="font-bold">your</span> way
					</p>
				</a>
				<div className="divider border-b border-b-primary" />
				<section className="flex justify-between flex-col space-x-4 space-y-4 md:flex-row">
					<div className="flex flex-col space-y-2 text-primary-light">
						<h2 className="font-display text-xl uppercase font-normal text-text-light">
							Markus Mattsson
						</h2>
						<p className="flex items-center space-x-2">
							<MapPin className="icon" size="16" strokeWidth={1} />
							<span>Broddesonsgatan 24, 30234 Halmstad</span>
						</p>
						<p className="flex items-center space-x-2">
							<Phone size="16" strokeWidth={1} />
							<span>073 81 80 343</span>
						</p>
						<p className="flex items-center space-x-2">
							<Box size="16" strokeWidth={1} />
							<span> Org.nr: SE900306053101 </span>
						</p>
					</div>
					<div className="text-right flex flex-col space-y-2 text-primary-light items-end">
						<h2 className="font-display text-xl uppercase font-normal text-text-light">
							Sociala Medier
						</h2>
						<a
							href="mailto:markus@dothingsyourway.com"
							className="flex items-center space-x-2 hover:text-text-light transition-colors"
						>
							<span> markus@dothingsyourway.com </span>
							<AtSign size="16" strokeWidth={1} />
						</a>
						<a
							href="https://www.facebook.com/dothingsyourway"
							target="_blank"
							className="flex items-center space-x-2 hover:text-text-light transition-colors"
						>
							<span>facebook.com/dothingsyourway</span>
							<Facebook size="16" strokeWidth={1} />
						</a>
						<a
							href="https://www.instagram.com/dothingsyourway"
							target="_blank"
							className="flex items-center space-x-2 hover:text-text-light transition-colors"
						>
							<span>dothingsyourway</span>
							<Instagram size="16" strokeWidth={1} />
						</a>
					</div>
				</section>
				<div className="divider border-b border-b-primary" />
				<section className="flex flex-row justify-between text-xs md:text-sm text-primary-light">
					<div className="flex flex-col space-y-2">
						<a
							href="/integritetspolicy"
							className="hover:text-text-light transition-colors"
						>
							Integritetspolicy
						</a>
						<a
							href="https://www.flaticon.com/authors/gowi"
							target="_blank"
							className="hover:text-text-light transition-colors"
						>
							Icons by GOWI
						</a>
					</div>
					<div>
						<p>© 2022 Markus Mattsson</p>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
