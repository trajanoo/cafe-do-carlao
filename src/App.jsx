import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'

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
    </>
  );
}

export default App
