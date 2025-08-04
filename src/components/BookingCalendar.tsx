import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, MapPin } from "lucide-react";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

const mockCalendarDays = [
  { date: 15, available: true, day: "Mon" },
  { date: 16, available: true, day: "Tue" },
  { date: 17, available: false, day: "Wed" },
  { date: 18, available: true, day: "Thu" },
  { date: 19, available: true, day: "Fri" },
  { date: 20, available: false, day: "Sat" },
  { date: 21, available: true, day: "Sun" },
];

export const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("brow-shaping");

  const services = [
    { id: "brow-shaping", name: "Brow Shaping & Tint", duration: "45 min", price: "$65" },
    { id: "lash-extensions", name: "Classic Lash Extensions", duration: "2 hrs", price: "$120" },
    { id: "microblading", name: "Microblading", duration: "2.5 hrs", price: "$180" },
    { id: "facial", name: "Luxury Facial", duration: "1.5 hrs", price: "$95" },
  ];

  return (
    <section id="booking" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Book Your Appointment
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Select your preferred service, date, and time. We'll confirm your booking within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Selection */}
          <Card className="bg-white/90 backdrop-blur-sm border-beauty-cream shadow-elegant">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-foreground flex items-center space-x-2">
                <User className="h-5 w-5 text-beauty-rose" />
                <span>Select Service</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedService === service.id
                      ? "border-beauty-rose bg-beauty-blush/20"
                      : "border-beauty-cream hover:border-beauty-nude"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-inter font-medium text-foreground">{service.name}</h4>
                      <p className="font-inter text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                    <p className="font-inter font-semibold text-beauty-rose">{service.price}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Date Selection */}
          <Card className="bg-white/90 backdrop-blur-sm border-beauty-cream shadow-elegant">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-foreground flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-beauty-rose" />
                <span>Choose Date</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <h3 className="font-inter font-semibold text-foreground">December 2024</h3>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {mockCalendarDays.map((day) => (
                  <div
                    key={day.date}
                    className={`p-3 text-center rounded-lg cursor-pointer transition-all duration-200 ${
                      !day.available
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : selectedDate === day.date
                        ? "bg-gradient-beauty text-white shadow-beauty"
                        : "bg-beauty-cream hover:bg-beauty-nude text-foreground"
                    }`}
                    onClick={() => day.available && setSelectedDate(day.date)}
                  >
                    <div className="font-inter text-xs">{day.day}</div>
                    <div className="font-inter font-medium">{day.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time Selection */}
          <Card className="bg-white/90 backdrop-blur-sm border-beauty-cream shadow-elegant">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-foreground flex items-center space-x-2">
                <Clock className="h-5 w-5 text-beauty-rose" />
                <span>Select Time</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "beauty" : "elegantOutline"}
                    size="sm"
                    className="font-inter text-xs"
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Summary & Contact */}
        {selectedDate && selectedTime && selectedService && (
          <Card className="max-w-2xl mx-auto mt-8 bg-white/90 backdrop-blur-sm border-beauty-cream shadow-beauty">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-foreground text-center">
                Booking Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Selected Details */}
              <div className="bg-beauty-cream/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="font-inter text-foreground">Service:</span>
                  <span className="font-inter font-medium text-foreground">
                    {services.find(s => s.id === selectedService)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-inter text-foreground">Date:</span>
                  <span className="font-inter font-medium text-foreground">Dec {selectedDate}, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-inter text-foreground">Time:</span>
                  <span className="font-inter font-medium text-foreground">{selectedTime}</span>
                </div>
                <div className="flex justify-between border-t border-beauty-nude pt-2">
                  <span className="font-inter font-semibold text-foreground">Total:</span>
                  <span className="font-inter font-semibold text-beauty-rose">
                    {services.find(s => s.id === selectedService)?.price}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h4 className="font-playfair font-semibold text-foreground">Contact Information</h4>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-beauty-rose" />
                    <span className="font-inter text-sm text-foreground">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-beauty-rose" />
                    <span className="font-inter text-sm text-foreground">hello@bellabeauty.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-beauty-rose" />
                    <span className="font-inter text-sm text-foreground">123 Beauty Ave, City</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button variant="beauty" size="lg" className="w-full font-inter font-medium">
                    Confirm Booking
                  </Button>
                  <p className="font-inter text-xs text-muted-foreground text-center">
                    By booking, you agree to our terms and cancellation policy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};