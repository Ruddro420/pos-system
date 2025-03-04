import './css/AddQuotation.css'
const AddQuotation = () => {
    return (
        <>
    <div className='sh-addquo-container'>
        {/* <!-- === FORM SECTION === --> */}
        <div className="sh-addquo-form-section">
            <div className="sh-addquo-form-container">
                <label htmlFor="text">Customer</label>
                <div className="sh-addquo-customer-container">
                    <input type="search" name="" id=""/>
                    <div className="sh-addquo-add-from">
                        <a href="#">+</a>
                    </div>
                </div>
            </div>
            <div className="sh-addquo-form-container">
                <label htmlFor="text">Quotation Date</label>
                <input type="date" name="" id=""/>
            </div>
            <div className="sh-addquo-form-container">
                <label htmlFor="text">Outlet</label>
                <input type="search" placeholder="Defualt Outlet" name="" id=""/>
            </div>
            <div className="sh-addquo-form-container">
                <label htmlFor="text">Address</label>
                <input type="text" placeholder="Address" name="" id=""/>
            </div>
        </div>
      {/*   <!-- === SEARCH BAR === --> */}
        <div className="sh-addquo-search-bar">
            <input type="search" placeholder="Enter Product Name, Product Model or Bar Code for Scan"/>
        </div>
      {/*   <!-- === PRODUCT DETAILS === --> */}
        <div className="sh-addquo-product-details">
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Av. Qty.</th>
                        <th>Unit</th>
                        <th>Warrenty (Month)</th>
                        <th>Qty.</th>
                        <th>Rate</th>
                        <th>Discoount %</th>
                        <th>Vat %</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='sh-addquo-prodname'><input type="search" placeholder="Product Name"/></td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                          {/*   <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                          {/*   <!-- === DELETE ICON === --> */}
                            <div>
                                <i className="sh-addquo-delete-icon fa-solid fa-circle-xmark"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><input type="search" placeholder="Product Name"/></td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DELETE ICON === --> */}
                            <div>
                                <i className="delete-icon fa-solid fa-circle-xmark"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><input type="search" placeholder="Product Name"/></td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DELETE ICON === --> */}
                            <div>
                                <i className="sh-addquo-delete-icon fa-solid fa-circle-xmark"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><input type="search" placeholder="Product Name"/></td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DELETE ICON === --> */}
                            <div>
                                <i className="sh-addquo-delete-icon fa-solid fa-circle-xmark"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><input type="search" placeholder="Product Name"/></td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="sh-addquo-dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                          {/*   <!-- === DELETE ICON === --> */}
                            <div>
                                <i className="sh-addquo-delete-icon fa-solid fa-circle-xmark"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="7"></th>
                        <th>Item Total</th>
                        <td>
                        {/*   <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-total-input">
                                    <input type="number" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="sh-addquo-plus-icon">
                                <a href="#"><i className="fa-solid fa-plus"></i></a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7}></td>
                        <td>
                            <select name="" id="">
                                <option>Dis. Percent</option>
                                <option>Dis. Value</option>
                            </select>
                        </td>
                        <td colSpan={1}>
                            {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="sh-addquo-discount">
                                <div className="sh-addquo-total-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='sh-addquo- 32 900 net_payable'>
                        <td colSpan={7}></td>
                        <td>Net Payable</td>
                        <td colSpan={1}>
                            {/*  <!-- === Net Payable SECTION === --> */}
                            <div className="sh-addquo-netpayable">
                                <div className="sh-addquo-total-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
          {/*   <!-- === FOOTER SECTION === --> */}
            <div className="sh-addquo-footer-section">
                <div className="sh-addquo-total-vat">
                    <label htmlFor="text">Total Vat</label>
                    <input type="number" placeholder="0.000"/>
                </div>
                <div className="sh-addquo-total-vat">
                    <label htmlFor="text">Net Payable</label>
                    <div className="sh-addquo-submit-container">
                        <input type="number" placeholder="0.000"/>
                       {/*  <!-- === SUBMIT BUTTON === --> */}
                        <div className="sh-addquo-submit-button">
                            <a href="index.html">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddQuotation;