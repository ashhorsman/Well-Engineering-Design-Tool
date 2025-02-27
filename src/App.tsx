import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { WellTrajectory } from "./pages/WellTrajectory";
import { CasingDesign } from "./pages/CasingDesign";
import { LoadAnalysis } from "./pages/LoadAnalysis";
import { Reports } from "./pages/Reports";
export function App() {
  return <BrowserRouter>
      <div className="flex w-full h-screen bg-white">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trajectory" element={<WellTrajectory />} />
            <Route path="/casing" element={<CasingDesign />} />
            <Route path="/analysis" element={<LoadAnalysis />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>;
}