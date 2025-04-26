import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header section */}
      <div className="bg-[#3B141C] text-white h-20 flex justify-between items-center">
        <h1 className="ml-4 md:ml-10 text-2xl md:text-3xl font-bold">
          ☕ Coffee
        </h1>
        <button className="text-3xl md:hidden mr-4">☰</button>

        <ul className="hidden md:flex space-x-14 mr-20">
          <li className="hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black cursor-pointer">
            Início
          </li>
          <li className="hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black cursor-pointer">
            Sobre
          </li>
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

      {/* Hero section */}
      <section className="hero-section bg-[#3B141C] h-[92vh]">
        <div className="hero-content flex flex-col md:flex-row h-[80vh] justify-center md:justify-between items-center mx-6 md:mx-40 text-center md:text-left">
          <div className="flex flex-col w-full md:w-[600px]">
            <h2
              id="coffee"
              className="text-[#FFC136] text-4xl md:text-5xl mb-5"
            >
              O Melhor Café!
            </h2>
            <h3 className="text-white font-bold text-3xl md:text-4xl mb-5">
              Torne seu dia mais alegre com nosso café especial!
            </h3>
            <p className="text-white text-lg md:text-2xl">
            Bem vindo a nossa cafeteria, onde cada grão conta uma história e cada xícara espalha alegria.
            </p>
            <div className="mt-10 space-x-4 space-y-4 md:space-y-0 flex justify-center md:justify-normal items-center md:items-start">
              <a
                className="bg-[#E68B15] p-3 rounded-4xl border border-transparent hover:border-white hover:text-white hover:bg-[#3B141C] transition duration-300 my-0"
                href=""
              >
                Pedir Agora
              </a>
              <a
                className="border p-3 rounded-4xl text-white hover:bg-[#E68B15] hover:border-transparent hover:text-black transition duration-300"
                href=""
              >
                Fale Conosco
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <img
              className="w-[300px] md:w-[600px]"
              src="src/assets/coffee-hero-section.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App
