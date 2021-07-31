import React from "react";

export default function handleRegistrationSubmit(userInfo, setPopupHook) {
  console.log(userInfo);
  setPopupHook((prev) => !prev);
}
