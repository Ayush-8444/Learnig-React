import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-700 text-lg">{message}</p>
    </div>
  );
};

export default Loading