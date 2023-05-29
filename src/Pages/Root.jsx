import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MainNavbar from "../Components/MainNavbar";

const Root = () => {
  return (
    <>
      <main className="flex justify-between w-full min-h-screen">
        <aside className="w-[10%] bg-gray-800 fixed h-screen">
          <Navbar />
        </aside>
        <aside className="w-full px-10 ml-[10%]">
          <MainNavbar />
          <Outlet />
          <Footer />
        </aside>
      </main>
    </>
  );
};

export default Root;
