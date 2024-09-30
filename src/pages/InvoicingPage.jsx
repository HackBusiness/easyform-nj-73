import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InvoiceList from '../components/invoicing/InvoiceList';
import InvoiceGeneration from '../components/invoicing/InvoiceGeneration';
import RecurringBilling from '../components/invoicing/RecurringBilling';
import LateFeeManagement from '../components/invoicing/LateFeeManagement';
import PaymentIntegration from '../components/invoicing/PaymentIntegration';

const InvoicingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Invoicing</h1>
      <p className="text-gray-600 mb-8">Manage your invoices efficiently.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Invoice List</CardTitle>
          </CardHeader>
          <CardContent>
            <InvoiceList />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generate Invoice</CardTitle>
          </CardHeader>
          <CardContent>
            <InvoiceGeneration />
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
            <LateFeeManagement />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
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