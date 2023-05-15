import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FAQSection from "../sections/faq";
import About from "@/components/About";
import ModulesSection from "../sections/modules";
import TestimonialsSection from "../sections/testimonials";
import HeroSection from "./heroPreEarly";
import VideoSection from "../sections/video";
import RecognizeSection from "../sections/recognize";
import TimeAndEnergySection from "../sections/timeAndEnergy";
import MethodSection from "../sections/method";
import HowToSection from "../sections/howTo";
import MindsetSection from "../sections/mindset";
import PurchaseSection from "./purchasePreEarly";

export const metadata = {
	title: "Do Things Your Way | Stressfrihet",
};

export default function Page() {
	return (
		<>
			<Header variant="light" />
			<HeroSection />
			<VideoSection />
			<RecognizeSection />
			<TimeAndEnergySection />
			<About />
			<MethodSection />
			<TestimonialsSection />
			<HowToSection />
			<ModulesSection />
			<PurchaseSection />
			<MindsetSection />
			<FAQSection />
			<Footer />
		</>
	);
}
