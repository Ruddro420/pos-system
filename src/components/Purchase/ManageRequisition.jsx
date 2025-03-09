import '../purchesCSS/ManageRequisition.css'

const ManageRequisition = () => {
    return (
        <>
          {/*  <!-- === PARENT SECTION === --> */}
    <div className="sh-manage-requisition-parent-section">
            <div className="sh-manage-requisition-top-menu-items">
                <ul>
                    <li className="sh-manage-requisition-active-item"><a href="manageRequisition-page">Manage Requisition</a></li>
                    <li className="sh-manage-requisition-menu-items"><a href="/addRequisition-page">Add Requisition</a></li>
                    <li className="sh-manage-requisition-menu-items"><a href="/managePurchase-page">Manage Purchase</a></li>
                    <li className="sh-manage-requisition-menu-items"><a href="/addPurchase-page">Add Purchase</a></li>
                    <li className="sh-manage-requisition-menu-items"><a href="/manageReceived-page">Manage Received</a></li>
                    <li className="sh-manage-requisition-menu-items"><a href="/managePayment-page">Manage Payment</a></li>
                </ul>
            </div>
       {/*  <!-- === CHILD SECTION === --> */}
       
        <div className="sh-manage-requisition-child-section">
          {/*   <!-- === TOP MENU ITEMS === --> */}
            
          {/*   <!-- === REQUISIION LIST SECTION === --> */}
            <div className="sh-manage-requisition-draft-sale-section">
                <div className="sh-manage-requisition-draft-sale-container">
                 {/*    <!-- === DRAFT SALE TOP ITEMV === --> */}
                    <div className="sh-manage-requisition-requisition-top-item">
                        <p>Requisition List</p>
                       {/*  <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                        <div className="sh-manage-requisition-draft-sale-top-right-items">
                            <div className="sh-manage-requisition-filter">
                                <i className="fa-solid fa-filter"></i>
                                <a href="#">Filter</a>
                            </div>
                            <div className="sh-manage-requisition-filter">
                                <i className="fa-solid fa-circle-plus"></i>
                                <a href="add-requisition.html">Add Requisition</a>
                            </div>
                        </div>
                    </div>
                </div>
              
                {/* <!-- === FILTER DROPDOWN SECTION === --> */}
                <div className="sh-manage-requisition-filter-drop-down-section">
                    <div className="sh-manage-requisition-draft-container">
                        <input type="text" placeholder="Select Requisition No." value="" name="" id=""
                            autoComplete="off"/>
                    </div>
                    <div className="sh-manage-requisition-draft-container">
                        <input type="text" placeholder="All Supplier" value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="sh-manage-requisition-draft-container">
                        <input type="text" placeholder="02/16/2025-02/16/2025" value="" name="" id=""
                            autoComplete="off"/>
                    </div>
                 {/*    <!-- === FILTER SEARCH === --> */}
                    <div className="sh-manage-requisition-filter-search-box">
                        <i className="fa-solid fa-search"></i>Find
                    </div>
                    {/* <!-- === FILTER RESET === --> */}
                    <div className="sh-manage-requisition-filter-reset-box">
                        <i className="fa-solid fa-arrows-rotate"></i>Reset
                    </div>
                </div>
               {/*  <!-- === LINE === --> */}
                <div className="sh-manage-requisition-line">
                 
                </div>
               {/*  <!-- === SHOW AND SEARCH CONTAINER === --> */}
                <div className="sh-manage-requisition-show-and-search-container">
                    <div className="sh-manage-requisition-show-container">
                        <p>Show</p>
                        <select name="" id="">
                            <option value="number" name="show">10</option>
                            <option value="number" name="show">20</option>
                            <option value="number" name="show">30</option>
                            <option value="number" name="show">40</option>
                            <option value="number" name="show">50</option>
                            <option value="number" name="show">100</option>
                        </select>
                        <p>Entries</p>
                    </div>
                   {/*  <!-- === SEARCH === --> */}
                    <div className="sh-manage-requisition-search-container">
                        <p>Search:</p>
                        <input type="search" placeholder="" name="" id=""/>
                    </div>
                </div>
               {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
                <div className="sh--manage-requisition-manage-sale-details-section">
                    <table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Requisition No</th>
                                <th>Sales No.</th>
                                <th>Supplier Name</th>
                                <th>Requisiton Date</th>
                                <th>Total Amount (BDT)</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                    {/* <!-- === EMPTY SECTION === --> */}
                    <div className="sh--manage-requisition-empty-section">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>No data available in table</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <!-- === SLIDE PAGES === --> */}
                <div className="sh-manage-requisition-slider-pages">
                    <p>Showing 0 to 0 of 0 entries</p>
                    <div className="sh-manage-requisition-slide-right-item">
                        <a href="#">Previous</a>
                        <p>1</p>
                        <a href="#">Next</a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </>
    );
};

export default ManageRequisition;