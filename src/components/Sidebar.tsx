import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, PenTool, Gauge, FileText, Settings, BoxIcon } from "lucide-react";
export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [{
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/"
  }, {
    icon: PenTool,
    label: "Well Trajectory",
    path: "/trajectory"
  }, {
    icon: BoxIcon,
    label: "Casing Design",
    path: "/casing"
  }, {
    icon: Gauge,
    label: "Load Analysis",
    path: "/analysis"
  }, {
    icon: FileText,
    label: "Reports",
    path: "/reports"
  }];
  return <div className="w-64 h-full bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Well Engineer</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => <li key={index}>
              <button onClick={() => navigate(item.path)} className={`flex items-center space-x-3 w-full p-2 rounded-lg ${location.pathname === item.path ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-800">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
    </div>;
};