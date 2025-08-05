import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-merriweather font-bold text-primary mb-8 text-center">
            About the Internal Revenue Service
          </h1>
          
          <div className="mb-12">
            <p className="text-lg font-roboto text-foreground leading-relaxed mb-6">
              The Internal Revenue Service (IRS) is the United States government's tax authority. 
              We collect taxes, issue refunds, administer tax credits, and help American taxpayers 
              stay compliant and informed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-merriweather text-primary">Key Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-roboto">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <strong>Established:</strong> July 1, 1862
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧑‍💼</span>
                  <div>
                    <strong>Employees:</strong> Over 80,000
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <strong>Part of:</strong> U.S. Department of the Treasury
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <strong>Website:</strong> www.irs.gov
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-merriweather text-primary">Services Include</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 font-roboto">
                <div className="flex items-start space-x-3">
                  <span className="text-accent">•</span>
                  <span>Tax filing assistance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent">•</span>
                  <span>Refund status updates</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent">•</span>
                  <span>Form guidance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent">•</span>
                  <span>EIN registration</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent">•</span>
                  <span>Taxpayer protection from fraud</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent">•</span>
                  <span>Help with IRS letters and notices</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="font-merriweather text-primary text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg font-roboto text-foreground leading-relaxed">
                To provide America's taxpayers top-quality service by helping them understand 
                and meet their tax responsibilities and enforce the law with integrity and fairness to all.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;