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

const defaultPermissions = {
  Admin: permissions.map(p => p.key),
  Manager: ['viewForms', 'editForms', 'submitForms', 'manageUsers', 'generateReports', 'digitalSignature', 'fileUploads', 'accessNotifications'],
  User: ['viewForms', 'submitForms', 'digitalSignature', 'fileUploads', 'accessNotifications'],
  Viewer: ['viewForms'],
};

const PermissionsMatrix = () => {
  const [rolePermissions, setRolePermissions] = React.useState(defaultPermissions);

  const handlePermissionChange = (role, permission) => {
    setRolePermissions(prevPermissions => {
      const updatedPermissions = { ...prevPermissions };
      if (updatedPermissions[role].includes(permission)) {
        updatedPermissions[role] = updatedPermissions[role].filter(p => p !== permission);
      } else {
        updatedPermissions[role] = [...updatedPermissions[role], permission];
      }
      return updatedPermissions;
    });
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Permissions Matrix</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Feature/Functionality</TableHead>
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
                    checked={rolePermissions[role].includes(permission.key)}
                    onCheckedChange={() => handlePermissionChange(role, permission.key)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PermissionsMatrix;