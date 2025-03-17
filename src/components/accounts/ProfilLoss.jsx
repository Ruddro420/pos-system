
import { Link } from "react-router-dom";
import './css/ProfilLoss.css'
const ProfilLoss = () => {
    return (
        <>
           <div className="pl-sh-parent">
       {/*  <!-- === TOP MENU ITEMS === --> */}
        <div className="pl-sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><Link to="/FinanCialReports-page">Cash Book</Link></li>
                <li className="sh-menu-item"><Link to="/BankBook-page">Bank Book</Link></li>
                <li className="sh-menu-items"><Link to="/GeneralLedger-page">General Ledger</Link></li>
                <li className="sh-menu-items"><Link to="/TrialBalance-page">Trial Balance</Link></li>
                <li className="sh-active-item"><Link to="/ProfilLoss-page">Profit & Loss</Link></li>
                <li className="sh-menu-items"><Link to="/balanceSheet-page">Balance Sheet</Link></li>
            </ul>
        </div>
       {/*  <!-- === FIND SECTION === --> */}
        <div className="pl-sh-find-section">
            <div className="pl-sh-voucher-input">
                <label htmlFor="text">Ledger Name</label>
   
        <select name="" id="">
                    <option value="" name="" title="Select One">Select One</option>
                    <option value="" name="" title="Select One">Cash</option>
                    <option value="" name="" title="Select One">Petty Cash</option>
                </select>
            </div>
            <div className="pl-sh-voucher-input-data">
                <label htmlFor="text">Date</label>
                <input type="text" placeholder="27/02/2025-27/02/2025" name="" id=""/>
            </div>
            <div className="pl-sh-voucher-input">
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
            <div className="pl-sh-find-reset-container">
                <div className="pl-sh-find-btn">
                    <button type="submit" value="" name="" id="">Find</button>
                </div>
                <div className="pl-sh-reset-btn">
                    <button type="reset">Reset</button>
                </div>
                <div className="pl-sh-excel-btn">
                    <button type="submit"><i className="fa-solid fa-file-excel"></i></button>
                </div>
            </div>
        </div>
        <div className="pl-sh-child-container">
           {/*  <!-- === BOOK REPORST === --> */}
            <div className="pl-sh-book-report-section">
               {/*  <!-- === BOOK REPORT LEFT === --> */}
                <div className="pl-sh-book-report-left">
                    <p>Print Date:27-02-2025 12:00pm, User: Subas Hembrom</p>
                    <img src="" alt="img"/>
                </div>
               {/*  <!-- === BOOK REPORT MIDDDLE === --> */}
                <div className="pl-sh-book-report-middle">
                    <h1>Profit & Loss Report</h1>
                    <p>From: 01/01/2025 To 31/12/2025</p>
                </div>
              {/*   <!-- === BOOK REPORT RIGHT === --> */}
                <div className="pl-sh-book-report-right-items">
                    <p>B-25, Mannan Plaza, 4th Floor</p>
                    <p>Khilkht, Dhaka-1293, Bangladesh</p>
                </div>
            </div>
           {/*  <!-- === EXPORT TO EXCEL === --> */}
             <div className="pl-sh-export-excel">
                <button type="submit">Export to Excel</button>
             </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="pl-manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th className="pl-particuler">Particulers</th>
                            <th className="pl-amount">Amount (BDT)</th>
                        </tr>
                        <tr>
                            <th className="pl-income">Income</th>
                            <th className="pl-income-amount">0.00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pl-sh-direct">Direct Income</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Service Income</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Service Discount (contra-revenue)</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Service Income</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Sales Accounts</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Sales Account</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Sales Returns and Allowances (contra-revenue)</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Sales Discounts (contra-revenue)</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-direct">Indirect Income</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Others Income</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Bank Interest -I</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <th className="pl-particuler">Total Income</th>
                            <th className="pl-amount">0.00</th>
                        </tr>
                        <tr>
                            <th className="pl-income">Expenses</th>
                            <th className="pl-income-amount">0.00</th>
                        </tr>
                        <tr>
                            <td className="pl-sh-direct">Cost of Good Solds</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Cost of Good Sold</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Purchases Returns and Allowances (contra-expense)</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Purchase Account</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">COGS</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Freight In</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Purchases Discounts (contra-expense)</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-direct">Non Operating Expenses</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Miscellaneous Expenses</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Stock Adjusted Expense</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Stock Wastage Expense</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Income Tax Expense</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Donations</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Bad Debts</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Other Expenses</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Depreciation Expense</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Interest Expense</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-direct">Operating Expenses</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Payroll Expense</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">HR</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Salary Expense</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Shipping Cost</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Shipping Cost</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Transport Vehicle</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Transport Vehicle</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service">Utilities</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">House Rent</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="pl-sh-service-discount">Electric bill</td>
                            <td className="pl-text-right">0.00</td>
                        </tr>
                        <tr>
                            <th className="pl-particuler">Total Expense</th>
                            <th className="pl-amount">0.00</th>
                        </tr>
                        <tr>
                            <th className="pl-particuler"></th>
                            <th className="pl-amount">0.00</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       {/*  <!-- === SAVE BUTTON === --> */}
        <div className="pl-sh-print-button">
            <button type="submit">Print</button>
        </div>
    </div>
  
        </>
    );
};

export default ProfilLoss;