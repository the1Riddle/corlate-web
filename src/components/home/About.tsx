
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ArrowRight, Award, CheckCircle, Clock, Coffee, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: "stat1",
    icon: <Users className="h-6 w-6 text-primary mb-2" />,
    number: "100+",
    label: "Satisfied Clients"
  },
  {
    id: "stat3",
    icon: <TrendingUp className="h-6 w-6 text-primary mb-2" />,
    number: "200+",
    label: "Successful Projects"
  },
  {
    id: "stat4",
    icon: <Coffee className="h-6 w-6 text-primary mb-2" />,
    number: "5+",
    label: "Years Experience"
  }
];

const values = [
  {
    id: "value1",
    icon: <CheckCircle className="h-5 w-5 text-primary mr-2" />,
    text: "Client-centered approach"
  },
  {
    id: "value2",
    icon: <CheckCircle className="h-5 w-5 text-primary mr-2" />,
    text: "Innovative solutions"
  },
  {
    id: "value3",
    icon: <CheckCircle className="h-5 w-5 text-primary mr-2" />,
    text: "Transparent communication"
  },
  {
    id: "value4",
    icon: <CheckCircle className="h-5 w-5 text-primary mr-2" />,
    text: "Data-driven strategies"
  },
  {
    id: "value5",
    icon: <CheckCircle className="h-5 w-5 text-primary mr-2" />,
    text: "Continuous improvement"
  },
  {
    id: "value6",
    icon: <CheckCircle className="h-5 w-5 text-primary mr-2" />,
    text: "Result-oriented mindset"
  }
];

export function About() {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const startAnimation = () => {
    // Animate stats
    stats.forEach((stat, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, stat.id]);
      }, 100 * index);
    });
    
    // Animate values
    values.forEach((value, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, value.id]);
      }, 100 * (index + stats.length));
    });
  };
  
  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          eyebrow="About Us" 
          title="Who We Are" 
          description="We're a team of passionate digital experts dedicated to helping businesses grow through innovative strategies and cutting-edge technologies."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
          <div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Corlate Team" 
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <AnimatedCard 
                  key={stat.id} 
                  className={`p-4 text-center transform transition-all duration-500 ${
                    visibleItems.includes(stat.id) 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-10"
                  }`}
                  glareEffect={false}
                  hoverScale={false}
                >
                  <div className="flex justify-center">{stat.icon}</div>
                  <p className="text-2xl font-bold">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Your Trusted Digital Partner</h3>
            <p className="text-muted-foreground">
              At Corlate, we combine creativity with technical expertise to deliver 
              digital solutions that drive real business results. Our team of 
              strategists, designers, and developers work together to create 
              seamless digital experiences that connect with your audience.
            </p>
            
            <h4 className="text-xl font-medium mt-8">Our Values</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {values.map((value) => (
                <div
                  key={value.id}
                  className={`flex items-center transform transition-all duration-500 ${
                    visibleItems.includes(value.id) 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  {value.icon}
                  <span>{value.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                Learn More About Us
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
