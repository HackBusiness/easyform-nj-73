import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InvoiceGeneration = () => {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select customer" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="john">John Doe</SelectItem>
          <SelectItem value="jane">Jane Smith</SelectItem>
        </SelectContent>
      </Select>
      <Textarea placeholder="Service description" />
      <Input type="number" placeholder="Amount" />
      <Input type="date" placeholder="Due date" />
      <Select>
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
        <Button>Generate Invoice</Button>
      </div>
    </div>
  );
};

export default InvoiceGeneration;