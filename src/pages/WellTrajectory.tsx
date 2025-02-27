import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
export const WellTrajectory = () => {
  const [trajectoryData, setTrajectoryData] = useState([{
    depth: 0,
    inclination: 0,
    azimuth: 0
  }, {
    depth: 1000,
    inclination: 15,
    azimuth: 45
  }, {
    depth: 2000,
    inclination: 30,
    azimuth: 90
  }]);
  return <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Well Trajectory
        </h1>
        <p className="text-gray-600 mt-2">
          Define well path and formation data
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Trajectory Input</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Depth (ft)
                </label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Inclination (°)
                </label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Azimuth (°)
                </label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Add Point
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">
            Trajectory Visualization
          </h2>
          <LineChart width={500} height={300} data={trajectoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="depth" label={{
            value: "Depth (ft)",
            position: "bottom"
          }} />
            <YAxis label={{
            value: "Inclination (°)",
            angle: -90,
            position: "left"
          }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="inclination" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>;
};