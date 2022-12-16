import React from 'react'
import Featured from '../../Components/featured/Featured'
import Navbar from '../../Components/navbar/Navbar'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type='movie'/>
    </div>
  )
}
