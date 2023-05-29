import React from "react";

const FiturList = ({ judul, desc }) => {
  return (
    <div className="w-[28%] flex flex-col items-center gap-3">
      <div className="w-12 h-12 bg-orange-400 rounded-full"></div>
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-Cardo">{judul}</h2>
        <p className="text-sm leading-6">{desc}</p>
      </div>
    </div>
  );
};

export default FiturList;
