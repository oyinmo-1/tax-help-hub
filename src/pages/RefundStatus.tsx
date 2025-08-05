import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const RefundStatus = () => {
  const [ssn, setSsn] = useState("");
  const [filingStatus, setFilingStatus] = useState("");
  const [refundAmount, setRefundAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to IRS systems
    alert("This is a demo. In the real system, this would check your refund status.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-merriweather font-bold text-primary mb-8 text-center">
            Check Your Refund Status
          </h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-merriweather text-primary">Where's My Refund?</CardTitle>
              <CardDescription className="font-roboto">
                Enter your information below to track your refund status. No account required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ssn" className="font-roboto font-medium">
                    Social Security Number (last 4 digits)
                  </Label>
                  <Input
                    id="ssn"
                    type="text"
                    placeholder="****"
                    maxLength={4}
                    value={ssn}
                    onChange={(e) => setSsn(e.target.value.replace(/\D/g, ''))}
                    className="font-roboto"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="filing-status" className="font-roboto font-medium">
                    Filing Status
                  </Label>
                  <Select value={filingStatus} onValueChange={setFilingStatus}>
                    <SelectTrigger className="font-roboto">
                      <SelectValue placeholder="Select your filing status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married-joint">Married Filing Jointly</SelectItem>
                      <SelectItem value="married-separate">Married Filing Separately</SelectItem>
                      <SelectItem value="head-household">Head of Household</SelectItem>
                      <SelectItem value="qualifying-widow">Qualifying Widow(er)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="refund-amount" className="font-roboto font-medium">
                    Expected Refund Amount
                  </Label>
                  <Input
                    id="refund-amount"
                    type="text"
                    placeholder="$0.00"
                    value={refundAmount}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d.]/g, '');
                      setRefundAmount(value);
                    }}
                    className="font-roboto"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 font-roboto font-medium"
                  disabled={!ssn || !filingStatus || !refundAmount}
                >
                  Check Refund Status
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="font-merriweather text-primary">Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-roboto">
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl">🔒</span>
                <div>
                  <strong>Privacy & Security:</strong> Your information is encrypted and secure. The IRS does not store this data.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl">⏱️</span>
                <div>
                  <strong>Processing Time:</strong> Refunds are typically issued within 21 days for e-filed returns and 6-8 weeks for paper returns.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl">📱</span>
                <div>
                  <strong>Mobile App:</strong> You can also check your refund status using the official IRS2Go mobile app.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl">📞</span>
                <div>
                  <strong>Need Help?:</strong> Call the refund hotline at 800-829-1954 or use our live chat support.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundStatus;