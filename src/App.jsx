import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#3B141C] text-white h-20 flex justify-between items-center'>
      <h1 className='ml-4 md:ml-10 text-2xl md:text-3xl font-bold'>☕ Coffee</h1>
      <button className='text-3xl md:hidden mr-4'>☰</button>

      <ul className='hidden md:flex space-x-14 mr-20'>
        <li className='hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black'>Home</li>
        <li className='hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black'>About</li>
        <li className='hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black'>Testimonials</li>
        <li className='hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black'>Gallery</li>
        <li className='hover:bg-[#F59A11] transition-colors duration-300 p-2 rounded-3xl hover:text-black'>Contact</li>
      </ul>
      
    </div>
    </>
  )
}

export default App
