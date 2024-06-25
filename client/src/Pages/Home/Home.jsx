import React from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import Vacancies from './Components/Vacancies/Vacancies'
import JoinBot from './Components/JoinBot/JoinBot'
import Headhunt from './Components/Headhunt/Headhunt'
import Faq from './Components/Faq/Faq'
import Prices from './Components/Prices/Prices'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Vacancies/>
      <JoinBot/>
      <Headhunt/>
      <Faq/>
      <Prices/>
    </div>
  )
}

export default Home
