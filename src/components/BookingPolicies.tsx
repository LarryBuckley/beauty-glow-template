import { CreditCard, X, Calendar, DollarSign } from "lucide-react";

export const BookingPolicies = () => {
  const policies = [
    {
      icon: CreditCard,
      title: "Deposit",
      description: "A $30 non-refundable deposit is required to secure your appointment. Late cancellations will result in loss of deposit."
    },
    {
      icon: X,
      title: "Cancel",
      description: "Cancellations or reschedule at least 24-48 hours before your appointment. Late cancellations will result in loss of deposit."
    },
    {
      icon: Calendar,
      title: "Appointment",
      description: "Appointments must be booked through the online system. Same-day appointments may be available, so don't hesitate to reach out."
    },
    {
      icon: DollarSign,
      title: "Payment",
      description: "We accept cash, credit cards, Venmo & CashApp. A tip on the day of your appointment isn't required, but we'll never turn it down."
    }
  ];

  return (
    <section className="py-20 bg-beauty-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-script text-5xl text-beauty-rose text-center mb-16">
            Booking policies
          </h2>
          
          <div className="bg-beauty-card/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-beauty-rose/30">
            <div className="grid md:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-beauty-rose/20 p-4 rounded-full">
                      <policy.icon className="h-8 w-8 text-beauty-rose" />
                    </div>
                  </div>
                  <h3 className="font-script text-2xl text-beauty-rose">
                    {policy.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {policy.description}
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