/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import NewPostComponent from "../NewPostComponent/NewPostComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import UserPostsComponent from "../UserPostsComponent/UserPostsComponent";
import Popup from "../Popup/Popup";
// import { Formik, Form } from "formik";
// import { useHistory } from "react-router-dom";
// import { loginScheme } from "../../validationSchemes/loginScheme";
// import TextField from "../TextField/TextField";
// import handleLoginSubmit from "../../handlers/handleLoginSubmit";
// import Popup from "../Popup/Popup";

export default function UserProfile() {
  const [newPostPopup, setNewPostPopup] = useState(false);

  const localUser = JSON.parse(localStorage.getItem("loginedUser")) || {};
  const [loginedUser, setLoginedUser] = useState(localUser);

  const localPost = JSON.parse(localStorage.getItem("posts")) || {};
  const [userPost, setUserPost] = useState(localPost);

  const [showPopup, setShowPopup] = useState({
    isPopup: false,
    massage: "",
    isError: false,
  });

  function handleClick() {
    setNewPostPopup((prev) => !prev);
  }
  // get users block in local storage
  useEffect(() => {
    const user = localStorage.getItem("loginedUser");

    if (user) {
      setLoginedUser(JSON.parse(user));
    }
  }, []);
  // get Posts block in local storage
  useEffect(() => {
    const posts = localStorage.getItem("posts");

    if (posts) {
      setUserPost(JSON.parse(posts));
    }
  }, []);

  //   Close popup after some time
  useEffect(() => {
    if (showPopup.isPopup === true) {
      const timer = setTimeout(() => {
        setShowPopup({ isPopup: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup.isPopup]);

  return (
    <>
      {showPopup.isPopup ? (
        <Popup message={showPopup.massage} isError={showPopup.isError} />
      ) : null}
      {newPostPopup ? (
        <NewPostComponent
          onClick={handleClick}
          loginedUser={loginedUser}
          setShowPopup={setShowPopup}
        />
      ) : null}
      <div>
        <div className="md:grid grid-cols-5 grid-rows-1  bg-white gap-2 p-4 rounded-xl">
          <div className="md:col-span-2 h-48 shadow-xl ">
            <div className="flex w-full h-full relative">
              <img
                src="https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png"
                className="w-44 h-44 m-auto"
                alt=""
              />
            </div>
          </div>
          <div className="md:col-span-2 h-48 shadow-xl p-4 space-y-2 ">
            <div className="flex ">
              <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                Name:
              </span>
              <input
                className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                type="text"
                value={`${loginedUser.userInformation.firstName} ${loginedUser.userInformation.lastName}`}
                readOnly
              />
            </div>
            <div className="flex ">
              <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                Email:
              </span>
              <input
                className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                type="text"
                value={loginedUser.userInformation.email}
                readOnly
              />
            </div>
            <div className="flex ">
              <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                Role:
              </span>
              <input
                className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                type="text"
                value="User"
                readOnly
              />
            </div>
          </div>
          <div className="md:col-span-1 h-48 shadow-xl p-4 space-y-2 ">
            <ButtonComponent
              type="button"
              className=" w-full h-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              buttonName="New Post"
              onClick={() => {
                setNewPostPopup((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        {userPost.map((elem) => {
          if (elem.id === loginedUser.id) {
            return (
              <UserPostsComponent
                title={elem.post.title}
                description={elem.post.description}
              />
            );
          }
          return false;
        })}
      </div>
    </>
  );
}
