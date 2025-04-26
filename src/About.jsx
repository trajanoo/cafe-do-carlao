import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function About() {
  return (
    <section id="about" className='about flex h-[65vh] items-center justify-around'>
        <div className="image-wrapper">
          <img className="hidden md:block h-[350px] w-[350px] rounded-[50%] object-cover" src="src/assets/about-image.jpg" alt="" />
        </div>
        <div className="about-content flex flex-col text-center w-[550px]">
          <h2 className="relative font-bold text-4xl after:content-[''] after:rounded-full after:block after:h-[5px] after:w-[100px] after:bg-[#F59A19] after:m-auto after:mt-2">SOBRE NÓS</h2>
          <p className="text-md mt-15 w-[300px] m-auto md:w-auto">No Café do Carlão, Rio Grande do Sul, nos orgulhamos de ser um destino preferido para amantes de café e buscadores de boas conversas. Somos dedicados a oferecer uma experiência excepcional de café em um ambiente acolhedor e convidativo, onde os clientes podem relaxar, descontrair e aproveitar seu tempo com conforto.</p>
          <div className="social-links flex justify-center mt-8 space-x-3">
          <FacebookIcon sx={{ fontSize: '1.8rem', '&:hover': { color: '#F09924', transition: '200ms' } }}/>
          <InstagramIcon sx={{ fontSize: '1.8rem', '&:hover': { color: '#F09924', transition: '200ms'  } }}/>
          <XIcon sx={{ fontSize: '1.8rem', '&:hover': { color: '#F09924', transition: '200ms'  } }}/>
        </div>
        </div>
      </section>
  )
}

export default About;