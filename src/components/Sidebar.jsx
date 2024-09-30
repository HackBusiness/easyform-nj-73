import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, FileTextIcon, LayoutDashboardIcon, UsersIcon, DollarSignIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Waste Management</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <LayoutDashboardIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/cpcn-form" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FileTextIcon className="h-5 w-5" />
              <span>CPCN Form</span>
            </Link>
          </li>
          <li>
            <Link to="/crm" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <UsersIcon className="h-5 w-5" />
              <span>CRM</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;