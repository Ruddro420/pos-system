import { Link } from "react-router-dom";

import './css/SubAccounts.css'
const SubAccounts = () => {
    return (
        <>
            <div className="sa-sh-parent">
        {/* <!-- === TOP MENU ITEMS === --> */}
        <div className="sa-sh-top-menu-items">
            <ul>
                <li className="sa-sh-active-item"><Link href="/SubAccounts-page">Sub Account</Link></li>
                <li className="sa-sh-menu-items"><Link to="/SubType-page">Subtype</Link></li>
            </ul>
        </div>
        <div className="sa-sh-child-container">
            <div className="sa-sh-draft-sale-section">
              {/*   <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="sa-sh-draft-sale-top-item">
                    <p>Sub Account List</p>
                    <div className="sa-sh-sub-account">
                        <i className="fa-solid fa-circle-plus"></i> Add Sub Account
                    </div>
                </div>
            </div>
            <hr/>
            {/* <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="sa-sh-show-and-search-container">
                <div className="sa-sh-show-container">
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
                <div className="sa-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="sa-manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Sub Account Name</th>
                            <th>Sub Type Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="sa-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="sa-sh-slide-right-item">
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

export default SubAccounts;