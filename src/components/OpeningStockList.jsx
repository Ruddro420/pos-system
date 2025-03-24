import '../components/css/OpeningStockList.css'

const OpeningStockList = () => {
    return (
        <>
    <div className="sh-parent-section">
       {/*  <!-- === CHILD SECTION === --> */}
        <div className="sh-child-section">
            {/* <!-- === TOP MENU ITEMS === --> */}
            <div className="sh-top-menu-items">
                <ul>
                    <li className="sh-active-item"><a href="opening-stock.html">Opening Stock List</a></li>
                    <li className="sh-menu-items"><a href="add-opening-stock.html">Add Opening Stock</a></li>
                    <li className="sh-menu-items"><a href="stock-opening.html">Opening Stock CSV</a></li>
                </ul>
            </div>
           {/*  <!-- === REQUISIION LIST SECTION === --> */}
            <div className="sh-draft-sale-section">
                <div className="sh-draft-sale-container">
                    {/* <!-- === DRAFT SALE TOP ITEMV === --> */}
                    <div className="sh-requisition-top-item">
                        <p>Manage Opening Stock</p>
                        {/* <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                        <div className="sh-draft-sale-top-right-items">
                            <div className="sh-filter">
                                <i className="fa-solid fa-filter"></i>
                                <p>Filter</p>
                            </div>
                            <div className="sh-filter">
                                <i className="fa-solid fa-circle-plus"></i>
                                <a href="add-opening-stock.html">Add Opening Stock</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
              {/*   <!-- === FILTER DROPDOWN SECTION === --> */}
                <div className="sh-filter-drop-down-section">
                    <div className="sh-draft-container">
                        <input type="text" placeholder="All Outlet" value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="sh-draft-container">
                        <input type="text" placeholder="All Added By" value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="sh-draft-container">
                        <input type="text" placeholder="Date" value="" name="" id="" autoComplete="off"/>
                    </div>
                   {/*  <!-- === FILTER SEARCH === --> */}
                    <div className="sh-filter-search-box">
                        <i className="fa-solid fa-search"></i>Find
                    </div>
                 {/*    <!-- === FILTER RESET === --> */}
                    <div className="sh-filter-reset-box">
                        <i className="fa-solid fa-arrows-rotate"></i>Reset
                    </div>
                </div>
               {/*  <!-- === LINE === --> */}
                <div className="sh-line">
                    <hr/>
                </div>
               {/*  <!-- === SHOW AND SEARCH CONTAINER === --> */}
                <div className="sh-show-and-search-container">
                    <div className="sh-show-container">
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
                  {/*   <!-- === SEARCH === --> */}
                    <div className="sh-search-container">
                        <p>Search:</p>
                        <input type="search" placeholder="" name="" id=""/>
                    </div>
                </div>
              {/*   <!-- === MANAGE SALE DETAILS SECTION === --> */}
                <div className="manage-sale-details-section">
                    <table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Date</th>
                                <th>Product Name</th>
                                <th>Added By</th>
                                <th>Outlet Name</th>
                                <th>Quantity</th>
                                <th>Total Amount (BDT)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th className="text-center" rowSpan="1" colSpan="1"></th>
                                <th className="text-center" rowSpan="1" colSpan="1"></th>
                                <th className="text-center" rowSpan="1" colSpan="1"></th>
                                <th className="text-center" rowSpan="1" colSpan="1"></th>
                                <th className="text-center" rowSpan="1" colSpan="1"></th>
                                <th className="text-total" rowSpan="1" colSpan="1">
                                    <span>Total</span>
                                </th>
                                <th className="text-center" rowSpan="1" colSpan="1">0.000</th>
                                <th className="column-sl text-start" rowSpan="1" colSpan="1"></th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td colSpan="8">
                                    <div className="empty">No data available in table</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             {/*    <!-- === SLIDE PAGES === --> */}
                <div className="sh-slider-pages">
                    <p>Showing 0 to 0 of 0 entries</p>
                    <div className="sh-slide-right-item">
                        <a href="#">Previous</a>
                        <p>1</p>
                        <a href="#">Next</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

     {/* === FONT AWSOME LINK ===  */} 
        </>
    );
};

export default OpeningStockList;