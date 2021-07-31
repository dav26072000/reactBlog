import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import Header from "./Components/Header/Header";
// import Heade from "./Components/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <RegistrationForm />
    </>
  );
}
