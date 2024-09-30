import React from 'react';
import { FileIcon, defaultStyles } from 'react-file-icon';

const FilePreview = ({ file }) => {
  const getFileExtension = (filename) => {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  };

  const extension = getFileExtension(file.name);

  return (
    <div className="flex items-center p-2 border rounded mb-2">
      <div className="w-10 h-10 mr-3">
        <FileIcon
          extension={extension}
          {...defaultStyles[extension]}
        />
      </div>
      <div>
        <p className="text-sm font-medium">{file.name}</p>
        <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
      </div>
    </div>
  );
};

export default FilePreview;