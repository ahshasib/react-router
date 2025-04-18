import React from 'react'
import Header from '../assets/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../assets/Footer/Footer'

const Root = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root