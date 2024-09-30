import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InvoiceGenerator = () => {
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');

  const handleGenerateInvoice = () => {
    // In a real application, this would call an API to generate the invoice
    console.log(`Generating invoice for ${customerName} with amount $${amount}`);
    // You would then handle the response, perhaps showing a success message or the generated invoice
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="customerName">Customer Name</Label>
        <Input
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter customer name"
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter invoice amount"
        />
      </div>
      <Button onClick={handleGenerateInvoice}>Generate Invoice</Button>
    </div>
  );
};

export default InvoiceGenerator;