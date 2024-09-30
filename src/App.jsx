import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Sidebar from "./components/Sidebar";
import CPCNForm from "./pages/CPCNForm";
import Dashboard from "./pages/Dashboard";
import CRM from "./pages/CRM";
import UserManagement from "./components/UserManagement";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
              <Routes>
                {navItems.map(({ to, page, permission }) => (
                  <Route
                    key={to}
                    path={to}
                    element={
                      <ProtectedRoute permission={permission}>
                        {page}
                      </ProtectedRoute>
                    }
                  />
                ))}
                <Route
                  path="/user-management"
                  element={
                    <ProtectedRoute permission="manageUsers">
                      <UserManagement />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;