import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importando as imagens corretamente
import ottoImg from './assets/otto.jpg';
import messiImg from './assets/messi.jpg';
import machadoImg from './assets/machado.jpg';
import trajanoImg from './assets/trajano.jpeg';
import pedroImg from './assets/pedro.jpg';

function Testimonial() {
  return (
    <section id='testimonial' className="py-30 h-[100vh] bg-white">
      <h2 className="relative p-5 font-bold text-4xl after:content-[''] after:rounded-full after:block after:h-[5px] after:w-[150px] after:bg-[#F59A19] after:m-auto after:mt-2 text-center 2xl:mb-16">
        AVALIAÇÕES
      </h2>

      <Swiper
        className="relative lg:mt-8 2xl:mt-35 max-w-[80vw] mx-auto"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ paddingBottom: '60px' }} // Adiciona espaço no final do swiper
      >
        <SwiperSlide>
          <div className="flex flex-col items-center text-center px-4">
            <img
              src={ottoImg}
              alt="Usuário 1"
              className="w-45 h-45 2xl:w-60 2xl:h-60 rounded-full object-cover mb-5 2xl:mb-15 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Otto Seibt</h3>
            <p className="italic text-gray-600 max-w-md">
              "Essa cafeteria é muito boa, vou nela toda semana."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center text-center px-4">
            <img
              src={messiImg}
              alt="Usuário 2"
              className="w-45 h-45 2xl:w-60 2xl:h-60 rounded-full object-cover mb-5 2xl:mb-15 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Bruno Messi</h3>
            <p className="italic text-gray-600 max-w-md">
              "Achei deveras show de bola"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center text-center px-4">
            <img
              src={machadoImg}
              alt="Usuário 3"
              className="w-45 h-45 2xl:w-60 2xl:h-60 rounded-full object-cover mb-5 2xl:mb-15 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Arthur Machado</h3>
            <p className="italic text-gray-600 max-w-md">
              "Serviço show"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center text-center px-4">
            <img
              src={trajanoImg}
              alt="Usuário 4"
              className="w-45 h-45 2xl:w-60 2xl:h-60 rounded-full object-cover mb-5 2xl:mb-15 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Bruno Trajano</h3>
            <p className="italic text-gray-600 max-w-md">
              "Melhor cafeteria da região"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center text-center px-4">
            <img
              src={pedroImg}
              alt="Usuário 5"
              className="w-45 h-45 2xl:w-60 2xl:h-60 rounded-full object-cover mb-5 2xl:mb-15 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Pedro Menezes</h3>
            <p className="italic text-gray-600 max-w-md">
              "Aperta o gatilho 😭"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonial;
