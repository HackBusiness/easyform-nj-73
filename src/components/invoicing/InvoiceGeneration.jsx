import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';

const InvoiceGeneration = () => {
  const [customer, setCustomer] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [billingFrequency, setBillingFrequency] = useState('');

  const handleGenerateInvoice = () => {
    // Here you would typically send the data to your backend
    console.log('Generating invoice...', { customer, description, amount, dueDate, billingFrequency });
    toast.success('Invoice generated successfully!');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Generate New Invoice</h2>
      <Select value={customer} onValueChange={setCustomer}>
        <SelectTrigger>
          <SelectValue placeholder="Select customer" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="john">John Doe</SelectItem>
          <SelectItem value="jane">Jane Smith</SelectItem>
        </SelectContent>
      </Select>
      <Textarea 
        placeholder="Service description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input 
        type="number" 
        placeholder="Amount" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input 
        type="date" 
        placeholder="Due date" 
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Select value={billingFrequency} onValueChange={setBillingFrequency}>
        <SelectTrigger>
          <SelectValue placeholder="Billing frequency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="onetime">One-time</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="quarterly">Quarterly</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex justify-end space-x-2">
        <Button variant="outline">Preview</Button>
        <Button onClick={handleGenerateInvoice}>Generate Invoice</Button>
      </div>
    </div>
  );
};

export default InvoiceGeneration;