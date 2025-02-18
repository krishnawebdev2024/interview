import React from "react";

const Flex = () => {
  return (
    <div>
      <div className="p-8">
        {/* Flex container */}
        <div className="flex justify-between gap-4">
          <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
          <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
          <div className="bg-red-500 text-white p-4 rounded">Item 3</div>
        </div>
        <div className="mt-4 h-8 bg-black"></div>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-4">
          <h1 className="text-2xl font-bold mb-6">Flexbox Example</h1>

          {/* Flex Container */}
          <div className="flex flex-wrap justify-center gap-4 p-6 bg-white rounded-lg shadow-lg border">
            {/* Flex Items */}
            <div className="w-32 h-32 bg-blue-500 text-white flex items-center justify-center rounded-md">
              Box 1
            </div>
            <div className="w-32 h-32 bg-green-500 text-white flex items-center justify-center rounded-md">
              Box 2
            </div>
            <div className="w-32 h-32 bg-red-500 text-white flex items-center justify-center rounded-md">
              Box 3
            </div>
            <div className="w-32 h-32 bg-yellow-500 text-white flex items-center justify-center rounded-md">
              Box 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
