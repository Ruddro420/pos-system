import './css/PosSale.css'
const PosSale = () => {
    return (
        <>
         {/*    <!-- === POSE SALE CUSTOMER DETAILS === --> */}
        <div className="sh-pose-sale-customer-section">
        {/*     <!-- === CUSTOMER DETAILS === --> */}
            <div className="sh-pose-sale-customer-details-input">
                <div className="sh-customer-name">
                    <label htmlFor="#">Customer</label>
                    <div className="sh-plus-input">
                        <div className="sh-customer-name-container">
                            <select name="" id="">
                                <option value="Walk-In-Customer">Walk-In-Customer</option>
                                <option value="Walk-In-Customer">Subas Hembrom</option>
                            </select>
                            <div className="sh-plus-icon">
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sh-address">
                    <label htmlFor="text">Address</label>
                    <input type="text" placeholder="Address"/>
                </div>
                <div className="sh-invoice">
                    <label htmlFor="text">Invoice No</label>
                    <input type="text" name="" id=""/>
                </div>
            </div>
          {/*   <!-- ============================= --> */}
            <div className="sh-customer-second-container">
                <div className="sh-date-container">
                    <label htmlFor="">Date</label>
                    <select name="" id="">
                        <option value="">13/02/2025</option>
                    </select>
                </div>
                <div className="sh-date-container">
                    <label htmlFor="">Outlet</label>
                    <select name="" id="">
                        <option value="">Default Outlet</option>
                    </select>
                </div>
                <div className="sh-date-container">
                    <label htmlFor="">Draft List</label>
                    <select name="" id="">
                        <option value="">Select Draft</option>
                    </select>
                </div>
            </div>


            {/* <!-- =========================== -->
            <!-- === CUSTOMER THIRD SECTION === --> */}
            <div className="customer-third-section">
                <div className="select-items">
                    <div className="delivery-container">
                        <input type="radio" value="list" name="regular"/>Regular Sale
                    </div>
                    <div className="delivery-container">
                        <input type="radio" value="list" name="delivery"/>Delivery Sale
                    </div>
                    <div className="delivery-container">
                        <input type="radio" value="list" name="draft"/>Draft Sale
                    </div>
                </div>
                <div className="sh-massege">
                    <textarea name="" id="">
                    </textarea>
                </div>

            </div>

          {/*   <!-- ========= -->
            <!-- === EVERY THING SEARCH BOX === --> */}
            <div className="everyThing-search-box">
                <input type="text" placeholder="Enter Product Name, Product Model or Bar Code for Scan" name="" id=""/>
            </div>

       {/*      <!-- === PRODUCT ALL DETAILS === --> */}
            <div className="sh-produt-all-details-container">
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Av.Qty</th>
                            <th>Unit</th>
                            <th>Qty.</th>
                            <th>Rate</th>
                            <th>Discount%</th>
                            <th>VAT%</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="sh-product-search-box"><input type="text" placeholder="Product Name" name=""
                                        id=""/></div>
                            </td>
                            <td className="sh-av-box"><input type="number" value="0" name="av" id=""/></td>
                            <td className="sh-av-box"><input type="number" value="" name="unit" id=""/></td>
                            <td className="sh-qty-number-input">
                                <input type="number" placeholder="" value="1" name="qty" id=""/>
                            </td>
                            <td className="sh-rate-input-container">
                                <input type="number" placeholder="" value="0.00" name="rate" id=""/>
                            </td>
                            <td>
                                <div className="sh-discount-container">
                                    <div className="sh-discount-left-container">
                                        <input type="number" placeholder="" value="0.00" name="" id=""/>
                                    </div>
                                    <div className="sh-discount-right-container">
                                        <input type="number" placeholder="" value="0.00" name="" id=""/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="sh-vatbox-container">
                                    <div className="sh-vat-left-container">
                                        <input type="number" placeholder="" value="0.0" name="vat" id=""/>
                                    </div>
                                    <div className="sh-vat-right-container">
                                        <input type="number" placeholder="" value="0.00" name="vat" id=""/>
                                    </div>
                                </div>
                            </td>
                            <td className="sh-total-contaier">
                                <input type="number" placeholder="" value="0.00" name="" id=""/>
                            </td>
                            <td className="sh-delet-icon"><a href="#">
                                    <a href="#">
                                        <i className="fa-solid fa-circle-xmark"></i>
                                    </a>
                                </a></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="sh-product-search-box"><input type="text" placeholder="Product Name" name=""
                                        id=""/></div>
                            </td>
                            <td className="sh-av-box"><input type="number" value="0" name="av" id=""/></td>
                            <td className="sh-av-box"><input type="number" value="" name="unit" id=""/></td>
                            <td className="sh-qty-number-input">
                                <input type="number" placeholder="" value="1" name="qty" id=""/>
                            </td>
                            <td className="sh-rate-input-container">
                                <input type="number" placeholder="" value="0.00" name="rate" id=""/>
                            </td>
                            <td>
                                <div className="sh-discount-container">
                                    <div className="sh-discount-left-container">
                                        <input type="number" placeholder="" value="0.00" name="" id=""/>
                                    </div>
                                    <div className="sh-discount-right-container">
                                        <input type="number" placeholder="" value="0.00" name="" id=""/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="sh-vatbox-container">
                                    <div className="sh-vat-left-container">
                                        <input type="number" placeholder="" value="0.0" name="vat" id=""/>
                                    </div>
                                    <div className="sh-vat-right-container">
                                        <input type="number" placeholder="" value="0.00" name="vat" id=""/>
                                    </div>
                                </div>
                            </td>
                            <td className="sh-total-contaier">
                                <input type="number" placeholder="" value="0.00" name="" id=""/>
                            </td>
                            <td className="sh-delet-icon"><a href="#">
                                    <a href="#">
                                        <i className="fa-solid fa-circle-xmark"></i>
                                    </a>
                                </a></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th colSpan="7">
                                <p>Total</p>
                            </th>
                            <td className="sh-total-contaier">
                                <input type="number" placeholder="" value="0.00" name="" id=""/>
                            </td>
                            <td>
                                <div className="sh-plus-icon-two">
                                    <a href="#"><i className="fa-solid fa-plus"></i></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th colSpan="7">
                                <p>Discount</p>
                            </th>
                            <td>
                                <div className="sh-dis-per-value">
                                    <div className="sh-percent">
                                        <input type="number" placeholder="" value="0" name="" id=""/>
                                    </div>
                                    <div className="sh-dis-value">
                                        <input type="number" placeholder="" value="0" name="" id=""/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th colSpan="7">
                                <p>Sale Vat%:</p>
                            </th>
                            <td>
                                <div className="sh-dis-per-value">
                                    <div className="sh-percent">
                                        <select name="" id="">
                                            <option value="Select" name="Select">Select</option>
                                            <option value="Select" name="Select">Select VAT</option>
                                            <option value="Select" name="taxes">Taxes</option>
                                            <option value="Select" name="Select">VAT Group</option>
                                        </select>
                                    </div>
                                    <div className="sh-dis-value">
                                        <input type="number" placeholder="" value="0" name="" id=""/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th colSpan="7"></th>
                            <td>
                                <div className="sh-additional-container">
                                    <i className="fa-solid fa-plus"></i>Add
                                </div>
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th colSpan="7">
                                <p>New Payable:</p>
                            </th>
                            <td className="sh-total-contaier">
                                <input type="number" placeholder="" value="0.00" name="" id=""/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      {/* / */}
        <div className="sh-footer-section">
            <div className="sh-footer-dis-container">
                <p>Total Discount</p>
                <input type="number" placeholder="" value="0" name="" id=""/>
            </div>
            <div className="sh-footer-dis-container">
                <p>Total Discount</p>
                <input type="number" placeholder="" value="0.000" name="" id=""/>
            </div>
            <div className="sh-footer-dis-container">
                <p>Total Discount</p>
                <input type="number" placeholder="" value="0" name="" id=""/>
            </div>
            <div className="sh-net-container">
                <p>Net Total</p>
                <input type="number" value="0.000" name="" id=""/>
            </div>
            <div className="sh-net-container">  
                <p>Current Due</p>
                <input type="number" value="0.000" name="" id=""/>
            </div>
            <div className="sh-submit-button">
                <a href="manage-sale.html">Submit</a>
            </div>
        </div>
        </>
    );
};

export default PosSale;