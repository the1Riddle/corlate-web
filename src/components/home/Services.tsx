
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ArrowRight, BarChart, Code, Globe, Mail, Megaphone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "digital-marketing",
    icon: <Megaphone className="h-8 w-8 text-primary mb-4" />,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that drive traffic, engagement, and conversions for your business.",
    link: "/services/digital-marketing"
  },
  {
    id: "web-development",
    icon: <Code className="h-8 w-8 text-primary mb-4" />,
    title: "Web Development",
    description: "Custom website development with cutting-edge technology and responsive design.",
    link: "/services/web-development"
  },
  {
    id: "seo",
    icon: <BarChart className="h-8 w-8 text-primary mb-4" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
    link: "/services/seo"
  },
  {
    id: "social-media",
    icon: <Globe className="h-8 w-8 text-primary mb-4" />,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your audience across social media platforms.",
    link: "/services/social-media"
  },
  {
    id: "content-marketing",
    icon: <Mail className="h-8 w-8 text-primary mb-4" />,
    title: "Content Marketing",
    description: "Create valuable content that resonates with your audience and drives business growth.",
    link: "/services/content-marketing"
  },
  {
    id: "mobile-apps",
    icon: <Smartphone className="h-8 w-8 text-primary mb-4" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that provide seamless user experiences.",
    link: "/services/mobile-apps"
  }
];

export function Services() {
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
    services.forEach((service, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, service.id]);
      }, 100 * index);
    });
  };
  
  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          eyebrow="Our Services" 
          title="Comprehensive Digital Solutions" 
          description="We offer a wide range of digital services to help your business grow and thrive in the online space."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <AnimatedCard 
              key={service.id}
              className={`p-8 h-full transform transition-all duration-500 ${
                visibleItems.includes(service.id) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
