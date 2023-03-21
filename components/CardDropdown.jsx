import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";

const CardDropdown = (props) => {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center">
      <div className="w-[100%] h-[60vh] sm:w-[80%] md:w-[60%] lg:w-[50%] relative">
        <Image src={props.src} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
        <h3 className="font-main text-md font-thin mt-4">{props.title}</h3>
        <p className="font-main text-xs font-thin my-2">{props.description}</p>
        <Dropdown />
      </div>
    </div>
  );
};

export default CardDropdown;
