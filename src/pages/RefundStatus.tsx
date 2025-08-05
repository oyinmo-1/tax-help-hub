import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const RefundStatus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-center mb-8">
              Track Your Refund
            </h1>
            
            <Alert className="mb-8">
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>
                <strong>Secure Tool:</strong> This is a secure, government-protected service. 
                Your personal information is encrypted and protected. No login required.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Check Your Refund Status</CardTitle>
                <CardDescription>
                  Enter your information exactly as it appears on your tax return.
                  Refund information is updated once daily, usually overnight.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ssn">Social Security Number (last 4 digits)</Label>
                  <Input 
                    id="ssn" 
                    type="text" 
                    placeholder="1234"
                    maxLength={4}
                    className="max-w-32"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="filing-status">Filing Status</Label>
                  <select 
                    id="filing-status"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select filing status</option>
                    <option value="single">Single</option>
                    <option value="married-joint">Married Filing Jointly</option>
                    <option value="married-separate">Married Filing Separately</option>
                    <option value="head-of-household">Head of Household</option>
                    <option value="qualifying-widow">Qualifying Widow(er)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="refund-amount">Refund Amount</Label>
                  <Input 
                    id="refund-amount" 
                    type="text" 
                    placeholder="Enter whole dollar amount (e.g., 1250)"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Check Refund Status
                </Button>

                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Note:</strong> Information must match your tax return exactly.</p>
                  <p>Refunds are typically issued within 21 days of e-filing or 6-8 weeks if filing by mail.</p>
                  <p>Check back in 24 hours if you just filed your return.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundStatus;