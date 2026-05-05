import React from 'react'
import Header from './Header'
import HeroSection from './Components/HeroSection/HeroSection'
import Banner from './Components/Banner'
import Public from './Components/Public'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Banner />
      <Navbar />

      <Public />
    </div>
  )
}

export default App


