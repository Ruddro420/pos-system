import { Link } from 'react-router-dom';
import '.././css/StockManagementCSS/Wastage.css'
const Wastage = () => {
    return (
        <>
           <div className="w-sh-parent">
        {/* <!-- === TOP MENU ITEMS === --> */}
        <div className="w-sh-top-menu-items">
            <ul>
                <li className="w-sh-active-item"><Link to="/wastage-page">Wastage List</Link></li>
                <li className="w-sh-menu-items"><Link to="/newWastage-page">New Wastage</Link></li>
            </ul>
        </div>
        <div className="w-sh-child-container">
            <div className="w-sh-draft-sale-section">
               {/*  <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="w-sh-draft-sale-top-item">
                    <p>Manage Wastage</p>
                    {/* <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                    <div className="w-sh-draft-sale-top-right-items">
                        <div className="w-sh-filter">
                            <i className="fa-solid fa-filter"></i>
                            <a href="#">Filter</a>
                        </div>
                        <div className="w-sh-filter">
                            <i className="fa-solid fa-circle-plus"></i>
                            <a href="new-wastage.html">New Wastage</a>
                        </div>
                    </div>
                </div>
            </div>
           <hr />
          {/*   <!-- === FILTER DROPDOWN SECTION === --> */}
            <div className="w-sh-filter-drop-down-section">
                <div className="w-sh-draft-container-wn">
                    <p>Wastage No</p>
                    <input type="number" placeholder="Wastage No." value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="w-sh-draft-container">
                    <p>Outlet No</p>
                    <input type="text" placeholder="All Outlet" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="w-sh-draft-container">
                    <p>Added By</p>
                    <input type="text" placeholder="All" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="w-sh-draft-container">
                    <p>Date</p>
                    <input type="text" placeholder="Date" value="" name="" id="" autoComplete="off"/>
                </div>
                {/* <!-- === FILTER SEARCH === --> */}
              <div className='w-sh-filter-search-box-container'>
                 <div className="w-sh-filter-search-box">
                    <i className="fa-solid fa-search"></i>Search
                </div>
                {/* <!-- === FILTER RESET === --> */}
                <div className="w-sh-filter-reset-box">
                    <i className="fa-solid fa-arrows-rotate"></i>Reset
                </div>
              </div>
            </div>
            {/* <!-- === LINE === --> */}
            <div className="w-sh-line">
              
            </div>

            {/* <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="w-sh-show-and-search-container">
                <div className="w-sh-show-container">
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
                <div className="w-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
        {/*     <!-- === MANAGE SALE DETAILS SECTION === --> */}
        <div className="w-manage-sale-details-section">
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
                <div className="w-empty-section">
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
            <div className="w-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="w-sh-slide-right-item">
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