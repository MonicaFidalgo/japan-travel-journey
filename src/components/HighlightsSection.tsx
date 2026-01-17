import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Tokyo",
    days: "Days 1-5",
    highlights: [
      "Shibuya & Harajuku",
      "Senso-ji Temple",
      "Akihabara",
      "TeamLab Borderless",
    ],
  },
  {
    name: "Kyoto",
    days: "Days 6-10",
    highlights: [
      "Fushimi Inari",
      "Arashiyama Bamboo",
      "Kinkaku-ji",
      "Gion District",
    ],
  },
  {
    name: "Osaka",
    days: "Days 11-13",
    highlights: [
      "Dotonbori",
      "Osaka Castle",
      "Street Food Tour",
      "Day trip to Nara",
    ],
  },
  {
    name: "Hidden Gems",
    days: "Days 14-15",
    highlights: [
      "Local experiences",
      "Off-the-beaten-path",
      "Secret spots",
      "Final adventures",
    ],
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your 15-Day Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the electric energy of Tokyo to the serene temples of Kyoto
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group relative bg-card rounded-2xl p-6 shadow-md hover:shadow-xl border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              {/* Day badge */}
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {destination.days}
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {destination.name}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {destination.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-sakura rounded-full flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
