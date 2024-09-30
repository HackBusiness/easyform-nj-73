import React from 'react';
import { Download, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DocumentList = ({ documents, onDelete, onDownload }) => {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center justify-between p-4 border rounded">
          <div>
            <h3 className="font-medium">{doc.name}</h3>
            <p className="text-sm text-gray-500">
              Category: {doc.category} | Tags: {doc.tags.join(', ')}
            </p>
            <p className="text-xs text-gray-400">
              Uploaded on: {new Date(doc.uploadDate).toLocaleDateString()}
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onDownload(doc.id, doc.name)}
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onDelete(doc.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;