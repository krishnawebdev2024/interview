import React from "react";

const Grid = () => {
  return (
    <div>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          <div className="bg-blue-500 text-white p-4 rounded">Grid Item 1</div>
          <div className="bg-green-500 text-white p-4 rounded ">
            Grid Item 2
          </div>
          <div className="bg-red-500 text-white p-4 rounded">Grid Item 3</div>
          <div className="bg-yellow-500 text-white p-4 rounded">
            Grid Item 4
          </div>
          <div className="bg-purple-500 text-white p-4 rounded">
            Grid Item 5
          </div>
          <div className="bg-pink-500 text-white p-4 rounded">Grid Item 6</div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
