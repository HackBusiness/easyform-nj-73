import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DragDropZone from './DragDropZone';
import FilePreview from './FilePreview';
import DocumentList from './DocumentList';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from 'sonner';

// Mock function to simulate fetching documents
const fetchDocuments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Document 1.pdf', category: 'Contracts', tags: ['important'], uploadDate: new Date() },
        { id: 2, name: 'Document 2.docx', category: 'Invoices', tags: ['Q1'], uploadDate: new Date() },
      ]);
    }, 1000);
  });
};

const DocumentUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { data: documents, isLoading, error } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  });

  const handleFileDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploadProgress(0);
        const newUploadedFiles = files.map((file, index) => ({
          id: Date.now() + index,
          name: file.name,
          category,
          tags: tags.split(',').map(tag => tag.trim()),
          uploadDate: new Date(),
        }));
        setUploadedFiles([...uploadedFiles, ...newUploadedFiles]);
        setFiles([]);
        toast.success('Files uploaded successfully');
      }
    }, 300);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      toast.error('Please select files to upload');
      return;
    }
    simulateUpload();
  };

  const handleDelete = (fileId) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
    toast.success('File deleted successfully');
  };

  const handleDownload = (fileId, fileName) => {
    // In a real application, this would trigger a file download
    toast.success(`Downloading ${fileName}`);
  };

  const filteredDocuments = [...documents || [], ...uploadedFiles].filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || doc.category === category) &&
    (tags.length === 0 || tags.split(',').every(tag => doc.tags.includes(tag.trim())))
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Document Upload</h1>
      <DragDropZone onDrop={handleFileDrop} />
      {files.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Files to Upload:</h2>
          {files.map((file, index) => (
            <FilePreview key={index} file={file} />
          ))}
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="mb-2"
          />
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
            className="mb-2"
          />
          <Button onClick={handleUpload}>Upload Files</Button>
        </div>
      )}
      {uploadProgress > 0 && <Progress value={uploadProgress} className="mt-4" />}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Uploaded Documents</h2>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search documents"
          className="mb-4"
        />
        {isLoading ? (
          <p>Loading documents...</p>
        ) : error ? (
          <p>Error loading documents: {error.message}</p>
        ) : (
          <DocumentList
            documents={filteredDocuments}
            onDelete={handleDelete}
            onDownload={handleDownload}
          />
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;