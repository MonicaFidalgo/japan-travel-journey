import aboutPhoto from "../assets/about-photo.webp";

const AboutSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative order-2 md:order-1">
              <div className="relative z-10">
                <img
                  src={aboutPhoto}
                  alt="Travel guide author exploring Japan during autumn"
                  className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-sakura/30 rounded-2xl -z-0 max-w-md mx-auto" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-sakura/30 text-primary font-medium rounded-full text-sm mb-4">
                Meet Your Guide
              </span>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hi, I'm Your Japan Travel Companion
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  After years of dreaming about Japan, I finally took the leap
                  and spent 15 unforgettable days exploring everything from
                  Tokyo's bustling streets to Kyoto's serene temples.
                </p>

                <p>
                  I'm not a travel blogger or a professional writer – just
                  someone who{" "}
                  <span className="text-foreground font-medium">
                    fell completely in love with Japan
                  </span>{" "}
                  and wanted to share everything I learned along the way.
                </p>

                <p>
                  This guide is the result of countless hours of research, real
                  on-the-ground experience, and a passion for helping others
                  have their own incredible Japanese adventure.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg shadow-sm">
                  <span className="text-2xl">🇯🇵</span>
                  <span className="text-sm font-medium text-foreground">
                    15 Days Explored
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg shadow-sm">
                  <span className="text-2xl">📍</span>
                  <span className="text-sm font-medium text-foreground">
                    7+ Cities Visited
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg shadow-sm">
                  <span className="text-2xl">💕</span>
                  <span className="text-sm font-medium text-foreground">
                    Made with Love
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
