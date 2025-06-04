
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Download, FileText, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Partner = () => {
  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const benefits = [
    "Competitive monthly interest rates up to 7%",
    "Flexible payment terms (Monthly, Quarterly, Yearly)",
    "Quick application processing",
    "Dedicated customer support",
    "Secure investment platform"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-10 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-6">
            Partnership Opportunity
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Become Our <span className="text-primary">Partner</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our money market investment program and enjoy competitive returns on your investment. 
            Download our partnership application form to get started today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Why Partner With Us?</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-4 shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Join Our Network</h3>
                </div>
                <p className="text-muted-foreground">
                  Become part of our growing network of successful partners and start earning 
                  competitive returns on your investment today.
                </p>
              </div>
            </div>

            {/* Right side - Download Card */}
            <div className="flex justify-center">
              <AnimatedCard className="w-full max-w-md p-8 text-center bg-white shadow-xl border-0">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Partnership Application</h3>
                  <p className="text-muted-foreground">
                    Download our comprehensive application form to begin your partnership journey with us.
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">File Format</div>
                    <div className="font-medium text-foreground">PDF Document</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">File Size</div>
                    <div className="font-medium text-foreground">~2.5 MB</div>
                  </div>
                </div>
                
                <a
                  href="/img/MONEY_MARKET.pdf"
                  download
                  className="w-full"
                >
                  <Button 
                    className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Application Form
                  </Button>
                </a>
                
                <p className="text-xs text-muted-foreground mt-4">
                  By downloading this form, you agree to our terms and conditions.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-10 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your Partnership?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download the application form, fill it out completely, and submit it to begin your journey with us. 
            Our team will review your application and get back to you within 2-3 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/img/MONEY_MARKET.pdf" download>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Form
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = 'mailto:info@company.com'}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;
