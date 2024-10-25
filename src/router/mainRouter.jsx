// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/build/Layout";
import LandingPage from "../pages/LandingPage";
import Inspiration from "../pages/Inspiration";
import Image_Pop from "../pages/image_popup/Page";

export const mainRouter = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [
            {
                index : "true",
                element : <LandingPage />
            },
            {
                path : "/inspire",
                element : <Inspiration />
            },
        ]
    },
    {
        path : "/pop-up",
        element : <Image_Pop />
    }
])