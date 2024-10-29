// import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useContext } from 'react'
import { Pop_upContext } from '../context/modalContext'

const Layout = () => {
  const {show, setShow}= useContext(Pop_upContext)
  return (
    <>
    {
        show === "loginModal" ? (
          <div className="w-full h-[100vh] flex justify-center flex-col items-center cursor-pointer bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border fixed z-30">
            <div className="flex justify-end w-[90%] text-[20px] font-bold mb-[200px]" onClick={() => {setShow(null)}}>X</div>

            <div>This is the Log In Screen</div>
          </div>
        ) : (null)
      }

      <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
    </>
  )
}

export default Layout