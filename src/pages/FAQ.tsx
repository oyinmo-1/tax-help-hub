import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "Where's my refund?",
      answer: "You can track your refund status using our Refund Status tool. You'll need your Social Security number, filing status, and exact refund amount. Refunds are typically issued within 21 days of e-filing."
    },
    {
      question: "How do I file without a W-2?",
      answer: "If you haven't received your W-2 by January 31st, contact your employer first. If that doesn't work, you can file Form 4852 (Substitute for Form W-2) with your tax return. Use your final pay stub to estimate wages and taxes withheld."
    },
    {
      question: "What is the deadline to file?",
      answer: "The tax filing deadline is typically April 15th. If April 15th falls on a weekend or holiday, the deadline is extended to the next business day. You can request an extension until October 15th using Form 4868."
    },
    {
      question: "What if I got an IRS notice?",
      answer: "Don't panic! Read the notice carefully and respond by the deadline specified. Most notices can be resolved by providing requested information or making a payment. If you disagree with the notice, follow the instructions to respond or contact us."
    },
    {
      question: "How do I know if a letter is real?",
      answer: "Legitimate IRS letters include your taxpayer identification number, are printed on official IRS letterhead, and explain the reason for contact. The IRS typically contacts taxpayers by mail first, not by phone or email. Be wary of scams asking for immediate payment or personal information."
    },
    {
      question: "How do I get a transcript of my tax return?",
      answer: "You can get free transcripts online at IRS.gov, by calling 1-800-908-9946, or by mailing Form 4506-T. Online transcripts are available immediately for the current and past three tax years."
    },
    {
      question: "What should I do if I can't pay my taxes?",
      answer: "File your return on time even if you can't pay. You can set up a payment plan online or by phone. Options include short-term payment plans (120 days or less) or long-term installment agreements."
    },
    {
      question: "How do I amend my tax return?",
      answer: "Use Form 1040-X to amend your return. You can only amend returns for the past three years. E-filing is available for certain amended returns, or you can mail the form to the IRS."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h1>
            
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md mx-auto"
              />
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <p className="text-center text-muted-foreground mt-8">
                No FAQs found matching your search.
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;