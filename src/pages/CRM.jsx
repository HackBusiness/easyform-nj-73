import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomerProfiles from '../components/crm/CustomerProfiles';
import ServiceAgreements from '../components/crm/ServiceAgreements';
import CustomerPortal from '../components/crm/CustomerPortal';

const CRM = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Customer Relationship Management</h1>
      <Tabs defaultValue="profiles">
        <TabsList>
          <TabsTrigger value="profiles">Customer Profiles</TabsTrigger>
          <TabsTrigger value="agreements">Service Agreements</TabsTrigger>
          <TabsTrigger value="portal">Customer Portal</TabsTrigger>
        </TabsList>
        <TabsContent value="profiles">
          <CustomerProfiles />
        </TabsContent>
        <TabsContent value="agreements">
          <ServiceAgreements />
        </TabsContent>
        <TabsContent value="portal">
          <CustomerPortal />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CRM;