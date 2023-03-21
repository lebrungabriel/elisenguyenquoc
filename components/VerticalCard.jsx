import React from "react";
import Image from "next/image";

const VerticalCard = (props) => {
  return (
    <div className="w-full flex flex-col items-center mb-10">
      <div className="w-[100%] h-[50vh] sm:h-[70vh] sm:w-[80%] md:w-[60%] lg:w-[50%] relative">
        <Image src={props.src} layout="fill" objectFit="contain" />
      </div>
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
        <h3 className="font-main text-md font-thin mt-4">{props.title}</h3>
        <p className="font-main text-xs font-thin mt-2">{props.description}</p>
      </div>
    </div>
  );
};

export default VerticalCard;
