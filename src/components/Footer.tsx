import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold text-background">
              Journey Through Japan
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            Made with <Heart className="w-4 h-4 text-sakura fill-sakura mx-1" />{" "}
            for Japan lovers
          </div>

          <div className="text-sm text-background/60">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
