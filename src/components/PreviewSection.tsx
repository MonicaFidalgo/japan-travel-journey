import guidePreview from "../assets/guide.png";
import { Eye } from "lucide-react";

const PreviewSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            Sneak Peek
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preview the Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse at the beautifully designed pages waiting for you inside
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-sakura/30 to-coral/20 blur-3xl scale-105 rounded-3xl" />

            {/* Preview cards */}
            <div className="relative grid md:grid-cols-2 gap-6">
              {/* Main preview */}
              <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/50 transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={guidePreview}
                  alt="Sample page from Japan Travel Guide showing Tokyo itinerary"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              {/* Feature list */}
              <div className="flex flex-col justify-center space-y-6 p-4">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    📍 Detailed Day Plans
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Each day includes timing, locations, maps, and helpful tips
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    🎌 Cultural Context
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Understanding the "why" behind Japanese customs and
                    traditions
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    💡 Pro Tips
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Insider knowledge that only comes from personal experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
