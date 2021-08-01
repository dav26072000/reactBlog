import React, { useEffect } from "react";

export default function handleRegistrationSubmit(
  userInfo,
  setPopupHook,
  registeredUsers
) {
  let isExisting = false;
  const id = registeredUsers.length + 1;
  const user = {
    id: Number(id),
    // logined: false,
    userInformation: userInfo,
  };
  console.log(user.userInformation.email);
  registeredUsers.forEach((el) => {
    if (el.userInformation.email === user.userInformation.email) {
      isExisting = true;
    }
  });

  if (isExisting === false) {
    const setUserInStorage = Promise.resolve()
      .then(() => {
        const parsedDate = JSON.stringify([...registeredUsers, user]);
        return parsedDate;
      })
      .then((parsedDate) => {
        localStorage.setItem("users", parsedDate);
        setPopupHook({
          isPopup: true,
          massage: "You registered successfully",
          isError: false,
        });
      });
    return true;
  }
  setPopupHook({ isPopup: true, massage: "User is exist", isError: true });
  return false;
}
