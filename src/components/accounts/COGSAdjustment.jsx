
import { Link } from 'react-router-dom'
import './css/COGSAdjustment.css'
const COGSAdjustment = () => {
    return (
        <>
            {/*   <!-- === TOP MENU ITEMS === --> */}
    <div className="sh-top-menu-items">
        <ul>
            <li className="sh-menu-items"><Link to="/LedgerReports-page">Day Book</Link></li>
            <li className="sh-menu-items"><Link  to="/SubLedger-page">Sub Ledger</Link></li>
            <li className="sh-menu-items"><Link  to="/ReceiptPayment-page">Receipt & Payment</Link></li>
            <li className="sh-active-item"><Link  to="/COGSAdjustment-page">COGS Adjustment</Link></li>
        </ul>
    </div>
   {/*  <!-- === JOURNAL VOUCHER SECTION === --> *<Link
    <div className="sh-journal-voucher-section">
        <div className="sh-journal-container">
            <p>Journal Voucher</p>
            <a href="#"><i className="fa-solid fa-list"></i>Journal Voucher List</a>
        </div>
        <hr/>
      {/*   <!-- === VOUCHER INPUT === --> */}
        <div className="sh-voucher-input-section">
            <div className="sh-voucher-input-container">
                <div className="sh-voucher-input-box">
                    <label htmlFor="text">Voucher Type</label>
                    <input type="text" placeholder="Journal" name="" id=""/>
                </div>
                <div className="sh-voucher-input-box">
                    <label htmlFor="text">Date</label>
                    <input type="date" placeholder="Journal" name="" id=""/>
                </div>
                <div className="sh-voucher-input-box">
                    <label htmlFor="text">Remark</label>
                    <textarea name="" placeholder="Remark" id=""></textarea>
                </div>
            </div>
           {/*  <!-- === RIGHT ITEMS === --> */}
            <div className="sh-right-items">
                <h3>Note : This Journal voucher posting then COGS and Inventory will be included in P/L, B/S Report</h3>
                <p>Opening Inventory (COA) : 0.00</p>
                <p>Purchase (COA): 0</p>
                <p>Purchase Return (COA): 0</p>
                <p>Freight charges (COA): 0.00</p>
                <p>Closing Inventory (Stock Valuation) : 0</p>
                <p><b>COGS</b> = Opening Balance + (Purchase-Purchase Return) + Freight Charge - Closing Balance = 0</p>
                <p><b>Inventory</b> = COGS - (Purchase-Purchase Return) = 0</p>
            </div>
        </div>
        {/* <!-- === TABLE === --> */}
        <div className="sh-table-section">
            <table>
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Debit</th>
                        <th>Credit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="empty-section" colSpan="3">Transational Data Not Found</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className="text-right">Total</td>
                        <td className="text-right-dc"><input type="text" value="0" name="" id=""/></td>
                        <td className="text-right-dc"><input type="text" value="0" name="" id=""/></td>
                    </tr>
                </tfoot>
            </table>
            <hr/>
           {/*  <!-- === SAVE BUTTON === --> */}
             <div className="sh-save-button">
                <button type="submit">Submit</button>
             </div>
        </div>
 {/* </div> */}
        </>
    );
};

export default COGSAdjustment;