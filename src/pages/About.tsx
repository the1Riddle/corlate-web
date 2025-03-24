
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Sarah has over 15 years of experience in digital marketing and web development. She founded Corlate with a vision to help businesses thrive in the digital landscape."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
      bio: "Michael oversees all technical aspects of our projects. With a background in computer science and 10+ years of development experience, he ensures our solutions are cutting-edge."
    },
    {
      name: "Jessica Patel",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Jessica brings creative vision and design expertise to every project. Her innovative approach ensures our clients' brands stand out in the digital space."
    },
    {
      name: "David Wilson",
      role: "Head of Digital Marketing",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      bio: "David leads our digital marketing strategies. His data-driven approach has helped numerous clients achieve remarkable growth in their online presence."
    }
  ];
  
  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of digital technology and marketing trends to provide our clients with cutting-edge solutions."
    },
    {
      title: "Client Success",
      description: "We measure our success by the success of our clients. Their goals are our goals, and we're committed to helping them achieve results."
    },
    {
      title: "Integrity",
      description: "We believe in transparency, honesty, and doing what's right for our clients, even when it's challenging."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, treating them as partners and ensuring their vision drives every project we undertake."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-10 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <SectionTitle 
              eyebrow="About Us" 
              title="The Team Behind Corlate's Success"
              description="We're a passionate team of digital experts dedicated to helping businesses grow online."
              align="center"
              titleSize="large"
            />
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2015, Corlate began with a simple mission: to help businesses navigate the increasingly complex digital landscape and achieve meaningful results.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  What started as a small team of three passionate digital marketers has grown into a comprehensive digital agency with expertise spanning web development, SEO, content marketing, and more.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we're proud to have helped hundreds of businesses across various industries establish strong digital presences and achieve significant growth. Our approach combines data-driven strategies, creative thinking, and a deep understanding of the latest digital trends.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team working together" 
                  className="rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 px-6 md:px-10 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <SectionTitle 
              eyebrow="Our Values" 
              title="Principles That Guide Our Work"
              description="These core values define our approach and are reflected in everything we do."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionTitle 
              eyebrow="Our Team" 
              title="Meet the Experts"
              description="Our talented team brings diverse expertise and a passion for digital excellence."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch today to discuss how our team can help you achieve your digital goals.
            </p>
            <Link
              to="/contact"
              className="button-hover-effect inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
