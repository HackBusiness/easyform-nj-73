import { HomeIcon, FileTextIcon, LayoutDashboardIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import CPCNForm from "./pages/CPCNForm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CRM from "./pages/CRM.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "CPCN Form",
    to: "/cpcn-form",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <CPCNForm />,
  },
  {
    title: "CRM",
    to: "/crm",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <CRM />,
  },
];