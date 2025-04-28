import React from "react";
import coffeeHero from './assets/coffee-hero-section.png'

function Hero() {
  return (
    <section id="hero" className="hero-section bg-[#3B141C] h-[100vh]">
        <div className="hero-content flex flex-col md:flex-row h-[100vh] justify-center md:justify-between items-center mx-6 md:mx-40 text-center md:text-left">
          <div className="flex flex-col w-full md:w-[600px]">
            <h2
              id="coffee"
              className="text-[#FFC136] text-4xl md:text-4xl 2xl:text-5xl mb-5"
            >
              O Melhor Café!
            </h2>
            <h3 className="text-white font-bold text-3xl md:text-xl 2xl:text-4xl mb-5">
              Torne seu dia mais alegre com nosso café especial!
            </h3>
            <p className="text-white text-lg md:text-xl 2xl:text-2xl">
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
              className="w-[300px] md:w-[400px] 2xl:w-[600px]"
              src={coffeeHero}
              alt=""
            />
          </div>
        </div>
      </section>
  )
}

export default Hero;