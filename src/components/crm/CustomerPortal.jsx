import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Truck, FileCheck, Bell } from 'lucide-react';

const CustomerPortal = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Your Customer Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Manage your account, view invoices, and request services all in one place.</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 pending payment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 scheduled this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contracts</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 up for renewal</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-4">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
        </TabsList>
        <TabsContent value="invoices" className="space-y-4">
          <h3 className="text-lg font-semibold">Recent Invoices</h3>
          <div className="space-y-2">
            {['INV-001', 'INV-002', 'INV-003'].map((invoice) => (
              <Card key={invoice}>
                <CardContent className="flex justify-between items-center p-4">
                  <span>{invoice}</span>
                  <Button variant="outline" size="sm">View</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="w-full">View All Invoices</Button>
        </TabsContent>
        <TabsContent value="services" className="space-y-4">
          <h3 className="text-lg font-semibold">Your Services</h3>
          <div className="space-y-2">
            {['Waste Collection', 'Recycling', 'Hazardous Waste Disposal'].map((service) => (
              <Card key={service}>
                <CardContent className="flex justify-between items-center p-4">
                  <span>{service}</span>
                  <Button variant="outline" size="sm">Manage</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="w-full">Request New Service</Button>
        </TabsContent>
        <TabsContent value="contracts" className="space-y-4">
          <h3 className="text-lg font-semibold">Your Contracts</h3>
          <div className="space-y-2">
            {['Standard Service Agreement', 'Special Waste Handling'].map((contract) => (
              <Card key={contract}>
                <CardContent className="flex justify-between items-center p-4">
                  <span>{contract}</span>
                  <Button variant="outline" size="sm">Review</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="w-full">Contact Sales for New Contract</Button>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Your next waste collection is scheduled for tomorrow.</li>
            <li>Invoice INV-003 is due in 5 days.</li>
            <li>Your recycling service contract is up for renewal next month.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerPortal;