import Button from "@/components/Button";
import Section from "@/components/Section";

const VideoSection = () => {
	return (
		<Section className="bg-primary-darkest">
			<div className="aspect-w-16 aspect-h-9">
				<iframe
					allow="autoplay; fullscreen; picture-in-picture"
					src="https://player.vimeo.com/video/819764615?h=658f9043e9"
					allowFullScreen
				></iframe>
			</div>
			<div className="flex items-center flex-col pt-8">
				<Button type="link" href="#purchase" className="my-auto">
					Ja, jag vill bli fri från stress!
				</Button>
			</div>
		</Section>
	);
};

export default VideoSection;
