import { Link } from 'react-router-dom';
import '../purchesCSS/PurManagePayment.css'

const PurManagePayment = () => {
    return (
        <>
            <div className="mana-pur-payment-sh-parent-section">
                {/*  <!-- === TOP MENU ITEMS === --> */}
                <div className="mana-pur-payment-sh-top-menu-items">
                    <ul>
                        <li className="mana-pur-payment-sh-menu-items"><Link to="/addRequisition-page">Manage Requisition</Link></li>
                        <li className="mana-pur-payment-sh-menu-items"><Link to="/addRequisition-page">Add Requisition</Link></li>
                        <li className="mana-pur-payment-sh-menu-items"><Link to="/managePurchase-page">Manage Purchase</Link></li>
                        <li className="mana-pur-payment-sh-menu-items"><Link to="/addPurchase-page">Add Purchase</Link></li>
                        <li className="mana-pur-payment-sh-menu-items"><Link to="/manageReceived-page">Manage Received</Link></li>
                        <li className="mana-pur-payment-sh-active-item"><Link to="/PurManagePayment-page">Manage Payment</Link></li>
                    </ul>
                </div>
      {/*   <!-- === CHILD SECTION === --> */}
        <div className="mana-pur-payment-sh-child-section">
            
            {/* <!-- === REQUISIION LIST SECTION === --> */}
            <div className="mana-pur-payment-sh-draft-sale-section">
                <div className="mana-pur-payment-sh-draft-sale-container">
                  {/*   <!-- === DRAFT SALE TOP ITEMV === --> */}
                    <div className="mana-pur-payment-sh-requisition-top-item">
                        <p>Manage Payment</p>
                    </div>
                </div>
             
                {/* <!-- === SHOW AND SEARCH CONTAINER === --> */}
                <div className="mana-pur-payment-sh-show-and-search-container">
                    <div className="mana-pur-payment-sh-show-container">
                        <p>Show</p>
                        <select name="" id="">
                            <option value="number" name="show">10</option>
                            <option value="number" name="show">20</option>
                            <option value="number" name="show">30</option>
                            <option value="number" name="show">All</option>
                        </select>
                        <p>Entries</p>
                    </div>
                    {/* <!-- === SEARCH === --> */}
                    <div className="mana-pur-payment-sh-search-container">
                        <p>Search:</p>
                        <input type="search" placeholder="" name="" id=""/>
                    </div>
                </div>
               {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
                <div className="mana-pur-payment-manage-sale-details-section">
                    <table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Purchase No.</th>
                                <th>Date</th>
                                <th>Payment Method</th>
                                <th>Total Amount (BDT)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={6}>
                                    <p>No data available in table</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               {/*  <!-- === SLIDE PAGES === --> */}
                <div className="mana-pur-payment-sh-slider-pages">
                    <p>Showing 0 to 0 of 0 entries</p>
                    <div className="mana-pur-payment-sh-slide-right-item">
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

export default PurManagePayment;