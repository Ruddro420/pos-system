import "../StockManagement/css/StockNewAdjustment.css";
const StockNewAdjustment = () => {
    return (
        <>
            <div className="sh-snaj-parent-section">
        {/* <!-- === CHILD SECTION === --> */}
        <div className="sh-snaj-child-section">
            {/* <!-- === TOP MENU ITEMS === --> */}
            <div className="sh-snaj-top-menu-items">
                <ul>
                    <li className="sh-snaj-menu-items"><a href="/stockAdjustment-page">Addjustment List</a></li>
                    <li className="sh-snaj-active-item"><a href="StockNewAdjustment-page">New Addjustment</a></li>
                </ul>
            </div>
            {/* <!-- === NEW ADJUSTMENT CARD SECTION === --> */}
            <div className="sh-snaj-adjustment-card-section">
                <div className="sh-snaj-new-adjustment">
                    <p>New Adjustment</p>
                </div>
                <hr/>
                {/* <!-- === INPUT FOMR SECTION === --> */}
                <div className="sh-snaj-input-fomr-section">
                    <div className="sh-snaj-form-container">
                        <label htmlFor="text">Date</label>
                        <input type="text" placeholder="17/02/2025" name="" id=""/>
                    </div>
                    <div className="sh-snaj-form-container">
                        <label htmlFor="text">Outlet</label>
                        <select name="" id="">
                            <option value="Default Outlet" name="outlet">Default Outlet</option>
                        </select>
                    </div>
                    <div className="sh-snaj-form-container">
                        <label htmlFor="text">Type</label>
                        <select name="" id="">
                            <option value="SelectOne" name="select">Select One</option>
                            <option value="Addition" name="addition">Addition</option>
                            <option value="Deduction" name="deduction">Deduction</option>
                        </select>
                    </div>
                </div>
                {/* <!-- === COMMENT BOX === --> */}
                <div className="sh-snaj-comment-box">
                    <label htmlFor="text">Details</label>
                    <textarea name="" placeholder="Details" id=""></textarea>
                </div>
                {/* <!-- === PRODUCT SEARCH BOX === --> */}
                <div className="sh-snaj-product-search-box">
                    <input type="search" placeholder="Enter Product Name, Product Model or Bar Code for Scan" name=""
                        id=""/>
                </div>
                {/* <!-- === TABLE === --> */}
                <div className="sh-snaj-table-section">
                    <table>
                        <thead>
                            <tr>
                                <th className="text-start">Product Name</th>
                                <th className="text-end" width="8%">Av.Qty.</th>
                                <th className="text-end" width="8%">Quantity</th>
                                <th className="text-end" width="8%">Rate</th>
                                <th className="text-end" width="8%">Total</th>
                                <th className="text-end" width="5%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-end" colSpan="4">Total Amount</td>
                                    <td className="total-amount"><p>0.00</p></td>
                                <td className="text-end"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- === SAVE BUTTON === --> */}
                <div className="sh-snaj-save-button">
                    <a href="#">Save</a>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default StockNewAdjustment;