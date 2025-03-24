
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const circle1 = heroRef.current.querySelector('.hero-blur-circle:nth-of-type(1)') as HTMLElement;
      const circle2 = heroRef.current.querySelector('.hero-blur-circle:nth-of-type(2)') as HTMLElement;
      
      if (circle1 && circle2) {
        circle1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        circle2.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-grid bg-primary/8"
    >
      {/* Background elements */}
      <div className="hero-blur-circle top-1/4 left-1/4 opacity-70 transition-transform duration-300"></div>
      <div className="hero-blur-circle bottom-1/4 right-1/4 opacity-50 transition-transform duration-300"></div>
      
      <div className={cn(
        "max-w-5xl mx-auto text-center z-10 transition-all duration-1000",
        isVisible ? "opacity-100" : "opacity-0 translate-y-8"
      )}>
        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
          Digital Marketing & Web Development
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6 animate-fade-in delayed-100">
          Elevate Your Digital Presence with <span className="text-primary">Corlate</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-in delayed-200">
          We deliver innovative digital marketing and web development solutions 
          tailored to your business needs.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delayed-300">
          <Link
            to="/contact"
            className="button-hover-effect inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 w-full sm:w-auto"
          >
            Get a Free Consultation
          </Link>
          <Link
            to="/services"
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-full sm:w-auto"
          >
            View Our Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </div>
  );
}
