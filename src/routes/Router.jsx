import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../components/Dashboard"
import Login from "../components/LogIn";
import BrandPage from "../components/BrandPage";
import CategoryPage from "../components/CategoryPage"
import PricePlan from "../components/PricePlan";
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
import Deliveries from "../components/Deliveries"


import ManageRequisition from "../components/Purchase/ManageRequisition"
import AddQuotation from "../components/AddQuotation";

import SelsReturnList from "../components/SelsReturnList";
import AddRequisition from "../components/Purchase/AddRequisition";
import AddPurchase from "../components/Purchase/AddPurchase";
import ManagePurchase from "../components/Purchase/ManagePurchase";
import ManageReceived from "../components/Purchase/ManageReceived";
import DraftPurchase from "../components/Purchase/DraftPurchase";
import Wastage from "../components/StockManagement/Wastage";
import MySubscription from "../components/MySubscription";


import SalesReport from "../components/report/SalesReport"
import PurchaseReport from "../components/report/PurchaseReport";
import LedgerReport from "../components/report/LedgerReport";
import Vouchers from "../components/accounts/Vouchers"
import PendingVouchers from "../components/accounts/PendingVouchers";
import FinancialYear from "../components/accounts/FinancialYear";
import OpeningBalance from "../components/accounts/OpeningBalance";
import PredefineAccounts from "../components/accounts/PredefineAccounts";
import SubAccounts from "../components/accounts/SubAccounts";
import LedgerReports from "../components/accounts/LedgerReports";
import FinanCialReports from "../components/accounts/FinanCialReports";
import ChartofAccounts from "../components/accounts/ChartofAccounts";
import BalanceSheet from "../components/accounts/BalanceSheet";
import ProfilLoss from "../components/accounts/ProfilLoss";
import TrialBalance from "../components/accounts/TrialBalance";
import GeneralLedger from "../components/accounts/GeneralLedger";
import BankBook from "../components/accounts/BankBook";
import ManageOutlet from "../components/product/ManageOutlet";
import PrintBarcodeLabels from "../components/product/PrintBarcodeLabels";
import AddNewOutlet from "../components/product/AddNewOutlet";
import NewTransfer from "../components/product/NewTransfer";
import TransferList from "../components/product/TransferList";
import TransferRequestList from "../components/product/TransferRequestList";
import PurchaseReturn from "../components/Purchase/PurchaseReturn";
import PurchaseReturnList from "../components/Purchase/PurchaseReturnList";
import PurManagePayment from "../components/Purchase/PurManagePayment"; 
import ChooseNow from "../components/ChooseNow";
import OutletWiseSalesReport from "../components/report/OutletWiseSalesReport";
import OutletReport from "../components/report/OutletReport";
import OutletWiseProduct from "../components/report/OutletWiseProduct";
import OutletWiseVariantProduct from "../components/report/OutletWiseVariantProduct";
import CreditVoucher from "../components/accounts/CreditVoucher";
import ContraVoucher from "../components/accounts/ContraVoucher";
import JournalVoucher from "../components/accounts/JournalVoucher";
import SubType from "../components/accounts/SubType";
import SubLedger from "../components/accounts/SubLedger";
import ReceiptPayment from "../components/accounts/ReceiptPayment";
import COGSAdjustment from "../components/accounts/COGSAdjustment";
import NewWastage from "../components/StockManagement/NewWastage";
import ExpiredProducts from "../components/report/ExpiredProducts";
import UpComingExpiredProducts from "../components/report/UpComingExpiredProducts";

// Setting Page Routing

import ApplicationSettings from "../components/settings/ApplicationSettings";
import SettingActivityLog from "../components/settings/SettingActivityLog";

const Router = createBrowserRouter([
    {
        path: '/',
        element:
        <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
           
            
            {
                path: '/PricePlan-page',
                element: <PricePlan/>,
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
            {
                path: '/addOpeningStock-page',
                element: <AddOpeningStock/>,
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

            // devileries menu

            {
                path:'/Deliveries-page',
                element: <Deliveries/>,
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
         {
            path:'/newWastage -page',
            element: < NewWastage/>,
         },
         {
            path:'/MySubscription-page',
            element: <MySubscription/>,
         },
         {
            path:'/PurchaseReturn-page',
            element: <PurchaseReturn/>,
         },
         {
            path:'/PurchaseReturnList-page',
            element: <PurchaseReturnList/>,
         },
         {
            path:'/PurManagePayment-page',
            element: <PurManagePayment/>,
        },
         //product 
         {
            path:'/manageOutlet-page',
            element: <ManageOutlet/>,
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
            path: '/PrintBarcodeLabels-page',
            element: <PrintBarcodeLabels/>,
        },
        {
            path: '/AddNewOutlet-page',
            element: <AddNewOutlet/>,
        },

        {
            path:'/NewTransfer-page',
            element: <NewTransfer/>,
         },
        {
            path:'/TransferList-page',
            element: <TransferList/>,
         },
        {
            path:'/TransferRequestList-page',
            element: <TransferRequestList/>,
         },

        // report page route
        {
            path:'/SalesReport-page',
            element: <SalesReport/>,
         },
        {
            path:'/PurchaseReport-page',
            element: <PurchaseReport/>,
         },
         {
            path:'/LedgerReport-page',
            element: <LedgerReport/>,
         },
        {
            path:'/OutletReport-page',
            element: <OutletReport/>,
         },
        {
            path:'/OutletWiseProduct-page',
            element: <OutletWiseProduct/>,
         },
        {
            path:'/OutletWiseVariantProduct-page',
            element: <OutletWiseVariantProduct/>,
         },
       
        {
            path:'/ChooseNow-page',
            element: <ChooseNow/>,
         },
        {
            path:'/OutletWiseSalesReport-page',
            element: <OutletWiseSalesReport/>,
        },
        {
            path:'/ExpiredProducts-page',
            element: <ExpiredProducts/>,
        },
        {
            path:'/UpComingExpiredProducts-page',
            element: <UpComingExpiredProducts/>,
        },



         ///Accounts routing
  
        {
            path:'/Vouchers-page',
            element: <Vouchers/>,
         },
        {
            path:'/PendingVouchers-page',
            element: <PendingVouchers/>,
         },
        {
            path:'/FinancialYear-page',
            element: <FinancialYear/>,
         },
        {
            path:'/OpeningBalance-page',
            element: <OpeningBalance/>,
         },
        {
            path:'/PredefineAccounts-page',
            element: <PredefineAccounts/>,
         },
        {
            path:'/PredefineAccounts-page',
            element: <PredefineAccounts/>,
         },
        {
            path:'/SubAccounts-page',
            element: <SubAccounts/>,
         },
        {
            path:'/LedgerReports-page',
            element: <LedgerReports/>,
         },
        {
            path:'/ChartofAccounts-page',
            element: <ChartofAccounts/>,
         },
        {
            path:'/FinanCialReports-page',
            element: <FinanCialReports/>,
         },
        {
            path:'/balanceSheet-page',
            element: <BalanceSheet/>,
         },
        {
            path:'/ProfilLoss-page',
            element: <ProfilLoss/>,
         },
        {
            path:'/TrialBalance-page',
            element: <TrialBalance/>,
         },
        {
            path:'/GeneralLedger-page',
            element: <GeneralLedger/>,
         },
        {
            path:'/BankBook-page',
            element: <BankBook/>,
         },
        {
            path:'/CreditVoucher-page',
            element: <CreditVoucher/>,
         },
         
        {
            path:'/ContraVoucher-page',
            element: <ContraVoucher/>,
         },
        {
            path:'/JournalVoucher-page',
            element: <JournalVoucher/>,
         },
        {
            path:'/SubType-page',
            element: <SubType/>,
         },


        {
            path:'/SubLedger-page',
            element: <SubLedger/>,
         },
        {
            path:'/ReceiptPayment-page',
            element: <ReceiptPayment/>,
         },
        {
            path:'/COGSAdjustment-page',
            element: <COGSAdjustment/>,
         },
         {
            path: '/ApplicationSettings-page',
            element: <ApplicationSettings />,
         },
         {
            path: '/SettingActivityLog-page',
            element: <SettingActivityLog />,
         }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }

])

export default Router;
