import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

// Mock data for service details - in a real app, this would come from an API or CMS
const servicesData = {
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Effective digital marketing strategies to grow your online presence and drive conversions.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    content: "Our digital marketing experts develop comprehensive strategies tailored to your business goals. We leverage data-driven insights to optimize campaigns and maximize ROI.",
    benefits: [
      "Increased brand awareness and online visibility",
      "Higher quality leads and improved conversion rates",
      "Better ROI on marketing investment",
      "Insights into customer behavior and preferences",
      "Consistent and engaging multi-channel presence"
    ],
    process: [
      "Strategy Development",
      "Campaign Planning",
      "Content Creation",
      "Implementation",
      "Analysis & Optimization"
    ],
    relatedServices: ["seo", "social-media", "content-marketing"]
  },
  "web-development": {
    title: "Web Development",
    description: "Custom website development with cutting-edge technology and responsive design.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    content: "We create stunning, functional websites that deliver exceptional user experiences. Our development team uses the latest technologies to build scalable, secure, and high-performing web applications.",
    benefits: [
      "Custom design tailored to your brand identity",
      "Responsive layouts that work on all devices",
      "Fast loading speeds for better user experience",
      "SEO-friendly architecture",
      "Secure and reliable hosting solutions"
    ],
    process: [
      "Discovery & Planning",
      "Design Prototyping",
      "Development",
      "Testing & Quality Assurance",
      "Deployment & Maintenance"
    ],
    relatedServices: ["seo", "digital-marketing", "mobile-apps"]
  },
  "seo": {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    content: "Our SEO experts will optimize your website to rank higher in search engine results, driving more organic traffic and qualified leads to your business.",
    benefits: [
      "Improved visibility in search engine results",
      "Increased organic traffic",
      "Higher quality leads and conversions",
      "Enhanced user experience",
      "Long-term sustainable results"
    ],
    process: [
      "Technical SEO Audit",
      "Keyword Research",
      "On-page Optimization",
      "Content Strategy",
      "Link Building"
    ],
    relatedServices: ["digital-marketing", "content-marketing", "web-development"]
  },
  "social-media": {
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your audience across social media platforms.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    content: "We develop comprehensive social media strategies to build your brand presence, engage with your audience, and drive measurable results through effective social campaigns.",
    benefits: [
      "Increased brand awareness and recognition",
      "Better audience engagement and community building",
      "Direct channel for customer communication",
      "Insights into customer preferences and behavior",
      "Higher website traffic and conversions"
    ],
    process: [
      "Platform Selection & Strategy",
      "Content Planning",
      "Community Management",
      "Paid Social Campaigns",
      "Analytics & Reporting"
    ],
    relatedServices: ["digital-marketing", "content-marketing"]
  },
  "content-marketing": {
    title: "Content Marketing",
    description: "Create valuable content that resonates with your audience and drives business growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "Our content marketing team creates compelling, valuable content that resonates with your target audience, establishes your brand authority, and drives engagement and conversions.",
    benefits: [
      "Established thought leadership in your industry",
      "Increased organic search visibility",
      "Higher engagement rates and social sharing",
      "Better customer education and retention",
      "Long-term content assets for your business"
    ],
    process: [
      "Content Strategy Development",
      "Audience Research",
      "Content Creation",
      "Distribution & Promotion",
      "Performance Analysis"
    ],
    relatedServices: ["seo", "digital-marketing", "social-media"]
  },
  "mobile-apps": {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that provide seamless user experiences.",
    image: "https://images.unsplash.com/photo-1522125670776-3c7b9771f439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "We design and develop custom mobile applications that provide exceptional user experiences across all platforms and devices, helping your business reach customers wherever they are.",
    benefits: [
      "Cross-platform compatibility",
      "Intuitive user interfaces",
      "Seamless integration with existing systems",
      "Scalable architecture for future growth",
      "Ongoing support and maintenance"
    ],
    process: [
      "Requirements Analysis",
      "UX/UI Design",
      "Development",
      "Testing & Quality Assurance",
      "Deployment & Maintenance"
    ],
    relatedServices: ["web-development", "digital-marketing"]
  }
};

// Service name mapping for display
const serviceNameMap: Record<string, string> = {
  "digital-marketing": "Digital Marketing",
  "web-development": "Web Development",
  "seo": "SEO Optimization",
  "social-media": "Social Media Marketing",
  "content-marketing": "Content Marketing",
  "mobile-apps": "Mobile App Development"
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const serviceData = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;
  
  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);
  
  // If service not found, display a message
  if (!serviceData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-32 px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, the requested service information is not available.
            </p>
            <Link
              to="/services"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-10 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {serviceData.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {serviceData.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src={serviceData.image} 
                alt={serviceData.title} 
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {serviceData.content}
                </p>
              </div>
              
              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Our Process</h2>
                <div className="space-y-4">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-foreground">{step}</h3>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <AnimatedCard className="p-6 sticky top-32">
                <h3 className="text-xl font-bold mb-6 text-foreground">Related Services</h3>
                <div className="space-y-3 mb-8">
                  {serviceData.relatedServices.map((relatedServiceId) => (
                    <Link
                      key={relatedServiceId}
                      to={`/services/${relatedServiceId}`}
                      className="block p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                    >
                      <h4 className="font-medium text-foreground">{serviceNameMap[relatedServiceId]}</h4>
                    </Link>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact us today for a free consultation and let us help you achieve your digital goals.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
