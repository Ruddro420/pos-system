import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [salesOpen, setSalesOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);
  const [stockOpen, setStockOpen] = useState(false);
  const [subscriptionsOpen, setSubscriptionsOpen] = useState(false);

  const handleToggleSales = () => {
    setSalesOpen((open) => !open);
  };

  const handleTogglePurchase = () => {
    setPurchaseOpen((open) => !open);
  };

  const handleToggleProduct = () => {
    setProductOpen((open) => !open);
  };

  const handleToggleReport = () => {
    setReportOpen((open) => !open);
  };

  const handleToggleAccount = () => {
    setAccountOpen((open) => !open);
  };

  const handleToggleCustomer = () => {
    setCustomerOpen((open) => !open);
  };

  const handleToggleStock = () => {
    setStockOpen((open) => !open);
  };

  const handleToggleSubscriptions = () => {
    setSubscriptionsOpen((open) => !open);
  };
  
  return (
    <div>
      <aside id="layout-menu"
        className="layout-menu menu-vertical bg-menu-theme position-fixed w-20 h-100"
      >
        <div className="app-brand demo">
          <NavLink to='/' className="app-brand-link">
            <span className="app-brand-logo demo py-3">
            <img width="180px" src="https://skylawnhotel.com/wp-content/uploads/2024/06/logo-sky-1.jpg" alt="" srcSet="" />
            </span>
          </NavLink>
  
          <a className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">

          <li className="menu-item">
            <NavLink to='/' className={({ isActive }) => {
              return isActive ? "menu-link active-link bg-body " : "menu-link";
            }}>
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </NavLink>
          </li>
          <li className={`menu-item ${salesOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleToggleSales} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-bar-chart-alt-2"></i>
              <div data-i18n="Layouts">Sales</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/quotationt-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Quotationt 
                  </div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/guiPos-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">GUI POS</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/possale-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu"> POS Sale
                  </div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/manageSale-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Manage Sale
                  </div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/manageDraftSale-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Manage Draft Sale</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/saleCounter-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Sale Counter</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/salesReturn-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Sales Return</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/managePayment-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Manage Payment</div>
                </NavLink>
              </li>
             {/*  <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Delivaris</div>
                </NavLink>
              </li> */}
            </ul>
          </li>

          <li className={`menu-item ${purchaseOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleTogglePurchase} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-purchase-tag"></i>
              <div data-i18n="Layouts">Purchase</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/manageRequisition-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Manage Requisition</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/managePurchase-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Manage Purchase</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/draftPurchase-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Draft Purchase</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/manageReceived-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Manage Received</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Purchase Return</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/managePayment-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Manage Payment</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${productOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleToggleProduct} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bxs-offer"></i>
              <div data-i18n="Layouts">Product</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Add Product</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Product List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Print Barcode/Label</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/category-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Upcoming Expiry Product</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/category-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Expired Product</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/category-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Category Add/List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/brand-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Brand Add/List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Supplier Add/List</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${reportOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleToggleReport} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bxs-report"></i>
              <div data-i18n="Layouts">Report</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/SalesReport-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Sales report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Installment Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/StockReport-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Stock  Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/PurchaseReport-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Purchase Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Upcoming Expiry Product</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/LedgerReport-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Expired Product</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${accountOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleToggleAccount} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-bar-chart"></i>
              <div data-i18n="Layouts">Accounts</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Financial Year</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Opening Balance</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Chart of Accounts</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Predefine Accounts</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Sub Accounts</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Vouchers</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Pending Vouchers</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Ledger Reports</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">FinanCial Reports</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${customerOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleToggleCustomer} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-group"></i>
              <div data-i18n="Layouts">Customer</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/customer-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Customer Add/List</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${stockOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleToggleStock} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-store-alt"></i>
              <div data-i18n="Layouts">Stock Management</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/openingStock-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Opening Stock</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/stockAdjustment-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Stock Adjustment</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Stock Alert</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Stock Trasfer</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/wastage-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Wastage</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${subscriptionsOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleToggleSubscriptions} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-user-circle"></i>
              <div data-i18n="Layouts">Subscriptions</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/PricePlan-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Price Plan</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/subcription-page' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">My Subscription</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="menu-item">
            <NavLink to='/account-settings' className={({ isActive }) => {
              return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
            }}>
              <i className='menu-icon tf-icons bx bx-cog'></i>
              <div data-i18n="Analytics">Settings</div>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;