import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, Trash2 } from 'lucide-react';

const BrokersUsed = ({ register, control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "brokersUsed"
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Brokers Used in 2023</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Broker Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Contract Status</TableHead>
              <TableHead>CPCN SW #</TableHead>
              <TableHead>Payment Received</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <Input {...register(`brokersUsed.${index}.name`)} placeholder="Broker Name" />
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <Input {...register(`brokersUsed.${index}.street`)} placeholder="Street" />
                    <div className="grid grid-cols-3 gap-2">
                      <Input {...register(`brokersUsed.${index}.city`)} placeholder="City" />
                      <Input {...register(`brokersUsed.${index}.state`)} placeholder="State" />
                      <Input {...register(`brokersUsed.${index}.zip`)} placeholder="ZIP" />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`contract-${index}`} {...register(`brokersUsed.${index}.hasContract`)} />
                    <Label htmlFor={`contract-${index}`}>Ongoing Contract</Label>
                  </div>
                </TableCell>
                <TableCell>
                  <Input {...register(`brokersUsed.${index}.cpcnSwNumber`)} placeholder="CPCN SW #" />
                </TableCell>
                <TableCell>
                  <Input 
                    {...register(`brokersUsed.${index}.paymentReceived`, { 
                      valueAsNumber: true 
                    })} 
                    type="number" 
                    placeholder="Payment Amount" 
                  />
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
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={() => append({ 
            name: '', 
            street: '', 
            city: '', 
            state: '', 
            zip: '', 
            hasContract: false, 
            cpcnSwNumber: '', 
            paymentReceived: 0 
          })}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Broker
        </Button>
      </CardContent>
    </Card>
  );
};

export default BrokersUsed;