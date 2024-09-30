import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const SubcontractingIn = ({ register, control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subcontractingIn"
  });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Accepting Subcontracting Solid Waste Services</h3>
      <RadioGroup defaultValue="no">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="subcontractInNo" {...register('didAcceptSubcontract')} />
          <Label htmlFor="subcontractInNo">No</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="subcontractInYes" {...register('didAcceptSubcontract')} />
          <Label htmlFor="subcontractInYes">Yes</Label>
        </div>
      </RadioGroup>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 p-4 border rounded">
          <Input {...register(`subcontractingIn.${index}.primeContractor`)} placeholder="Prime Contractor (Solid Waste Hauler that Hired Your Company)" />
          <Input {...register(`subcontractingIn.${index}.county`)} placeholder="County of Subcontracting Job" />
          <Input {...register(`subcontractingIn.${index}.amountReceived`)} placeholder="Total Amount Received from Prime Contractor" type="number" />
          <Button type="button" variant="destructive" onClick={() => remove(index)}>Remove</Button>
        </div>
      ))}
      <Button type="button" onClick={() => append({ primeContractor: '', county: '', amountReceived: '' })}>
        Add Subcontracting Job
      </Button>
      <div className="flex items-center space-x-2">
        <Checkbox id="additionalPagesSubcontractIn" {...register('additionalPagesSubcontractIn')} />
        <Label htmlFor="additionalPagesSubcontractIn">Check here if additional pages are attached.</Label>
      </div>
    </div>
  );
};

export default SubcontractingIn;