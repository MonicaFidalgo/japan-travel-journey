import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HighlightsSection from "../components/HighlightsSection";
import MidCTASection from "../components/MidCTASection";
import StorySection from "../components/StorySection";
import PreviewSection from "../components/PreviewSection";
import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <MidCTASection />
      <StorySection />
      <AboutSection />
      <PreviewSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
