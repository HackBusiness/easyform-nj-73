import React from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, Trash2 } from 'lucide-react';

const facilityTypes = [
  { id: 'TS', label: 'Transfer Station' },
  { id: 'LF', label: 'Landfill' },
  { id: 'RC', label: 'Rail Carrier' },
  { id: 'RRF', label: 'Resource Recovery Facility/Incinerator' },
];

const DisposalInformation = ({ control, register, setValue }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "disposalFacilities"
  });

  const watchFieldArray = useWatch({
    control,
    name: "disposalFacilities"
  });

  const calculateTotals = () => {
    const totalGrossRevenue = watchFieldArray.reduce((sum, facility) => sum + (parseFloat(facility.grossRevenue) || 0), 0);
    setValue('totalGrossRevenue', totalGrossRevenue.toFixed(2));
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Disposal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Facility Name & Address</TableHead>
              <TableHead>Facility Type</TableHead>
              <TableHead>Waste Type</TableHead>
              <TableHead>County Origin</TableHead>
              <TableHead>Tons Picked Up</TableHead>
              <TableHead>Tons Disposed</TableHead>
              <TableHead>Disposal Fee Paid</TableHead>
              <TableHead>Recycling Tax Paid</TableHead>
              <TableHead>Gross Revenue</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <Input {...register(`disposalFacilities.${index}.name`)} placeholder="Facility Name" className="mb-2" />
                  <Input {...register(`disposalFacilities.${index}.address`)} placeholder="Address" />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-2">
                    {facilityTypes.map((type) => (
                      <div key={type.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${type.id}-${index}`}
                          {...register(`disposalFacilities.${index}.facilityTypes.${type.id}`)}
                        />
                        <Label htmlFor={`${type.id}-${index}`}>{type.label}</Label>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Input {...register(`disposalFacilities.${index}.wasteType`)} placeholder="Waste Type" />
                </TableCell>
                <TableCell>
                  <Input {...register(`disposalFacilities.${index}.countyOrigin`)} placeholder="County Origin" />
                </TableCell>
                <TableCell>
                  <Input {...register(`disposalFacilities.${index}.tonsPicked`, { valueAsNumber: true })} type="number" placeholder="Tons Picked Up" />
                </TableCell>
                <TableCell>
                  <Input {...register(`disposalFacilities.${index}.tonsDisposed`, { valueAsNumber: true })} type="number" placeholder="Tons Disposed" />
                </TableCell>
                <TableCell>
                  <Input {...register(`disposalFacilities.${index}.disposalFee`, { valueAsNumber: true })} type="number" placeholder="Disposal Fee" />
                </TableCell>
                <TableCell>
                  <Input {...register(`disposalFacilities.${index}.recyclingTax`, { valueAsNumber: true })} type="number" placeholder="Recycling Tax" />
                </TableCell>
                <TableCell>
                  <Input {...register(`disposalFacilities.${index}.grossRevenue`, { valueAsNumber: true })} type="number" placeholder="Gross Revenue" />
                </TableCell>
                <TableCell>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-between items-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({
              name: '',
              address: '',
              facilityTypes: {},
              wasteType: '',
              countyOrigin: '',
              tonsPicked: 0,
              tonsDisposed: 0,
              disposalFee: 0,
              recyclingTax: 0,
              grossRevenue: 0
            })}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Disposal Facility
          </Button>
          <Button type="button" onClick={calculateTotals}>Calculate Totals</Button>
        </div>
        <div className="mt-4">
          <Label htmlFor="totalGrossRevenue">Total Gross Revenue</Label>
          <Input id="totalGrossRevenue" {...register('totalGrossRevenue')} readOnly />
        </div>
      </CardContent>
    </Card>
  );
};

export default DisposalInformation;