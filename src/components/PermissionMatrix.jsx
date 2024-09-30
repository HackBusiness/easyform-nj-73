import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const permissions = [
  { name: 'View Forms', key: 'viewForms' },
  { name: 'Edit Forms', key: 'editForms' },
  { name: 'Submit Forms', key: 'submitForms' },
  { name: 'Delete Forms', key: 'deleteForms' },
  { name: 'Manage Users', key: 'manageUsers' },
  { name: 'Generate Reports', key: 'generateReports' },
  { name: 'Digital Signature', key: 'digitalSignature' },
  { name: 'File Uploads', key: 'fileUploads' },
  { name: 'Access Notifications', key: 'accessNotifications' },
];

const roles = ['Admin', 'Manager', 'User', 'Viewer'];

const PermissionMatrix = ({ userPermissions, onPermissionChange }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Permission</TableHead>
          {roles.map(role => (
            <TableHead key={role}>{role}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {permissions.map(permission => (
          <TableRow key={permission.key}>
            <TableCell>{permission.name}</TableCell>
            {roles.map(role => (
              <TableCell key={`${permission.key}-${role}`}>
                <Checkbox
                  checked={userPermissions[role]?.includes(permission.key)}
                  onCheckedChange={(checked) => onPermissionChange(role, permission.key, checked)}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PermissionMatrix;