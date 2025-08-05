import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-government-dark-gray text-primary-foreground py-20">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-20"
        style={{
          backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 30\" fill=\"none\"><rect width=\"60\" height=\"30\" fill=\"%23002868\"/><rect width=\"60\" height=\"2\" y=\"2\" fill=\"%23ffffff\" opacity=\"0.1\"/><rect width=\"60\" height=\"2\" y=\"6\" fill=\"%23ff0000\" opacity=\"0.1\"/><rect width=\"60\" height=\"2\" y=\"10\" fill=\"%23ffffff\" opacity=\"0.1\"/><rect width=\"60\" height=\"2\" y=\"14\" fill=\"%23ff0000\" opacity=\"0.1\"/><rect width=\"60\" height=\"2\" y=\"18\" fill=\"%23ffffff\" opacity=\"0.1\"/><rect width=\"60\" height=\"2\" y=\"22\" fill=\"%23ff0000\" opacity=\"0.1\"/><rect width=\"60\" height=\"2\" y=\"26\" fill=\"%23ffffff\" opacity=\"0.1\"/></svg>')",
          backgroundSize: "120px 60px",
          opacity: 0.1
        }}
      />
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-merriweather font-bold mb-6">
          Welcome to the Official IRS Help Center
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-roboto">
          Get real-time answers to your tax-related questions — no account needed.
        </p>
        <p className="text-lg mb-10 text-accent font-roboto font-medium">
          "Your taxes. Our help. Anytime."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-roboto font-medium text-lg px-8 py-4"
          >
            <Link to="/faq">🟦 Get Support</Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-roboto font-medium text-lg px-8 py-4"
          >
            <Link to="/refund-status">✅ Track My Refund</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;