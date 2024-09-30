import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LateFeeManager = () => {
  const [invoiceId, setInvoiceId] = useState('');
  const [lateFeePercentage, setLateFeePercentage] = useState('');

  const handleApplyLateFee = () => {
    // In a real application, this would call an API to apply the late fee
    console.log(`Applying ${lateFeePercentage}% late fee to invoice ${invoiceId}`);
    // You would then handle the response, perhaps showing a success message
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
        <Label htmlFor="lateFeePercentage">Late Fee Percentage</Label>
        <Input
          id="lateFeePercentage"
          type="number"
          value={lateFeePercentage}
          onChange={(e) => setLateFeePercentage(e.target.value)}
          placeholder="Enter late fee percentage"
        />
      </div>
      <Button onClick={handleApplyLateFee}>Apply Late Fee</Button>
    </div>
  );
};

export default LateFeeManager;