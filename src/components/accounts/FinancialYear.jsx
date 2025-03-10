
import './css/FinancialYear.css'
const FinancialYear = () => {
    return (
        <>
            <div className="afy-sh-parent">
       {/*  <!-- === TOP MENU ITEMS === --> */}
        <div className="afy-sh-top-menu-items">
            <ul>
                <li className="afy-sh-active-item"><a href="wastage-list.html">Financial Year</a></li>
            </ul>
        </div>
        <div className="afy-sh-child-container">
            <div className="afy-sh-draft-sale-section">
                {/* <!-- === DRAFT SALE TOP ITEM === --> */}
                <div className="afy-sh-draft-sale-top-item">
                    <p>Financial Year List</p>
                </div>
            </div>
            <hr/>
           {/*  <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="afy-sh-show-and-search-container">
                <div className="afy-sh-show-container">
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
                <div className="afy-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="afy-manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Financial Year</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>2025</td>
                            <td>01-01-2025</td>
                            <td>31-12-2025</td>
                            <td>Active</td>
                            <td>
                                <div className="sh-edit-icon">
                                    <p><i className="fa-solid fa-edit"></i></p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="afy-sh-slider-pages">
                <p>Showing 1 to 1 of 1 entries</p>
                <div className="afy-sh-slide-right-item">
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

export default FinancialYear;