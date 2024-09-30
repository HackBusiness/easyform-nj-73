import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', serviceHistory: 'Regular maintenance' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', serviceHistory: 'Emergency repair' },
];

const CustomerProfiles = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Profiles</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Service History</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.serviceHistory}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CustomerProfiles;