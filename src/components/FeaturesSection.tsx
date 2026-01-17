import { Calendar, Heart, Compass } from "lucide-react";
import { Card, CardContent } from "./Card";

const features = [
  {
    icon: Calendar,
    title: "Day-by-Day Itinerary",
    description:
      "15 perfectly planned days covering Tokyo, Kyoto, Osaka, and hidden gems. Wake up knowing exactly what to do, see, and experience.",
    highlight: "15 Days",
  },
  {
    icon: Heart,
    title: "Cultural Tips & Etiquette",
    description:
      "Essential Japanese customs, phrases, and social norms to help you blend in and show respect. From bowing to chopstick etiquette.",
    highlight: "100+ Tips",
  },
  {
    icon: Compass,
    title: "Practical Logistics",
    description:
      "JR Pass strategies, transportation guides, budgeting tips, and packing lists. Everything you need to travel smart and save money.",
    highlight: "Complete Guide",
  },
];

const FeaturesSection = () => {
  return (
    <section id="whats-inside" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Inside the Guide?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your perfect Japan adventure, curated from
            real experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative bg-card border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sakura/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardContent className="p-8 relative">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {feature.highlight}
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
