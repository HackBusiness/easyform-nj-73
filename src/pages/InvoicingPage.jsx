import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import InvoiceList from '../components/invoicing/InvoiceList';
import InvoiceGeneration from '../components/invoicing/InvoiceGeneration';
import RecurringBilling from '../components/invoicing/RecurringBilling';
import LateFeeManagement from '../components/invoicing/LateFeeManagement';
import PaymentIntegration from '../components/invoicing/PaymentIntegration';

const InvoicingPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Invoicing</h1>
      <p className="text-gray-600 mb-8">Manage your invoices efficiently with our easy-to-use tools.</p>

      <Tabs defaultValue="list" className="space-y-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="list">Invoices</TabsTrigger>
          <TabsTrigger value="generate">New Invoice</TabsTrigger>
          <TabsTrigger value="recurring">Recurring</TabsTrigger>
          <TabsTrigger value="latefees">Late Fees</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <Card>
            <CardContent className="pt-6">
              <InvoiceList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="generate">
          <Card>
            <CardContent className="pt-6">
              <InvoiceGeneration />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recurring">
          <Card>
            <CardContent className="pt-6">
              <RecurringBilling />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="latefees">
          <Card>
            <CardContent className="pt-6">
              <LateFeeManagement />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardContent className="pt-6">
              <PaymentIntegration />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InvoicingPage;