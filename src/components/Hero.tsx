import { Button } from "@/components/ui/button";
import { MapPin, Star, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-starry overflow-hidden">
      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-beauty-gold sparkle">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="absolute top-40 right-20 text-beauty-pink sparkle-delayed">
          <Sparkles className="h-3 w-3" />
        </div>
        <div className="absolute bottom-40 left-20 text-beauty-gold sparkle">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="absolute top-60 left-1/3 text-beauty-rose sparkle-delayed">
          <Sparkles className="h-3 w-3" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Welcome Message */}
          <div className="space-y-4">
            <p className="font-script text-2xl text-beauty-gold">
              Welcome to our website
            </p>
            
            <h1 className="font-script text-6xl md:text-8xl font-bold">
              <span className="text-transparent bg-gradient-beauty bg-clip-text">
                ENVYLASH
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-beauty-rose">
              <span className="font-script text-xl">By Evelyn</span>
              <div className="w-2 h-2 bg-beauty-rose rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="bg-beauty-rose/20 backdrop-blur-sm rounded-full px-4 py-2 border border-beauty-rose/30">
                <div className="flex items-center space-x-2 text-beauty-rose">
                  <MapPin className="h-4 w-4" />
                  <span className="font-inter text-sm font-medium">
                    LOCATED IN CALIFORNIA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Image Section */}
          <div className="bg-beauty-card/60 backdrop-blur-sm rounded-3xl p-8 border border-beauty-rose/20 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="font-script text-4xl text-beauty-rose mb-4">
                  Meet your Eyelash Tech
                </h2>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  EVELYN JOHN
                </h3>
              </div>
              
              <p className="font-inter text-muted-foreground leading-relaxed text-center">
                I'm Evelyn John, a certified lash tech and the heart behind
                Envylash! I specialize in creating beautiful, customized
                lashes that enhance your natural beauty. My goal is to give you
                the perfect set—whether you love a soft, natural look or bold,
                dramatic lashes.
              </p>
              
              <div className="flex items-center justify-center space-x-1 pt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-beauty-gold text-beauty-gold" />
                ))}
                <span className="font-inter text-sm text-muted-foreground ml-2">
                  500+ Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};