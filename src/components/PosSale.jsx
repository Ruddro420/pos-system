import './css/PosSale.css'
const PosSale = () => {
    return (
        <>
            <div className="cba-possale-container">
                {/* Top Part */}
                <div className="cba-possale-inner-con-top-part">
                    <div className="cba-possale-ictp-row1">
                        {/* col 1 */}
                        <div className="cba-possale-ictp-row1-col1">
                            <div className="cba-possale-ictp-row1-col1-inputbox">
                                <label htmlFor="">Customer<span>*</span></label>
                                <div>
                                    <select name="" id="">
                                        <option value="">Walk-In-Customer</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div className="cba-possale-ictp-row1-col1-inputbox">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='Address' />
                            </div>
                            <div className="cba-possale-ictp-row1-col1-inputbox">
                                <label htmlFor="">Invoice No</label>
                                <div>
                                    <input type="text" />
                                    <p>Keep blank to auto generate</p>
                                </div>
                            </div>
                        </div>
                        {/* col 2 */}
                        <div className="cba-possale-ictp-row1-col2">
                            <div className="cba-possale-ictp-row1-col2-inputbox">
                                <label htmlFor="">Date<span>*</span></label>
                                <input type="date" />
                            </div>
                            <div className="cba-possale-ictp-row1-col2-inputbox">
                                <label htmlFor="">Outlet<span>*</span></label>
                                <select name="" id="">
                                    <option value="">Default Outlet</option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        {/* col 3 */}
                        <div className="cba-possale-ictp-row1-col3">
                            <div className="cba-possale-ictp-row1-col3-inputbox">
                                <label htmlFor="">Draft List</label>
                                <select name="" id="">
                                    <option value="">Select Draft</option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        {/* col 4 */}
                        <div className="cba-possale-ictp-row1-col4">
                            <div className="cba-possale-ictp-row1-col4-radiobox">
                                <input type="radio" />
                                <label htmlFor="">Regular Sale</label>
                            </div>
                            <div className="cba-possale-ictp-row1-col4-radiobox">
                                <input type="radio" />
                                <label htmlFor="">Delivery Sale</label>
                            </div>
                            <div className="cba-possale-ictp-row1-col4-radiobox">
                                <input type="radio" />
                                <label htmlFor="">Draft Sale</label>
                            </div>
                        </div>
                        {/* col 5 */}
                        <div className="cba-possale-ictp-row1-col5">
                            <textarea name="" id="" placeholder='Remarks'></textarea>
                        </div>
                    </div>
                    <div className="cba-possale-ictp-row2">
                        <input type="text" placeholder='Enter Product Name, Product Model or BarCode for Scan' />
                    </div>
                    <div className="cba-possale-ictp-row3">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name<span className='required'>*</span></th>
                                    <th>Av. Qty.</th>
                                    <th>Unit</th>
                                    <th>Qty.<span className='required'>*</span></th>
                                    <th>Rate<span className='required'>*</span></th>
                                    <th>Discount %</th>
                                    <th>VAT %</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* todo row 1 */}
                                <tr>
                                    <td>
                                        <input type="text" placeholder='Product Name' />
                                    </td>
                                    <td>
                                        <input type="text" placeholder='0' />
                                    </td>
                                    <td>
                                        <input type="text" placeholder='' />
                                    </td>
                                    <td>
                                        <input type="text" placeholder='1' />
                                    </td>
                                    <td>
                                        <input type="text" placeholder='0.00' />
                                    </td>
                                    <td>
                                        <div className="dis">
                                            <input type="text" placeholder='0.00' />
                                            <span>0.00</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="vat">
                                            <input type="text" placeholder='0.00' />
                                            <span>0.00</span>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="text" placeholder='0.00' />
                                    </td>
                                    <td>
                                        <i className='bx bx-minus'></i>
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td colSpan={7}>Item Total:</td>
                                    <td>
                                        <input type="text" placeholder='0.00' />
                                    </td>
                                    <td>
                                        <i className='bx bx-plus'></i>
                                    </td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <td colSpan={7}>
                                        <button>Dis. Present</button>
                                        <button>Dis. Value</button>
                                    </td>
                                    <td>
                                        <div>
                                            <input type="text" placeholder='0' />
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <td colSpan={7}>Sale VAT%:</td>
                                    <td>
                                        <div>
                                            <select name="" id="">
                                                <option value="">Select VAT</option>
                                                <option value="">Taxes</option>
                                            </select>
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    <td colSpan={7}>

                                    </td>
                                    <td>
                                        <i className='bx bx-plus-circle'></i>
                                        Add Additional Expenses
                                    </td>
                                </tr>
                                {/* row 7 */}
                                <tr>
                                    <td colSpan={7}>Net Payable:</td>
                                    <td>
                                        <input type="text" placeholder='0' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Bottom Part */}
                <div className="cba-possale-inner-con-bottom-part">
                    <div className="cba-pic-bp-calculation-overview">
                        <div className="cba-pic-bp-co-total-discount-con">
                            <label htmlFor="">Total Discount</label>
                            <input type="text" placeholder='0' disabled />
                        </div>
                        <div className="cba-pic-bp-co-total-vat-con">
                            <label htmlFor="">Total Vat</label>
                            <input type="text" placeholder='0.000' disabled />
                        </div>
                        <div className="cba-pic-bp-co-previous-due-con">
                            <label htmlFor="">Previous Due</label>
                            <input type="text" placeholder='0' disabled />
                        </div>
                        <div className="cba-pic-bp-co-net-total-con">
                            <label htmlFor="">Net Total</label>
                            <input type="text" placeholder='0.000' disabled />
                        </div>
                        <div className="cba-pic-bp-co-current-due-con">
                            <label htmlFor="">Current Due</label>
                            <input type="text" placeholder='0.000' disabled />
                        </div>
                        <div className="cba-pic-bp-co-submit-btn-con">
                            <input type="submit" value='Submit' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PosSale;