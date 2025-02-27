import React from "react";
import { Download, Printer, Share2 } from "lucide-react";
export const Reports = () => {
  return <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Reports</h1>
        <p className="text-gray-600 mt-2">
          Generate and export well design reports
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Well Summary Report</h2>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <Download size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <Printer size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Well Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Total Depth:</span>
                  <span className="ml-2">10,000 ft</span>
                </div>
                <div>
                  <span className="text-gray-600">Maximum Inclination:</span>
                  <span className="ml-2">45°</span>
                </div>
                <div>
                  <span className="text-gray-600">
                    Bottom Hole Temperature:
                  </span>
                  <span className="ml-2">250°F</span>
                </div>
                <div>
                  <span className="text-gray-600">Maximum Pressure:</span>
                  <span className="ml-2">10,000 psi</span>
                </div>
              </div>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Casing Summary</h3>
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-600">
                    <th className="text-left">String</th>
                    <th className="text-left">Size (in)</th>
                    <th className="text-left">Weight (lb/ft)</th>
                    <th className="text-left">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Surface</td>
                    <td>13.375</td>
                    <td>54.5</td>
                    <td>K55</td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td>9.625</td>
                    <td>47.0</td>
                    <td>P110</td>
                  </tr>
                  <tr>
                    <td>Production</td>
                    <td>7.0</td>
                    <td>32.0</td>
                    <td>P110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Analysis Results</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Safety Factor Summary</h3>
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-600">
                    <th className="text-left">Load Case</th>
                    <th className="text-left">Actual</th>
                    <th className="text-left">Required</th>
                    <th className="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Burst</td>
                    <td>1.5</td>
                    <td>1.25</td>
                    <td className="text-green-600">Pass</td>
                  </tr>
                  <tr>
                    <td>Collapse</td>
                    <td>1.8</td>
                    <td>1.25</td>
                    <td className="text-green-600">Pass</td>
                  </tr>
                  <tr>
                    <td>Tension</td>
                    <td>2.1</td>
                    <td>1.6</td>
                    <td className="text-green-600">Pass</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>;
};