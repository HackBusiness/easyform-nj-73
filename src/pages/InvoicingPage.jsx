import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InvoiceGenerator from '../components/invoicing/InvoiceGenerator';
import RecurringBilling from '../components/invoicing/RecurringBilling';
import LateFeeManager from '../components/invoicing/LateFeeManager';
import PaymentIntegration from '../components/invoicing/PaymentIntegration';

const InvoicingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Invoicing & Billing</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Invoice Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <InvoiceGenerator />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recurring Billing</CardTitle>
          </CardHeader>
          <CardContent>
            <RecurringBilling />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Late Fee Management</CardTitle>
          </CardHeader>
          <CardContent>
            <LateFeeManager />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentIntegration />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvoicingPage;