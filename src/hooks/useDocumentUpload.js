import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { validateFileType, validateFileSize } from '../utils/fileUtils';

export const useDocumentUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const queryClient = useQueryClient();

  const uploadFiles = async (files, category, tags) => {
    setUploadProgress(0);
    const validFiles = files.filter(file => validateFileType(file) && validateFileSize(file));

    if (validFiles.length !== files.length) {
      throw new Error('Some files are invalid or too large');
    }

    const formData = new FormData();
    validFiles.forEach(file => formData.append('files', file));
    formData.append('category', category);
    formData.append('tags', JSON.stringify(tags));

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      queryClient.invalidateQueries('documents');
      setUploadProgress(0);
    } catch (error) {
      setUploadProgress(0);
      throw error;
    }
  };

  const deleteFile = async (fileId) => {
    try {
      const response = await fetch(`/api/documents/${fileId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      queryClient.invalidateQueries('documents');
    } catch (error) {
      throw error;
    }
  };

  const downloadFile = async (fileId, fileName) => {
    try {
      const response = await fetch(`/api/documents/${fileId}/download`);
      if (!response.ok) {
        throw new Error('Download failed');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw error;
    }
  };

  return { uploadProgress, uploadFiles, deleteFile, downloadFile };
};