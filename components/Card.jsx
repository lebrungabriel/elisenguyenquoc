import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="w-full flex flex-col items-center my-20">
      <div className="w-[100%] h-[50vh] sm:w-[80%] md:w-[60%] lg:w-[50%] relative">
        <Image src={props.src} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
        <h3 className="font-main text-md font-thin mt-4">{props.title}</h3>
        <p className="font-main text-xs font-thin mt-2">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;