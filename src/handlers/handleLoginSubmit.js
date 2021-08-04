import React from "react";

export default function handleRegistrationSubmit(
  userInfo,
  setPopupHook,
  registeredUsers,
  historyHook
) {
  let isExisting = false;
  let setExistUserInfo;
  registeredUsers.forEach((el) => {
    if (
      el.userInformation.email === userInfo.email &&
      el.userInformation.password === userInfo.password
    ) {
      isExisting = true;
      setExistUserInfo = JSON.stringify(el);
    }
  });

  if (isExisting === true) {
    const setLoginedUserInStorage = Promise.resolve()
      .then(() => {
        localStorage.setItem("loginedUser", setExistUserInfo);
        setPopupHook({
          isPopup: true,
          massage: "Logined successfully",
          isError: false,
        });
      })
      .then(() => {
        historyHook.push("/user");
      });
    return true;
  }
  setPopupHook({ isPopup: true, massage: "There is no user", isError: true });
  return false;
}
