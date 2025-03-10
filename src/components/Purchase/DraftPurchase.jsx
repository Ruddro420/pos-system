import '../purchesCSS/DraftPurchase.css'
const DraftPurchase = () => {
    return (
        <>
            {/* <!-- === PARENT SECTION === --> */}
            <div className='PurDraftPurchase-sh-parent-section'>
                {/*  <!-- === TOP MENU ITEMS === --> */}
                <div className="PurDraftPurchase-sh-top-menu-items">
                    <ul>
                        <li className="PurDraftPurchase-sh-menu-items"><a href="/manageRequisition-page">Manage Requisition</a></li>
                        <li className="PurDraftPurchase-sh-menu-items"><a href="/addRequisition-page">Add Requisition</a></li>
                        <li className="PurDraftPurchase-sh-menu-items"><a href="/managePurchase-page">Manage Purchase</a></li>
                        <li className="PurDraftPurchase-sh-menu-items"><a href="/addPurchase-page">Add Purchase</a></li>
                        <li className="PurDraftPurchase-sh-menu-items"><a href="/manageReceived-page">Manage Received</a></li>
                        <li className="PurDraftPurchase-sh-menu-items"><a href="/PurManagePayment-page">Manage Payment</a></li>
                    </ul>
                </div>
                {/*  <!-- === COUNTER SECTION === --> */}
                <div className="PurDraftPurchase-counter-section">
                   {/*  <!-- === TOTAL SALE SECTION === --> */}
                    <div className="PurDraftPurchase-total-sale-section">
                        {/* <!-- === HOME ICON === --> */}
                        <i className="fa-solid fa-house"></i>
                    {/*     <!-- === SALE TEXT === --> */}
                        <div className="PurDraftPurchase-sale-text">
                            <p>TOTAL PRODUCT SALE</p>
                            <h1>0 BDT</h1>
                        </div>
                    </div>
                    {/* <!-- === TOTAL PAID SECTION === --> */}
                    <div className="PurDraftPurchase-total-paid-section">
                       {/*  <!-- === HOME ICON === --> */}
                        <i className="fa-solid fa-check"></i>
                     {/*    <!-- === SALE TEXT === --> */}
                        <div className="PurDraftPurchase-sale-text">
                            <p>TOTAL PAID</p>
                            <h1>0 BDT</h1>
                        </div>
                    </div>
                  {/*   <!-- === TOTAL DUE SECTION === --> */}
                    <div className="PurDraftPurchase-total-due-section">
                       {/*  <!-- === HOME ICON === --> */}
                        <i className="fa-solid fa-triangle-exclamation"></i>
                       {/*  <!-- === SALE TEXT === --> */}
                        <div className="PurDraftPurchase-sale-text">
                            <p>TOTAL DUE</p>
                            <h1>0 BDT</h1>
                        </div>
                    </div>
                </div>
                {/* <!-- === COUNTER SECTION END === --> */}
                {/* <!-- === MANAGE SECTION === --> */}
                <div className="PurDraftPurchase-manage-section">
                  {/*   <!-- === MANAGE CONTAINER === --> */}
                    <div className="PurDraftPurchase-manage-container">
                        <p>Manage Purchase</p>
                      {/*   <!-- === FILTER AND ADD SECTION === --> */}
                        <div className="PurDraftPurchase-filter-add-new">
                            <div className="PurDraftPurchase-filter-container">
                                <i className="fa-solid fa-filter"></i>
                                <a href="#">Filter</a>
                            </div>
                            <div className="PurDraftPurchase-add-new-sale-container">
                                <i className="fa-solid fa-circle-plus"></i>
                                <a href="pos-sale.html">New Sale</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- === LINE === --> */}
                    {/*  <!-- === FILTER CONTAINER ITEMS === --> */}
                    <div className="PurDraftPurchase-filter-container-items">
                      {/*   <!-- === SALE DATE INPUT BOX === --> */}
                        <div className="PurDraftPurchase-sale-date-input-box">
                            <input type="text" placeholder="Search Purchase No" name="" id=""/>
                        </div>
                       {/*  <!-- === SALE DATE INPUT BOX === --> */}
                        <div className="PurDraftPurchase-sale-date-input-box">
                            <input type="text" placeholder="Search Supplier" name="" id=""/>
                        </div>
                        {/* <!-- === SALE DATE INPUT BOX === --> */}
                        <div className="PurDraftPurchase-sale-date-input-box">
                            <input type="text" placeholder="2/16/2025-02/16/2025" name="" id=""/>
                        </div>
                       {/*  <!-- === FIND BUTTON === --> */}
                        <div className="PurDraftPurchase-sh-button-container">
                            <div className="PurDraftPurchase-sh-find-button">
                                <a href="#">Find</a>
                            </div>
                            <div className="PurDraftPurchase-sh-reset-button">
                                <a href="#">Reset</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- === SHOW AND SEARCH SECTION === --> */}
                    <div className="PurDraftPurchase-show-and-search-section">
                    {/*    <!-- === SHOW CONTAINER === --> */}
                        <div className="PurDraftPurchase-show-container">
                            <p>Show</p>
                            <select name="" id="">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">30</option>
                            </select>
                            <p>Entries</p>
                        </div>
                       {/*  <!-- === SEARCH CONTAINER === --> */}
                        <div className="PurDraftPurchase-search-container">
                            <label htmlFor="text">Search:</label>
                            <input type="search"/>
                        </div>
                    </div>
                    {/*   <!-- === MANAGE SALE DETAILS SECTION === --> */}
                    <div className="PurDraftPurchase-manage-sale-details-section">
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
                                    <td colSpan={12}>
                                        <p>No data available in table</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*  <!-- === SLIDE PAGES === --> */}
                    <div className="PurDraftPurchase-sh-slider-pages">
                        <p>Showing 0 to 0 of 0 entries</p>
                        <div className="PurDraftPurchase-sh-slide-right-item">
                            <a href="#">Previous</a>
                            <p>0</p>
                            <a href="#">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DraftPurchase;