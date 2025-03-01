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
import Quotationt from "../components/Quotationt";
import PosSale from "../components/PosSale";
import GuiPos from "../components/GuiPos";
import ManageSale from "../components/ManageSale";
import ManageDraftSale from "../components/ManageDraftSale";
import SaleCounter from "../components/SaleCounter";
import SalesReturn from "../components/salesReturn"
import ManagePayment from "../components/ManagePayment"


import ManageRequisition from "../components/Purchase/ManageRequisition"
import AddQuotation from "../components/AddQuotation";

import SelsReturnList from "../components/SelsReturnList";
import AddRequisition from "../components/Purchase/AddRequisition";
import AddPurchase from "../components/Purchase/AddPurchase";
import ManagePurchase from "../components/Purchase/ManagePurchase";
import ManageReceived from "../components/Purchase/ManageReceived";
import DraftPurchase from "../components/Purchase/DraftPurchase";
import Wastage from "../components/StockManagement/Wastage";

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
                element: <BrandPage/>,
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
            {
                path: '/stockReport-page',
                element: <SelsReturnList/>,
            },
          


            //sales

            {
                path: '/quotationt-page',
                element: <Quotationt/>,
            },
            {
                path: '/possale-page',
                element: <PosSale/>,
            },
            {
                path: '/guiPos-page',
                element: <GuiPos/>,
            },
            {
                path:'/manageSale-page',
                element: <ManageSale/>,
            },
            {
                path:'/manageDraftSale-page',
                element: <ManageDraftSale/>,
            },
            {
                path:'/saleCounter-page',
                element: <SaleCounter/>,
            },
            {
                path:'/salesReturn-page',
                element: <SalesReturn/>,
            },
            {
                path:'/managePayment-page',
                element: <ManagePayment/>,
            },
            {
                path:'/SaleReturn-page',
                element: <salesReturn/>,
            },
            {
                path:'/SelsReturnList-page',
                element: <SelsReturnList/>,
            },
         ///purchs router
         {
            path:'/manageRequisition-page',
            element: <ManageRequisition/>,
         },
         {
            path:'/addQuotation-page',
            element: <AddQuotation/>,
         },
         {
            path:'/addRequisition-page',
            element: <AddRequisition/>,
         },
         {
            path:'/addPurchase-page',
            element: <AddPurchase/>,
         },
         {
            path:'/managePurchase-page',
            element: <ManagePurchase/>,
         },
         {
            path:'/manageReceived-page',
            element: <ManageReceived/>,
         },
         {
            path:'/managePayment-page',
            element: < ManagePayment/>,
         },
         {
            path:'/draftPurchase-page',
            element: <DraftPurchase/>,
         },
         {
            path:'/wastage-page',
            element: <Wastage/>,
         },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }

])

export default Router;
