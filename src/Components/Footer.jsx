import React from "react";
import { SiIfood } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between w-full px-10 py-20 bg-gray-200 mt-14 rounded-tr-md rounded-tl-md">
      <div id="left" className="w-[30%] space-y-8">
        <div className="flex items-center gap-2 text-2xl font-Cardo">
          <span>
            <SiIfood />
          </span>
          <h2>PNGKY</h2>
        </div>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          sit?
        </p>

        <div className="flex gap-5 text-xl">
          <a href="#">
            <span>
              <BsFacebook />
            </span>
          </a>

          <a href="#">
            <span>
              <BsInstagram />
            </span>
          </a>

          <a href="#">
            <span>
              <BsTwitter />
            </span>
          </a>

          <a href="#">
            <span>
              <BsLinkedin />
            </span>
          </a>
        </div>
      </div>

      <div id="right" className="w-[68%] flex justify-between">
        <div>
          <h3 className="mb-2 text-xl font-semibold">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
            <li>
              <Link>makmukiper</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
