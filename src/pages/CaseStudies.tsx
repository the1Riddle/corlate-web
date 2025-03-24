
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const categories = ["All", "Digital Marketing", "Web Development", "Mobile Development", "SEO Optimization"];

const caseStudies = [
  {
    id: "case1",
    title: "E-commerce Conversion Optimization",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    link: "/case-studies/e-commerce-optimization",
    description: "Increased conversion rates by 45% for an e-commerce client through strategic A/B testing and UX improvements."
  },
  {
    id: "case2",
    title: "Financial Services Website Redesign",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    link: "/case-studies/financial-website-redesign",
    description: "Completely redesigned a financial services website, resulting in a 60% increase in lead generation."
  },
  {
    id: "case3",
    title: "Restaurant Mobile App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    link: "/case-studies/restaurant-mobile-app",
    description: "Developed a mobile ordering app for a restaurant chain that generated $2M in additional revenue within 6 months."
  },
  {
    id: "case4",
    title: "Healthcare Provider SEO Strategy",
    category: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/case-studies/healthcare-seo-strategy",
    description: "Implemented SEO strategy for a healthcare provider that increased organic traffic by 120% in 3 months."
  },
  {
    id: "case5",
    title: "B2B Lead Generation Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/case-studies/b2b-lead-generation",
    description: "Created a multi-channel lead generation campaign that reduced customer acquisition costs by 35%."
  },
  {
    id: "case6",
    title: "Retail Mobile App Development",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/case-studies/retail-mobile-app",
    description: "Built a mobile shopping app for a retail chain that increased customer retention by 28%."
  },
  {
    id: "case7",
    title: "Tech Startup Website Development",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/case-studies/tech-startup-website",
    description: "Designed and developed a modern website for a tech startup that helped secure $1.5M in funding."
  },
  {
    id: "case8",
    title: "Local Business SEO Campaign",
    category: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/case-studies/local-business-seo",
    description: "Implemented local SEO strategy for a small business that resulted in a 200% increase in foot traffic."
  }
];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);
  
  // Filter case studies based on active category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredCaseStudies(caseStudies);
    } else {
      setFilteredCaseStudies(caseStudies.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-10 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <SectionTitle 
              eyebrow="Our Work" 
              title="Case Studies & Success Stories"
              description="Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals."
              align="center"
              titleSize="large"
            />
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/20 text-foreground hover:bg-secondary/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((item) => (
                <Link 
                  key={item.id} 
                  to={item.link}
                  className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm font-medium text-primary mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:underline mt-2">
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <Link
              to="/contact"
              className="button-hover-effect inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
