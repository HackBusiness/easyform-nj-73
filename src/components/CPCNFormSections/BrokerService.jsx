import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const BrokerService = ({ register }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Broker Service Usage</h3>
      <RadioGroup defaultValue="no">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="brokerNo" {...register('usedBrokerService')} />
          <Label htmlFor="brokerNo">No</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="brokerYes" {...register('usedBrokerService')} />
          <Label htmlFor="brokerYes">Yes (If yes, see Page 16)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default BrokerService;