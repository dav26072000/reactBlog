/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { registrationScheme } from "../../validationSchemes/registrationScheme";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TextField from "../TextField/TextField";
import handleRegistrationSubmit from "../../handlers/handleRegistrationSubmit";
import Popup from "../Popup/Popup";

export default function RegistrationForm() {
  const [showPopup, setShowPopup] = useState({
    isPopup: false,
    massage: "",
    isError: false,
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // get users block in local storage
  useEffect(() => {
    const users = localStorage.getItem("users");

    if (users) {
      setRegisteredUsers(JSON.parse(users));
    }
  }, []);
  console.log(showPopup.isPopup);
  //   useEffect(() => {
  //     localStorage.setItem("users", JSON.stringify(registeredUsers));
  //   });
  //   close popup after 3 seconds
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
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registrationScheme}
        onSubmit={(formData, { resetForm }) => {
          handleRegistrationSubmit(formData, setShowPopup, registeredUsers);
          resetForm();
        }}
      >
        {() => (
          <div className="App max-w-full flex align-center justify-center">
            <Form className="w-1/3">
              <TextField
                name="firstName"
                labelText="First Name"
                type="text"
                className="w-1/2"
              />
              <TextField
                name="lastName"
                labelText="Last Name"
                type="text"
                className="w-1/2"
              />
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
              <TextField
                name="confirmPassword"
                labelText="Confirm Password"
                type="password"
                className="w-1/2"
              />

              <ButtonComponent
                type="submit"
                className="mt-10 w-64 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                buttonName="Submit"
              />
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
