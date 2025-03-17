/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom'
import './css/BalanceSheet.css'
const BalanceSheet = () => {
    return (
        <>
           <div className="bs-sh-parent">
    
        <div className="bs-sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><Link to="/FinanCialReports-page">Cash Book</Link></li>
                <li className="sh-menu-item"><Link to="/BankBook-page">Bank Book</Link></li>
                <li className="sh-menu-items"><Link to="/GeneralLedger-pagel">General Ledger</Link></li>
                <li className="sh-menu-items"><Link to="/TrialBalance-page">Trial Balance</Link></li>
                <li className="sh-menu-items"><Link to="/ProfilLoss-page">Profit & Loss</Link></li>
                <li className="sh-active-item"><Link to="/balanceSheet-page">Balance Sheet</Link></li>
            </ul>
        </div>
       
      
        <div className="bs-sh-find-section"Link>
            <div className="bs-sh-voucher-input">
                <label htmlFor="text">Ledger Name</label>
                <select name="" id="">
                    <option value="" name="" title="Select One">Select One</option>
                    <option value="" name="" title="Select One">Cash</option>
                    <option value="" name="" title="Select One">Petty Cash</option>
                </select>
            </div>
            <div className="bs-sh-voucher-input">
                <label htmlFor="text">Date</label>
                <input type="text" placeholder="27/02/2025-27/02/2025" name="" id=""/>
            </div>
            <div className="bs-sh-voucher-input">
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
          
            <div className="bs-sh-find-reset-container">
                <div className="bs-sh-find-btn">
                    <button type="submit" value="" name="" id="">Find</button>
                </div>
                <div className="bs-sh-reset-btn">
                    <button type="reset">Reset</button>
                </div>
                <div className="bs-sh-excel-btn">
                    <button type="submit"><i className="fa-solid fa-file-excel"></i></button>
                </div>
            </div>
        </div>
        <div className="bs-sh-child-container">
           
            <div className="bs-sh-book-report-section">
               
                <div className="bs-sh-book-report-left">
                    <p>Print Date:27-02-2025 12:00pm, User: Subas Hembrom</p>
                    <img src="" alt="img"/>
                </div>
              
                <div className="bs-sh-book-report-middle">
                    <h1>Profit & Loss Report</h1>
                    <p>From: 01/01/2025 To 31/12/2025</p>
                </div>
              
                <div className="bs-sh-book-report-right-items">
                    <p>B-25, Mannan Plaza, 4th Floor</p>
                    <p>Khilkht, Dhaka-1293, Bangladesh</p>
                </div>
            </div>
            <div className="bs-sh-table-section-double-part">
              
                <div className="bs-manage-sale-details-section">
                   
                    <div className="bs-sh-export-excel">
                        <button type="submit">Liabilities Balance Sheet Excel</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="bs-particuler">Particulers</th>
                                <th className="bs-amount">2025 (BDT)</th>
                            </tr>
                            <tr>
                                <th className="bs-income">Liability</th>
                                <th className="bs-income-amount">0.00</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bs-sh-direct">Current Liability</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Unearned Revenue</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Property Sales</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Provisions</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">VAT Payable</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Provision for npf contribution</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Provision for State Income Tax</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Accrued Expenses</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Accrued Electricity Bill</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Accrued House Rent</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Accounts Payable</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Supplier Payable</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-direct">Long Term Liability</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Long-Term Debt</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Bank Loan</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Other Long-Term Liabilities</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Mortgage Loan</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-direct">Suspense Account</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Suspense Account</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Suspense Account</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <th className="bs-income">Share and Equities</th>
                                <th className="bs-income-amount">0.00</th>
                            </tr>
                            <tr>
                                <td className="bs-sh-direct">Share Holder Equity</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Last year Profit & Loss</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Last year Profit & Loss</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Equity Capital</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Capital Fund</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Current year Profit & Loss</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Current year Profit & Loss</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <th className="bs-particuler">Total Liabilities</th>
                                <th className="bs-amount">0.00</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
              
                <div className="bs-manage-sale-details-section">
                 
                    <div className="bs-sh-export-excel">
                        <button type="submit">Assests Balance Sheet Excel</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="bs-particuler">Particulers</th>
                                <th className="bs-amount">2025 (BDT)</th>
                            </tr>
                            <tr>
                                <th className="bs-income">Assets</th>
                                <th className="bs-income-amount">0.00</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bs-sh-direct">Current Asset</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Input VAT</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Input VAT</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Visa & Master Card</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Visa Islami Bank</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Master Card</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Visa City Bank</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Mobile Wallet</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Nagad</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Rocket</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Bkash</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Bank</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Standard Chartered Bank</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">HSBC</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">City Bank</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Account Receivable</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Supplier Receivable</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Employee Receivable</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Customer Receivable</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Inventories</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Inventories</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Cash</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Petty Cash</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Cash</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-direct">Fixed Asset</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Accumulated Depreciation (Contra Asset)</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Vehicle (Contra Asset)</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Computer & Tables (Contra Asset)</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Vehicle and Transportation</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Motorcycle</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Delivery TracK</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Microbus</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Budling & Lands</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Lands</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Property & Equipment</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Computer & Tables</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service">Good Wills</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <td className="bs-sh-service-discount">Goodwill</td>
                                <td className="bs-text-right">0.00</td>
                            </tr>
                            <tr>
                                <th className="bs-income">Total Assets	</th>
                                <th className="bs-income-amount">0.00</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      
        <div className="bs-h-print-button">
            <button type="submit">Print</button>
        </div>
    </div>  
        </>
    );
};

export default BalanceSheet;