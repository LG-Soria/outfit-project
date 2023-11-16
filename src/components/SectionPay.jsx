import React from "react";
import { FaCreditCard, FaRegCreditCard, FaMoneyBillAlt } from "react-icons/fa";

export default function SectionPay() {
  return (
    <div className="flex flex-col justify-center items-center h-72 bg-[#fff] ">
      <h3 className="text-3xl mb-9 mt-1 uppercase font-bold titlePay">
        {" "}
        Metodos de pago
      </h3>

      <div className="flex flex-row gap-80">
        <div className=" backgroundPay font-medium uppercase  tracking-[0.10em] rounded-full h-36 w-36 flex flex-col gap-3 justify-center items-center text-black">
          <FaCreditCard  className="w-20 h-9"  />
          <p>Credito</p>
        </div>
        <div className=" backgroundPay font-medium uppercase  tracking-[0.10em] rounded-full h-36 w-36 flex flex-col gap-3 justify-center items-center text-black">
          <FaRegCreditCard className="w-20 h-9" />

          <p>Debito</p>
        </div>
        <div className="backgroundPay font-medium uppercase  tracking-[0.10em] rounded-full h-36 w-36 flex flex-col gap-3 justify-center items-center text-black">
          <FaMoneyBillAlt className="w-20 h-9"  />

          <p>Efectivo</p>
        </div>
      </div>
    </div>
  );
}
