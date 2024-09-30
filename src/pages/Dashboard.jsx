import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, FileText, Calendar, Truck, DollarSign } from 'lucide-react';

const Dashboard = () => {
  // Mock data - in a real app, this would come from your backend
  const formCompletion = 60;
  const upcomingDeadlines = [
    { id: 1, title: 'CPCN Form Submission', date: '2023-12-31' },
    { id: 2, title: 'Annual Report', date: '2024-01-15' },
  ];
  const recentDocuments = [
    { id: 1, name: 'Contract_2023.pdf', date: '2023-11-15' },
    { id: 2, name: 'Invoice_Q4.pdf', date: '2023-11-10' },
    { id: 3, name: 'Vehicle_Registration.pdf', date: '2023-11-05' },
  ];
  const businessMetrics = [
    { name: 'Contracts', value: 15 },
    { name: 'Revenue', value: 150000 },
    { name: 'Vehicles', value: 25 },
  ];
  const taskReminders = [
    { id: 1, task: 'Upload missing invoice' },
    { id: 2, task: 'Submit compliance documents' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Form Completion Status */}
        <Card>
          <CardHeader>
            <CardTitle>Form Completion Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={formCompletion} className="w-full" />
            <p className="mt-2">{formCompletion}% completed</p>
            <p className="text-sm text-gray-500">Sections requiring attention: Financial Information, Vehicle Details</p>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {upcomingDeadlines.map((deadline) => (
                <li key={deadline.id} className="flex items-center mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{deadline.title} - {deadline.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Recent Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {recentDocuments.map((doc) => (
                <li key={doc.id} className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>{doc.name}</span>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Notifications/Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <Bell className="h-4 w-4" />
              <AlertTitle>Form partially completed</AlertTitle>
              <AlertDescription>
                Your CPCN form is 60% complete. Continue filling it out to meet the deadline.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Business Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Business Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={businessMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Task Reminders */}
        <Card>
          <CardHeader>
            <CardTitle>Task Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {taskReminders.map((task) => (
                <li key={task.id} className="flex items-center justify-between mb-2">
                  <span>{task.task}</span>
                  <Button variant="outline" size="sm">Complete</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;