import React from "react";

const Awards = () => {
  return (
    <div className="w-screen flex flex-col items-center md:w-[80%]">
      <h1 className="font-impact text-3xl w-[80%]">AWARDS & GRANTS</h1>

      <div className="mt-10 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center text-xs mt-1">2022</div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 first:mt-0">
            Production grant, Fondation Bredin Pratt
          </p>
        </div>
      </div>
      <div className="mt-6 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center text-xs mt-1">2021</div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 first:mt-0">
            Thaddaeus Ropac Awards, Prix des Amis des Beaux-Arts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
