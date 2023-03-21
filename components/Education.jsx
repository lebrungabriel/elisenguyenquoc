import React from "react";

const Education = () => {
  return (
    <div className="w-screen flex flex-col items-center md:w-[80%]">
      <h1 className="font-impact text-3xl w-[80%]">EDUCATION</h1>

      <div className="mt-10 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center text-xs mt-1">2023</div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 first:mt-0">
            MFA, Beaux Arts de Paris, Dominique Figarella Studio, FR
          </p>
        </div>
      </div>

      <div className="mt-6 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center text-xs mt-1">2022</div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 first:mt-0">
            International exchange, Kyoto City University of Arts, JP
          </p>
        </div>
      </div>
      <div className="mt-6 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center text-xs mt-1">2019</div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 first:mt-0">
            BA with honors, Ecole Nationale Supérieur d'Art de Nice, Villa
            Arson, FR..
          </p>
        </div>
      </div>

      <div className="mt-6 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center text-xs mt-1">2017</div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 first:mt-0">Motion Design Bachelor, LISAA, FR.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
