import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const quickLinks = [
    {
      title: "Track Your Refund",
      description: "Check the status of your tax refund quickly and securely",
      icon: "💰",
      link: "/refund-status"
    },
    {
      title: "Get Tax Forms",
      description: "Download and get help with common IRS forms",
      icon: "📄",
      link: "/forms"
    },
    {
      title: "Find Answers",
      description: "Browse our comprehensive FAQ section",
      icon: "❓",
      link: "/faq"
    },
    {
      title: "About the IRS",
      description: "Learn about our mission and services",
      icon: "🏛️",
      link: "/about"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-merriweather font-bold text-primary text-center mb-12">
            Popular Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="font-merriweather text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="font-roboto mb-4">
                    {item.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={item.link}>Access Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-secondary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-merriweather font-bold text-primary mb-4">
            💬 Need Immediate Help?
          </h3>
          <p className="font-roboto text-foreground mb-6 max-w-2xl mx-auto">
            Our virtual assistant TAXBot and live agents are available 24/7 to help you with your tax questions. 
            Look for the chat widget in the bottom-right corner of this page.
          </p>
          <div className="text-sm font-roboto text-muted-foreground">
            {/* Begin IRS Support Chat Code */}
            {/* INSERT YOUR LIVE CHAT SCRIPT HERE */}
            {/* End Chat Code */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
