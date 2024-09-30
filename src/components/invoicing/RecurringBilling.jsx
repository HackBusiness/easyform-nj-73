import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const RecurringBilling = () => {
  const mockRecurringInvoices = [
    { id: 1, number: 'REC-001', customer: 'John Doe', frequency: 'Monthly', nextPayment: '2024-01-01' },
    { id: 2, number: 'REC-002', customer: 'Jane Smith', frequency: 'Quarterly', nextPayment: '2024-03-01' },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Recurring Invoice #</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Frequency</TableHead>
          <TableHead>Next Payment Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockRecurringInvoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.number}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell>{invoice.frequency}</TableCell>
            <TableCell>{invoice.nextPayment}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">Edit</Button>
              <Button variant="outline" size="sm">Cancel</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecurringBilling;