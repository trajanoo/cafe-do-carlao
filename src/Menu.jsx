import React from 'react';
import cafeAmericano from './assets/cafeamericano.png';
import cafeMacchiato from './assets/cafemacchiato.png';
import hotBevereges from './assets/hotbevereges.png';
import cafeGelado from './assets/cafegelado.png';
import cafeAffogato from './assets/cafeaffogato.png';
import chocolateQuente from './assets/chocolatequente.png';

function Menu() {
  return (
    <section id='menu' className='menu-section bg-[#252525] pt-32 pb-28'>
        <h2 className="relative font-bold text-4xl after:content-[''] after:rounded-full after:block after:h-[5px] after:w-[150px] after:bg-[#F59A19] after:m-auto after:mt-2 text-white text-center mb-15">NOSSO MENU</h2>
        
        <div className="menu-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src={cafeAmericano} alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Tradicional</h3>
            <p className="text-white mt-3">Espresso intenso, perfeito para quem aprecia o sabor puro do café.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src={cafeMacchiato} alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Macchiato</h3>
            <p className="text-white mt-3">Espresso encorpado com um toque suave de espuma de leite.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src={hotBevereges} alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Cappuccino</h3>
            <p className="text-white mt-3">Combinação cremosa de espresso, leite vaporizado e espuma densa.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src={cafeGelado} alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Gelado</h3>
            <p className="text-white mt-3">Café refrescante servido com gelo, ideal para dias quentes.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src={cafeAffogato} alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Affogato</h3>
            <p className="text-white mt-3">Delicioso espresso servido sobre uma bola de sorvete de baunilha.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src={chocolateQuente} alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Chocolate Quente</h3>
            <p className="text-white mt-3">Bebida cremosa, feita com chocolate derretido e cobertura especial.</p>
          </div>
        </div>
      </section>
  )
}

export default Menu;
