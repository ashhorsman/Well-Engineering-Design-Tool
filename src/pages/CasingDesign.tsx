import React from "react";
export const CasingDesign = () => {
  const casingTypes = [{
    name: "Surface Casing",
    od: 13.375,
    weight: 54.5,
    grade: "K55"
  }, {
    name: "Intermediate Casing",
    od: 9.625,
    weight: 47.0,
    grade: "P110"
  }, {
    name: "Production Casing",
    od: 7.0,
    weight: 32.0,
    grade: "P110"
  }];
  return <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Casing Design</h1>
        <p className="text-gray-600 mt-2">
          Configure casing strings and specifications
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">
            Casing String Configuration
          </h2>
          <div className="space-y-6">
            {casingTypes.map((casing, index) => <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-medium mb-3">{casing.name}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">
                      OD (in)
                    </label>
                    <input type="number" value={casing.od} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">
                      Weight (lb/ft)
                    </label>
                    <input type="number" value={casing.weight} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Grade</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                      <option>{casing.grade}</option>
                      <option>J55</option>
                      <option>K55</option>
                      <option>N80</option>
                      <option>L80</option>
                      <option>P110</option>
                    </select>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Design Parameters</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Design Factor
              </label>
              <input type="number" defaultValue={1.25} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Maximum Temperature (°F)
              </label>
              <input type="number" defaultValue={250} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Maximum Pressure (psi)
              </label>
              <input type="number" defaultValue={10000} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};