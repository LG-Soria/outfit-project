import React from "react";
import { BsYoutube,BsFacebook,BsInstagram } from "react-icons/bs";
import { AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import  logo  from "./../../public/img/UrbanNight.png"
export default function Footer() {
  return (
    <div>
      <div className="bg-black h-[25rem] flex flex-row gap-56 justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-y-6 ">
          <img src={logo} alt="Logo" />
          <ul className="flex flex-row justify-center items-center gap-4">
            <li>
             <BsYoutube className="text-white" />
            </li>
            <li><BsFacebook className="text-white" /></li>
            <li><BsInstagram className="text-white" /></li>
          </ul>
        </div>

        <div className="flex flex-col justify-center  text-white">
          <p className="text-xl left-2 font-semibold text-start">Ayuda</p>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>¿Comó comprar en el sitio?</li>
            <li>¿Que medios de envio hay?</li>
            <li>¿Como se puede pagar?</li>
            <li>Devoluciones</li>
            <li>Condiciones de servicio</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center  text-white">
          <p className="left-5 font-bold text-xl mb-3 relative">Contacto</p>
          <div className="flex flex-row ">
            <AiOutlineMail className="text-white w-16 h-8" />
            <p>contacto@urbnight.com.ar</p>
          </div>
          <div className="flex flex-row ">
            <AiFillPhone className="text-white w-16 h-8" />
            <p>0800 999 4200</p>
            <p>Lunes a viernes de 9 a 20hs</p>
          </div>
        </div>
      </div>

      <div className="bg-[#131313] flex justify-center items-center text-white font-sans h-10">
        <span>@2023 Urban Night - Todos los derechos reservados</span>
      </div>
    </div>
  );
}
