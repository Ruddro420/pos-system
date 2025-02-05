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
  const [userOpen, setUserOpen] = useState(false);

  const hangleToggleSales = () => {
    setSalesOpen((open) => !open);
  };

  const hangleTogglePurchase = () => {
    setPurchaseOpen((open) => !open);
  };

  const hangleToggleProduct = () => {
    setProductOpen((open) => !open);
  };

  const hangleToggleReport = () => {
    setReportOpen((open) => !open);
  };

  const hangleToggleAccount = () => {
    setAccountOpen((open) => !open);
  };

  const hangleToggleCustomer = () => {
    setCustomerOpen((open) => !open);
  };

  const handleToggleStock = () => {
    setStockOpen((open) => !open);
  };
  const handleToggleUser = () => {
    setUserOpen((open) => !open);
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
              return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
            }}>
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </NavLink>
          </li>
          <li className={`menu-item ${salesOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={hangleToggleSales} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-bar-chart-alt-2"></i>
              <div data-i18n="Layouts">Sales</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Sales List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Sales Due List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Installment List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Installment Due List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Deliveries</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${purchaseOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={hangleTogglePurchase} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-purchase-tag"></i>
              <div data-i18n="Layouts">Purchase</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">New Purchase</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Purchase List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Purchae Due List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Add/Return</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Add/Return Statement</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Exchange</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${productOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={hangleToggleProduct} className="menu-link menu-toggle">
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
                  <div data-i18n="Without menu">Print Barcode/Label</div>
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
                  <div data-i18n="Without menu">Category Add/List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Unit Add/List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Supplier Add/List</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Company Add/List</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${reportOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={hangleToggleReport} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bxs-report"></i>
              <div data-i18n="Layouts">Report</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
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
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Stock Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Purchase Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Customer Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Expense Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Salary Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Ledger Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Financial Report</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${accountOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={hangleToggleAccount} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bxs-user-account"></i>
              <div data-i18n="Layouts">Accounts</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Financial Years</div>
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
                  <div data-i18n="Without menu">Predefine Account</div>
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
            </ul>
          </li>

          <li className={`menu-item ${customerOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={hangleToggleCustomer} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-group"></i>
              <div data-i18n="Layouts">Customer</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Add Customer</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Customer List</div>
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
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Opening Stock</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Stock Adjustment</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Wastage</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${userOpen ? "open" : ""}`}>
            <NavLink to='#' onClick={handleToggleUser} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-user-circle"></i>
              <div data-i18n="Layouts">User Management</div>
            </NavLink>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Add New User</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/room-category' className={({ isActive }) => {
                  return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
                }}>
                  <div data-i18n="Without menu">Set/Edit Users Role</div>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="menu-item">
            <NavLink to='/account-settings' className={({ isActive }) => {
              return isActive ? "menu-link active-link text-primary bg-body " : "menu-link";
            }}>
              <i className="menu-icon tf-icons bx bx-sort-up"></i>
              <div data-i18n="Analytics">Subcriptions</div>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to='/support'

              className={({ isActive }) => {
                return isActive ? "menu-link bg-body active-link text-primary " : "menu-link";
              }}
            >
              <i className="menu-icon tf-icons bx bx-support"></i>
              <div data-i18n="Support">Support</div>
            </NavLink>
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