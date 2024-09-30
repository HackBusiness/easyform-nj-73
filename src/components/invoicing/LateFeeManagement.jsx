import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LateFeeManagement = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="autoLateFee" />
        <Label htmlFor="autoLateFee">Automatically apply late fees</Label>
      </div>
      <div>
        <Label htmlFor="lateFeePercentage">Late fee percentage</Label>
        <Input id="lateFeePercentage" type="number" placeholder="e.g., 5" />
      </div>
      <div>
        <Label htmlFor="gracePeriod">Grace period (days)</Label>
        <Input id="gracePeriod" type="number" placeholder="e.g., 7" />
      </div>
    </div>
  );
};

export default LateFeeManagement;