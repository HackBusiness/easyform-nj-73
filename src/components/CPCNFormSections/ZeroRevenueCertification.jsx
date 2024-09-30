import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DigitalSignature from '../DigitalSignature';

const ZeroRevenueCertification = ({ register, errors, control }) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Certification for Companies Claiming Zero Gross Operation Revenue</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">
          This section should be filled by CPCN holders claiming zero gross operating revenue for the calendar year 2023.
        </p>

        <div>
          <Label htmlFor="certificationStatement">Certification Statement</Label>
          <p className="text-sm text-gray-600 mb-2">
            I hereby certify that the company's reportable Gross Operating Revenue for 2023 is zero dollars ($0.00).
          </p>
        </div>

        <div>
          <Label htmlFor="ownerName">Name of Owner/Authorized Member</Label>
          <Input id="ownerName" {...register("ownerName", { required: "This field is required" })} />
          {errors.ownerName && <p className="text-red-500 text-sm">{errors.ownerName.message}</p>}
        </div>

        <div>
          <Label htmlFor="ownerTitle">Title</Label>
          <Input id="ownerTitle" {...register("ownerTitle", { required: "This field is required" })} />
          {errors.ownerTitle && <p className="text-red-500 text-sm">{errors.ownerTitle.message}</p>}
        </div>

        <div>
          <Label htmlFor="companyName">Official Company Name</Label>
          <Input id="companyName" {...register("companyName", { required: "This field is required" })} />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
        </div>

        <div>
          <Label htmlFor="printName">Print Name of Owner/Authorized Member</Label>
          <Input id="printName" {...register("printName", { required: "This field is required" })} />
          {errors.printName && <p className="text-red-500 text-sm">{errors.printName.message}</p>}
        </div>

        <div>
          <Label>Signature of Owner/Authorized Member</Label>
          <DigitalSignature
            name="ownerSignature"
            register={register}
            required="Signature is required"
            errors={errors}
          />
        </div>

        <div>
          <Label htmlFor="signatureDate">Today's Date</Label>
          <Input 
            id="signatureDate" 
            type="date" 
            {...register("signatureDate", { required: "This field is required" })} 
          />
          {errors.signatureDate && <p className="text-red-500 text-sm">{errors.signatureDate.message}</p>}
        </div>

        <div>
          <Label htmlFor="zeroRevenueReason">Provide Reason(s) for Reporting Zero Gross Annual Revenue</Label>
          <Textarea 
            id="zeroRevenueReason" 
            {...register("zeroRevenueReason", { 
              required: "This field is required",
              validate: value => value.toLowerCase() !== 'n/a' || "Please provide a detailed reason, do not use 'N/A'"
            })} 
          />
          {errors.zeroRevenueReason && <p className="text-red-500 text-sm">{errors.zeroRevenueReason.message}</p>}
        </div>

        <p className="text-sm text-gray-600">
          Note: Do not use "N/A" if claiming zero revenue. This section is for formal certification, requiring an authorized person to complete and sign the document to verify zero gross operating revenue.
        </p>
      </CardContent>
    </Card>
  );
};

export default ZeroRevenueCertification;