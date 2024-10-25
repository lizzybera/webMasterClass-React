// import React from 'react'
import { useState } from "react"
import { BsCamera, BsMenuApp } from "react-icons/bs"

const Image_Pop = () => {
  const [image, setImage] = useState("")
  const [pop, setPop] = useState(false)

  const imageChange = (e) => {
    const file = e.target.files[0]
    const readImage = URL.createObjectURL(file)

    setImage(readImage)
  }

  const onPop = () =>{
    setPop(!pop)
  }

  console.log(pop)
  return (
    <>
      {
        pop && (
          <div className="w-full h-[100vh] flex justify-center flex-col items-center cursor-pointer">
            <div className="flex justify-end w-[90%] text-[20px] font-bold mb-[200px]" onClick={onPop}>X</div>

            <div>This is the pop-up Screen</div>
          </div>
        )
      }

      <div className="w-full h-[100vh] flex justify-center flex-col items-center">

        <div className="flex justify-end w-[90%] mb-9 ">
          <BsMenuApp className="cursor-pointer hover:text-blue-500 text-[25px]" 
          onClick={onPop}
          />
        </div>

        {/* image container */}
        <img src={image} alt="image" className="w-[150px] h-[150px] border rounded-[50%] border-blue-700 justify-center items-center flex object-cover" />


        {/* input to target image */}
        <input type="file" onChange={imageChange} id="pics" hidden />

        {/* label to act like input */}
        <label htmlFor="pics" className="bg-blue-300 w-[100px] h-[40px] rounded-md flex justify-center items-center cursor-pointer transition-all duration-200 hover:bg-blue-500 my-[15px]"><BsCamera /></label>

        {/* <div>{image}</div> */}

      </div>
    </>
  )
}

export default Image_Pop