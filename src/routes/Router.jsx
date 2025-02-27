import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../components/Dashboard"
import Login from "../components/LogIn";
import BrandPage from "../components/BrandPage";
import CategoryPage from "../components/CategoryPage"
import SubcriptionPage from "../components/SubcriptionPage";
import Customer from "../components/Customer";
import Ancus from "../components/Ancus";
import OpeningStock from "../components/OpeningStock";
import AddOpeningStock from "../components/AddOpeningStock";
import OpeningStockList from "../components/OpeningStockList";
import StockAdjustment from "../components/StockAdjustment";
import StockReport from "../components/StockReport";


const Router = createBrowserRouter([
    {
        path: '/',
        element:
        <MainLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/brand-page',
                element: < BrandPage/>,
            },
            {
                path: '/category-page',
                element: <CategoryPage/>,
            },
            {
                path: '/subcription-page',
                element: <SubcriptionPage/>,
            },
            {
                path: '/customer-page',
                element: <Customer/>,
            },
            {
                path: '/ancus-page',
                element: <Ancus/>,
            },
            {
                path: '/openingStock-page',
                element: <OpeningStock/>,
            },
            {
                path: '/addOpeningStock-page',
                element: <AddOpeningStock/>,
            },
            {
                path: '/openingStockList-page',
                element: <OpeningStockList/>,
            },
            {
                path: '/stockAdjustment-page',
                element: <StockAdjustment/>,
            },
            {
                path: '/stockReport-page',
                element: <StockReport/>,
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }

])

export default Router;
