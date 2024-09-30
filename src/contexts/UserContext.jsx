import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '1',
    name: 'John Doe',
    role: 'admin',
  });

  const [permissions, setPermissions] = useState({
    Admin: ['viewForms', 'editForms', 'submitForms', 'deleteForms', 'manageUsers', 'generateReports', 'digitalSignature', 'fileUploads', 'accessNotifications'],
    Manager: ['viewForms', 'editForms', 'submitForms', 'manageUsers', 'generateReports', 'digitalSignature', 'fileUploads', 'accessNotifications'],
    User: ['viewForms', 'submitForms', 'digitalSignature', 'fileUploads', 'accessNotifications'],
    Viewer: ['viewForms'],
  });

  const hasPermission = (permission) => {
    return permissions[user.role]?.includes(permission) || false;
  };

  const updatePermissions = (newPermissions) => {
    setPermissions(newPermissions);
  };

  return (
    <UserContext.Provider value={{ user, setUser, hasPermission, permissions, updatePermissions }}>
      {children}
    </UserContext.Provider>
  );
};