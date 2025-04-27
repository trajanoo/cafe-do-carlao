import React from 'react';

function Menu() {
  return (
    <section id='menu' className='menu-section bg-[#252525] pt-32'>
        <h2 className="relative font-bold text-4xl after:content-[''] after:rounded-full after:block after:h-[5px] after:w-[150px] after:bg-[#F59A19] after:m-auto after:mt-2 text-white text-center mb-15">NOSSO MENU</h2>
        
        <div className="menu-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src="src/assets/hot-beverages.png" alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Café Quente</h3>
            <p className="text-white mt-3">Vasta variedade de cafés quentes fumegantes para te deixar renovado e leve.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src="src/assets/cold-beverages.png" alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Café Gelado</h3>
            <p className="text-white mt-3">Café gelado cremoso e espumoso para te deixar refrescado.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src="src/assets/refreshment.png" alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Refrescos</h3>
            <p className="text-white mt-3">Bebida refrescante de frutas e gelo para fazer você se sentir renovado.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src="src/assets/special-combo.png" alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Combos Especiais</h3>
            <p className="text-white mt-3">Suas combinações favoritas de comidas e bebidas.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src="src/assets/desserts.png" alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Sobremesas</h3>
            <p className="text-white mt-3">Sacie seu paladar e embarque em uma experiência culinária.</p>
          </div>

          <div className="text-center justify-center m-auto mt-15 w-96">
            <img className="w-56 2xl:w-80 m-auto justify-center" src="src/assets/burger-frenchfries.png" alt="" />
            <h3 className="text-2xl text-white font-bold mt-7">Hamburguer e Fritas</h3>
            <p className="text-white mt-3">Pequenas porções para satisfazer sua fome leve.</p>
          </div>
        </div>
      </section>
  )
}

export default Menu;