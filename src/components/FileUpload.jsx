import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FileUpload = ({ label, name, register, required, errors }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type="file"
        {...register(name, { required: required ? `${label} is required` : false })}
        className={errors[name] ? 'border-red-500' : ''}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default FileUpload;