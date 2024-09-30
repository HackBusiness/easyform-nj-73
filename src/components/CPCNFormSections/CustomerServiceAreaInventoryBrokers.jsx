import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FileUpload from '../FileUpload';

const counties = [
  "Atlantic", "Bergen", "Burlington", "Camden", "Cape May", "Cumberland", 
  "Essex", "Gloucester", "Hudson", "Hunterdon", "Mercer", "Middlesex", "Monmouth", "Morris", 
  "Ocean", "Passaic", "Salem", "Somerset", "Sussex", "Union", "Warren"
];

const CustomerServiceAreaInventoryBrokers = ({ register, control, errors }) => {
  const { fields, append } = useFieldArray({
    control,
    name: "customerServiceAreaInventoryBrokers"
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Customer Service Area Inventory for Brokers</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {counties.map((county) => (
            <AccordionItem value={county} key={county}>
              <AccordionTrigger>{county} County</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`${county}-residential`}>Scheduled Residential Customers</Label>
                    <Input 
                      id={`${county}-residential`} 
                      type="number" 
                      {...register(`customerServiceAreaInventoryBrokers.${county}.residential`, { valueAsNumber: true })} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`${county}-commercial`}>Scheduled Commercial Customers</Label>
                    <Input 
                      id={`${county}-commercial`} 
                      type="number" 
                      {...register(`customerServiceAreaInventoryBrokers.${county}.commercial`, { valueAsNumber: true })} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`${county}-industrial`}>Scheduled Industrial Customers</Label>
                    <Input 
                      id={`${county}-industrial`} 
                      type="number" 
                      {...register(`customerServiceAreaInventoryBrokers.${county}.industrial`, { valueAsNumber: true })} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`${county}-repeated`}>Repeated On-Call Customers</Label>
                    <Input 
                      id={`${county}-repeated`} 
                      type="number" 
                      {...register(`customerServiceAreaInventoryBrokers.${county}.repeated`, { valueAsNumber: true })} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`${county}-onetime`}>One-Time Only Customers</Label>
                    <Input 
                      id={`${county}-onetime`} 
                      type="number" 
                      {...register(`customerServiceAreaInventoryBrokers.${county}.onetime`, { valueAsNumber: true })} 
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-6">
          <FileUpload
            label="Attach Customer List or Supporting Documents"
            name="customerServiceAreaInventoryBrokersAttachments"
            register={register}
            required={false}
            errors={errors}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerServiceAreaInventoryBrokers;