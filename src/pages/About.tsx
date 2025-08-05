import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const keyFacts = [
    { icon: "🏛️", label: "Established", value: "July 1, 1862" },
    { icon: "🧑‍💼", label: "Employees", value: "Over 80,000" },
    { icon: "💼", label: "Part of", value: "U.S. Department of the Treasury" },
    { icon: "🌐", label: "Website", value: "www.irs.gov" },
  ];

  const services = [
    "Tax filing assistance",
    "Refund status updates", 
    "Form guidance",
    "EIN registration",
    "Taxpayer protection from fraud",
    "Help with IRS letters and notices"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-center mb-8">About the IRS</h1>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  The Internal Revenue Service (IRS) is the United States government's tax authority. 
                  We collect taxes, issue refunds, administer tax credits, and help American taxpayers 
                  stay compliant and informed.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Key Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {keyFacts.map((fact, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-2xl">{fact.icon}</span>
                        <div>
                          <span className="font-semibold">{fact.label}:</span>
                          <span className="ml-2">{fact.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Services Include</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;