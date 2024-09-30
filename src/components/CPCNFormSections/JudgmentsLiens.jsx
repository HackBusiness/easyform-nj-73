import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const JudgmentsLiens = ({ register, control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "judgmentsLiens"
  });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Current or Outstanding Judgments and/or Liens</h3>
      <RadioGroup defaultValue="no">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="judgmentsNo" {...register('hasJudgmentsLiens')} />
          <Label htmlFor="judgmentsNo">No</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="judgmentsYes" {...register('hasJudgmentsLiens')} />
          <Label htmlFor="judgmentsYes">Yes</Label>
        </div>
      </RadioGroup>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 p-4 border rounded">
          <Input {...register(`judgmentsLiens.${index}.name`)} placeholder="Name" />
          <Input {...register(`judgmentsLiens.${index}.address`)} placeholder="Address" />
          <div className="grid grid-cols-3 gap-2">
            <Input {...register(`judgmentsLiens.${index}.city`)} placeholder="City" />
            <Input {...register(`judgmentsLiens.${index}.state`)} placeholder="State" />
            <Input {...register(`judgmentsLiens.${index}.zip`)} placeholder="ZIP" />
          </div>
          <Textarea {...register(`judgmentsLiens.${index}.description`)} placeholder="Brief description" />
          <Button type="button" variant="destructive" onClick={() => remove(index)}>Remove</Button>
        </div>
      ))}
      <Button type="button" onClick={() => append({ name: '', address: '', city: '', state: '', zip: '', description: '' })}>
        Add Judgment/Lien
      </Button>
      <div className="flex items-center space-x-2">
        <Checkbox id="additionalPages" {...register('additionalPagesJudgments')} />
        <Label htmlFor="additionalPages">Check here if additional pages are attached.</Label>
      </div>
    </div>
  );
};

export default JudgmentsLiens;