import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
export const LoadAnalysis = () => {
  const pressureData = [{
    depth: 0,
    collapse: 1000,
    burst: 2000,
    actual: 1500
  }, {
    depth: 1000,
    collapse: 2000,
    burst: 3000,
    actual: 2200
  }, {
    depth: 2000,
    collapse: 3000,
    burst: 4000,
    actual: 2800
  }, {
    depth: 3000,
    collapse: 4000,
    burst: 5000,
    actual: 3500
  }];
  return <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Load Analysis</h1>
        <p className="text-gray-600 mt-2">
          Review stress analysis and safety factors
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Pressure Profile</h2>
          <LineChart width={500} height={300} data={pressureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="depth" label={{
            value: "Depth (ft)",
            position: "bottom"
          }} />
            <YAxis label={{
            value: "Pressure (psi)",
            angle: -90,
            position: "left"
          }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="collapse" stroke="#8884d8" />
            <Line type="monotone" dataKey="burst" stroke="#82ca9d" />
            <Line type="monotone" dataKey="actual" stroke="#ff7300" />
          </LineChart>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Safety Factors</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Burst Safety Factor</h3>
              <div className="text-2xl font-bold text-green-600">1.5</div>
              <div className="text-sm text-gray-600">
                Minimum Required: 1.25
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Collapse Safety Factor</h3>
              <div className="text-2xl font-bold text-green-600">1.8</div>
              <div className="text-sm text-gray-600">
                Minimum Required: 1.25
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Tension Safety Factor</h3>
              <div className="text-2xl font-bold text-green-600">2.1</div>
              <div className="text-sm text-gray-600">Minimum Required: 1.6</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};