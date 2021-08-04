/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { loginScheme } from "../../validationSchemes/loginScheme";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TextField from "../TextField/TextField";
import handleLoginSubmit from "../../handlers/handleLoginSubmit";
import Popup from "../Popup/Popup";

export default function LoginForm() {
  const [showPopup, setShowPopup] = useState({
    isPopup: false,
    massage: "",
    isError: false,
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // User page history
  const history = useHistory();

  // get users block in local storage
  useEffect(() => {
    const users = localStorage.getItem("users");

    if (users) {
      setRegisteredUsers(JSON.parse(users));
    }
  }, []);
  //   console.log(showPopup.isPopup);
  //   //   useEffect(() => {
  //   //     localStorage.setItem("users", JSON.stringify(registeredUsers));
  //   //   });
  //   //   close popup after 3 seconds
  useEffect(() => {
    if (showPopup.isPopup === true) {
      const timer = setTimeout(() => {
        setShowPopup({ isPopup: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      {showPopup.isPopup ? (
        <Popup message={showPopup.massage} isError={showPopup.isError} />
      ) : null}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginScheme}
        onSubmit={(formData, { resetForm }) => {
          handleLoginSubmit(formData, setShowPopup, registeredUsers, history);
          resetForm();
        }}
      >
        {() => (
          <div className="App max-w-full flex align-center justify-center">
            <Form className="w-1/3">
              <TextField
                name="email"
                labelText="Email"
                type="email"
                className="w-1/2"
              />
              <TextField
                name="password"
                labelText="Password"
                type="password"
                className="w-1/2"
              />
              <ButtonComponent
                type="submit"
                className="mt-10 w-64 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                buttonName="Login"
              />
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
