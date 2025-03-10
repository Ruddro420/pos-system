import { Link } from 'react-router-dom';
import '../purchesCSS/ManagePurchase.css'
const ManagePurchase = () => {
    return (
        <>
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

    {/* <!-- === MANAGE SECTION === --> */}
    <div className="manage-purchase-manage-section">
      {/*   <!-- === MANAGE CONTAINER === --> */}
        <div className="manage-purchase-manage-container">
            <p>Manage Purchase</p>
          {/*   <!-- === FILTER AND ADD SECTION === --> */}
            <div className="manage-purchase-filter-add-new">
                <div className="manage-purchase-filter-container">
                    <i className="fa-solid fa-filter"></i>
                    <a href="#">Filter</a>
                </div>
                <div className="manage-purchase-add-new-sale-container">
                    <i className="fa-solid fa-circle-plus"></i>
                    <a href="pos-sale.html">New Sale</a>
                </div>
            </div>
        </div>
        {/* <!-- === LINE === --> */}
        
       {/*  <!-- === FILTER CONTAINER ITEMS === --> */}
        <div className="manage-purchase-filter-container-items">
          {/*   <!-- === SALE DATE INPUT BOX === --> */}
            <div className="manage-purchase-sale-date-input-box">
                <input type="text" placeholder="Search Purchase No" name="" id=""/>
            </div>
           {/*  <!-- === SALE DATE INPUT BOX === --> */}
            <div className="manage-purchase-sale-date-input-box">
                <input type="text" placeholder="Search Supplier" name="" id=""/>
            </div>
            {/* <!-- === SALE DATE INPUT BOX === --> */}
            <div className="manage-purchase-sale-date-input-box">
                <input type="text" placeholder="2/16/2025-02/16/2025" name="" id=""/>
            </div>
           {/*  <!-- === FIND BUTTON === --> */}
            <div className="manage-purchase-sh-button-container">
                <div className="manage-purchase-sh-find-button">
                    <a href="#">Find</a>
                </div>
                <div className="manage-purchase-sh-reset-button">
                    <a href="#">Reset</a>
                </div>
            </div>
        </div>
      
    {/*     <!-- === SHOW AND SEARCH SECTION === --> */}
        <div className="manage-purchase-show-and-search-section">
         {/*    <!-- === SHOW CONTAINER === --> */}
            <div className="manage-purchase-show-container">
                <p>Show</p>
                <select name="" id="">
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">30</option>
                </select>
                <p>Entries</p>
            </div>
           {/*  <!-- === SEARCH CONTAINER === --> */}
            <div className="manage-purchase-search-container">
                <label htmlFor="text">Search:</label>
                <input type="search"/>
            </div>
        </div>
      {/*   <!-- === MANAGE SALE DETAILS SECTION === --> */}
        <div className="manage-purchase-manage-sale-details-section">
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Chanal No</th>
                        <th>Purchase No</th>
                        <th>Supplier Name</th>
                        <th>Purchase Date</th>
                        <th>Requisition Date</th>
                        <th>Total Amount (BDT)</th>
                        <th>Paid Amount (BDT)</th>
                        <th>Due Amount (BDT)</th>
                        <th>Payment Status</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>No data available in table</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
       {/*  <!-- === SLIDE PAGES === --> */}
        <div className="sh-slider-pages">
            <p>Showing 0 to 0 of 0 entries</p>
            <div className="sh-slide-right-item">
                <a href="#">Previous</a>
                <p>0</p>
                <a href="#">Next</a>
            </div>
        </div>
    </div>  
        </>
    );
};

export default ManagePurchase;