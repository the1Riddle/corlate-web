
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRight, BarChart, Code, Globe, Mail, Megaphone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const services = [
  {
    id: "digital-marketing",
    icon: <Megaphone className="h-12 w-12 text-primary mb-5" />,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that drive traffic, engagement, and conversions for your business. Our experts develop tailored strategies to boost your online presence and ROI.",
    features: [
      "Search Engine Marketing (SEM)",
      "Social Media Advertising",
      "Email Marketing Campaigns",
      "Content Strategy Development",
      "Performance Analytics & Reporting"
    ],
    link: "/partner"
  },
  {
    id: "web-development",
    icon: <Code className="h-12 w-12 text-primary mb-5" />,
    title: "Web Development",
    description: "Custom website development with cutting-edge technology and responsive design. We build beautiful, functional websites that drive results for your business.",
    features: [
      "Custom Website Design & Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Web Application Development",
      "Maintenance & Support"
    ],
    link: "/services/web-development"
  },
  {
    id: "seo",
    icon: <BarChart className="h-12 w-12 text-primary mb-5" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website. Our comprehensive SEO strategies help your business get found online.",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Improvements",
      "Link Building Strategies",
      "Local SEO for Business Growth"
    ],
    link: "/services/seo"
  },
  {
    id: "social-media",
    icon: <Globe className="h-12 w-12 text-primary mb-5" />,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your audience across social media platforms. We help you connect with your customers where they spend their time online.",
    features: [
      "Social Media Strategy Development",
      "Content Creation & Curation",
      "Community Management",
      "Influencer Partnerships",
      "Social Media Analytics"
    ],
    link: "/services/social-media"
  },
  {
    id: "content-marketing",
    icon: <Mail className="h-12 w-12 text-primary mb-5" />,
    title: "Content Marketing",
    description: "Create valuable content that resonates with your audience and drives business growth. Our content strategies help establish your brand as an industry leader.",
    features: [
      "Content Strategy Development",
      "Blog Writing & Management",
      "Whitepaper & E-book Creation",
      "Video Content Production",
      "Content Distribution & Promotion"
    ],
    link: "/services/content-marketing"
  },
  {
    id: "mobile-apps",
    icon: <Smartphone className="h-12 w-12 text-primary mb-5" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that provide seamless user experiences. We build apps that help your business reach customers on any device.",
    features: [
      "iOS & Android App Development",
      "Cross-Platform Solutions",
      "UI/UX Design for Mobile",
      "App Store Optimization",
      "App Maintenance & Updates"
    ],
    link: "/services/mobile-apps"
  }
];

const Services = () => {
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
              eyebrow="Our Services" 
              title="Comprehensive Digital Solutions for Your Business"
              description="We offer a wide range of digital services to help your business grow and thrive in the online space. Our team of experts is dedicated to delivering exceptional results."
              align="center"
              titleSize="large"
            />
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="bg-primary/5 p-12 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    
                    <h4 className="font-medium text-lg mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to={service.link}
                      className="button-hover-effect inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation and let our experts help you achieve your digital goals.
            </p>
            <Link
              to="/contact"
              className="button-hover-effect inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
