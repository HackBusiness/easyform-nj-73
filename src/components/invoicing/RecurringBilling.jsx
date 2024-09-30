import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const RecurringBilling = () => {
  const mockRecurringInvoices = [
    { id: 1, customer: 'John Doe', frequency: 'Monthly', amount: 500, nextPayment: '2024-01-01' },
    { id: 2, customer: 'Jane Smith', frequency: 'Quarterly', amount: 1500, nextPayment: '2024-03-01' },
  ];

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Next Payment</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockRecurringInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.frequency}</TableCell>
              <TableCell>${invoice.amount}</TableCell>
              <TableCell>{invoice.nextPayment}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button>Add Recurring Invoice</Button>
      </div>
    </div>
  );
};

export default RecurringBilling;