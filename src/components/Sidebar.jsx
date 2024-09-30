import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { useUser } from '../contexts/UserContext';

const Sidebar = () => {
  const { hasPermission } = useUser();

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Waste Management</h1>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            hasPermission(item.permission) && (
              <li key={item.to}>
                <Link to={item.to} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;