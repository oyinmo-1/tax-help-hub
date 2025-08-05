import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileTextIcon, DownloadIcon } from "lucide-react";
import { useState } from "react";

const Forms = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const forms = [
    {
      number: "1040",
      title: "U.S. Individual Income Tax Return",
      description: "Standard form for reporting individual income, deductions, and calculating tax owed or refund due.",
      category: "Individual Tax Returns"
    },
    {
      number: "W-9",
      title: "Request for Taxpayer Identification Number and Certification",
      description: "Used to provide your correct TIN to entities who need to file information returns with the IRS.",
      category: "Employment Tax Forms"
    },
    {
      number: "1099-NEC",
      title: "Nonemployee Compensation",
      description: "Reports payments of $600 or more made to non-employees, such as independent contractors.",
      category: "Information Returns"
    },
    {
      number: "4868",
      title: "Application for Automatic Extension of Time to File",
      description: "Request a 6-month extension to file your individual income tax return.",
      category: "Extensions"
    },
    {
      number: "1040-X",
      title: "Amended U.S. Individual Income Tax Return",
      description: "Use to correct errors or make changes to a previously filed tax return.",
      category: "Amended Returns"
    },
    {
      number: "941",
      title: "Employer's Quarterly Federal Tax Return",
      description: "Report income taxes, Social Security tax, and Medicare tax withheld from employees' paychecks.",
      category: "Employment Tax Forms"
    },
    {
      number: "SS-4",
      title: "Application for Employer Identification Number",
      description: "Apply for an EIN (Federal Tax ID Number) for your business.",
      category: "Business Forms"
    },
    {
      number: "1065",
      title: "U.S. Return of Partnership Income",
      description: "Income tax return for partnerships operating in the United States.",
      category: "Business Forms"
    }
  ];

  const filteredForms = forms.filter(form =>
    form.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-center mb-8">
              IRS Forms Help
            </h1>
            
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Search forms by number, title, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md mx-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredForms.map((form, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <FileTextIcon className="h-5 w-5 text-primary" />
                        <CardTitle className="font-serif">Form {form.number}</CardTitle>
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        {form.category}
                      </span>
                    </div>
                    <CardDescription className="font-semibold">
                      {form.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {form.description}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <DownloadIcon className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="secondary" size="sm" className="flex-1">
                        Instructions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredForms.length === 0 && (
              <p className="text-center text-muted-foreground mt-8">
                No forms found matching your search.
              </p>
            )}

            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="font-serif">Need Additional Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Can't find the form you're looking for? Our support team can help you 
                  locate the right forms and provide guidance on how to complete them.
                </p>
                <Button>Contact Form Support</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Forms;