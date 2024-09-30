import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DigitalSignature from '../DigitalSignature';

const Certifications = ({ register, errors, control }) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Certifications - Customer Bill of Rights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">
          This section is for companies that have regularly scheduled customers (residential, commercial, or industrial customers that receive services on a regular basis).
        </p>

        <div className="space-y-2">
          <Checkbox
            id="noRegularCustomers"
            {...register("noRegularCustomers")}
          />
          <Label htmlFor="noRegularCustomers" className="ml-2">
            I DO NOT have Regularly Scheduled Customers
          </Label>
        </div>

        <div className="space-y-4">
          <p className="text-sm">
            By completing this certification, you are stating that your company has notified its customers about the availability of waste collection services and provided them with the Customer Bill of Rights.
          </p>

          <div>
            <Label htmlFor="certOwnerName">Name of Owner/Authorized Member</Label>
            <Input 
              id="certOwnerName" 
              {...register("certOwnerName", { required: "This field is required" })} 
            />
            {errors.certOwnerName && <p className="text-red-500 text-sm">{errors.certOwnerName.message}</p>}
          </div>

          <div>
            <Label htmlFor="certOwnerTitle">Title</Label>
            <Input 
              id="certOwnerTitle" 
              {...register("certOwnerTitle", { required: "This field is required" })} 
            />
            {errors.certOwnerTitle && <p className="text-red-500 text-sm">{errors.certOwnerTitle.message}</p>}
          </div>

          <div>
            <Label htmlFor="certCompanyName">Official Company Name</Label>
            <Input 
              id="certCompanyName" 
              {...register("certCompanyName", { required: "This field is required" })} 
            />
            {errors.certCompanyName && <p className="text-red-500 text-sm">{errors.certCompanyName.message}</p>}
          </div>

          <div>
            <Label htmlFor="certPrintName">Print Name of Owner/Authorized Member</Label>
            <Input 
              id="certPrintName" 
              {...register("certPrintName", { required: "This field is required" })} 
            />
            {errors.certPrintName && <p className="text-red-500 text-sm">{errors.certPrintName.message}</p>}
          </div>

          <div>
            <Label>Signature of Owner/Authorized Member</Label>
            <DigitalSignature
              name="certSignature"
              register={register}
              required="Signature is required"
              errors={errors}
            />
          </div>

          <div>
            <Label htmlFor="certDate">Today's Date</Label>
            <Input 
              id="certDate" 
              type="date" 
              {...register("certDate", { required: "This field is required" })} 
            />
            {errors.certDate && <p className="text-red-500 text-sm">{errors.certDate.message}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Certifications;