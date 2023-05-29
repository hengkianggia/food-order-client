import React from "react";
import gambar from "../../Image/homediscount.jpg";
import Button from "../UI/Button";

const ContentLast = () => {
  return (
    <div className="grid w-full mt-14 place-items-center ">
      <div className="w-[60%] h-72 rounded-md overflow-hidden grid place-items-center">
        <div className="-z-50">
          <img src={gambar} alt="" className="object-cover" />
        </div>
        <div className="absolute z-50 text-3xl text-white text-clip">
          <h2 className="font-semibold">
            Join Our Member And Get <br /> Discount Up To 20%
          </h2>
          <span className="flex gap-1 mt-2">
            <input
              type="email"
              placeholder="input your email.."
              className="px-2 py-1 text-sm rounded-md"
            />
            <Button text={"Submit"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentLast;
