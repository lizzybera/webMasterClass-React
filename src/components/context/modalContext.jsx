import { createContext, useState } from "react"

export const Pop_upContext = createContext()

// eslint-disable-next-line react/prop-types
export const Pop_UpProvider = ({children}) =>{
    const [show, setShow] = useState(null | "imageModal"| "loginModal")

    return(
        <Pop_upContext.Provider value={{show, setShow}}>
            {children}
        </Pop_upContext.Provider>
    )
}

// export const Pop_UpProvider = ({children}) =>{
//     const [show, setShow] = useState(false)

//     return(
//         <Pop_upContext.Provider value={{show, setShow}}>
//             {children}
//         </Pop_upContext.Provider>
//     )
// }