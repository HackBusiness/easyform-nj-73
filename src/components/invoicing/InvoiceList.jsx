import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InvoiceList = () => {
  const mockInvoices = [
    { id: 1, number: 'INV-001', customer: 'John Doe', amount: 500, dueDate: '2023-12-31', status: 'Paid' },
    { id: 2, number: 'INV-002', customer: 'Jane Smith', amount: 750, dueDate: '2024-01-15', status: 'Unpaid' },
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <Input className="w-1/3" placeholder="Search invoices..." />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="unpaid">Unpaid</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice #</TableHead>
            <TableHead>Customer Name</TableHead>
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
                <Button variant="outline" size="sm" className="mr-2">View</Button>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="outline" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoiceList;