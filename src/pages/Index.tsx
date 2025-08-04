import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BookingPolicies } from "@/components/BookingPolicies";
import { AppointmentPrep } from "@/components/AppointmentPrep";
import { ClientReviews } from "@/components/ClientReviews";
import { ThankYouSection } from "@/components/ThankYouSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-starry">
      <Header />
      <Hero />
      <BookingPolicies />
      <AppointmentPrep />
      <ClientReviews />
      <ThankYouSection />
    </div>
  );
};

export default Index;