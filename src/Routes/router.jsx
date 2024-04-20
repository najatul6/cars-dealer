import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import ErrorPage from "../pages/ErrorPage/ErrorPage"


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<ErrorPage/>,
    }
])

export default router