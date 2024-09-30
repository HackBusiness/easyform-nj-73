import { HomeIcon, FileTextIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import CPCNForm from "./pages/CPCNForm.jsx";

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
    title: "CPCN Form",
    to: "/cpcn-form",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <CPCNForm />,
  },
];