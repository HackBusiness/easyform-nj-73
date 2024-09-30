import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CPCNForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [officersAndEquityHolders, setOfficersAndEquityHolders] = useState([{ name: '', title: '', equity: '' }]);

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  const addOfficerOrEquityHolder = () => {
    setOfficersAndEquityHolders([...officersAndEquityHolders, { name: '', title: '', equity: '' }]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>2023 CPCN ANNUAL REPORT FOR COLLECTORS/TRANSPORTERS AND BROKERS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <Checkbox id="collectorTransporter" {...register('collectorTransporter')} />
            <Label htmlFor="collectorTransporter">COLLECTOR/TRANSPORTER</Label>
            <Checkbox id="broker" {...register('broker')} />
            <Label htmlFor="broker">BROKER</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">OFFICIAL COMPANY NAME</Label>
            <Input id="companyName" {...register('companyName', { required: true })} />
            {errors.companyName && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">EMAIL</Label>
            <Input id="email" type="email" {...register('email', { required: true })} />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="streetAddress">STREET ADDRESS</Label>
            <Input id="streetAddress" {...register('streetAddress', { required: true })} />
            {errors.streetAddress && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="city">CITY</Label>
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
            <Label htmlFor="fein">FEIN (or LAST 4# OF SS# FOR SOLE PROPRIETOR)</Label>
            <Input id="fein" {...register('fein', { required: true })} />
            {errors.fein && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="officeTelephone">OFFICE TELEPHONE</Label>
            <Input id="officeTelephone" {...register('officeTelephone', { required: true })} />
            {errors.officeTelephone && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="cellPhone">CELL PHONE</Label>
              <Input id="cellPhone" {...register('cellPhone')} />
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
            <Label>BILLING/MAILING ADDRESS</Label>
            <div className="flex items-center space-x-2">
              <Checkbox id="sameAsAbove" {...register('sameAsAbove')} />
              <Label htmlFor="sameAsAbove">Check here if same as above</Label>
            </div>
          </div>

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

          <div>
            <Label>LIST OFFICERS AND EQUITY HOLDERS</Label>
            {officersAndEquityHolders.map((_, index) => (
              <div key={index} className="flex space-x-4 mt-2">
                <Input {...register(`officers.${index}.name`)} placeholder="Name" />
                <Input {...register(`officers.${index}.title`)} placeholder="Title" />
                <Input {...register(`officers.${index}.equity`)} placeholder="Equity %" />
              </div>
            ))}
            <Button type="button" onClick={addOfficerOrEquityHolder} className="mt-2">Add Officer/Equity Holder</Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="registeredAgent">NAME OF REGISTERED AGENT (Out of State Companies)</Label>
            <Input id="registeredAgent" {...register('registeredAgent')} />
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

          <div className="space-y-2">
            <Label>VEHICLE INFORMATION FOR YOUR SOLID WASTE TRANSPORTATION EQUIPMENT</Label>
            <p className="text-sm text-gray-500">Provide the number of solid waste vehicles that require NJDEP issued decals owned and/or operated (include leased vehicles) by the CPCN holder as of December 31, 2023.</p>
            <div className="space-y-2">
              <Input {...register('noEquipment')} placeholder="NO EQUIPMENT" />
              <Input {...register('cabs')} placeholder="CABS (does not hold waste)" />
              <Input {...register('containers')} placeholder="CONTAINERS (roll off)" />
              <Input {...register('singleUnitVehicles')} placeholder="SINGLE UNIT VEHICLES (eg. pickup trucks, vans, dump truck)" />
              <Input {...register('trailers')} placeholder="TRAILERS" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>VEHICLE LOCATION</Label>
            <p className="text-sm text-gray-500">Provide the address of the location of where your solid waste vehicles are stored.</p>
            <Input {...register('vehicleAddress')} placeholder="Address" />
            <Input {...register('vehicleCityStateZip')} placeholder="City, State, Zip" />
          </div>

          <div className="space-y-2">
            <Label>DID YOUR COMPANY USE A SOLID WASTE BROKER SERVICE?</Label>
            <div className="flex space-x-4">
              <Checkbox id="brokerServiceNo" {...register('brokerService')} value="no" />
              <Label htmlFor="brokerServiceNo">NO</Label>
              <Checkbox id="brokerServiceYes" {...register('brokerService')} value="yes" />
              <Label htmlFor="brokerServiceYes">YES: If YES please see Page 16.</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label>DOES YOUR COMPANY OR ITS PRINCIPALS HAVE ANY CURRENT OR OUTSTANDING JUDGMENTS AND/OR LIENS?</Label>
            <div className="flex space-x-4">
              <Checkbox id="judgmentsLiensNo" {...register('judgmentsLiens')} value="no" />
              <Label htmlFor="judgmentsLiensNo">NO</Label>
              <Checkbox id="judgmentsLiensYes" {...register('judgmentsLiens')} value="yes" />
              <Label htmlFor="judgmentsLiensYes">YES: You must provide the information below for EACH (label and attach a separate page if necessary):</Label>
            </div>
            {/* Add conditional rendering for additional fields if 'YES' is selected */}
          </div>

          <div className="space-y-2">
            <Label>HAS ANY EMPLOYEE, ASSOCIATE, OFFICER, OR EQUITY HOLDER HAD THEIR SOLID WASTE OPERATING AUTHORITY REVOKED OR SUSPENDED IN NEW JERSEY OR NEW YORK?</Label>
            <div className="flex space-x-4">
              <Checkbox id="authorityRevokedNo" {...register('authorityRevoked')} value="no" />
              <Label htmlFor="authorityRevokedNo">NO</Label>
              <Checkbox id="authorityRevokedYes" {...register('authorityRevoked')} value="yes" />
              <Label htmlFor="authorityRevokedYes">YES: You must provide the name and details concerning this revocation or suspension (label and attach a separate page if necessary):</Label>
            </div>
            {/* Add conditional rendering for additional fields if 'YES' is selected */}
          </div>
        </CardContent>
      </Card>

      <Button type="submit">Submit Form</Button>
    </form>
  );
};

export default CPCNForm;