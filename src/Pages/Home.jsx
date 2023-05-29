import React from "react";
import HeaderHome from "../Components/Home/HeaderHome";
import ContentLast from "../Components/Home/ContentLast";
import FiturList from "../Components/Home/FiturList";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <div className="flex justify-center w-full gap-3 mt-14">
        <FiturList
          judul={"Easy To Order"}
          desc={
            "Intuitive navigation, Choice of variations and additions, Confirmations and notifications"
          }
        />
        <FiturList
          judul={"Fast Delifery"}
          desc={
            "Real-time monitoring of orders,Priority of deliveries,24/7 delivery service"
          }
        />
        <FiturList
          judul={"Best Quality"}
          desc={
            "Quality control, Customer reviews and ratings, Quality guarantee"
          }
        />
      </div>
      <ContentLast />
    </>
  );
};

export default Home;
