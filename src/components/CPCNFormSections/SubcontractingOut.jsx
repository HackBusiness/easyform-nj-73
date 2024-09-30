import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const SubcontractingOut = ({ register, control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subcontractingOut"
  });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Subcontracting Out Solid Waste Services</h3>
      <RadioGroup defaultValue="no">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="subcontractOutNo" {...register('didSubcontractOut')} />
          <Label htmlFor="subcontractOutNo">No</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="subcontractOutYes" {...register('didSubcontractOut')} />
          <Label htmlFor="subcontractOutYes">Yes</Label>
        </div>
      </RadioGroup>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 p-4 border rounded">
          <Input {...register(`subcontractingOut.${index}.subcontractor`)} placeholder="Subcontractor (Solid Waste Hauler Used)" />
          <Input {...register(`subcontractingOut.${index}.grossRevenue`)} placeholder="Gross Revenue Received from Customer" type="number" />
          <Input {...register(`subcontractingOut.${index}.amountPaid`)} placeholder="Total Amount Paid to Subcontractor" type="number" />
          <Button type="button" variant="destructive" onClick={() => remove(index)}>Remove</Button>
        </div>
      ))}
      <Button type="button" onClick={() => append({ subcontractor: '', grossRevenue: '', amountPaid: '' })}>
        Add Subcontractor
      </Button>
      <div className="flex items-center space-x-2">
        <Checkbox id="additionalPagesSubcontractOut" {...register('additionalPagesSubcontractOut')} />
        <Label htmlFor="additionalPagesSubcontractOut">Check here if additional pages are attached.</Label>
      </div>
    </div>
  );
};

export default SubcontractingOut;