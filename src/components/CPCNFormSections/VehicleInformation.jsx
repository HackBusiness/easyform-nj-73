import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const VehicleInformation = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Vehicle Information</h3>
      <div className="space-y-2">
        <Label>Number of solid waste vehicles as of December 31, 2023:</Label>
        <div className="flex items-center space-x-2">
          <Checkbox id="noEquipment" {...register('noEquipment')} />
          <Label htmlFor="noEquipment">No Equipment</Label>
        </div>
        <Input {...register('cabs')} placeholder="Cabs (does not hold waste)" />
        <Input {...register('containers')} placeholder="Containers (roll-off)" />
        <Input {...register('singleUnitVehicles')} placeholder="Single Unit Vehicles" />
        <Input {...register('trailers')} placeholder="Trailers" />
      </div>
      <div className="space-y-2">
        <Label>Vehicle Location:</Label>
        <Input {...register('vehicleAddress')} placeholder="Address" />
        <div className="grid grid-cols-3 gap-2">
          <Input {...register('vehicleCity')} placeholder="City" />
          <Input {...register('vehicleState')} placeholder="State" />
          <Input {...register('vehicleZip')} placeholder="ZIP" />
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;