import { Link } from "react-router-dom";

const LedgerReports = () => {
    return (
        <>
           <div className="lr-sh-parent">
       {/*  <!-- === TOP MENU ITEMS === --> */}
        <div className="lr-sh-top-menu-items">
            <ul>
                <li className="sh-active-item"><Link to ="/LedgerReports-page">Day Book</Link></li>
                <li className="sh-menu-items"><Link  to ="/SubLedger-page">Sub Ledger</Link></li>
                <li className="sh-menu-items"><Link  to ="/ReceiptPayment-page">Receipt & Payment</Link></li>
                <li className="sh-menu-items"><Link to ="/COGSAdjustment-page">COGS Adjustment</Link></li>
            </ul>
        </div>
        {/* <!-- === FIND SECTION === --> */}
        <div className="lr-sh-find-section">
            <div className="lr-sh-voucher-input">
                <label htmlFor="text">Voucher Name</label>
                <select name="" id="">
                    <option value="" name="" title="Select One">Select One</option>
                    <option value="" name="" title="Select One">All</option>
                    <option value="" name="" title="Select One">Debit Voucher</option>
                    <option value="" name="" title="Select One">Credit Voucher</option>
                    <option value="" name="" title="Select One">Contra Voucher</option>
                    <option value="" name="" title="Select One">Journal Voucher</option>
                </select>
            </div>
            <div className="lr-sh-voucher-input-date">
                <label htmlFor="text">Date</label>
                <input type="text" placeholder="27/02/2025-27/02/2025" name="" id=""/>
            </div>
           {/*  <!-- === FIND AND RESET === --> */}
            <div className="lr-sh-find-reset-container">
                <div className="lr-sh-find-btn">
                    <button type="submit" value="" name="" id="">Find</button>
                </div>
                <div className="lr-sh-reset-btn">
                    <button type="reset">Reset</button>
                </div>
            </div>
        </div>
        <div className="lr-sh-child-container">
           {/*  <!-- === BOOK REPORST === --> */}
            <div className="lr-sh-book-report-section">
              {/*   <!-- === BOOK REPORT LEFT === --> */}
                <div className="lr-sh-book-report-left">
                    <p>Print Date:27-02-2025 12:00pm, User: Subas Hembrom</p>
                    <img src="" alt="img"/>
                </div>
               {/*  <!-- === BOOK REPORT MIDDDLE === --> */}
                <div className="lr-sh-book-report-middle">
                    <h1>Day Book Report</h1>
                    <p>From: 27/02/2025 To 27/02/2025</p>
                </div>
                {/* <!-- === BOOK REPORT RIGHT === --> */}
                <div className="lr-sh-book-report-right-items">
                    <p>B-25, Mannan Plaza, 4th Floor</p>
                    <p>Khilkht, Dhaka-1293, Bangladesh</p>
                </div>
            </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="lr-manage-sale-details-section">
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="lr-text-center" colSpan="7">No data availabe in tabel</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === FILE SECTION === --> */}
             <div className="lr-sh-file-section">
                <button type="button" value="" name="" id="">Export To Excel</button>
                <button type="button" value="" name="" id="">Print</button>
                <button type="submit" value="" name="" id="">Download PDF</button>
             </div>
        </div>
    </div>  
        </>
    );
};

export default LedgerReports;