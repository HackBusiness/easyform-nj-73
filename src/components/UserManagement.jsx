import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PermissionMatrix from './PermissionMatrix';

const UserManagement = () => {
  const { hasPermission } = useUser();
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe', role: 'admin' },
    { id: '2', name: 'Jane Smith', role: 'manager' },
    { id: '3', name: 'Bob Johnson', role: 'user' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', role: '' });
  const [selectedUser, setSelectedUser] = useState(null);
  const [userPermissions, setUserPermissions] = useState({
    Admin: ['viewForms', 'editForms', 'submitForms', 'deleteForms', 'manageUsers', 'generateReports', 'digitalSignature', 'fileUploads', 'accessNotifications'],
    Manager: ['viewForms', 'editForms', 'submitForms', 'manageUsers', 'generateReports', 'digitalSignature', 'fileUploads', 'accessNotifications'],
    User: ['viewForms', 'submitForms', 'digitalSignature', 'fileUploads', 'accessNotifications'],
    Viewer: ['viewForms'],
  });

  const handleAddUser = () => {
    if (newUser.name && newUser.role) {
      setUsers([...users, { ...newUser, id: Date.now().toString() }]);
      setNewUser({ name: '', role: '' });
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    if (selectedUser && selectedUser.id === id) {
      setSelectedUser(null);
    }
  };

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
    if (selectedUser && selectedUser.id === id) {
      setSelectedUser({ ...selectedUser, role: newRole });
    }
  };

  const handlePermissionChange = (role, permission, checked) => {
    setUserPermissions(prevPermissions => ({
      ...prevPermissions,
      [role]: checked
        ? [...prevPermissions[role], permission]
        : prevPermissions[role].filter(p => p !== permission)
    }));
  };

  if (!hasPermission('manageUsers')) {
    return <div>You don't have permission to access this page.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="mb-4 flex space-x-2">
        <Input
          placeholder="User name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <Select
          value={newUser.role}
          onValueChange={(value) => setNewUser({ ...newUser, role: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleAddUser}>Add User</Button>
      </div>
      <table className="min-w-full mb-4">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Role</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <Select
                  value={user.role}
                  onValueChange={(value) => handleRoleChange(user.id, value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </td>
              <td>
                <Button variant="outline" onClick={() => setSelectedUser(user)}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
          <h3 className="text-xl font-bold mb-2">Edit Permissions for {selectedUser.name}</h3>
          <PermissionMatrix
            userPermissions={userPermissions}
            onPermissionChange={handlePermissionChange}
          />
        </div>
      )}
    </div>
  );
};

export default UserManagement;