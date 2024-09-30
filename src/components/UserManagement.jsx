import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from 'sonner';
import PermissionsMatrix from './PermissionsMatrix';

const UserManagement = () => {
  const { hasPermission } = useUser();
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe', role: 'admin', status: 'active' },
    { id: '2', name: 'Jane Smith', role: 'manager', status: 'active' },
    { id: '3', name: 'Bob Johnson', role: 'user', status: 'inactive' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', role: '', status: 'active' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Log user activity
    logUserActivity('Accessed User Management Page');
  }, []);

  const handleAddUser = () => {
    if (newUser.name && newUser.role) {
      setUsers([...users, { ...newUser, id: Date.now().toString() }]);
      setNewUser({ name: '', role: '', status: 'active' });
      logUserActivity('Added new user');
      toast.success('User added successfully');
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = () => {
    setUsers(users.map(u => u.id === editingUser.id ? editingUser : u));
    setEditingUser(null);
    logUserActivity('Updated user');
    toast.success('User updated successfully');
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    logUserActivity('Deleted user');
    toast.success('User deleted successfully');
  };

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
    logUserActivity('Changed user role');
  };

  const logUserActivity = (activity) => {
    // In a real application, this would send the log to a server or store it securely
    console.log(`User Activity: ${activity} at ${new Date().toISOString()}`);
  };

  if (!hasPermission('manageUsers')) {
    return <div>You don't have permission to access this page.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      
      {/* Add/Edit User Form */}
      <div className="mb-4 flex space-x-2">
        <Input
          placeholder="User name"
          value={editingUser ? editingUser.name : newUser.name}
          onChange={(e) => editingUser ? setEditingUser({...editingUser, name: e.target.value}) : setNewUser({ ...newUser, name: e.target.value })}
        />
        <Select
          value={editingUser ? editingUser.role : newUser.role}
          onValueChange={(value) => editingUser ? setEditingUser({...editingUser, role: value}) : setNewUser({ ...newUser, role: value })}
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
        <Select
          value={editingUser ? editingUser.status : newUser.status}
          onValueChange={(value) => editingUser ? setEditingUser({...editingUser, status: value}) : setNewUser({ ...newUser, status: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        {editingUser ? (
          <Button onClick={handleUpdateUser}>Update User</Button>
        ) : (
          <Button onClick={handleAddUser}>Add User</Button>
        )}
      </div>

      {/* User List */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => handleEditUser(user)} className="mr-2">Edit</Button>
                <Button variant="destructive" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Permissions Matrix */}
      <PermissionsMatrix />
    </div>
  );
};

export default UserManagement;