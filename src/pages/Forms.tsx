import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Forms = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const forms = [
    {
      id: "1040",
      title: "Form 1040 – U.S. Individual Tax Return",
      description: "The main form used by individuals to file their annual income tax returns with the IRS.",
      category: "Individual Returns",
      downloadUrl: "#"
    },
    {
      id: "w9",
      title: "Form W-9 – Request for Taxpayer Identification",
      description: "Used to request the correct taxpayer identification number (TIN) from vendors, contractors, and other payees.",
      category: "Taxpayer ID",
      downloadUrl: "#"
    },
    {
      id: "1099",
      title: "Form 1099 – Income Reporting",
      description: "Series of forms used to report various types of income other than wages, salaries, and tips.",
      category: "Income Reporting",
      downloadUrl: "#"
    },
    {
      id: "4868",
      title: "Form 4868 – Extension to File",
      description: "Application for automatic extension of time to file U.S. individual income tax return.",
      category: "Extensions",
      downloadUrl: "#"
    },
    {
      id: "1040x",
      title: "Form 1040-X – Amended Returns",
      description: "Used to correct errors or make changes to a previously filed tax return.",
      category: "Amendments",
      downloadUrl: "#"
    },
    {
      id: "ss4",
      title: "Form SS-4 – Application for EIN",
      description: "Used to apply for an Employer Identification Number (EIN) for business entities.",
      category: "Business",
      downloadUrl: "#"
    },
    {
      id: "941",
      title: "Form 941 – Quarterly Employment Tax",
      description: "Used by employers to report income taxes, Social Security tax, and Medicare tax withheld from employees' paychecks.",
      category: "Employment Tax",
      downloadUrl: "#"
    },
    {
      id: "1065",
      title: "Form 1065 – Partnership Return",
      description: "Information return used by partnerships to report income, deductions, gains, losses, etc.",
      category: "Business",
      downloadUrl: "#"
    }
  ];

  const filteredForms = forms.filter(form => 
    form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(forms.map(form => form.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-merriweather font-bold text-primary mb-8 text-center">
            IRS Forms Help
          </h1>
          
          <div className="mb-8">
            <Input
              placeholder="Search forms by name, number, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto font-roboto"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-merriweather font-semibold text-primary mb-6">
              📄 Common IRS Forms
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredForms.map((form) => (
                <Card key={form.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-merriweather text-primary text-lg">
                        {form.title.split('–')[0]}
                      </CardTitle>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded font-roboto">
                        {form.category}
                      </span>
                    </div>
                    <CardDescription className="font-roboto text-sm">
                      {form.title.includes('–') ? form.title.split('–')[1].trim() : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-roboto text-muted-foreground mb-4">
                      {form.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 font-roboto"
                        onClick={() => alert("This would download the form in a real application")}
                      >
                        Download Form
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="font-roboto"
                        onClick={() => alert("This would show detailed instructions")}
                      >
                        View Instructions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredForms.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground font-roboto">
                  No forms found matching your search. Try different keywords.
                </p>
              </div>
            )}
          </div>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="font-merriweather text-primary">Need Help Choosing the Right Form?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-roboto">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-primary mb-2">Individual Taxpayers:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Form 1040 for annual tax returns</li>
                    <li>• Form 4868 for filing extensions</li>
                    <li>• Form 1040-X for corrections</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">Businesses:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Form SS-4 for getting an EIN</li>
                    <li>• Form 941 for quarterly payroll taxes</li>
                    <li>• Form 1065 for partnerships</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-center">
                  <strong>Still not sure?</strong> Contact our support team or use the live chat for personalized assistance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Forms;