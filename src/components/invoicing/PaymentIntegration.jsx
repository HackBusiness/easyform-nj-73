import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentIntegration = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Card className="w-1/3">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Paid Invoices</h3>
            <p className="text-2xl font-bold text-green-600">5</p>
          </CardContent>
        </Card>
        <Card className="w-1/3">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Unpaid Invoices</h3>
            <p className="text-2xl font-bold text-yellow-600">3</p>
          </CardContent>
        </Card>
        <Card className="w-1/3">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Overdue Invoices</h3>
            <p className="text-2xl font-bold text-red-600">2</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex space-x-4">
        <Button className="w-1/2">Connect Stripe</Button>
        <Button className="w-1/2">Connect PayPal</Button>
      </div>
    </div>
  );
};

export default PaymentIntegration;