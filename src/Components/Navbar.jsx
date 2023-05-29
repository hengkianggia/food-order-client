import React from "react";
import { SiIfood } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { AiTwotoneShop } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center h-full py-10">
      <div>
        <span className="text-4xl text-white">
          <Link to={"/"}>
            <SiIfood />
          </Link>
        </span>
      </div>

      <div className="mt-12">
        <ul className="flex flex-col text-white gap-y-6">
          <li>
            <Link>
              <span className="text-2xl">
                <AiFillHome />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="text-2xl">
                <MdOutlineRestaurantMenu />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="text-2xl">
                <FaUserAlt />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="text-2xl">
                <MdDiscount />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="text-2xl">
                <AiTwotoneShop />
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-auto">
        <span className="text-2xl text-white">
          <AiFillSetting />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
