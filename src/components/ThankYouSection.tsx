import { Button } from "@/components/ui/button";
import { Heart, Instagram, Sparkles } from "lucide-react";

export const ThankYouSection = () => {
  return (
    <section className="py-20 bg-gradient-starry">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Sparkles */}
          <div className="relative">
            <div className="absolute -top-10 left-10 text-beauty-gold sparkle">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="absolute -top-5 right-20 text-beauty-pink sparkle-delayed">
              <Sparkles className="h-3 w-3" />
            </div>
          </div>
          
          <div className="bg-beauty-card/80 backdrop-blur-sm rounded-3xl p-12 border border-beauty-rose/20 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Heart className="h-8 w-8 text-beauty-rose fill-current" />
              </div>
              
              <h2 className="font-script text-5xl text-beauty-rose">
                Thank you
              </h2>
              
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to get those stunning lashes? Book your appointment today and let's enhance your natural beauty together!
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="font-inter text-sm text-beauty-gold">
                @YOURSOCIALMEDIA
              </p>
              
              <p className="font-inter text-sm text-foreground">
                TAG US IN YOUR EYELASH EXTENSION!
              </p>
              
              <div className="flex justify-center space-x-4 pt-4">
                <div className="bg-beauty-rose/10 p-2 rounded-lg border border-beauty-rose/20">
                  <div className="w-12 h-12 bg-beauty-rose/20 rounded"></div>
                </div>
                <div className="bg-beauty-rose/10 p-2 rounded-lg border border-beauty-rose/20">
                  <div className="w-12 h-12 bg-beauty-gold/20 rounded"></div>
                </div>
                <div className="bg-beauty-rose/10 p-2 rounded-lg border border-beauty-rose/20">
                  <div className="w-12 h-12 bg-beauty-pink/20 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="beauty" size="lg" className="font-inter font-medium">
                Book Your Lashes
              </Button>
              <Button variant="elegantOutline" size="lg" className="font-inter font-medium">
                <Instagram className="h-5 w-5" />
                Follow Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};