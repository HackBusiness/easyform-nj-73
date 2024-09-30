import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockAgreements = [
  { id: 1, customer: 'John Doe', type: 'Maintenance', startDate: '2023-01-01', endDate: '2023-12-31', status: 'Active' },
  { id: 2, customer: 'Jane Smith', type: 'Full Service', startDate: '2023-03-15', endDate: '2024-03-14', status: 'Expiring Soon' },
];

const ServiceAgreements = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Agreements</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAgreements.map((agreement) => (
              <TableRow key={agreement.id}>
                <TableCell>{agreement.customer}</TableCell>
                <TableCell>{agreement.type}</TableCell>
                <TableCell>{agreement.startDate}</TableCell>
                <TableCell>{agreement.endDate}</TableCell>
                <TableCell>
                  <Badge variant={agreement.status === 'Active' ? 'default' : 'secondary'}>
                    {agreement.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ServiceAgreements;