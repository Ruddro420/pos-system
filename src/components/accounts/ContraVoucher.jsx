import { Link } from "react-router-dom";

import './css/ContraVoucher.css'
const ContraVoucher = () => {
    return (
        <>
           <div className="cav-sh-parent">
     {/*    <!-- === TOP MENU ITEMS === --> */}
        <div className="cav-sh-top-menu-items">
            <ul>
                <li className="cav-sh-menu-items"><Link to="/Vouchers-page">Debit Voucher</Link></li>
                <li className="cav-sh-menu-items"><Link to="/CreditVoucher-page">Credit Voucher</Link></li>
                <li className="cav-sh-active-item"><Link to="/ContraVoucher-page">Contra Voucher</Link></li>
                <li className="cav-sh-menu-items"><Link to="/JournalVoucher-page">Journal Voucher</Link></li>
            </ul>
        </div>
        <div className="cav-sh-child-container">
            <div className="cav-sh-draft-sale-section">
              {/*   <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="cav-sh-draft-sale-top-item">
                    <p>Contra Voucher List</p>
                    <div className="cav-sh-sub-account">
                        <i className="fa-solid fa-circle-plus"></i> Create New Contra Voucher
                    </div>
                </div>
            </div>
            <hr/>
           {/*  <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="cav-sh-show-and-search-container">
                <div className="cav-sh-show-container">
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
           {/*      <!-- === SEARCH === --> */}
                <div className="cav-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="cav-manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Voucher No</th>
                            <th>Date</th>
                            <th>Account Name</th>
                            <th>Remarks</th>
                            <th>Sub Type</th>
                            <th>Reversed Account</th>
                            <th>Debit</th>
                            <th>Credit</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="cav-text-center" colSpan="11">No data availabe in tabel</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="cav-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="cav-sh-slide-right-item">
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

export default ContraVoucher;