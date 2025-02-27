
const ManageDraftSale = () => {
    return (
        <>
          <div className="sh-parent">
        <div className="sh-child-container">
            <div className="sh-draft-sale-section">
               {/*  <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="sh-draft-sale-top-item">
                    <p>Draft Sale List</p>
                   {/*  <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                    <div className="sh-draft-sale-top-right-items">
                        <div className="sh-filter">
                            <i className="fa-solid fa-filter"></i>
                            <a href="#">Filter</a>
                        </div>
                        <div className="sh-filter">
                            <i className="fa-solid fa-circle-plus"></i>
                            <a href="pos-sale.html">New Sale</a>
                        </div>
                    </div>
                </div>
            </div>
          
          {/*   <!-- === FILTER DROPDOWN SECTION === --> */}
            <div className="sh-filter-drop-down-section">
                <div className="sh-draft-container">
                    <p>Draft No</p>
                    <input type="number" placeholder="Sale No." value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <p>Sale By</p>
                    <input type="text" placeholder="Sale By" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <p>Customer Name</p>
                    <input type="text" placeholder="Customer Name" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <p>Sale Date</p>
                    <input type="text" placeholder="Date" value="" name="" id="" autoComplete="off"/>
                </div>
             {/*    <!-- === FILTER SEARCH === --> */}
                <div className="sh-filter-search-box">
                    <i className="fa-solid fa-search"></i>Search
                </div>
               {/*  <!-- === FILTER RESET === --> */}
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
            {/* <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Draft No</th>
                            <th>Sales By</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Total Ammount (BDT)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
               {/*  <!-- === EMPTY SECTION === --> */}
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

export default ManageDraftSale;