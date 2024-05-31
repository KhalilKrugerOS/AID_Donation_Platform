import React from "react";

const Progress = ({ value }: any) => {
  return (
    <div className="w-full bg-gray-200 rounded border border-gray-300">
      <div
        className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded"
        style={{ width: `${value}%` }}
      >
        {`${value}%`}
      </div>
    </div>
  );
};

export default Progress;
