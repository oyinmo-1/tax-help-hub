import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const quickLinks = [
    {
      title: "Check Refund Status",
      description: "Track your tax refund in real-time",
      icon: "💰",
      link: "/refund-status"
    },
    {
      title: "Get Tax Forms",
      description: "Download and get help with IRS forms",
      icon: "📄",
      link: "/forms"
    },
    {
      title: "FAQ Support",
      description: "Find answers to common tax questions",
      icon: "❓",
      link: "/faq"
    },
    {
      title: "About the IRS",
      description: "Learn about our services and mission",
      icon: "🏛️",
      link: "/about"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <HeroSection />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">
              How Can We Help You Today?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <CardTitle className="font-serif text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={item.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Need Immediate Assistance?
                </CardTitle>
                <CardDescription className="text-lg">
                  Our virtual assistant or live agent can help you 24/7 with tax-related questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Start Live Chat
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  {/* Live chat integration placeholder - Add your chat widget code here */}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
