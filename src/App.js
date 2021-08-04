import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import UserPage from "./UserPage/UserPage";
import RegisterPage from "./RegisterPage/RegisterPage";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/loginPage">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <RegisterPage />
          </Route>
          <Route exact path="/user">
            <UserPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
