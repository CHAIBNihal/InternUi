import { LogIn, UserPlus, UserRoundCog, Menu, X } from "lucide-react";
import React, { useState } from "react";
import SRM from "../../assets/Dashboard/SRM.png";
import { LoginBtn } from "./LoginBtn";

const WebNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-xl rounded-b-3xl p-2">
      {/* Section des accès */}
      <div className="w-full bg-indigo-950 p-4 rounded-3xl text-white">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {/* Espace Administrateur */}
          <a
            href="/espace-administrateur"
            className="relative flex font-semibold gap-x-1 items-center group text-cyan-600 text-sm md:text-base"
          >
            <UserRoundCog size={19} />
            Espace Administrateur
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-right scale-x-0 transition-transform duration-300 ease-linear group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>

          {/* Se connecter */}
         <LoginBtn />


          {/* Faire une demande */}
          <a
            href="/form-demande"
            className="font-semibold hover:bg-white hover:text-black p-2 md:p-4 rounded-2xl flex gap-x-1 items-center text-sm md:text-base"
          >
            <UserPlus size={16} className="md:size-[19px]" />
            Faire une Demande
          </a>
        </div>
      </div>

      {/* Logo + Menu */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-5">
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <img className="h-16 md:h-24" src={SRM} alt="Logo" />

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row text-lg font-medium gap-y-4 md:gap-x-8 md:mr-10 items-center">
            <li className="cursor-pointer">
              <a href="#" className="relative group inline-block text-cyan-600">
                Etapes de demandes de stage
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right scale-x-0 transition-transform duration-300 ease-linear group-hover:scale-x-100 group-hover:origin-left"></span>
              </a>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebNav;