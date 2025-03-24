
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, Check, Clock } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

interface ServiceBookingProps {
  services: Array<{
    id: string;
    title: string;
  }>;
  onComplete?: () => void;
}

export function ServiceBooking({ services, onComplete }: ServiceBookingProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !selectedService || !clientName || !clientEmail) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to book service
    setTimeout(() => {
      toast.success("Your appointment has been booked successfully!");
      setIsSubmitting(false);
      resetForm();
      if (onComplete) {
        onComplete();
      }
    }, 1500);
  };
  
  const resetForm = () => {
    setDate(undefined);
    setTimeSlot(undefined);
    setSelectedService(undefined);
    setClientName("");
    setClientEmail("");
    setClientPhone("");
    setNotes("");
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Book a Service</h3>
        <p className="text-muted-foreground">
          Schedule a consultation or service appointment with our expert team
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Select a Service <span className="text-destructive">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={cn(
                  "p-4 rounded-md border cursor-pointer transition-all",
                  selectedService === service.id 
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20" 
                    : "border-input hover:border-primary/50"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{service.title}</span>
                  {selectedService === service.id && (
                    <Check className="h-5 w-5 text-primary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Date <span className="text-destructive">*</span>
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    // Can't book on the past days or Sundays
                    return date < today || date.getDay() === 0;
                  }}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Time <span className="text-destructive">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <div
                  key={time}
                  onClick={() => setTimeSlot(time)}
                  className={cn(
                    "p-3 rounded-md border text-sm flex items-center justify-center cursor-pointer transition-all",
                    timeSlot === time 
                      ? "border-primary bg-primary/5 text-primary font-medium" 
                      : "border-input hover:border-primary/50"
                  )}
                >
                  <Clock className="h-3.5 w-3.5 mr-2" />
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="John Doe"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-2">
            Additional Notes
          </label>
          <textarea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Tell us more about your project or specific requirements..."
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Book Appointment"
          )}
        </Button>
      </form>
    </div>
  );
}
