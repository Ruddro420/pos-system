import { Link } from "react-router-dom";

import './css/FinanCialReports.css'
const FinanCialReports = () => {
    return (
        <>
           <div className="cb-sh-parent">
      {/*   <!-- === TOP MENU ITEMS === --> */}
        <div className="cb-sh-top-menu-items">
            <ul>
                <li className="sh-active-item"><Link to="/FinanCialReports-page">Cash Book</Link></li>
                <li className="sh-menu-items"><Link to="/BankBook-page">Bank Book</Link></li>
                <li className="sh-menu-items"><Link to="/GeneralLedger-page">General Ledger</Link></li>
                <li className="sh-menu-items"><Link to="/TrialBalance-page">Trial Balance</Link></li>
                <li className="sh-menu-items"><Link to="/ProfilLoss-page">Profit & Loss</Link></li>
                <li className="sh-menu-items"><Link to="/balanceSheet-page">Balance Sheet</Link></li>
            </ul>
        </div>
        
        {/* <!-- === FIND SECTION === --> */}
        <div className="cb-sh-find-section">
            <div className="cb-sh-voucher-input">
                <label htmlFor="text">Ledger Name</label>
                <select name="" id="">
                    <option value="" name="" title="Select One">Select One</option>
                    <option value="" name="" title="Select One">Cash</option>
                    <option value="" name="" title="Select One">Petty Cash</option>
                </select>
            </div>

            <div className="cb-sh-voucher-input-data">
                <label htmlFor="text">Date</label>
                <input type="text" placeholder="27/02/2025-27/02/2025" name="" id=""/>
            </div>

            <div className="cb-sh-voucher-input">
                <label htmlFor="text">Per Page Row</label>
                <select name="" id="">
                    <option value="" name="" title="Select One">Select One</option>
                    <option value="" name="" title="Select One">10</option>
                    <option value="" name="" title="Select One">20</option>
                    <option value="" name="" title="Select One">50</option>
                    <option value="" name="" title="Select One">100</option>
                    <option value="" name="" title="Select One">500</option>
                </select>
            </div>

            {/* <!-- === FIND AND RESET === --> */}
            <div className="cb-sh-find-reset-container">
                <div className="cb-sh-find-btn">
                    <button type="submit" value="" name="" id="">Find</button>
                </div>
                <div className="cb-sh-reset-btn">
                    <button type="reset">Reset</button>
                </div>
                <div className="cb-sh-excel-btn">
                    <button type="submit"><i className="fa-solid fa-file-excel"></i></button>
                </div>
            </div>
        </div>
        <div className="cb-sh-child-container">
   {/*          <!-- === BOOK REPORST === --> */}
            <div className="cb-sh-book-report-section">
               {/*  <!-- === BOOK REPORT LEFT === --> */}
                <div className="cb-sh-book-report-left">
                    <p>Print Date:27-02-2025 12:00pm, User: Subas Hembrom</p>
                    <img src="" alt="img"/>
                </div>
               {/*  <!-- === BOOK REPORT MIDDDLE === --> */}
                <div className="cb-sh-book-report-middle">
                    <h1>Cash Book Report</h1>
                    <p>From: 27/02/2025 To 27/02/2025</p>
                </div>
               {/*  <!-- === BOOK REPORT RIGHT === --> */}
                <div className="cb-sh-book-report-right-items">
                    <p>B-25, Mannan Plaza, 4th Floor</p>
                    <p>Khilkht, Dhaka-1293, Bangladesh</p>
                </div>
            </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="cb-sh-manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Date</th>
                            <th>Voucher No</th>
                            <th>Head Name</th>
                            <th>Remarks</th>
                            <th>Debit(BDT)</th>
                            <th>Credit(BDT)</th>
                            <th>Balance(BDT)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="cb-sh-text-center" colSpan="8">No Data Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       {/*  <!-- === SAVE BUTTON === --> */}
         <div className="cb-sh-print-button">
            <button type="submit">Print</button>
         </div>
    </div>  
        </>
    );
};

export default FinanCialReports;