import { Link } from 'react-router-dom';
import './css/ReceiptPayment.css'
const ReceiptPayment = () => {
    return (
        <>
       {/*    <!-- === TOP MENU ITEMS === --> */}
    <div className="sh-top-menu-items">
        <ul>
            <li className="sh-menu-items"><Link to="/LedgerReports-page">Day Book</Link></li>
            <li className="sh-menu-items"><Link to="/SubLedger-page">Sub Ledger</Link></li>
            <li className="sh-active-item"><Link to="/ReceiptPayment-page">Receipt & Payment</Link></li>
            <li className="sh-menu-items"><Link to="/COGSAdjustment-page">COGS Adjustment</Link></li>
        </ul>
    </div>
   {/*  <!-- === FIND SECTION === --> */}
     <div className="sh-find-section">
        <div className="sh-voucher-input">
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
        <div className="sh-ledger-box">
            <label htmlFor="text">Ledger Type</label>
            <ul>
                <li>
                    <label htmlFor="cash"><input type="radio" value="" name="ledger" id="cash"/>Cash Basis</label>
                    <label htmlFor="accrual"><input type="radio" value="" name="ledger" id="accrual"/>Accrual Basis</label>
                </li>
            </ul>
        </div>
       {/*  <!-- === FIND AND RESET === --> */}
        <div className="sh-find-reset-container">
            <div className="sh-find-btn">
                <button type="submit" value="" name="" id="">Find</button>
            </div>
        </div>
    </div>   
        </>
    );
};

export default ReceiptPayment;