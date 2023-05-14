import Button from "@/components/Button";
import Section from "@/components/Section";

const VideoSection = () => {
  return (
		<Section className="bg-primary-darkest flex flex-col items-center justify-center md:min-h-screen">
			<iframe
				title="vimeo-player"
				src="https://player.vimeo.com/video/819764615?h=658f9043e9"
				width="1024"
				height="600"
				allowFullScreen
			></iframe>
			<Button type="link" href="#purchase">
				Ja, jag vill bli fri från stress!
			</Button>
		</Section>
	);
}

export default VideoSection;