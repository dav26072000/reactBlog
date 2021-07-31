/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="bg-indigo-200 py-2 md:py-4">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-2xl text-gray-600">
            Your Blog
          </a>
        </div>

        <div
          className=" md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <a
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-gray-600 font-bold text-center border border-transparent rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
