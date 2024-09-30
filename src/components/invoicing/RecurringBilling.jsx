import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RecurringBilling = () => {
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly');

  const handleSetupRecurring = () => {
    // In a real application, this would call an API to set up recurring billing
    console.log(`Setting up recurring billing for ${customerName}: $${amount} ${frequency}`);
    // You would then handle the response, perhaps showing a success message
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
          placeholder="Enter billing amount"
        />
      </div>
      <div>
        <Label htmlFor="frequency">Billing Frequency</Label>
        <Select value={frequency} onValueChange={setFrequency}>
          <SelectTrigger>
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="annually">Annually</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleSetupRecurring}>Set Up Recurring Billing</Button>
    </div>
  );
};

export default RecurringBilling;