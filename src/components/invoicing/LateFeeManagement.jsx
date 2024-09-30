import React from 'react';
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const LateFeeManagement = () => {
  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <Label htmlFor="autoLateFee">Automatically apply late fees</Label>
        <Switch id="autoLateFee" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lateFeePercentage">Late fee percentage</Label>
        <Input id="lateFeePercentage" type="number" placeholder="e.g., 5" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="gracePeriod">Grace period (days)</Label>
        <Input id="gracePeriod" type="number" placeholder="e.g., 7" />
      </div>
      <Button className="w-full">Save Settings</Button>
    </div>
  );
};

export default LateFeeManagement;