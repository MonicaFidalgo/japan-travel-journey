import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HighlightsSection from "../components/HighlightsSection";
import StorySection from "../components/StorySection";
import PreviewSection from "../components/PreviewSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <StorySection />
      <PreviewSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
