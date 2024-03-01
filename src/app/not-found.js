import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="mb-5 text-6xl font-bold text-gray-800">Whoops! 404</h1>
        <p className="mb-5 text-xl font-light text-gray-600">Page not found</p>
        <a
          href="/"
          className="px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
