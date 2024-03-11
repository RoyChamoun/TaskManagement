import React from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-gray-800 w-full md:w-64 flex flex-col">
        <Link
          href="/"
          className="text-white font-medium py-2 px-4 rounded-b-lg focus:outline-none"
        >
          Home
        </Link>
        <Link
          href="/active"
          className="text-white font-medium py-2 px-4 rounded-t-lg focus:outline-none"
        >
          Active tasks
        </Link>
        <Link
          href="/completed"
          className="text-white font-medium py-2 px-4 rounded-b-lg focus:outline-none"
        >
          Completed tasks
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
