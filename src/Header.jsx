import React from "react";

function Header() {
  return (
    <div className="bg-[#3B141C] text-white h-20 flex justify-between items-center fixed top-0 left-0 w-full">
        <a href="#hero">
          <h1 className="ml-4 md:ml-10 text-2xl md:text-3xl font-bold">
            ☕ Café do Carlão
          </h1>
        </a>
        <button className="text-3xl md:hidden mr-4">☰</button>

        <ul className="hidden md:flex space-x-14 mr-20">
          <a href="#hero">
            <li className="hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black cursor-pointer">
              Início
            </li>
          </a>
          <a href="#about">
            <li className="hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black cursor-pointer">
              Sobre
            </li>
          </a>
          <a href="#menu">
            <li className="hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black cursor-pointer">
              Menu
            </li>
          </a>
          <li className="hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black cursor-pointer">
            Avaliações
          </li>
          <li className="hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black cursor-pointer">
            Galeria
          </li>
          <li className="hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black cursor-pointer">
            Contato
          </li>
        </ul>
      </div>
  )
}

export default Header;