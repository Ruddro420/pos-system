import './css/GeneralLedger.css'
const GeneralLedger = () => {
    return (
        <>
           <div className="sh-parent">
      {/*   <!-- === TOP MENU ITEMS === --> */}
        <div className="sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><a href="/FinanCialReports-page">Cash Book</a></li>
                <li className="sh-menu-item"><a href="/BankBook-page">Bank Book</a></li>
                <li className="sh-active-item"><a href="/GeneralLedger-pagel">General Ledger</a></li>
                <li className="sh-menu-items"><a href="/TrialBalance-page">Trial Balance</a></li>
                <li className="sh-menu-items"><a href="/ProfilLoss-page">Profit & Loss</a></li>
                <li className="sh-menu-items"><a href="/balanceSheet-page">Balance Sheet</a></li>
            </ul>
        </div>
      {/*   <!-- === FIND SECTION === --> */}
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
         {/*    <!-- === FIND AND RESET === --> */}
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
      {/*       <!-- === BOOK REPORST === --> */}
            <div className="sh-book-report-section">
               {/*  <!-- === BOOK REPORT LEFT === --> */}
                <div className="sh-book-report-left">
                    <p>Print Date:27-02-2025 12:00pm, User: Subas Hembrom</p>
                    <img src="" alt="img"/>
                </div>
              {/*   <!-- === BOOK REPORT MIDDDLE === --> */}
                <div className="sh-book-report-middle">
                    <h1>General Ledger Report</h1>
                    <p>From: 01/01/2025 To 31/12/2025</p>
                </div>
              {/*   <!-- === BOOK REPORT RIGHT === --> */}
                <div className="sh-book-report-right-items">
                    <p>B-25, Mannan Plaza, 4th Floor</p>
                    <p>Khilkht, Dhaka-1293, Bangladesh</p>
                </div>
            </div>
          {/*   <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="manage-sale-details-section">
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
                            <td className="text-center" colSpan="8">No Data Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      {/*   <!-- === SAVE BUTTON === --> */}
         <div className="sh-print-button">
            <button type="submit">Print</button>
         </div>
    </div>
  
        </>
    );
};

export default GeneralLedger;