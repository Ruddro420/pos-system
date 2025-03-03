
import './css/FinancialYear.css'
const FinancialYear = () => {
    return (
        <>
            <div className="sh-parent">
       {/*  <!-- === TOP MENU ITEMS === --> */}
        <div className="sh-top-menu-items">
            <ul>
                <li className="sh-active-item"><a href="wastage-list.html">Financial Year</a></li>
            </ul>
        </div>
        <div className="sh-child-container">
            <div className="sh-draft-sale-section">
                {/* <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="sh-draft-sale-top-item">
                    <p>Financial Year List</p>
                </div>
            </div>
            <hr/>
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
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="manage-sale-details-section">
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
                            <td className="text-center">#1</td>
                            <td className="text-center">2025</td>
                            <td className="text-center">01-01-2025</td>
                            <td className="text-center">31-12-2025</td>
                            <td className="text-center">Active</td>
                            <td className="text-center"><div className="sh-edit-icon">
                                <p><i className="fa-solid fa-edit"></i></p>
                            </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="sh-slider-pages">
                <p>Showing 1 to 1 of 1 entries</p>
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

export default FinancialYear;