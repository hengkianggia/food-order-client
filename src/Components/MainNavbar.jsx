import React from "react";
import { RiNotification4Fill } from "react-icons/ri";
import { BsCartFill } from "react-icons/bs";

const MainNavbar = () => {
  return (
    <div className="flex items-center justify-end w-full h-10 my-5">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="p-1 border-2 border-gray-100 rounded-md"
        />
      </div>

      <div className="flex ml-8 text-xl gap-x-4">
        <span>
          <RiNotification4Fill />
        </span>
        <span>
          <BsCartFill />
        </span>
      </div>
    </div>
  );
};

export default MainNavbar;
