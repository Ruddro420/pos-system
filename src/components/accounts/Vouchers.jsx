import { Link } from "react-router-dom";

import './css/Vouchers.css'
const Vouchers = () => {
    return (
        <>
             <div className="dv-sh-parent">
       {/*  <!-- === TOP MENU ITEMS === --> */}
        <div className="dv-sh-top-menu-items">
            <ul>
                <li className="dv-sh-active-item"><Link to="/Vouchers-page">Debit Voucher</Link></li>
                <li className="dv-sh-menu-items"><Link to="/CreditVoucher-page">Credit Voucher</Link></li>
                <li className="dv-sh-menu-items"><Link to="/ContraVoucher-page">Contra Voucher</Link></li>
                <li className="dv-sh-menu-items"><Link to="/JournalVoucher-page">Journal Voucher</Link></li>
            </ul>
        </div>
        <div className="dv-sh-child-container">
            <div className="dv-sh-draft-sale-section">
               {/*  <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="dv-sh-draft-sale-top-item">
                    <p>Debit Voucher List</p>
                    <div className="dv-sh-sub-account">
                        <i className="fa-solid fa-circle-plus"></i> Create Debit Voucher
                    </div>
                </div>
            </div>
            <hr/>
           {/*  <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="dv-sh-show-and-search-container">
                <div className="dv-sh-show-container">
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
                <div className="dv-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
            {/* <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="dv-manage-sale-details-section">
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
                            <td className="dv-text-center" colSpan="11">No data availabe in tabel</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="dv-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="dv-sh-slide-right-item">
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

export default Vouchers;