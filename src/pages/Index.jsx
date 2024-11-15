import React from 'react';
import DocumentUpload from '../components/DocumentUpload';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Waste Management Platform</h1>
        <DocumentUpload />
      </div>
    </div>
  );
};

export default Index;