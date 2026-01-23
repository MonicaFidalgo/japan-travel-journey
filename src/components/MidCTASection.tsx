import { Button } from "./Button";
import { ArrowRight, Sparkles } from "lucide-react";

const MidCTASection = () => {
  const purchaseLink = "https://gumroad.com/l/japan-guide";

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-sakura/20 to-coral/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Ready to start planning?
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Get Your Complete Japan Guide Now
          </h3>

          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Everything you need for an unforgettable 15-day adventure – from
            detailed itineraries to insider tips.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
              Get the Guide
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MidCTASection;
