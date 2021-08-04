import React, { Component } from "react";
import "./UserPage.css";
import Header from "../Components/Header/Header";

import UserProfile from "../Components/UserProfile/UserProfile";

// import Header from "../Components/Header/Header";

export default function UserPage() {
  return (
    <>
      <Header>
        <a
          href="/"
          className="p-2 lg:px-4 md:mx-2 text-gray-600 font-bold text-center border border-transparent rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300"
        >
          Log out
        </a>
      </Header>
      <UserProfile />
    </>
  );
}
