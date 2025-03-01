import '.././css/StockManagementCSS/Wastage.css'
const Wastage = () => {
    return (
        <>
           <div className="sh-parent">
        {/* <!-- === TOP MENU ITEMS === --> */}
        <div className="sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><a href="new-wastage.html">New Wastage</a></li>
                <li className="sh-active-item"><a href="wastage-list.html">Wastage List</a></li>
            </ul>
        </div>
        <div className="sh-child-container">
            <div className="sh-draft-sale-section">
               {/*  <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="sh-draft-sale-top-item">
                    <p>Manage Wastage</p>
                    {/* <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                    <div className="sh-draft-sale-top-right-items">
                        <div className="sh-filter">
                            <i className="fa-solid fa-filter"></i>
                            <a href="#">Filter</a>
                        </div>
                        <div className="sh-filter">
                            <i className="fa-solid fa-circle-plus"></i>
                            <a href="new-wastage.html">New Wastage</a>
                        </div>
                    </div>
                </div>
            </div>
           
          {/*   <!-- === FILTER DROPDOWN SECTION === --> */}
            <div className="sh-filter-drop-down-section">
                <div className="sh-draft-container">
                    <p>Wastage No</p>
                    <input type="number" placeholder="Wastage No." value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <p>Outlet No</p>
                    <input type="text" placeholder="All Outlet" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <p>Added By</p>
                    <input type="text" placeholder="All" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <p>Date</p>
                    <input type="text" placeholder="Date" value="" name="" id="" autoComplete="off"/>
                </div>
                {/* <!-- === FILTER SEARCH === --> */}
                <div className="sh-filter-search-box">
                    <i className="fa-solid fa-search"></i>Search
                </div>
                {/* <!-- === FILTER RESET === --> */}
                <div className="sh-filter-reset-box">
                    <i className="fa-solid fa-arrows-rotate"></i>Reset
                </div>
            </div>
            {/* <!-- === LINE === --> */}
            <div className="sh-line">
              
            </div>

            {/* <!-- === SHOW AND SEARCH CONTAINER === --> */}
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
               {/*  <!-- === SEARCH === --> */}
                <div className="sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
        {/*     <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Wastage No</th>
                            <th>Date</th>
                            <th>Outlet Name</th>
                            <th>Added By</th>
                            <th>Total Ammount (BDT)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
                {/* <!-- === EMPTY SECTION === --> */}
                <div className="empty-section">
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
        </>
    );
};

export default Wastage;