import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CPCNForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [officersAndEquityHolders, setOfficersAndEquityHolders] = useState([
    { name: '', title: '', equity: '' },
    { name: '', title: '', equity: '' },
    { name: '', title: '', equity: '' }
  ]);

  const watchSameAsAbove = watch("sameAsAbove", false);

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">2023 CPCN ANNUAL REPORT FOR COLLECTORS/TRANSPORTERS AND BROKERS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-bold">FILL IN ALL INFORMATION BELOW:</p>
          
          <div>
            <p className="font-bold">CHECK ALL THAT APPLY:</p>
            <div className="flex space-x-4">
              <Checkbox id="collectorTransporter" {...register('collectorTransporter')} />
              <Label htmlFor="collectorTransporter">COLLECTOR/TRANSPORTER</Label>
              <Checkbox id="broker" {...register('broker')} />
              <Label htmlFor="broker">BROKER</Label>
            </div>
          </div>

          <div>
            <p className="font-bold">1. INFORMATION</p>
            <p className="text-sm italic">*Required: Working Contact Information</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">*OFFICIAL COMPANY NAME</Label>
            <Input id="companyName" {...register('companyName', { required: true })} />
            {errors.companyName && <span className="text-red-500">This field is required</span>}
            <p className="text-xs italic">(This is the name registered with the Division of Commercial Recordings)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">*EMAIL</Label>
            <Input id="email" type="email" {...register('email', { required: true })} />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="streetAddress">*STREET ADDRESS</Label>
            <Input id="streetAddress" {...register('streetAddress', { required: true })} />
            {errors.streetAddress && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="city">*CITY</Label>
              <Input id="city" {...register('city', { required: true })} />
              {errors.city && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="w-24 space-y-2">
              <Label htmlFor="state">STATE</Label>
              <Input id="state" {...register('state', { required: true })} />
              {errors.state && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="w-32 space-y-2">
              <Label htmlFor="zip">ZIP</Label>
              <Input id="zip" {...register('zip', { required: true })} />
              {errors.zip && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fein">*FEIN (or LAST 4# OF SS# FOR SOLE PROPRIETOR)</Label>
            <Input id="fein" {...register('fein', { required: true })} />
            {errors.fein && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="officeTelephone">*OFFICE TELEPHONE</Label>
            <Input id="officeTelephone" {...register('officeTelephone', { required: true })} />
            {errors.officeTelephone && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="cellPhone">*CELL PHONE</Label>
              <Input id="cellPhone" {...register('cellPhone', { required: true })} />
              {errors.cellPhone && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="faxNumber">FAX NUMBER</Label>
              <Input id="faxNumber" {...register('faxNumber')} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">WEBSITE</Label>
            <Input id="website" {...register('website')} />
          </div>

          <div className="space-y-2">
            <Label>*BILLING/MAILING ADDRESS</Label>
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

              <div className="flex space-x-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="billingCity">CITY</Label>
                  <Input id="billingCity" {...register('billingCity')} />
                </div>
                <div className="w-24 space-y-2">
                  <Label htmlFor="billingState">STATE</Label>
                  <Input id="billingState" {...register('billingState')} />
                </div>
                <div className="w-32 space-y-2">
                  <Label htmlFor="billingZip">ZIP</Label>
                  <Input id="billingZip" {...register('billingZip')} />
                </div>
              </div>
            </>
          )}

          <div>
            <p className="font-bold">2. LIST OFFICERS AND EQUITY HOLDERS:</p>
            {officersAndEquityHolders.map((_, index) => (
              <div key={index} className="flex space-x-4 mt-2">
                <Input {...register(`officers.${index}.name`)} placeholder="*Name" />
                <Input {...register(`officers.${index}.title`)} placeholder="*Title" />
                <Input {...register(`officers.${index}.equity`)} placeholder="*Equity" />
              </div>
            ))}
          </div>

          <div>
            <p className="font-bold">3. NAME OF REGISTERED AGENT (Out of State Companies):</p>
            <Input {...register('registeredAgent')} className="mt-2" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="agentStreetAddress">STREET ADDRESS</Label>
            <Input id="agentStreetAddress" {...register('agentStreetAddress')} />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="agentCity">CITY</Label>
              <Input id="agentCity" {...register('agentCity')} />
            </div>
            <div className="w-24 space-y-2">
              <Label htmlFor="agentState">STATE</Label>
              <Input id="agentState" {...register('agentState')} />
            </div>
            <div className="w-32 space-y-2">
              <Label htmlFor="agentZip">ZIP</Label>
              <Input id="agentZip" {...register('agentZip')} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="agentTelephone">TELEPHONE</Label>
            <Input id="agentTelephone" {...register('agentTelephone')} />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="agentCellPhone">CELL PHONE</Label>
              <Input id="agentCellPhone" {...register('agentCellPhone')} />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="agentFaxNumber">FAX NUMBER</Label>
              <Input id="agentFaxNumber" {...register('agentFaxNumber')} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button type="submit">Submit Form</Button>
    </form>
  );
};

export default CPCNForm;