import { AlertTriangle, Sparkles } from "lucide-react";

export const AppointmentPrep = () => {
  const prepItems = [
    "Please arrive with clean, makeup-free eyes.",
    "Avoid curling lashes 24 hours before.",
    "Wear comfy clothes—You'll be lying down for a while.",
    "Remove contacts for comfort during your appointment."
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-beauty-card/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-beauty-rose/30 relative overflow-hidden">
            {/* Floating Sparkles */}
            <div className="absolute top-4 right-4 text-beauty-gold sparkle">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="absolute bottom-4 left-4 text-beauty-pink sparkle-delayed">
              <Sparkles className="h-3 w-3" />
            </div>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-beauty-rose" />
                <h2 className="font-script text-4xl text-beauty-rose">
                  Appointment Prep
                </h2>
              </div>
            </div>
            
            <div className="space-y-4">
              {prepItems.map((item, index) => (
                <div key={index} className="bg-beauty-rose/20 backdrop-blur-sm rounded-2xl p-4 border border-beauty-rose/30">
                  <p className="font-inter text-foreground text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};