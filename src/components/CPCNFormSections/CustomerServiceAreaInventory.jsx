import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const counties = [
  "Atlantic", "Bergen", "Burlington", "Camden", "Cape May", "Cumberland", 
  "Essex", "Gloucester", "Hudson", "Hunterdon", "Mercer", "Middlesex", "Monmouth", "Morris", 
  "Ocean", "Passaic", "Salem", "Somerset", "Sussex", "Union", "Warren"
];

const CustomerServiceAreaInventory = ({ register, control, errors }) => {
  const { fields: municipalFields, append: appendMunicipal, remove: removeMunicipal } = useFieldArray({
    control,
    name: "municipalContracts"
  });

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Customer Service Area Inventory</h3>
      
      <div className="space-y-4">
        <h4 className="font-medium">Customer List by County</h4>
        {counties.map((county) => (
          <div key={county} className="space-y-2 p-4 border rounded">
            <h5 className="font-medium">{county}</h5>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor={`${county}-residential`}>Scheduled Residential</Label>
                <Input id={`${county}-residential`} type="number" {...register(`customerList.${county}.residential`, { valueAsNumber: true })} />
              </div>
              <div>
                <Label htmlFor={`${county}-commercial`}>Scheduled Commercial</Label>
                <Input id={`${county}-commercial`} type="number" {...register(`customerList.${county}.commercial`, { valueAsNumber: true })} />
              </div>
              <div>
                <Label htmlFor={`${county}-industrial`}>Scheduled Industrial</Label>
                <Input id={`${county}-industrial`} type="number" {...register(`customerList.${county}.industrial`, { valueAsNumber: true })} />
              </div>
              <div>
                <Label htmlFor={`${county}-repeated`}>Repeated On-Call Customers</Label>
                <Input id={`${county}-repeated`} type="number" {...register(`customerList.${county}.repeated`, { valueAsNumber: true })} />
              </div>
              <div>
                <Label htmlFor={`${county}-onetime`}>One-Time Only Customers</Label>
                <Input id={`${county}-onetime`} type="number" {...register(`customerList.${county}.onetime`, { valueAsNumber: true })} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Municipal/Residential Contracts</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Municipality</TableHead>
              <TableHead>County</TableHead>
              <TableHead>Approximate # of Customers</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {municipalFields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <Input {...register(`municipalContracts.${index}.municipality`)} />
                </TableCell>
                <TableCell>
                  <Input {...register(`municipalContracts.${index}.county`)} />
                </TableCell>
                <TableCell>
                  <Input type="number" {...register(`municipalContracts.${index}.customers`, { valueAsNumber: true })} />
                </TableCell>
                <TableCell>
                  <Button type="button" variant="destructive" onClick={() => removeMunicipal(index)}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button type="button" onClick={() => appendMunicipal({ municipality: '', county: '', customers: 0 })}>
          Add Municipal Contract
        </Button>
      </div>
    </div>
  );
};

export default CustomerServiceAreaInventory;