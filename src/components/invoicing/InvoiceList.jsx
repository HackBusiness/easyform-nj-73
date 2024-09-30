import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const InvoiceList = () => {
  const mockInvoices = [
    { id: 1, number: 'INV-001', customer: 'John Doe', amount: 500, dueDate: '2023-12-31', status: 'Paid' },
    { id: 2, number: 'INV-002', customer: 'Jane Smith', amount: 750, dueDate: '2024-01-15', status: 'Unpaid' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input className="w-64" placeholder="Search invoices..." />
        <Button>New Invoice</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice #</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.number}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>${invoice.amount}</TableCell>
              <TableCell>{invoice.dueDate}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoiceList;