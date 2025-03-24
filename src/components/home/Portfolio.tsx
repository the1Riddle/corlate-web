
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const portfolio = [
  {
    id: "case1",
    title: "E-commerce Conversion Optimization",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    link: "/case-studies/e-commerce-optimization"
  },
  {
    id: "case2",
    title: "Financial Services Website Redesign",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    link: "/case-studies/financial-website-redesign"
  },
  {
    id: "case3",
    title: "Restaurant Mobile App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    link: "/case-studies/restaurant-mobile-app"
  },
  {
    id: "case4",
    title: "Healthcare Provider SEO Strategy",
    category: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/case-studies/healthcare-seo-strategy"
  }
];

export function Portfolio() {
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
    portfolio.forEach((item, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, item.id]);
      }, 100 * index);
    });
  };
  
  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-10 bg-secondary/0 text-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          eyebrow="Our Work" 
          title="Case Studies & Success Stories" 
          description="Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {portfolio.map((item) => (
            <Link 
              key={item.id} 
              to={item.link}
              className={`group relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-500 ${
                visibleItems.includes(item.id) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <span className="text-sm font-medium text-primary-foreground/80 mb-2">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <span className="inline-flex items-center text-white font-medium group-hover:underline mt-2">
                  View Case Study
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/case-studies"
            className="button-hover-effect inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
