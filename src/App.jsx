import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import SectionPay from './components/SectionPay'
import SectionCategory from './components/SectionCategory'
import Footer from './components/Footer'


function App() {

  return (
    <div className='flex flex-col overflow-hidden '>
    
      <Nav />
      <Main />
      <SectionPay />
      <SectionCategory />
      <Footer />
    </div>
  )
}

export default App
