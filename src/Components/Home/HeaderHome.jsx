import React from "react";
import ImageHeader from "../../Image/homeheader.jpg";
import Button from "../UI/Button";

const HeaderHome = () => {
  return (
    <>
      <div className="grid w-full overflow-hidden rounded-lg h-96 place-items-center">
        <div>
          <img
            src={ImageHeader}
            alt="image"
            className="flex object-cover object-center -z-50"
          />
        </div>
        <div className="absolute z-50 grid text-center text-white place-items-center">
          <h1 className="flex text-[40px] font-Cardo leading-10">
            Taste Haven: Order, Delight, and Savor the Finest <br /> Culinary
            Treasures!
          </h1>
          <p className="max-w-[60%] mb-3 text-sm">
            Discover a diverse menu, order online, and immerse yourself in a
            blissful culinary experience like no other.
          </p>
          <Button text={"Find More"} />
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
