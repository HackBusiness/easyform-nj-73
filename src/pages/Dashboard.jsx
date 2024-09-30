import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, FileText, Calendar, Truck, DollarSign, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  // Mock data (in a real app, this would come from your backend)
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
    <div className="container mx-auto p-6 space-y-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Form Completion Status */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-lg">Form Completion Status</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Progress value={formCompletion} className="w-full h-3 mb-4" />
            <p className="text-2xl font-bold text-blue-600">{formCompletion}% completed</p>
            <p className="text-sm text-gray-500 mt-2">Sections requiring attention: Financial Information, Vehicle Details</p>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <li key={deadline.id} className="flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-semibold">{deadline.title}</p>
                    <p className="text-sm text-gray-500">{deadline.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Recent Documents */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardTitle className="text-lg">Recent Documents</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {recentDocuments.map((doc) => (
                <li key={doc.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="mr-3 h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-semibold">{doc.name}</p>
                      <p className="text-sm text-gray-500">{doc.date}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-purple-500 hover:text-purple-600">
                    View
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Notifications/Alerts */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-full">
          <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
            <CardTitle className="text-lg">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Alert className="bg-yellow-50 border-yellow-200">
              <Bell className="h-5 w-5 text-yellow-500" />
              <AlertTitle className="text-yellow-700">Form partially completed</AlertTitle>
              <AlertDescription className="text-yellow-600">
                Your CPCN form is 60% complete. Continue filling it out to meet the deadline.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Business Metrics */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-full">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardTitle className="text-lg">Business Metrics</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={businessMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip />
                <Bar dataKey="value" fill="#667eea" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Task Reminders */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-full">
          <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardTitle className="text-lg">Task Reminders</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {taskReminders.map((task) => (
                <li key={task.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                  <span className="font-semibold">{task.task}</span>
                  <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                    Complete <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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