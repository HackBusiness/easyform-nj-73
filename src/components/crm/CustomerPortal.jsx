import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CustomerPortal = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Portal</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Welcome to the Customer Portal. Here you can view your invoices, request services, and review contract details.</p>
        <div className="space-y-4">
          <Button>View Invoices</Button>
          <Button>Request Service</Button>
          <Button>Review Contract</Button>
        </div>
        <p className="mt-4 text-sm text-gray-500">For any issues or questions, please contact our support team.</p>
      </CardContent>
    </Card>
  );
};

export default CustomerPortal;