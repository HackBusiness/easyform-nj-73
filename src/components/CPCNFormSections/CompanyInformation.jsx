import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const CompanyInformation = ({ register, errors, watch }) => {
  const watchSameAsAbove = watch("sameAsAbove", false);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Company Information</h3>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="collectorTransporter" {...register('collectorTransporter')} />
          <Label htmlFor="collectorTransporter">COLLECTOR/TRANSPORTER</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="broker" {...register('broker')} />
          <Label htmlFor="broker">BROKER</Label>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="companyName">OFFICIAL COMPANY NAME (required)</Label>
        <Input id="companyName" {...register('companyName', { required: true })} />
        {errors.companyName && <span className="text-red-500">This field is required</span>}
        <p className="text-xs italic">This is the name registered with the Division of Commercial Recordings.</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">EMAIL (required)</Label>
        <Input id="email" type="email" {...register('email', { required: true })} />
        {errors.email && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="streetAddress">STREET ADDRESS (required)</Label>
        <Input id="streetAddress" {...register('streetAddress', { required: true })} />
        {errors.streetAddress && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-2">
          <Label htmlFor="city">CITY (required)</Label>
          <Input id="city" {...register('city', { required: true })} />
          {errors.city && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">STATE</Label>
          <Input id="state" {...register('state', { required: true })} />
          {errors.state && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="zip">ZIP</Label>
          <Input id="zip" {...register('zip', { required: true })} />
          {errors.zip && <span className="text-red-500">This field is required</span>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="fein">FEIN (or LAST 4# OF SS# FOR SOLE PROPRIETOR) (required)</Label>
        <Input id="fein" {...register('fein', { required: true })} />
        {errors.fein && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="officeTelephone">OFFICE TELEPHONE (required)</Label>
        <Input id="officeTelephone" {...register('officeTelephone', { required: true })} />
        {errors.officeTelephone && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          <Label htmlFor="cellPhone">CELL PHONE (required)</Label>
          <Input id="cellPhone" {...register('cellPhone', { required: true })} />
          {errors.cellPhone && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="faxNumber">FAX NUMBER</Label>
          <Input id="faxNumber" {...register('faxNumber')} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="website">WEBSITE</Label>
        <Input id="website" {...register('website')} />
      </div>
      <div className="space-y-2">
        <Label>BILLING/MAILING ADDRESS</Label>
        <div className="flex items-center space-x-2">
          <Checkbox id="sameAsAbove" {...register('sameAsAbove')} />
          <Label htmlFor="sameAsAbove">CHECK HERE IF SAME AS ABOVE</Label>
        </div>
      </div>
      {!watchSameAsAbove && (
        <>
          <div className="space-y-2">
            <Label htmlFor="billingStreetAddress">STREET ADDRESS</Label>
            <Input id="billingStreetAddress" {...register('billingStreetAddress')} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-2">
              <Label htmlFor="billingCity">CITY</Label>
              <Input id="billingCity" {...register('billingCity')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingState">STATE</Label>
              <Input id="billingState" {...register('billingState')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingZip">ZIP</Label>
              <Input id="billingZip" {...register('billingZip')} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyInformation;