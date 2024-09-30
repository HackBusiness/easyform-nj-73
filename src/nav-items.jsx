import { HomeIcon, FileTextIcon, LayoutDashboardIcon, UsersIcon, DollarSignIcon, UserCogIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import CPCNForm from "./pages/CPCNForm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CRM from "./pages/CRM.jsx";
import InvoicingPage from "./pages/InvoicingPage.jsx";
import UserManagement from "./components/UserManagement.jsx";

export const navItems = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    page: <Dashboard />,
    permission: "viewForms",
  },
  {
    title: "Document Management",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
    permission: "viewForms",
  },
  {
    title: "CPCN Form",
    to: "/cpcn-form",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <CPCNForm />,
    permission: "submitForms",
  },
  {
    title: "CRM",
    to: "/crm",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <CRM />,
    permission: "viewForms",
  },
  {
    title: "Invoicing",
    to: "/invoicing",
    icon: <DollarSignIcon className="h-4 w-4" />,
    page: <InvoicingPage />,
    permission: "generateReports",
  },
  {
    title: "User Management",
    to: "/user-management",
    icon: <UserCogIcon className="h-4 w-4" />,
    page: <UserManagement />,
    permission: "manageUsers",
  },
];