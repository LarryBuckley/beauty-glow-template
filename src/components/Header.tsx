import { Button } from "@/components/ui/button";
import { Phone, Instagram, Calendar, Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-beauty-card/95 backdrop-blur-md border-b border-beauty-rose/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-beauty-gold sparkle" />
            </div>
            <div>
              <h1 className="font-script text-3xl font-bold text-beauty-rose">
                ENVYLASH
              </h1>
              <p className="font-inter text-xs text-beauty-gold -mt-1">
                By Evelyn
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-inter text-sm text-foreground hover:text-beauty-rose transition-colors">
              Services
            </a>
            <a href="#booking" className="font-inter text-sm text-foreground hover:text-beauty-rose transition-colors">
              Book Now
            </a>
            <a href="#reviews" className="font-inter text-sm text-foreground hover:text-beauty-rose transition-colors">
              Reviews
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-beauty-rose hover:text-beauty-gold">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-beauty-rose hover:text-beauty-gold">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="beauty" size="sm" className="hidden sm:flex">
              <Calendar className="h-4 w-4" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};