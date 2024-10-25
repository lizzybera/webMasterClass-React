// import React from 'react'
import {BsSearch}  from "react-icons/bs"
import { Link, useLocation } from "react-router-dom"


const headerData = [
  {
    id : 1,
    navs : "Find Designers",
    path : "/",
  },
  {
    id : 2,
    navs : "Inpirations",
    path : "/inspire",
  },
  {
    id : 3,
    navs : "jobs",
    path : "/inspiration",
  },
  {
    id : 4,
    navs : "Go Pro",
    path : "/inspiration",
  }
]

const Header = () => {
  const paths = useLocation().pathname
  console.log(paths);
  
  return (
    <div className="w-full h-[90px] flex justify-center items-center bg-gray-300">
      <div className="w-[90%] h-full text-center flex justify-between items-center">

{/* logo/ navs */}
        <div className="flex items-center w-[40%] justify-between">
          <div className="italic font-semibold text-[25px]">Dribble</div>
          {/* navs */}
          <div className="flex items-center font-semibold w-[75%] justify-between">

            {
              headerData.map((el, i) =>(
                <Link key={i} to={el.path}>
                 <div  className={`${paths === el.path ? "text-blue-400" : "text-black"} cursor-pointer `}>{el.navs}</div> 
                </Link>
              )         
              )
            }
            {/* <div>Find Designers</div>
            <div>Inspiration</div>
            <div>Jobs</div>
            <div>Go Pro</div> */}
          </div>
        </div>

{/* callbtns */}
        <div className="flex items-center w-[35%] justify-between">
          {/* search */}
          <div className="w-[230px] bg-white flex h-[50px] rounded-3xl items-center text-gray-400 px-[20px] justify-between">
            <BsSearch />
            <input type="text" placeholder="Search..." className="w-[87%] placeholder:text-[15px] outline-none" />
          </div>

          <div className="font-semibold ">Log In </div>
          <div className="py-[10px] px-[17px] bg-black text-white rounded-3xl text-[14px] font-semibold">Sign Up</div>
        </div>
      </div>
    </div>
  )
}

export default Header