import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const InputField = ({ label, name, register, required, errors, type = "text", multiline = false }) => {
  const InputComponent = multiline ? Textarea : Input;

  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <InputComponent
        id={name}
        {...register(name, { required: required ? `${label} is required` : false })}
        type={type}
        className={errors[name] ? 'border-red-500' : ''}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default InputField;