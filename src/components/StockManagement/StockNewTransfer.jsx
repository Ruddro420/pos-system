import "../StockManagement/css/StockNewTransfer.css";
const StockNewTransfer = () => {
    return (
        <>
            <div className="cba-snt-main-container">
                {/* top menu part */}
                <div className="cba-snt-top-menu">
                    <ul>
                        <li><a href="/StockTransferList-page">Stock Transfer List</a></li>
                        <li><a href="/StockNewTransfer-page" className='cba-snt-top-menu-active'>New Stock Transfer</a></li>
                        <li><a href="/StockTransferRequestList-page">Stock Transfer Request</a></li>
                    </ul>
                </div>
                {/* inner container */}
                <div className="cba-snt-inner-container">
                    <div className="cba-snt-ic-head-part">
                        <h2>New Stock Transfer</h2>
                    </div>
                    <div className="cba-snt-ic-middle-part">
                        {/* row 1 */}
                        <div className="cba-snt-mp-row1">
                            <div className="cba-snt-mp-row1-col1">
                                <div className="cba-snt-ic-mpr1-col1-input-box1">
                                    <label htmlFor="">Outlet From<span className="cba-snt-req">*</span></label>
                                    <select name="" id="">
                                        <option value="">Select Outlet</option>
                                        <option value="">Dhaka</option>
                                        <option value="">Rangpur</option>
                                    </select>
                                </div>
                                <div className="cba-snt-ic-mpr1-col1-input-box2">
                                    <label htmlFor="">Outlet To<span className="cba-snt-req">*</span></label>
                                    <select name="" id="">
                                        <option value="">Select Outlet</option>
                                        <option value="">Dhaka</option>
                                        <option value="">Rangpur</option>
                                    </select>
                                </div>
                            </div>
                            <div className="cba-snt-mp-row1-col2">
                                <div className="cba-snt-ic-mpr1-col2-datetime-box">
                                    <label htmlFor="">Transfer Date<span className="cba-snt-req">*</span></label>
                                    <input type="datetime-local" />
                                </div>
                                <div className="cba-snt-ic-mpr1-col2-textarea-box">
                                    <label htmlFor="">Transfer Time<span className="cba-snt-req">*</span></label>
                                    <textarea name="" id="">Details</textarea>
                                </div>
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className="cba-snt-mp-row2">
                            <input type="text" placeholder="Enter Product Name, Product Model or Bar Code For Scan" />
                        </div>
                        {/* row 3 */}
                        <div className="cba-snt-mp-row3">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name<span className="cba-snt-req">*</span></th>
                                        <th>Available Qty.</th>
                                        <th>Quality<span className="cba-snt-req">*</span></th>
                                        <th>Rate<span className="cba-snt-req">*</span></th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" placeholder="Please enter 1 or more characters" /></td>
                                        <td><input type="text" placeholder="0.00" /></td>
                                        <td><input type="text" placeholder="1" /></td>
                                        <td><input type="text" placeholder="0.00" /></td>
                                        <td><input type="text" placeholder="0.00" /></td>
                                        <td><i className='cba-snt-ic-r3-action-icon bx bx-x'></i></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={4}>Total Amount:</td>
                                        <td><input type="text" placeholder="0.00" /></td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="cba-snt-ic-bottom-part">
                        <input type="submit" value="Transfer" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StockNewTransfer;