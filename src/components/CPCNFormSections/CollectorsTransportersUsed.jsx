import React, { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const counties = [
  "Atlantic", "Bergen", "Burlington", "Camden", "Cape May", "Cumberland", 
  "Essex", "Gloucester", "Hudson", "Hunterdon", "Mercer", "Middlesex", "Monmouth", "Morris", 
  "Ocean", "Passaic", "Salem", "Somerset", "Sussex", "Union", "Warren"
];

const CollectorsTransportersUsed = ({ control, register }) => {
  const [selectedCounty, setSelectedCounty] = useState('');
  const { fields, append, remove } = useFieldArray({
    control,
    name: "collectorsTransporters"
  });

  const handleAddHauler = () => {
    append({ name: '', hasContract: false, cpcnNumber: '', amountPaid: '' });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Collectors/Transporters Used in 2023</h3>
      
      <div>
        <Label htmlFor="county">Select County</Label>
        <Select onValueChange={setSelectedCounty} value={selectedCounty}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a county" />
          </SelectTrigger>
          <SelectContent>
            {counties.map((county) => (
              <SelectItem key={county} value={county}>{county}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 border rounded">
          <Input
            {...register(`collectorsTransporters.${index}.name`)}
            placeholder="Solid Waste Hauler Name"
          />
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`contract-${index}`}
              {...register(`collectorsTransporters.${index}.hasContract`)}
            />
            <Label htmlFor={`contract-${index}`}>Has ongoing contract</Label>
          </div>
          <Input
            {...register(`collectorsTransporters.${index}.cpcnNumber`)}
            placeholder="CPCN Number (SW#)"
          />
          <Input
            {...register(`collectorsTransporters.${index}.amountPaid`)}
            placeholder="Total Amount Paid"
            type="number"
          />
          <Button type="button" variant="destructive" onClick={() => remove(index)}>Remove Hauler</Button>
        </div>
      ))}

      <Button type="button" onClick={handleAddHauler}>Add Hauler</Button>
      <Button type="button">Duplicate This Page</Button>
    </div>
  );
};

export default CollectorsTransportersUsed;