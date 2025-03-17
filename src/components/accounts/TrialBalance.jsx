import './css/TrialBalance.css'

import { Link } from "react-router-dom";

const TrialBalance = () => {
    return (
        <>
             <div className="tb-sh-parent">
     {/*    <!-- === TOP MENU ITEMS === --> */}
        <div className="tb-sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><Link to="/FinanCialReports-page">Cash Book</Link></li>
                <li className="sh-menu-items"><Link  to="/BankBook-page">Bank Book</Link></li>
                <li className="sh-menu-items"><Link  to="/GeneralLedger-page">General Ledger</Link></li>
                <li className="sh-active-item"><Link  to="/TrialBalance-page">Trial Balance</Link></li>
                <li className="sh-menu-items"><Link  to="/ProfilLoss-page">Profit & Loss</Link></li>
                <li className="sh-menu-items"><Link  to="/balanceSheet-page">Balance Sheet</Link></li>
            </ul>
        </div>
  {/*       <!-- === FIND SECTION === --> */}
        <div className="tb-sh-find-section">
            <div className="tb-sh-voucher-input">
                <label htmlFor="text">Date</label>
                <input type="text" placeholder="27/02/2025-27/02/2025" name="" id=""/>
            </div>
            <div className="tb-sh-ledger-box">
                <label htmlFor="text">Type</label>
                <ul>
                    <li>
                        <label htmlFor="cash"><input type="checkbox" value="" name="ledger" id="cash"/>Show Full Report</label>
                    </li>
                </ul>
            </div>
          {/*   <!-- === FIND AND RESET === --> */}
            <div className="tb-sh-find-reset-container">
                <div className="tb-sh-find-btn">
                    <button type="submit" value="" name="" id="">Find</button>
                </div>
                <div className="tb-sh-reset-btn">
                    <button type="reset">Reset</button>
                </div>
                <div className="tb-sh-excel-btn">
                    <button type="submit"><i className="fa-solid fa-file-excel"></i></button>
                </div>
            </div>
        </div>
    </div>
  
        </>
    );
};

export default TrialBalance;