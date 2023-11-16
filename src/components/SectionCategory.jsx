import React from "react";
import Steps from "./Steps";

export default function SectionCategory() {
  return (
    <div className="bg-[#131313] h-[79.375rem] flex justify-center items-center flex-col text-white ">


      <div className="bg-[#000] h-[39rem] m-auto  w-full flex flex-row gap-52 justify-center items-center">
        <div className="border-red-50 bg-[url('../../public/img/remera.jpeg')] filter  bg-cover  bg-center  w-[21rem] h-[21rem] bg-slate-800 flex justify-end p-8 flex-col items-center gap-12">
          <h3 className="text-center text-4xl uppercase font-bold lineHeight ">Remeras</h3>
          <button className="bg-black w-56 h-8 rounded-3xl text-[0.60rem] text-white mt-10 tracking-[0.70em] uppercase">
            Ver Categoria
          </button>
        </div>
        <div className="border-red-50 bg-[url('../../public/img/pantalon.jpeg')] filter  bg-cover  bg-center  w-[21rem] h-[21rem] bg-slate-800 flex justify-end p-8 flex-col items-center gap-12">
          <h3 className="text-center text-4xl uppercase font-semibold lineHeight ">Cargos</h3>
          <button className="bg-black w-56 h-8 rounded-3xl text-[0.60rem] text-white mt-10 tracking-[0.70em] uppercase">
            Ver Categoria
          </button>
        </div>
        <div className="border-red-50 bg-[url('../../public/img/zapatillas.jpeg')] filter  bg-cover  bg-center  w-[21rem] h-[21rem] bg-slate-800 flex justify-end p-8 flex-col items-center gap-12">
          <h3 className="text-center text-4xl uppercase font-semibold lineHeight ">Zapatillas</h3>
          <button className="bg-black w-56 h-8 rounded-3xl text-[0.60rem] text-white mt-10 tracking-[0.70em] uppercase">
            Ver Categoria
          </button>
        </div>
      </div>
     
      <div className="flex justify-start bottom-36 relative">
     <Steps />
   </div>
    </div>
     
  );
}
