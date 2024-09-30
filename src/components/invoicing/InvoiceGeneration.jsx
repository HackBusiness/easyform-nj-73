import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const InvoiceGeneration = () => {
  return (
    <div className="space-y-4">
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
      <div className="flex items-center space-x-2">
        <Checkbox id="recurring" />
        <label htmlFor="recurring">Recurring billing</label>
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Billing frequency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="quarterly">Quarterly</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex space-x-2">
        <Button variant="outline">Preview</Button>
        <Button>Save & Send</Button>
      </div>
    </div>
  );
};

export default InvoiceGeneration;