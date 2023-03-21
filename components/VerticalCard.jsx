import React from "react";
import Image from "next/image";

const VerticalCard = (props) => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-[100%] h-[80%] bg-blue-100 sm:w-[80%] md:w-[60%] lg:w-[50%] relative">
        <Image src={props.src} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"></div>
      <h3 className="font-main text-md font-thin mt-4">{props.title}</h3>
      <p className="font-main text-xs font-thin mt-2">{props.description}</p>
    </div>
  );
};

export default VerticalCard;
