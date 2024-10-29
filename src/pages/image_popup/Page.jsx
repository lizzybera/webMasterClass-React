// import React from 'react'
import { useContext, useState } from "react"
import { BsCamera, BsMenuApp } from "react-icons/bs"
import { Pop_upContext } from "../../components/context/modalContext"

const Image_Pop = () => {
  const [image, setImage] = useState("")
  // const [pop, setPop] = useState(false)
  const {show, setShow}= useContext(Pop_upContext) //useContext to share functionalities

  const imageChange = (e) => {
    const file = e.target.files[0]
    const readImage = URL.createObjectURL(file)

    setImage(readImage)
  }

  // const onPop = () =>{
  //   setPop(!pop)
  // }

  // console.log(pop)
  return (
    <>
      {
        show === "imageModal" ? (
          <div className="w-full h-[100vh] flex justify-center flex-col items-center cursor-pointer bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border fixed z-30">
            <div className="flex justify-end w-[90%] text-[20px] font-bold mb-[200px]" onClick={() => {setShow(null)}}>X</div>

            <div>This is the Image Modal Screen</div>
          </div>
        ) : (null)
      }

      <div className="w-full h-[100vh] flex justify-center flex-col items-center absolute">

        <div className="flex justify-end w-[90%] mb-9 ">
          <BsMenuApp className="cursor-pointer hover:text-blue-500 text-[25px]" 
          onClick={() => {setShow("imageModal")}}
          />
        </div>

        {/* image container */}
        <img src={image} alt="image" className="w-[150px] h-[150px] border rounded-[50%] border-blue-700 justify-center items-center flex object-cover" />


        {/* input to target image */}
        <input type="file" onChange={imageChange} id="pics" hidden />

        {/* label to act like input */}
        <label htmlFor="pics" className="bg-blue-300 w-[100px] h-[40px] rounded-md flex justify-center items-center cursor-pointer transition-all duration-200 hover:bg-blue-500 my-[15px]"><BsCamera /></label>

      </div>
    </>
  )
}

export default Image_Pop