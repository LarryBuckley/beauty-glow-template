import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Instagram, Star, MapPin, Phone, Mail } from "lucide-react";

export const ThankYou = () => {
  return (
    <section className="py-20 bg-beauty-cream/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Thank You Message */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-beauty rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Thank You for Choosing Us
            </h2>
            
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're honored to be part of your beauty journey. Your trust in our expertise 
              means everything to us, and we can't wait to help you look and feel amazing.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Contact Info */}
            <Card className="bg-white/90 backdrop-blur-sm border-beauty-cream shadow-elegant text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-beauty-blush rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-beauty-rose" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">Call Us</h3>
                <p className="font-inter text-muted-foreground">Ready to book or have questions?</p>
                <p className="font-inter font-semibold text-beauty-rose">(555) 123-4567</p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-white/90 backdrop-blur-sm border-beauty-cream shadow-elegant text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-beauty-blush rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-beauty-rose" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">Visit Us</h3>
                <p className="font-inter text-muted-foreground">Come see our beautiful studio</p>
                <p className="font-inter font-semibold text-beauty-rose">123 Beauty Ave<br />City, State 12345</p>
              </CardContent>
            </Card>

            {/* Follow Us */}
            <Card className="bg-white/90 backdrop-blur-sm border-beauty-cream shadow-elegant text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-beauty-blush rounded-full flex items-center justify-center mx-auto">
                  <Instagram className="h-6 w-6 text-beauty-rose" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">Follow Us</h3>
                <p className="font-inter text-muted-foreground">See our latest work & tips</p>
                <p className="font-inter font-semibold text-beauty-rose">@bellabeautystudio</p>
              </CardContent>
            </Card>
          </div>

          {/* Final Message */}
          <Card className="bg-gradient-beauty text-white shadow-beauty">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="font-playfair text-2xl font-semibold">
                Ready to Glow?
              </h3>
              
              <p className="font-inter leading-relaxed max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust us with their beauty needs. 
                From precision brows to luxurious lashes, we're here to make you feel confident and beautiful.
              </p>

              <div className="flex items-center justify-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-white text-white" />
                ))}
                <span className="font-inter ml-3">500+ 5-Star Reviews</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="font-inter font-medium">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </Button>
                <Button variant="ghost" size="lg" className="font-inter font-medium text-white border-white hover:bg-white/20">
                  <Instagram className="h-5 w-5" />
                  Follow Our Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};