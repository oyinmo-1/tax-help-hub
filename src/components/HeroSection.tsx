import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
          Welcome to the Official IRS Help Center
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Get real-time answers to your tax-related questions — no account needed.
        </p>
        <p className="text-lg mb-8 opacity-75">
          "Your taxes. Our help. Anytime."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
          >
            <Link to="/faq">Get Support</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
          >
            <Link to="/refund-status">Track My Refund</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;