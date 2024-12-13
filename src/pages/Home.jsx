import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Welcome to Home Page
      </h1>
      <div className="space-x-4">
        <Link
          to="/task1"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go to Task 1
        </Link>
        <Link
          to="/task2"
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Go to Task 2
        </Link>
        <Link
          to="/task2"
          className="px-6 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
        >
          Go to Task 3
        </Link>
      </div>
    </div>
  );
};

export default Home;
