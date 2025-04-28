import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Menu from './Menu'
import Testimonial from './Testimonial'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header section */}
      <Header />
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About />
      {/* Menu section */}
      <Menu />
      {/* Testimonial section */}
      <Testimonial />
      {/* Contact us */}
      <Contact />
    </>
  );
}

export default App
