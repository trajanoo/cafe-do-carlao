import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <section id='contact' className='contact-section bg-[#FBF4F6] h-[91vh]'>
        <h2 className="pt-20 relative font-bold text-4xl after:content-[''] after:rounded-full after:block after:h-[5px] after:w-[150px] after:bg-[#F59A19] after:m-auto after:mt-2 text-center pb-15 2xl:pb-25 2xl:mb-16">FALE CONOSCO</h2>

        <div className="contact-container flex justify-around text-md 2xl:text-lg flex-col lg:flex-row items-center gap-15 lg:gap-0">
          <div className="contact-info">
            <ul className='flex flex-col gap-4 2xl:gap-8'>
              <li className='flex'>
                <LocationOnIcon className='mr-4' />
                <p>853 R. Lindolfo Collor, 835 - Centro</p>
              </li>
              <li className='flex'>
                <MailOutlineIcon className='mr-4' />
                <p>brunotrajano.dev@gmail.com</p>
              </li>
              <li className='flex'>
                <PhoneIcon className='mr-4' />
                <p>+55 51 99518-9792</p>
              </li>
              <li className='flex'>
                <AccessTimeIcon className='mr-4' />
                <p>Segunda - Sábado: 9:00 - 20:00</p>
              </li>
              <li className='flex'>
                <AccessTimeIcon className='mr-4' />
                <p>Domingo: Fechado</p>
              </li>
              <li className='flex'>
                <LanguageIcon className='mr-4' />
                <p>www.github.com/trajanoo</p>
              </li>
            </ul>
          </div>

          <div className="contact-form flex flex-col">
            <input className='bg-white mb-5 w-[32rem] h-12 rounded-2xl ' type="text" placeholder='  Seu nome' />
            <input className='bg-white mb-5 w-[32rem] h-12 rounded-2xl ' type="text" placeholder='  Seu email' />
            <input className='bg-white mb-4 w-[32rem] h-24 rounded-2xl pb-13' type="text" placeholder='  Sua mensagem' />
            <button className='bg-[#351518] w-35 h-13 rounded-r-full rounded-l-full text-white 2xl:mt-5 cursor-pointer' type="submit">Submit</button>
          </div>
        </div>
      </section>
  )
}

export default Contact;