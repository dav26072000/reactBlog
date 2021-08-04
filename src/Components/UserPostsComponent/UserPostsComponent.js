import React from "react";

export default function UserPostsComponent({ title, description }) {
  return (
    <>
      <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">mar 10, 2019</span>
          <a
            className="px-2 py-1 bg-red-600 text-gray-100 font-bold rounded hover:bg-red-500"
            href="/#"
          >
            Remove
          </a>
        </div>
        <div className="mt-2">
          <a
            className="text-2xl text-gray-700 font-bold hover:text-gray-600"
            href="/#"
          >
            {title || "Title"}
          </a>
          <p className="mt-2 text-gray-600">
            {description ||
              "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a
            className="px-2 py-1 text-blue-700 font-bold rounded hover:bg-blue-500 hover:text-gray-100"
            href="/#"
          >
            Comments
          </a>

          <p>name surname</p>
        </div>
      </div>
    </>
  );
}
