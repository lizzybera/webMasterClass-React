import { useState } from "react"
import { FaLock, FaUnlock, FaUser } from "react-icons/fa"


const Form1 = () => {
    const [show, setShow] = useState(false)
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")

    const onShow = () => {
        setShow(!show)
    }

    return <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="border w-[40%] h-[400px] px-[30px] py-[20px]">
            <h1 className="font-bold text-lg mb-[20px]">Register</h1>

            {/* Form Number */}
            <div className="flex justify-center items-center mb-[40px]">
                <div className="w-[40px] h-[40px] bg-purple-600 rounded-[50%] flex justify-center items-center cursor-pointer text-white font-semibold">1</div>
                <hr className="w-[20%] bg-purple-600 mx-2 h-[3px]" />
                <div className="w-[40px] h-[40px] border rounded-[50%] flex justify-center items-center cursor-pointer text-black font-semibold">2</div>
                <hr className="w-[20%] bg-purple-600 mx-2 h-[3px]" />
                <div className="w-[40px] h-[40px] border rounded-[50%] flex justify-center items-center cursor-pointer text-black font-semibold">3</div>
            </div>
            {/* inputs */}
            <div className="w-full h-[50px] border-[2px] border-blue-700 rounded-lg flex items-center px-[15px] my-[20px]">
                {/* <Icon /> */}

                <FaUser size={20} color="black" />
                <input className="w-full bg-transparent ml-[5px] outline-none h-[70%] cursor-pointer placeholder:text-[20px]" placeholder='UserName' type='text'
                    value={name}
                    onChange={(e) => {
                        setname(e.target.value)
                    }}  
                />
            </div>

            {show ?
                (<div className="w-full h-[50px] border-[2px] border-blue-700 rounded-lg flex items-center px-[15px] my-[10px]">
                    {/* <Icon /> */}

                    <FaLock size={20} color="black" onClick={onShow} />
                    <input className="w-full bg-transparent ml-[5px] outline-none h-[70%] cursor-pointer placeholder:text-[20px]" placeholder='Password' type='text' 
                    value={password}
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }}
                    />
                </div>)
                :
                (<div className="w-full h-[50px] border-[2px] border-blue-700 rounded-lg flex items-center px-[15px] my-[10px]">
                    {/* <Icon /> */}

                    <FaUnlock size={20} color="black" onClick={onShow} />
                    <input className="w-full bg-transparent ml-[5px] outline-none h-[70%] cursor-pointer placeholder:text-[20px]" placeholder='Password' type='password'
                    value={password}
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }}
                    />
                </div>)}

            {/* buttons */}
            <div className="justify-end flex w-full">
                <div className="w-[70px] h-[45px] rounded-lg text-white flex items-center justify-center my-[30px] font-bold text-sm cursor-pointer bg-purple-600"
                    onClick={() => {
                        localStorage.setItem("pageNumber", JSON.stringify(2))

                        const data = {
                            name, password
                        }

                        localStorage.setItem("formData", JSON.stringify(data))
                        window.location.reload()
                    }}
                >Next</div>
            </div>

        </div>
    </div>
}

const Form2 = () => {
    const [show, setShow] = useState(false)
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")

    const formdatas = JSON.parse(localStorage.getItem)

    const onShow = () => {
        setShow(!show)
    }

    return <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="border w-[40%] h-[400px] px-[30px] py-[20px]">
            <h1 className="font-bold text-lg mb-[20px]">Register</h1>

            {/* Form Number */}
            <div className="flex justify-center items-center mb-[40px]">
                <div className="w-[40px] h-[40px] bg-purple-600 rounded-[50%] flex justify-center items-center cursor-pointer text-white font-semibold">1</div>
                <hr className="w-[20%] bg-purple-600 mx-2 h-[3px]" />
                <div className="w-[40px] h-[40px] bg-purple-600 rounded-[50%] flex justify-center items-center cursor-pointer text-white font-semibold">2</div>
                <hr className="w-[20%] bg-purple-600 mx-2 h-[3px]" />
                <div className="w-[40px] h-[40px] border rounded-[50%] flex justify-center items-center cursor-pointer text-black font-semibold">3</div>
            </div>

            {/* inputs */}
            <div className="w-full h-[50px] border-[2px] border-blue-700 rounded-lg flex items-center px-[15px] my-[20px]">
                {/* <Icon /> */}

                <FaUser size={20} color="black" />
                <input className="w-full bg-transparent ml-[5px] outline-none h-[70%] cursor-pointer placeholder:text-[20px]" placeholder='Email' type='text' 
                value={email}
                onChange={(e) =>{
                    setaddress(e.target.value)
                }}
                />
            </div>

            <div className="w-full h-[50px] border-[2px] border-blue-700 rounded-lg flex items-center px-[15px] my-[10px]">
                {/* <Icon /> */}

                <FaLock size={20} color="black" />
                <input className="w-full bg-transparent ml-[5px] outline-none h-[70%] cursor-pointer placeholder:text-[20px]" placeholder='Address' type='text' 
                value={address}
                onChange={(e) =>{
                    setaddress(e.target.value)
                }}
                />
            </div>

            {/* buttons */}
            <div className="justify-between flex w-full">
                <div className="w-[70px] h-[45px] rounded-lg text-white flex items-center justify-center my-[30px] font-bold text-sm cursor-pointer bg-purple-600"
                    onClick={() => {
                        localStorage.setItem("pageNumber", JSON.stringify(1))
                        window.location.reload()
                    }}
                >Prev</div>
                <div className="w-[70px] h-[45px] rounded-lg text-white flex items-center justify-center my-[30px] font-bold text-sm cursor-pointer bg-purple-600"
                    onClick={() => {
                        localStorage.setItem("pageNumber", JSON.stringify(3))

                        const data = {
                            email, password
                        }
                        window.location.reload()
                    }}
                >Next</div>
            </div>

        </div>
    </div>
}

const Form3 = () => {
    const [show, setShow] = useState(false)

    const onShow = () => {
        setShow(!show)
    }

    return <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="border w-[40%] h-[400px] px-[30px] py-[20px]">
            <h1 className="font-bold text-lg mb-[20px]">Register</h1>

            {/* Form Number */}
            <div className="flex justify-center items-center mb-[40px]">
                <div className="w-[40px] h-[40px] bg-purple-600 rounded-[50%] flex justify-center items-center cursor-pointer text-white font-semibold">1</div>
                <hr className="w-[20%] bg-purple-600 mx-2 h-[3px]" />
                <div className="w-[40px] h-[40px] bg-purple-600 rounded-[50%] flex justify-center items-center cursor-pointer text-white font-semibold">2</div>
                <hr className="w-[20%] bg-purple-600 mx-2 h-[3px]" />
                <div className="w-[40px] h-[40px] bg-purple-600 rounded-[50%] flex justify-center items-center cursor-pointer text-white font-semibold">3</div>
            </div>

            {/* inputs */}
            <div className="w-full h-[50px] border-[2px] border-blue-700 rounded-lg flex items-center px-[15px] my-[20px]">
                {/* <Icon /> */}

                <FaUser size={20} color="black" />
                <input className="w-full bg-transparent ml-[5px] outline-none h-[70%] cursor-pointer placeholder:text-[20px]" placeholder='Phone Number' type='text' />
            </div>

            {/* <div className="w-full h-[50px] border-[2px] border-blue-700 rounded-lg flex items-center px-[15px] my-[10px]">
          
                <FaLock size={20} color="black" />
                <input className="w-full bg-transparent ml-[5px] outline-none h-[70%] cursor-pointer placeholder:text-[20px]" placeholder='Address' type='text' />
            </div> */}

            {/* buttons */}
            <div className="justify-between flex w-full">
                <div className="w-[70px] h-[45px] rounded-lg text-white flex items-center justify-center my-[30px] font-bold text-sm cursor-pointer bg-purple-600"
                    onClick={() => {
                        localStorage.setItem("pageNumber", JSON.stringify(2))
                        window.location.reload()
                    }}
                >Prev</div>
                <div className="w-[70px] h-[45px] rounded-lg text-white flex items-center justify-center my-[30px] font-bold text-sm cursor-pointer bg-purple-600">Create</div>
            </div>

        </div>
    </div>
}



const Multiple_Form = () => {
    const pageNumber = JSON.parse(localStorage.getItem("pageNumber"))
    return (
        <div>
            {
                pageNumber === 1 ? (
                    <Form1 />
                ) : pageNumber === 2 ? (
                    <Form2 />
                ) : pageNumber === 3 ? (
                    <Form3 />
                ) : null
            }
        </div>
    )


}

export default Multiple_Form