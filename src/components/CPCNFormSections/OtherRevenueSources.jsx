import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Trash2 } from 'lucide-react';

const counties = [
  "Atlantic", "Bergen", "Burlington", "Camden", "Cape May", "Cumberland", 
  "Essex", "Gloucester", "Hudson", "Hunterdon", "Mercer", "Middlesex", "Monmouth", "Morris", 
  "Ocean", "Passaic", "Salem", "Somerset", "Sussex", "Union", "Warren"
];

const OtherRevenueSources = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "otherRevenueSources"
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Other Sources of Gross Operating Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type of Revenue Source</TableHead>
              <TableHead>County of Derived Revenue</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <Input 
                    {...register(`otherRevenueSources.${index}.type`)} 
                    placeholder="e.g., subcontracting waste hauling"
                  />
                </TableCell>
                <TableCell>
                  <Select 
                    onValueChange={(value) => register(`otherRevenueSources.${index}.county`).onChange({ target: { value } })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select county" />
                    </SelectTrigger>
                    <SelectContent>
                      {counties.map((county) => (
                        <SelectItem key={county} value={county}>{county}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Input 
                    {...register(`otherRevenueSources.${index}.amount`, { 
                      valueAsNumber: true 
                    })} 
                    type="number" 
                    placeholder="Amount" 
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
          onClick={() => append({ type: '', county: '', amount: 0 })}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Revenue Source
        </Button>
      </CardContent>
    </Card>
  );
};

export default OtherRevenueSources;