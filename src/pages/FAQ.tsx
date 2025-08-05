import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      id: "refund",
      question: "Where's my refund?",
      answer: "You can track your refund using our 'Where's My Refund?' tool. You'll need your SSN, filing status, and exact refund amount. Refunds are typically issued within 21 days of acceptance for e-filed returns."
    },
    {
      id: "w2",
      question: "How do I file without a W-2?",
      answer: "If you haven't received your W-2 by January 31st, contact your employer first. If that doesn't work, contact the IRS at 800-829-1040. You can also use Form 4852 as a substitute for a missing W-2."
    },
    {
      id: "deadline",
      question: "What is the deadline to file?",
      answer: "The federal tax filing deadline is typically April 15th each year. If April 15th falls on a weekend or holiday, the deadline is extended to the next business day. You can request an extension until October 15th using Form 4868."
    },
    {
      id: "notice",
      question: "What if I got an IRS notice?",
      answer: "Don't panic. Read the notice carefully and respond by the date specified. Most notices can be resolved by providing requested information or making a payment. If you disagree, you have appeal rights."
    },
    {
      id: "verification",
      question: "How do I know if a letter is real?",
      answer: "Legitimate IRS letters include your taxpayer identification number, explain the reason for contact, and provide contact information. The IRS typically contacts taxpayers by mail first, not phone or email. Be wary of immediate payment demands."
    },
    {
      id: "payment",
      question: "How can I make a tax payment?",
      answer: "You can pay online through IRS Direct Pay, by phone, by mail with check or money order, or through approved payment processors. Electronic payments are usually processed faster and more securely."
    },
    {
      id: "transcript",
      question: "How do I get a tax transcript?",
      answer: "You can request tax transcripts online through IRS.gov, by calling 800-908-9946, or by mailing Form 4506-T. Transcripts are free and show most line items from your tax return as filed."
    },
    {
      id: "amended",
      question: "How do I file an amended return?",
      answer: "Use Form 1040-X to amend your return. You generally have 3 years from the date you filed your original return to file an amended return. Include all required forms and schedules with your amendment."
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-merriweather font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h1>
          
          <div className="mb-8">
            <Input
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-merriweather font-semibold text-primary mb-4">
              🧾 Common IRS Questions:
            </h2>
            
            <Accordion type="single" collapsible className="space-y-2">
              {filteredFAQs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="font-roboto font-medium text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground font-roboto">
                  No FAQs found matching your search. Try different keywords.
                </p>
              </div>
            )}
          </div>

          <div className="bg-secondary p-6 rounded-lg text-center">
            <h3 className="text-xl font-merriweather font-semibold text-primary mb-2">
              💬 Need More Help?
            </h3>
            <p className="font-roboto text-foreground">
              Our virtual assistant or live agent can help you 24/7. Look for the chat widget in the bottom-right corner.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;