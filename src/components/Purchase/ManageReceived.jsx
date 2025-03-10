
import { Link } from 'react-router-dom';
import '../purchesCSS/ManageReceived.css'
const ManageReceived = () => {
    return (
        <>
            <div className="manage-received-sh-parent-section">
                {/*  <!-- === TOP MENU ITEMS === --> */}
                <div className="manage-received-sh-top-menu-items">
                    <ul>
                        <li className="manage-received-sh-menu-items"><Link to="/manageRequisition-page">Manage Requisition</Link></li>
                        <li className="manage-received-sh-menu-items"><Link to="/addRequisition-page">Add Requisition</Link></li>
                        <li className="manage-received-sh-menu-items"><Link to="/managePurchase-page">Manage Purchase</Link></li>
                        <li className="manage-received-sh-menu-items"><Link to="/addPurchase-page">Add Purchase</Link></li>
                        <li className="manage-received-sh-active-item"><Link to="/manageReceived-page">Manage Received</Link></li>
                        <li className="manage-received-sh-menu-items"><Link to="/PurManagePayment-page">Manage Payment</Link></li>
                    </ul>
                </div>
       {/*  <!-- === CHILD SECTION === --> */}
        <div className="manage-received-sh-child-section">
         {/*    <!-- === REQUISIION LIST SECTION === --> */}
            <div className="manage-received-sh-draft-sale-section">
                <div className="manage-received-sh-draft-sale-container">
                    <div className="manage-received-sh-requisition-top-item">
                        <p>Recieve List</p>
                       {/*  <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                        <div className="manage-received-sh-draft-sale-top-right-items">
                            <div className="manage-received-sh-filter">
                                <i className="fa-solid fa-filter"></i>
                                <a href="#">Filter</a>
                            </div>
                        </div>
                    </div>
                </div>
              
              {/*   <!-- === FILTER DROPDOWN SECTION === --> */}
                <div className="manage-received-sh-filter-drop-down-section">
                    <div className="manage-received-sh-draft-container">
                        <input type="text" placeholder="Receive No" value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="manage-received-sh-draft-container">
                        <input type="text" placeholder="Purchase No." value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="manage-received-sh-draft-container">
                        <input type="text" placeholder="All Supplier" value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="manage-received-sh-draft-container">
                        <input type="text" placeholder="Receive Date" value="" name="" id="" autoComplete="off"/>
                    </div>
                    <div className="manage-received-sh-draft-container">
                        <input type="text" placeholder="Purchase Date" value="" name="" id="" autoComplete="off"/>
                    </div>
                   {/*  <!-- === FILTER SEARCH === --> */}
                    <div className="manage-received-sh-filter-search-box">
                        <i className="fa-solid fa-search"></i>Find
                    </div>
                   {/*  <!-- === FILTER RESET === --> */}
                    <div className="manage-received-sh-filter-reset-box">
                        <i className="fa-solid fa-arrows-rotate"></i>Reset
                    </div>
                </div>
               {/*  <!-- === LINE === --> */}
                <div className="manage-received-sh-line">
                 
                </div>
                {/* <!-- === SHOW AND SEARCH CONTAINER === --> */}
                <div className="manage-received-sh-show-and-search-container">
                    <div className="manage-received-sh-show-container">
                        <p>Show</p>
                        <select name="" id="">
                            <option value="number" name="show">10</option>
                            <option value="number" name="show">20</option>
                            <option value="number" name="show">30</option>
                            <option value="number" name="show">All</option>
                        </select>
                        <p>Entries</p>
                    </div>
                  {/*   <!-- === SEARCH === --> */}
                    <div className="manage-received-sh-search-container">
                        <p>Search:</p>
                        <input type="search" placeholder="" name="" id=""/>
                    </div>
                </div>
                {/* <!-- === MANAGE SALE DETAILS SECTION === --> */}
                <div className="manage-received-manage-sale-details-section">
                    <table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Chanal No</th>
                                <th>Receive NO</th>
                                <th>Purchase No.</th>
                                <th>Supplier No</th>
                                <th>Purchase Date</th>
                                <th>Receive Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={8}>
                                    <p>No data available in table</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*<!-- === SLIDE PAGES === --> */}
                <div className="manage-received-sh-slider-pages">
                    <p>Showing 0 to 0 of 0 entries</p>
                    <div className="manage-received-sh-slide-right-item">
                        <a href="#">Previous</a>
                        <p>0</p>
                        <a href="#">Next</a>
                    </div>
                </div>
            </div>
        </div>
    </div>   
        </>
    );
};

export default ManageReceived;