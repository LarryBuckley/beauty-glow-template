import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Scissors, 
  Palette, 
  Sparkles, 
  Clock, 
  Star,
  Calendar
} from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Brow & Lash Services",
    description: "Microblading, threading, tinting, and lash extensions",
    price: "From $45",
    duration: "45min - 3hrs",
    popular: true,
    services: ["Microblading", "Brow Lamination", "Lash Extensions", "Lash Lift & Tint"]
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Cuts, styling, color treatments, and special occasions",
    price: "From $65",
    duration: "1hr - 4hrs",
    popular: false,
    services: ["Hair Cut & Style", "Color Treatment", "Highlights", "Special Occasion"]
  },
  {
    icon: Palette,
    title: "Nail Art & Care",
    description: "Manicures, pedicures, gel polish, and custom nail art",
    price: "From $35",
    duration: "30min - 2hrs",
    popular: true,
    services: ["Classic Manicure", "Gel Polish", "Nail Art", "Pedicure"]
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Deep cleansing, anti-aging, and customized skincare",
    price: "From $75",
    duration: "1hr - 1.5hrs",
    popular: false,
    services: ["Classic Facial", "Anti-Aging Treatment", "Acne Treatment", "Hydrafacial"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-beauty-cream/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-beauty-rose mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="font-inter text-sm font-medium tracking-wide uppercase">
              Our Services
            </span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Beauty Treatments
          </h2>
          
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            Discover our comprehensive range of beauty services, each designed to enhance 
            your natural features with precision and artistry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="relative bg-white/90 backdrop-blur-sm border-beauty-cream shadow-elegant hover:shadow-beauty transition-all duration-300 group">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-beauty text-white px-4 py-1 rounded-full text-xs font-inter font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-beauty rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1 text-beauty-rose">
                        <span className="font-inter font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="font-inter">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Service List */}
                  <div className="pt-4 border-t border-beauty-cream">
                    <ul className="space-y-1 text-xs font-inter text-muted-foreground">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-beauty-rose" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="elegantOutline" 
                    size="sm" 
                    className="w-full mt-4 font-inter"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="beauty" size="lg" className="font-inter font-medium">
            View All Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};