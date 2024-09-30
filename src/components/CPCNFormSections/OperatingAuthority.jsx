import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const OperatingAuthority = ({ register, control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "revocations"
  });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Operating Authority Revocations or Suspensions</h3>
      <RadioGroup defaultValue="no">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="revocationNo" {...register('hasRevocations')} />
          <Label htmlFor="revocationNo">No</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="revocationYes" {...register('hasRevocations')} />
          <Label htmlFor="revocationYes">Yes</Label>
        </div>
      </RadioGroup>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 p-4 border rounded">
          <Input {...register(`revocations.${index}.name`)} placeholder="Name" />
          <Input {...register(`revocations.${index}.address`)} placeholder="Address" />
          <div className="grid grid-cols-3 gap-2">
            <Input {...register(`revocations.${index}.city`)} placeholder="City" />
            <Input {...register(`revocations.${index}.state`)} placeholder="State" />
            <Input {...register(`revocations.${index}.zip`)} placeholder="ZIP" />
          </div>
          <Input {...register(`revocations.${index}.statesOccurred`)} placeholder="State(s) the revocation or suspension occurred" />
          <Textarea {...register(`revocations.${index}.description`)} placeholder="Brief description" />
          <Button type="button" variant="destructive" onClick={() => remove(index)}>Remove</Button>
        </div>
      ))}
      <Button type="button" onClick={() => append({ name: '', address: '', city: '', state: '', zip: '', statesOccurred: '', description: '' })}>
        Add Revocation/Suspension
      </Button>
      <div className="flex items-center space-x-2">
        <Checkbox id="additionalPagesRevocations" {...register('additionalPagesRevocations')} />
        <Label htmlFor="additionalPagesRevocations">Check here if additional pages are attached.</Label>
      </div>
    </div>
  );
};

export default OperatingAuthority;