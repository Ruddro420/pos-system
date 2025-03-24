import "../StockManagement/css/StockOpeningStock.css"
const StockOpeningStock = () => {
    return (
        <>
        <div className="sh-sopens-parent-section">
        {/* <!-- === CHILD SECTION === --> */}
        <div className="sh-sopens-child-section">
            {/* <!-- === TOP MENU ITEMS === --> */}
            <div className="sh-sopens-top-menu-items">
                <ul>
                    <li className="sh-sopens-active-item"><a href="/StockOpeningStock-page">Opening Stock List</a></li>
                    <li className="sh-sopens-menu-items"><a href="/addOpeningStock-page">Add Opening Stock</a></li>
                    <li className="sh-sopens-menu-items"><a href="/openingStock-page">Opening Stock CSV</a></li>
                </ul>
            </div>
            {/* <!-- === REQUISIION LIST SECTION === --> */}
            <div className="sh-sopens-draft-sale-section">
                <div className="sh-sopens-draft-sale-container">
                    {/* <!-- === DRAFT SALE TOP ITEMV === --> */}
                    <div className="sh-sopens-requisition-top-item">
                        <p>Manage Opening Stock</p>
                        {/* <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                        <div className="sh-sopens-draft-sale-top-right-items">
                            <div className="sh-sopens-filter">
                                <i className="fa-solid fa-filter"></i>
                                <p>Filter</p>
                            </div>
                            <div className="sh-sopens-filter">
                                <i className="fa-solid fa-circle-plus"></i>
                                <a href="add-opening-stock.html">Add Opening Stock</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                {/* <!-- === FILTER DROPDOWN SECTION === --> */}
                <div className="sh-sopens-filter-drop-down-section">
                    <div className="sh-sopens-draft-container">
                        <input type="text" placeholder="All Outlet" value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="sh-sopens-draft-container">
                        <input type="text" placeholder="All Added By" value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="sh-sopens-draft-container">
                        <input type="text" placeholder="Date" value="" name="" id="" autoComplete="off"/>
                    </div>
                    {/* <!-- === FILTER SEARCH === --> */}
                    <div className="sh-sopens-filter-search-box">
                        <i className="fa-solid fa-search"></i>Find
                    </div>
                    {/* <!-- === FILTER RESET === --> */}
                    <div className="sh-sopens-filter-reset-box">
                        <i className="fa-solid fa-arrows-rotate"></i>Reset
                    </div>
                </div>
                {/* <!-- === LINE === --> */}
                <div className="sh-sopens-line">
                    <hr/>
                </div>
                {/* <!-- === sh-sopensOW AND SEARCH CONTAINER === --> */}
                <div className="sh-sopens-sh-sopensow-and-search-container">
                    <div className="sh-sopens-sh-sopensow-container">
                        <p>sh-sopensow</p>
                        <select name="" id="">
                            <option value="number" name="sh-sopensow">10</option>
                            <option value="number" name="sh-sopensow">20</option>
                            <option value="number" name="sh-sopensow">30</option>
                            <option value="number" name="sh-sopensow">40</option>
                            <option value="number" name="sh-sopensow">50</option>
                            <option value="number" name="sh-sopensow">100</option>
                        </select>
                        <p>Entries</p>
                    </div>
                    {/* <!-- === SEARCH === --> */}
                    <div className="sh-sopens-search-container">
                        <p>Search:</p>
                        <input type="search" placeholder="" name="" id=""/>
                    </div>
                </div>
                {/* <!-- === MANAGE SALE DETAILS SECTION === --> */}
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
                {/* <!-- === SLIDE PAGES === --> */}
                <div className="sh-sopens-slider-pages">
                    <p>sh-sopensowing 0 to 0 of 0 entries</p>
                    <div className="sh-sopens-slide-right-item">
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

export default StockOpeningStock;