import React from 'react'
import Featured from '../../Components/featured/Featured'
import List from '../../Components/list/List'
import Navbar from '../../Components/navbar/Navbar'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}
