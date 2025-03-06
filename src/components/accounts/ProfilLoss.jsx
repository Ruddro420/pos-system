/* import './css/ProfilLoss.css' */

const ProfilLoss = () => {
    return (
        <>
           <div className="sh-parent">
       {/*  <!-- === TOP MENU ITEMS === --> */}
        <div className="sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><a href="/FinanCialReports-page">Cash Book</a></li>
                <li className="sh-menu-item"><a href="/BankBook-page">Bank Book</a></li>
                <li className="sh-menu-items"><a href="/GeneralLedger-page">General Ledger</a></li>
                <li className="sh-menu-items"><a href="/TrialBalance-page">Trial Balance</a></li>
                <li className="sh-active-item"><a href="/ProfilLoss-page">Profit & Loss</a></li>
                <li className="sh-menu-items"><a href="/balanceSheet-page">Balance Sheet</a></li>
            </ul>
        </div>
       {/*  <!-- === FIND SECTION === --> */}
        <div className="sh-find-section">
            <div className="sh-voucher-input">
                <label htmlFor="text">Ledger Name</label>
   
        <select name="" id="">
                    <option value="" name="" title="Select One">Select One</option>
                    <option value="" name="" title="Select One">Cash</option>
                    <option value="" name="" title="Select One">Petty Cash</option>
                </select>
            </div>
            <div className="sh-voucher-input">
                <label htmlFor="text">Date</label>
                <input type="text" placeholder="27/02/2025-27/02/2025" name="" id=""/>
            </div>
            <div className="sh-voucher-input">
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
            <div className="sh-find-reset-container">
                <div className="sh-find-btn">
                    <button type="submit" value="" name="" id="">Find</button>
                </div>
                <div className="sh-reset-btn">
                    <button type="reset">Reset</button>
                </div>
                <div className="sh-excel-btn">
                    <button type="submit"><i className="fa-solid fa-file-excel"></i></button>
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
                    <h1>Profit & Loss Report</h1>
                    <p>From: 01/01/2025 To 31/12/2025</p>
                </div>
              {/*   <!-- === BOOK REPORT RIGHT === --> */}
                <div className="sh-book-report-right-items">
                    <p>B-25, Mannan Plaza, 4th Floor</p>
                    <p>Khilkht, Dhaka-1293, Bangladesh</p>
                </div>
            </div>
           {/*  <!-- === EXPORT TO EXCEL === --> */}
             <div className="sh-export-excel">
                <button type="submit">Export to Excel</button>
             </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th className="particuler">Particulers</th>
                            <th className="amount">Amount (BDT)</th>
                        </tr>
                        <tr>
                            <th className="income">Income</th>
                            <th className="income-amount">0.00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="sh-direct">Direct Income</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Service Income</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Service Discount (contra-revenue)</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Service Income</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Sales Accounts</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Sales Account</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Sales Returns and Allowances (contra-revenue)</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Sales Discounts (contra-revenue)</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-direct">Indirect Income</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Others Income</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Bank Interest -I</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <th className="particuler">Total Income</th>
                            <th className="amount">0.00</th>
                        </tr>
                        <tr>
                            <th className="income">Expenses</th>
                            <th className="income-amount">0.00</th>
                        </tr>
                        <tr>
                            <td className="sh-direct">Cost of Good Solds</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Cost of Good Sold</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Purchases Returns and Allowances (contra-expense)</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Purchase Account</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">COGS</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Freight In</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Purchases Discounts (contra-expense)</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-direct">Non Operating Expenses</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Miscellaneous Expenses</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Stock Adjusted Expense</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Stock Wastage Expense</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Income Tax Expense</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Donations</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Bad Debts</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Other Expenses</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Depreciation Expense</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Interest Expense</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-direct">Operating Expenses</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Payroll Expense</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">HR</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Salary Expense</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Shipping Cost</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Shipping Cost</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Transport Vehicle</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Transport Vehicle</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service">Utilities</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">House Rent</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td className="sh-service-discount">Electric bill</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        <tr>
                            <th className="particuler">Total Expense</th>
                            <th className="amount">0.00</th>
                        </tr>
                        <tr>
                            <th className="particuler"></th>
                            <th className="amount">0.00</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       {/*  <!-- === SAVE BUTTON === --> */}
        <div className="sh-print-button">
            <button type="submit">Print</button>
        </div>
    </div>
  
        </>
    );
};

export default ProfilLoss;