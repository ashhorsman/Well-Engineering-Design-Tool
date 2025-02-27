import React from "react";
import { ArrowRight, Activity, Database, Calculator } from "lucide-react";
export const Dashboard = () => {
  return <div className="flex-1 p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Well Design Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Start your well engineering project
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{
        title: "Input Data",
        description: "Enter well trajectory and formation data",
        icon: Database,
        color: "bg-blue-50 text-blue-600"
      }, {
        title: "Well Model",
        description: "Configure casing strings and tubulars",
        icon: Activity,
        color: "bg-green-50 text-green-600"
      }, {
        title: "Analysis",
        description: "Review stress analysis and safety factors",
        icon: Calculator,
        color: "bg-purple-50 text-purple-600"
      }].map((card, index) => <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
              <card.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button className="flex items-center text-blue-600 hover:text-blue-700">
              <span>Get Started</span>
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>)}
      </div>
    </div>;
};