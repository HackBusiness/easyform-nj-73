import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '1',
    name: 'John Doe',
    role: 'admin', // Default role for testing, should be fetched from backend in real app
  });

  const hasPermission = (permission) => {
    const permissions = {
      admin: ['viewForms', 'editForms', 'submitForms', 'deleteForms', 'manageUsers', 'generateReports', 'digitalSignature', 'fileUploads', 'accessNotifications'],
      manager: ['viewForms', 'editForms', 'submitForms', 'manageUsers', 'generateReports', 'digitalSignature', 'fileUploads', 'accessNotifications'],
      user: ['viewForms', 'submitForms', 'digitalSignature', 'fileUploads', 'accessNotifications'],
      viewer: ['viewForms'],
    };

    return permissions[user.role]?.includes(permission) || false;
  };

  return (
    <UserContext.Provider value={{ user, setUser, hasPermission }}>
      {children}
    </UserContext.Provider>
  );
};