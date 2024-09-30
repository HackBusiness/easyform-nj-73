import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const counties = [
  "All New Jersey Counties", "Atlantic", "Bergen", "Burlington", "Camden", "Cape May", "Cumberland", 
  "Essex", "Gloucester", "Hudson", "Hunterdon", "Mercer", "Middlesex", "Monmouth", "Morris", 
  "Ocean", "Passaic", "Salem", "Somerset", "Sussex", "Union", "Warren"
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const TariffUpdate = ({ register, control, errors }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Tariff Update (2023)</h3>
      
      {/* Territory Served */}
      <div className="space-y-4">
        <h4 className="font-medium">Territory Served</h4>
        <div className="grid grid-cols-3 gap-2">
          {counties.map((county) => (
            <div key={county} className="flex items-center space-x-2">
              <Checkbox id={`county-${county}`} {...register(`counties.${county}`)} />
              <Label htmlFor={`county-${county}`}>{county}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Hours of Operation */}
      <div className="space-y-4">
        <h4 className="font-medium">Hours of Operation</h4>
        {days.map((day) => (
          <div key={day} className="flex items-center space-x-4">
            <Label className="w-24">{day}</Label>
            <Input {...register(`hours.${day}.am`)} placeholder="AM" className="w-20" />
            <Input {...register(`hours.${day}.pm`)} placeholder="PM" className="w-20" />
          </div>
        ))}
        <div className="flex items-center space-x-2">
          <Checkbox id="24-7" {...register('hours.24-7')} />
          <Label htmlFor="24-7">24 Hours / 7 Days a Week</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="24-7-except-holidays" {...register('hours.24-7-except-holidays')} />
          <Label htmlFor="24-7-except-holidays">24 Hours / 7 Days a Week (excluding holidays listed below)</Label>
        </div>
      </div>

      {/* Holidays */}
      <div className="space-y-4">
        <h4 className="font-medium">Holidays</h4>
        <Textarea {...register('holidays')} placeholder="Specify on which holidays services are not provided." />
        <Textarea {...register('holidayCollection')} placeholder="Specify when collection occurs if the scheduled day falls on a listed holiday." />
      </div>

      {/* Sample Invoice */}
      <div className="space-y-4">
        <h4 className="font-medium">Sample Invoice</h4>
        <Input type="file" {...register('sampleInvoice')} />
        <Button type="button">Attach Sample Invoice</Button>
      </div>

      {/* Special Charges */}
      <div className="space-y-4">
        <h4 className="font-medium">Special Charges on Invoice</h4>
        <Textarea {...register('specialCharges')} placeholder="List any special charges that apply (e.g., late fees, fuel, paper billing, mileage)." />
      </div>

      {/* Method of Billing */}
      <div className="space-y-4">
        <h4 className="font-medium">Method of Billing</h4>
        <Textarea {...register('billingMethod')} placeholder="Describe the billing and payment procedures (e.g., invoicing)." />
      </div>

      {/* Types of Service and Details */}
      <div className="space-y-4">
        <h4 className="font-medium">Types of Service and Details</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type of Service</TableHead>
              <TableHead>Capacity of Truck/Container</TableHead>
              <TableHead>Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((index) => (
              <TableRow key={index}>
                <TableCell>
                  <Input {...register(`serviceDetails.${index}.type`)} placeholder="e.g., roll-off" />
                </TableCell>
                <TableCell>
                  <Input {...register(`serviceDetails.${index}.capacity`)} placeholder="e.g., 10 yards" />
                </TableCell>
                <TableCell>
                  <Input {...register(`serviceDetails.${index}.rate`)} placeholder="e.g., $/week" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button type="button">Add Service</Button>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h4 className="font-medium">Additional Information</h4>
        <Textarea {...register('additionalInfo')} placeholder="Provide any other pertinent tariff information or explanations." />
      </div>
    </div>
  );
};

export default TariffUpdate;