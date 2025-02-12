import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../components/Dashboard"
import Login from "../components/LogIn";


const Router = createBrowserRouter([
    {
        path: '/',
        element:
            <MainLayout />
        ,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
         
          
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }

])

export default Router;