import './css/TrialBalance.css'

const TrialBalance = () => {
    return (
        <>
             <div className="sh-parent">
     {/*    <!-- === TOP MENU ITEMS === --> */}
        <div className="sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><a href="/FinanCialReports-page">Cash Book</a></li>
                <li className="sh-menu-items"><a href="/BankBook-page">Bank Book</a></li>
                <li className="sh-menu-items"><a href="/GeneralLedger-pagel">General Ledger</a></li>
                <li className="sh-active-item"><a href="/TrialBalance-page">Trial Balance</a></li>
                <li className="sh-menu-items"><a href="/ProfilLoss-page">Profit & Loss</a></li>
                <li className="sh-menu-items"><a href="/balanceSheet-page">Balance Sheet</a></li>
            </ul>
        </div>
  {/*       <!-- === FIND SECTION === --> */}
        <div className="sh-find-section">
            <div className="sh-voucher-input">
                <label htmlFor="text">Date</label>
                <input type="text" placeholder="27/02/2025-27/02/2025" name="" id=""/>
            </div>
            <div className="sh-ledger-box">
                <label htmlFor="text">Type</label>
                <ul>
                    <li>
                        <label htmlFor="cash"><input type="checkbox" value="" name="ledger" id="cash"/>Show Full Report</label>
                    </li>
                </ul>
            </div>
          {/*   <!-- === FIND AND RESET === --> */}
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
    </div>
  
        </>
    );
};

export default TrialBalance;