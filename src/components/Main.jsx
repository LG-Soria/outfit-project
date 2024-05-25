import React from "react";
import Steps from "./Steps";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function Main() {
  return (
    <div className="h-[69rem] mainBackground bg-brightness-0.1 bg-cover bg-center  bg-opacity-10  filtroMain ">

      <div className="bgBarra bg-opacity-80 h-80 my-auto top-48 relative flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl uppercase stroke">Spring Sale</h1>
          <p className="uppercase text-2xl  mt-3 relative subTitle text-white ">out now</p>
        </div>

        <button className="bg-black w-56 h-8 rounded-3xl text-xs text-white mt-10 tracking-[0.70em] uppercase">
          Ver Modelos
        </button>
      </div>

       <div className="flex flex-row-reverse ">
       <div>
       <div className="bg-white rounded-full w-[38rem] h-[38rem] left-14 flex flex-row relative ">
          <span className="text-[#5F4CD7] number top-64 left-16 tracking-tighter relative">20</span>
         
          <div className="flex flex-col gap-40 top-48 left-20 tracking-tighter relative">
            <span className="off font-black text-[rem] top-5 relative">%</span>
            <span className="off font-black relative bottom-14">OFF</span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-9 items-center z-400 left-12 bottom-52 relative uppercase tracking-tighter">
            <p className="cuotas">Hasta 3 cuotas</p>
            <p className="interes">Sin interés</p>
          </div>
       </div>
      </div>

    <div className="flex justify-center relative bottom-32">
    <Steps />
    </div>
    </div>
  );
}
