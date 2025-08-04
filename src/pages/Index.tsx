import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BookingCalendar } from "@/components/BookingCalendar";
import { ThankYou } from "@/components/ThankYou";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <BookingCalendar />
      <ThankYou />
    </div>
  );
};

export default Index;