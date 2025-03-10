import { Link } from 'react-router-dom';
import '../purchesCSS/ManagePurchase.css'
const ManagePurchase = () => {
    return (
        <>
        <div className="cba-manage-purchase-section-container">
            {/*  <!-- === TOP MENU ITEMS === --> */}
            <div className="manage-purchase-sh-top-menu-items">
                <ul>
                    <li className="manage-purchase-sh-menu-items"><Link to="/manageRequisition-page">Manage Requisition</Link></li>
                    <li className="manage-purchase-sh-menu-items"><Link to="/addRequisition-page">Add Requisition</Link></li>
                    <li className="manage-purchase-sh-active-item"><Link to="/managePurchase-page">Manage Purchase</Link></li>
                    <li className="manage-purchase-sh-menu-items"><Link to="/addPurchase-page">Add Purchase</Link></li>
                    <li className="manage-purchase-sh-menu-items"><Link to="/manageReceived-page">Manage Received</Link></li>
                    <li className="manage-purchase-sh-menu-items"><Link to="/managePayment-page">Manage Payment</Link></li>
                </ul>
            </div>
            {/*  <!-- === COUNTER SECTION === --> */}
            <div className="manage-purchase-counter-section">
               {/*  <!-- === TOTAL SALE SECTION === --> */}
                <div className="manage-purchase-total-sale-section">
                    {/* <!-- === HOME ICON === --> */}
                    <i className="fa-solid fa-house"></i>
                {/*     <!-- === SALE TEXT === --> */}
                    <div className="manage-purchase-sale-text">
                        <p>TOTAL PRODUCT SALE</p>
                        <h1>0 BDT</h1>
                    </div>
                </div>
                {/* <!-- === TOTAL PAID SECTION === --> */}
                <div className="manage-purchase-total-paid-section">
                   {/*  <!-- === HOME ICON === --> */}
                    <i className="fa-solid fa-check"></i>
                 {/*    <!-- === SALE TEXT === --> */}
                    <div className="manage-purchase-sale-text">
                        <p>TOTAL PAID</p>
                        <h1>0 BDT</h1>
                    </div>
                </div>
              {/*   <!-- === TOTAL DUE SECTION === --> */}
                <div className="manage-purchase-total-due-section">
                   {/*  <!-- === HOME ICON === --> */}
                    <i className="fa-solid fa-triangle-exclamation"></i>
                   {/*  <!-- === SALE TEXT === --> */}
                    <div className="manage-purchase-sale-text">
                        <p>TOTAL DUE</p>
                        <h1>0 BDT</h1>
                    </div>
                </div>
            </div>
            {/* <!-- === COUNTER SECTION END === --> */}

            {/*  <!-- === COUNTER SECTION === --> */}
            <div className="manage-purchase-counter-section">
               {/*  <!-- === TOTAL SALE SECTION === --> */}
                <div className="manage-purchase-total-sale-section">
                    {/* <!-- === HOME ICON === --> */}
                    <i className="fa-solid fa-house"></i>
                {/*     <!-- === SALE TEXT === --> */}
                    <div className="manage-purchase-sale-text">
                        <p>TOTAL PRODUCT SALE</p>
                        <h1>0 BDT</h1>
                    </div>
                </div>
                {/* <!-- === TOTAL PAID SECTION === --> */}
                <div className="manage-purchase-total-paid-section">
                   {/*  <!-- === HOME ICON === --> */}
                    <i className="fa-solid fa-check"></i>
                 {/*    <!-- === SALE TEXT === --> */}
                    <div className="manage-purchase-sale-text">
                        <p>TOTAL PAID</p>
                        <h1>0 BDT</h1>
                    </div>
                </div>
              {/*   <!-- === TOTAL DUE SECTION === --> */}
                <div className="manage-purchase-total-due-section">
                   {/*  <!-- === HOME ICON === --> */}
                    <i className="fa-solid fa-triangle-exclamation"></i>
                   {/*  <!-- === SALE TEXT === --> */}
                    <div className="manage-purchase-sale-text">
                        <p>TOTAL DUE</p>
                        <h1>0 BDT</h1>
                    </div>
                </div>
            </div>
            {/* <!-- === COUNTER SECTION END === --> */}
        </div>
   
   

      
        </>
    );
};

export default ManagePurchase;