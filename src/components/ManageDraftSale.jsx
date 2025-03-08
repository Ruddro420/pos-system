import '../components/css/ManageDraftSale.css'
const ManageDraftSale = () => {
    return (
        <>
          <div className="mdsl-sh-parent">
        <div className="mdsl-sh-child-container">
            <div className="mdsl-sh-draft-sale-section">
               {/*  <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="mdsl-sh-draft-sale-top-item">
                    <p>Draft Sale List</p>
                   {/*  <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                    <div className="mdsl-sh-draft-sale-top-right-items">
                        <div className="mdsl-sh-filter">
                            <i className="fa-solid fa-filter"></i>
                            <a href="#">Filter</a>
                        </div>
                        <div className="mdsl-sh-filter">
                            <i className="fa-solid fa-circle-plus"></i>
                            <a href="/possale-page">New Sale</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
          {/*   <!-- === FILTER DROPDOWN SECTION === --> */}
            <div className="mdsl-sh-filter-drop-down-section">
                <div className="mdsl-sh-draft-container" style={{marginBottom:"10px"}}>
                    <p>Draft No</p>
                    <input type="number" placeholder="Sale No." value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="mdsl-sh-draft-container">
                    <p>Sale By</p>
                    <input type="text" placeholder="Sale By" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="mdsl-sh-draft-container">
                    <p>Customer Name</p>
                    <input type="text" placeholder="Customer Name" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="mdsl-sh-draft-container">
                    <p>Sale Date</p>
                    <input type="text" placeholder="Date" value="" name="" id="" autoComplete="off"/>
                </div>
             {/*    <!-- === FILTER SEARCH === --> */}
                <div className="mdsl-sh-filter-search-box">
                    <i className="fa-solid fa-search"></i>Search
                </div>
               {/*  <!-- === FILTER RESET === --> */}
                <div className="mdsl-sh-filter-reset-box">
                    <i className="fa-solid fa-arrows-rotate"></i>Reset
                </div>
            </div>
            {/* <!-- === LINE === --> */}
            <div className="mdsl-sh-line">
               
            </div>

            {/* <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="mdsl-sh-show-and-search-container">
                <div className="mdsl-sh-show-container">
                    <p>Show</p>
                    <select name="" id="">
                        <option value="number" name="show">10</option>
                        <option value="number" name="show">20</option>
                        <option value="number" name="show">30</option>
                        <option value="number" name="show">All</option>
                    </select>
                    <p>Entries</p>
                </div>
               {/*  <!-- === SEARCH === --> */}
                <div className="mdsl-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
            {/* <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="mdsl-manage-sale-details-section">
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
                    <tbody>
                        <tr>
                            <td colSpan={7}>
                                <p>No data available in table</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <!-- === SLIDE PAGES === --> */}
            <div className="mdsl-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="mdsl-sh-slide-right-item">
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