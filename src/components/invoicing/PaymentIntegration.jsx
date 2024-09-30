import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PaymentIntegration = () => {
  const [invoiceId, setInvoiceId] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleProcessPayment = () => {
    // In a real application, this would integrate with a payment gateway
    console.log(`Processing $${amount} payment for invoice ${invoiceId} via ${paymentMethod}`);
    // You would then handle the response from the payment gateway
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="invoiceId">Invoice ID</Label>
        <Input
          id="invoiceId"
          value={invoiceId}
          onChange={(e) => setInvoiceId(e.target.value)}
          placeholder="Enter invoice ID"
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter payment amount"
        />
      </div>
      <div>
        <Label htmlFor="paymentMethod">Payment Method</Label>
        <Select value={paymentMethod} onValueChange={setPaymentMethod}>
          <SelectTrigger>
            <SelectValue placeholder="Select payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="stripe">Stripe</SelectItem>
            <SelectItem value="paypal">PayPal</SelectItem>
            <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleProcessPayment}>Process Payment</Button>
    </div>
  );
};

export default PaymentIntegration;