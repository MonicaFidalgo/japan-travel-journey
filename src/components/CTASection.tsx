import { Button } from "./Button";
import { ArrowRight, Check, Download } from "lucide-react";

const benefits = [
  "Instant PDF download",
  "15 days of detailed itineraries",
  "Cultural tips & etiquette guide",
  "Practical logistics & budgeting",
  "Personal recommendations",
  "Lifetime access & updates",
];

const CTASection = () => {
  // Replace this with your actual Gumroad or Buy Me a Coffee link
  const purchaseLink = "https://gumroad.com/l/japan-guide";

  return (
    <section
      id="get-guide"
      className="py-20 bg-gradient-to-br from-primary/5 via-sakura/10 to-coral/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground-2 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Download className="w-4 h-4" />
                  Instant Download
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Start Your Japan Adventure Today
                </h2>

                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Get the complete guide and start planning your dream trip to
                  Japan
                </p>
              </div>

              {/* Benefits list */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                  asChild
                >
                  <a
                    href={purchaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Your Guide Now
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                </Button>

                <p className="mt-4 text-sm text-muted-foreground">
                  Secure payment via Gumroad • Instant PDF delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
