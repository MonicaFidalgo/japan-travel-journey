import { Button } from "./Button";
import { ArrowRight, Sparkles } from "lucide-react";
import guidePreview from "../assets/banner-japan-guide.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Decorative sakura petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-sakura rounded-full opacity-40 animate-float" />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-sakura rounded-full opacity-30 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-5 h-5 bg-sakura rounded-full opacity-25 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-4 h-4 bg-sakura rounded-full opacity-35 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Personal Travel Guide
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Journey Through <span className="text-gradient">Japan</span>
            </h1>

            <p className="text-xl md:text-2xl font-display text-muted-foreground">
              15-Day Adventure Guide
            </p>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              A tried-and-tested itinerary from someone who's been there.
              Everything you need for an unforgettable journey through the Land
              of the Rising Sun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="#get-guide">
                  Get Your Guide Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:bg-primary/5 px-8 py-6 text-lg"
                asChild
              >
                <a href="#whats-inside">See What's Inside</a>
              </Button>
            </div>
          </div>

          {/* Right content - Guide preview */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-sakura/40 to-coral/30 blur-3xl scale-110 rounded-3xl" />

              {/* Guide preview image */}
              <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/50 transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={guidePreview}
                  alt="Journey Through Japan Guide Preview - Tokyo Itinerary Page"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground-2 px-4 py-2 rounded-full font-semibold shadow-lg animate-float">
                ✨ 15 Days of Magic
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
