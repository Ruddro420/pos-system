
import './css/ManageSale.css'
const ManageSale = () => {
    return (
        <>
         {/* <!-- === COUNTER SECTION === --> */}
         <div className="managesale-counter-section">

{/* <!-- === TOTAL SALE SECTION === --> */}
<div className="managesale-total-sale-section">
    {/* <!-- === HOME ICON === --> */}
    <i className="fa-solid fa-house"></i>
    {/* <!-- === SALE TEXT === --> */}
    <div className="managesale-sale-text">
        <p>TOTAL PRODUCT SALE</p>
        <h1>0 BDT</h1>
    </div>
</div>
{/* <!-- === TOTAL PAID SECTION === --> */}
<div className="managesale-total-paid-section">
    {/* <!-- === HOME ICON === --> */}
    <i className="fa-solid fa-check"></i>
    {/* <!-- === SALE TEXT === --> */}
    <div className="managesale-sale-text">
        <p>TOTAL PAID</p>
      
        <h1>0 BDT</h1>
    </div>
</div>
{/* <!-- === TOTAL DUE SECTION === --> */}
<div className="managesale-total-due-section">
   {/*  <!-- === HOME ICON === -->{/*  */}
     <i className="fa-solid fa-triangle-exclamation"></i>
   {/*  <!-- === SALE TEXT === --> */}
    <div className="managesale-sale-text">
        <p>TOTAL DUE</p>
        <h1>0 BDT</h1>
    </div>
</div>
</div>
   {/*  <!-- === COUNTER SECTION END === --> */}

    {/* <!-- === MANAGE SECTION === --> */}
    <div className="managesale-manage-section">
        {/* <!-- === MANAGE CONTAINER === --> */}
        <div className="managesale-manage-container">
            <p>Manage Sale</p>
           {/*  <!-- === FILTER AND ADD SECTION === --> */}
            <div className="managesale-filter-add-new">
                <div className="managesale-filter-container">
                    <i className="fa-solid fa-filter"></i>
                    <a href="#">Filter</a>
                </div>
                <div className="managesale-add-new-sale-container">
                    <i className="fa-solid fa-circle-plus"></i>
                    <a href="/possale-page">New Sale</a>
                </div>
            </div>
        </div>
       {/*  <!-- === LINE === --> */}
   
       {/*  <!-- === FILTER CONTAINER ITEMS === --> */}
        <div className="managesale-filter-container-items">
            <div className="managesale-invoice-box">
                <input type="number" placeholder="Invoice"/>
            </div>
            <div className="managesale-select-input-container">
                <select name="" id="">
                    <option value="Outlet">Outlet</option>
                    <option value="Outlet"></option>
                    <option value="Outlet"></option>
                </select>
            </div>
            <div className="managesale-select-input-container">
                <select name="" id="">
                    <option value="Outlet">Sale By</option>
                    <option value="Outlet">All</option>
                    <option value="Outlet"></option>
                </select>
            </div>
            <div className="managesale-select-input-container">
                <select name="" id="">
                    <option value="Outlet">Customer Name</option>
                    <option value="Outlet">All</option>
                    <option value="Outlet">Walk-In-Customer</option>
                </select>
            </div>
           {/*  <!-- === SALE DATE INPUT BOX === --> */}
            <div className="managesale-sale-date-input-box">
                <input type="text" placeholder="Sale Date" name="" id=""/>
            </div>
            {/* <!-- === SALE TYPE SELECT BOX === --> */}
            <div className="managesale-sale-type-select-box">
                <select name="" id="">
                    <option value="Sale Type">Sale Type</option>
                </select>
            </div>
           {/*  <!-- === FIND BUTTON === --> */}
            <div className="managesale-sh-button-container">
                <div className="managesale-sh-find-button">
                    <a href="#">Find</a>
                </div>
                <div className="managesale-sh-reset-button">
                    <a href="#">Reset</a>
                </div>
            </div>
        </div>
       
       {/*  <!-- === SHOW AND SEARCH SECTION === --> */}
        <div className="managesale-show-and-search-section">
         {/*    <!-- === SHOW CONTAINER === --> */}
            <div className="managesale-show-container">
                <p>Show</p>
                <select name="" id="">
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">30</option>
                </select>
                <p>Entries</p>
            </div>
            {/* <!-- === SEARCH CONTAINER === --> */}
            <div className="managesale-search-container">
                <label htmlFor="text">Search: </label>
                <input type="managesale-search"/>
            </div>
        </div>
       {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
        <div className="managesale-manage-sale-details-section">
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Invoice No</th>
                        <th>Input Invoice No</th>
                        <th>Outlet</th>
                        <th>Sales By</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Total Amount (BDT)</th>
                        <th>Paid Amount (BDT)</th>
                        <th>Due Amount (BDT)</th>
                        <th>Payment Status</th>
                        <th>Sale Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={14}>
                            <p>No data available in table</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
       {/*  <!-- === SLIDE PAGES === --> */}
        <div className="managesale-sh-slider-pages">
            <p>Showing 4 to 4 of 4 entries</p>
            <div className="managesale-sh-slide-right-item">
                <a href="#">Previous</a>
                <p>1</p>
                <a href="#">Next</a>
            </div>
        </div>
    </div>
   
        </>
    );
};

export default ManageSale; 