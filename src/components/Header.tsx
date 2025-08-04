import { Button } from "@/components/ui/button";
import { Phone, Instagram, Calendar } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-beauty-cream sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Business Name */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-beauty rounded-full flex items-center justify-center">
              <span className="text-white font-playfair font-semibold text-xl">B</span>
            </div>
            <div>
              <h1 className="font-playfair font-semibold text-2xl text-foreground">
                Bella Beauty Studio
              </h1>
              <p className="text-muted-foreground text-sm font-inter">
                Professional Beauty Services
              </p>
            </div>
          </div>

          {/* Navigation and Contact */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="font-inter text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#booking" className="font-inter text-foreground hover:text-primary transition-colors">
                Book Now
              </a>
              <a href="#contact" className="font-inter text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="beauty" size="sm">
                <Calendar className="h-4 w-4" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};