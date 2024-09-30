import React from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlusCircle, Trash2, Building2, Truck, Train, Factory } from 'lucide-react';

const facilityTypes = [
  { id: 'TS', label: 'Transfer Station', icon: <Truck className="h-4 w-4" /> },
  { id: 'LF', label: 'Landfill', icon: <Building2 className="h-4 w-4" /> },
  { id: 'RC', label: 'Rail Carrier', icon: <Train className="h-4 w-4" /> },
  { id: 'RRF', label: 'Resource Recovery Facility/Incinerator', icon: <Factory className="h-4 w-4" /> },
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
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {fields.map((field, index) => (
            <AccordionItem value={`item-${index}`} key={field.id}>
              <AccordionTrigger className="text-lg font-semibold">
                {`Disposal Facility ${index + 1}`}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor={`name-${index}`}>Facility Name</Label>
                      <Input id={`name-${index}`} {...register(`disposalFacilities.${index}.name`)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor={`address-${index}`}>Address</Label>
                      <Input id={`address-${index}`} {...register(`disposalFacilities.${index}.address`)} className="mt-1" />
                    </div>
                    <div>
                      <Label>Facility Type</Label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {facilityTypes.map((type) => (
                          <div key={type.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`${type.id}-${index}`}
                              {...register(`disposalFacilities.${index}.facilityTypes.${type.id}`)}
                            />
                            <Label htmlFor={`${type.id}-${index}`} className="flex items-center">
                              {type.icon}
                              <span className="ml-2">{type.label}</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor={`wasteType-${index}`}>Waste Type</Label>
                      <Input id={`wasteType-${index}`} {...register(`disposalFacilities.${index}.wasteType`)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor={`countyOrigin-${index}`}>County Origin</Label>
                      <Input id={`countyOrigin-${index}`} {...register(`disposalFacilities.${index}.countyOrigin`)} className="mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`tonsPicked-${index}`}>Tons Picked Up</Label>
                        <Input id={`tonsPicked-${index}`} type="number" {...register(`disposalFacilities.${index}.tonsPicked`, { valueAsNumber: true })} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor={`tonsDisposed-${index}`}>Tons Disposed</Label>
                        <Input id={`tonsDisposed-${index}`} type="number" {...register(`disposalFacilities.${index}.tonsDisposed`, { valueAsNumber: true })} className="mt-1" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`disposalFee-${index}`}>Disposal Fee</Label>
                        <Input id={`disposalFee-${index}`} type="number" {...register(`disposalFacilities.${index}.disposalFee`, { valueAsNumber: true })} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor={`recyclingTax-${index}`}>Recycling Tax</Label>
                        <Input id={`recyclingTax-${index}`} type="number" {...register(`disposalFacilities.${index}.recyclingTax`, { valueAsNumber: true })} className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`grossRevenue-${index}`}>Gross Revenue</Label>
                      <Input id={`grossRevenue-${index}`} type="number" {...register(`disposalFacilities.${index}.grossRevenue`, { valueAsNumber: true })} className="mt-1" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => remove(index)}
                    className="flex items-center"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove Facility
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-6 flex justify-between items-center">
          <Button
            type="button"
            variant="outline"
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
            className="flex items-center"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Disposal Facility
          </Button>
          <Button type="button" onClick={calculateTotals} variant="secondary">Calculate Totals</Button>
        </div>
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <Label htmlFor="totalGrossRevenue" className="text-lg font-semibold">Total Gross Revenue</Label>
          <Input id="totalGrossRevenue" {...register('totalGrossRevenue')} className="mt-2 text-xl font-bold" readOnly />
        </div>
      </CardContent>
    </Card>
  );
};

export default DisposalInformation;