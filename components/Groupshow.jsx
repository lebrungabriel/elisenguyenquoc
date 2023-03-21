import React from "react";

const Groupshow = () => {
  return (
    <div className="w-screen flex flex-col items-center md:w-[80%]">
      <h1 className="font-impact text-3xl w-[80%]">GROUPSHOW</h1>

      <div className="mt-10 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center font-thin text-xs mt-1">
          2023
        </div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 font-thin text-md first:mt-0">
            Soloshow, The Public Service Gallery, Stockholm, Sweden. (upcoming)
          </p>
          <p className="mt-4 font-thin text-md">
            cur. Do Tuong Linh, Vincom Center for Contemporary Art, Hanoi,
            Vietnam. (upcoming)
          </p>
          <p className="mt-4 font-thin text-md">
            cur. Thien-Bao Le, Paris. (upcoming)
          </p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center font-thin text-xs mt-1">
          2022
        </div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 font-thin text-md first:mt-0">
            'à partir de là' cur. À autre voix, Centre d’Art Contemporain <br />{" "}
            Chanot, Clamart, FR.CP
          </p>
          <p className="mt-4 font-thin text-md">
            'blur me tender' cur. Romero Paprocky, Paris, FR.
          </p>
          <p className="mt-4 font-thin text-md">
            'crush' cur. Cristiano Raimondi, École Nationale Supérieure des
            Beaux Arts de Paris, FR.
          </p>
          <p className="mt-4 font-thin text-md">
            'à travers les silences' cur. Thomas Fort, Galerie Dilecta, Paris,
            FR. CP
          </p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-around px-2">
        <div className="w-[10%] flex justify-center font-thin text-xs mt-1">
          2021
        </div>
        <div className="w-[80%] text-justify lg:w-[90%]">
          <p className="mt-4 font-thin text-md first:mt-0">
            'à première vue' Parcours St-Germain, Galerie Georges-Philippe &
            Nathalie Vallois, Paris, FR.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Groupshow;
