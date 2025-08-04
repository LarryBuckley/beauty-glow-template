import { Button } from "@/components/ui/button";
import { Calendar, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-beauty-rose">
                <Sparkles className="h-5 w-5" />
                <span className="font-inter text-sm font-medium tracking-wide uppercase">
                  Professional Beauty Services
                </span>
              </div>
              
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Enhance Your
                <span className="text-transparent bg-gradient-beauty bg-clip-text block">
                  Natural Beauty
                </span>
              </h1>
              
              <p className="font-inter text-lg text-muted-foreground max-w-md leading-relaxed">
                Expert beauty services tailored to bring out your best self. 
                From precision brows to luxurious lashes, we craft perfection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="beauty" size="lg" className="font-inter font-medium">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
              <Button variant="elegantOutline" size="lg" className="font-inter font-medium">
                View Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-beauty-rose text-beauty-rose" />
                ))}
                <span className="font-inter text-sm text-muted-foreground ml-2">
                  500+ Happy Clients
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Services Preview */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-beauty max-w-md">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Popular Services
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Microblading & Brow Shaping", price: "$180", time: "2.5 hrs" },
                  { name: "Classic Lash Extensions", price: "$120", time: "2 hrs" },
                  { name: "Luxury Facial Treatment", price: "$95", time: "1.5 hrs" },
                ].map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-beauty-cream last:border-0">
                    <div>
                      <p className="font-inter font-medium text-foreground">{service.name}</p>
                      <p className="font-inter text-sm text-muted-foreground">{service.time}</p>
                    </div>
                    <p className="font-inter font-semibold text-beauty-rose">{service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};