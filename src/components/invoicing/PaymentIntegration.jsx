import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentIntegration = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Paid Invoices</h3>
            <p className="text-2xl font-bold text-green-600">5</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Unpaid Invoices</h3>
            <p className="text-2xl font-bold text-yellow-600">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Overdue Invoices</h3>
            <p className="text-2xl font-bold text-red-600">2</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Button className="flex-1">Connect Stripe</Button>
        <Button className="flex-1">Connect PayPal</Button>
      </div>
    </div>
  );
};

export default PaymentIntegration;