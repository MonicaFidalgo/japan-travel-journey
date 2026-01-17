import { Quote } from "lucide-react";

const StorySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Quote icon column */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-16 h-16 rounded-full bg-sakura/20 flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Story content */}
            <div className="md:col-span-4 text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why I Created This Guide
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Japan had been on my bucket list for years. When I finally
                  went, I spent{" "}
                  <span className="text-foreground font-medium">
                    months researching, planning, and organizing
                  </span>{" "}
                  every detail of my 15-day trip.
                </p>

                <p>
                  The result? An incredible journey that exceeded all my
                  expectations. From getting lost in Tokyo's neon-lit streets to
                  finding peace in Kyoto's ancient temples, every day was
                  perfectly balanced between adventure and discovery.
                </p>

                <p>
                  I loved the experience so much that I decided to turn my
                  entire planning process into this comprehensive guide.{" "}
                  <span className="text-foreground font-medium">
                    This isn't a generic travel blog
                  </span>{" "}
                  – it's a personal, tried-and-tested roadmap that I wish I had
                  when I started planning.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-foreground font-display text-xl italic">
                  "Every recommendation, every tip, every itinerary detail comes
                  from real experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
