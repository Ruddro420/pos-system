import { Link } from 'react-router-dom';
import './css/SubLedger.css'
const SubLedger = () => {
    return (
        <>
          <div className="sh-parent">
      {/*   <!-- === TOP MENU ITEMS === --> */}
        <div className="sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><Link to="/LedgerReports-page">Day Book</Link></li>
                <li className="sh-active-item"><Link to="/SubLedger-page">Sub Ledger</Link></li>
                <li className="sh-menu-items"><Link to="/ReceiptPayment-page">Receipt & Payment</Link></li>
                <li className="sh-menu-items"><Link to="/COGSAdjustment-page">COGS Adjustment</Link></li>
            </ul>
        </div>
      {/*   <!-- === FIND SECTION === --> */}
        <div className="sh-find-section">
            <div className="sh-voucher-input">
                <label htmlFor="text">Subtype</label>
                <select name="" id="">
                    <option value="" name="" title="Select One">Select One</option>
                    <option value="" name="" title="Select One">None</option>
                    <option value="" name="" title="Select One">Supplier</option>
                    <option value="" name="" title="Select One">Customer</option>
                    <option value="" name="" title="Select One">Employee</option>
                </select>
            </div>
            <div className="sh-voucher-input">
                <label htmlFor="text">Ledger Name</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div className="sh-voucher-input">
                <label htmlFor="text">Sub Ledger</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div className="sh-voucher-input">
                <label htmlFor="text">Date</label>
                <input type="text" placeholder="27/02/2025-27/02/2025" name="" id=""/>
            </div>
          {/*   <!-- === FIND AND RESET === --> */}
            <div className="sh-find-reset-container">
                <div className="sh-find-btn">
                    <button type="submit" value="" name="" id="">Find</button>
                </div>
                <div className="sh-reset-btn">
                    <button>Reset</button>
                </div>
            </div>
        </div>
        <div className="sh-child-container">
           {/*  <!-- === BOOK REPORST === --> */}
            <div className="sh-book-report-section">
               {/*  <!-- === BOOK REPORT LEFT === --> */}
                <div className="sh-book-report-left">
                    <p>Print Date:27-02-2025 12:00pm, User: Subas Hembrom</p>
                    <img src="" alt="img"/>
                </div>
               {/*  <!-- === BOOK REPORT MIDDDLE === --> */}
                <div className="sh-book-report-middle">
                    <h1>Sub Ledger Report</h1>
                    <p>From: 27/02/2025 To 27/02/2025</p>
                </div>
                {/* <!-- === BOOK REPORT RIGHT === --> */}
                <div className="sh-book-report-right-items">
                    <p>B-25, Mannan Plaza, 4th Floor</p>
                    <p>Khilkht, Dhaka-1293, Bangladesh</p>
                </div>
            </div>
            <hr/>
          {/*   <!-- === BALANCE === --> */}
             <div className="sh-balance-section">
                <p><b>Opening Balance:</b> 0.000</p>
                <p><b>Total Balance:</b> 0.000</p>
             </div>
         {/*    <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Date</th>
                            <th>Voucher No</th>
                            <th>Head Name</th>
                            <th>Remarks</th>
                            <th className="text-right">Debit(BDT)</th>
                            <th className="text-right">Credit(BDT)</th>
                            <th className="text-right">Balance (BDT)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center" colSpan="8">No data availabe in tabel</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-right">Total</td>
                            <td className="text-right">0.000</td>
                            <td className="text-right">0.000</td>
                            <td className="text-right">0.000</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
          {/*   <!-- === FILE SECTION === --> */}
             <div className="sh-file-section">
                <button type="button" value="" name="" id="">Export To Excel</button>
                <button type="button" value="" name="" id="">Print</button>
                <button type="submit" value="" name="" id="">Download PDF</button>
             </div>
        </div>
    </div>   
        </>
    );
};

export default SubLedger;