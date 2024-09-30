import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Trash2 } from 'lucide-react';

const RelatedCompanies = ({ register, control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "relatedCompanies"
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Related Companies</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name & Address</TableHead>
              <TableHead>Type of Service</TableHead>
              <TableHead>Total Fee Paid in 2023</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <div className="space-y-2">
                    <Input {...register(`relatedCompanies.${index}.name`)} placeholder="Company Name" />
                    <Input {...register(`relatedCompanies.${index}.address`)} placeholder="Address" />
                  </div>
                </TableCell>
                <TableCell>
                  <Input {...register(`relatedCompanies.${index}.serviceType`)} placeholder="Type of Service" />
                </TableCell>
                <TableCell>
                  <Input 
                    {...register(`relatedCompanies.${index}.feePaid`, { 
                      valueAsNumber: true 
                    })} 
                    type="number" 
                    placeholder="Fee Paid" 
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
          onClick={() => append({ name: '', address: '', serviceType: '', feePaid: 0 })}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Related Company
        </Button>
      </CardContent>
    </Card>
  );
};

export default RelatedCompanies;