import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

      <div className="space-y-4">
        <h4 className="font-medium">Holidays</h4>
        <Textarea {...register('holidays')} placeholder="Specify on which holidays services are not provided." />
        <Textarea {...register('holidayCollection')} placeholder="Specify when collection occurs if the scheduled day falls on a listed holiday." />
      </div>
    </div>
  );
};

export default TariffUpdate;