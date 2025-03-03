import './css/AddQuotation.css'
const AddQuotation = () => {
    return (
        <>
            <div className='sh-addquo-container'>
        {/* <!-- === FORM SECTION === --> */}
        <div className="form-section">
            <div className="form-container">
                <label htmlFor="text">Customer</label>
                <div className="customer-container">
                    <input type="search" name="" id=""/>
                    <div className="add-from">
                        <a href="#">+</a>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <label htmlFor="text">Quotation Date</label>
                <input type="date" name="" id=""/>
            </div>
            <div className="form-container">
                <label htmlFor="text">Outlet</label>
                <input type="search" placeholder="Defualt Outlet" name="" id=""/>
            </div>
            <div className="form-container">
                <label htmlFor="text">Address</label>
                <input type="text" placeholder="Address" name="" id=""/>
            </div>
        </div>
      {/*   <!-- === SEARCH BAR === --> */}
        <div className="search-bar">
            <input type="search" placeholder="Enter Product Name, Product Model or Bar Code for Scan"/>
        </div>
      {/*   <!-- === PRODUCT DETAILS === --> */}
        <div className="product-details">
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
                        <td><input type="search" placeholder="Product Name"/></td>
                        <td>
                            <div className="av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                          {/*   <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                          {/*   <!-- === DELETE ICON === --> */}
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
                            <div className="av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="total-input">
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
                            <div className="av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DELETE ICON === --> */}
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
                            <div className="av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DELETE ICON === --> */}
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
                            <div className="av-input">
                                <input type="number" placeholder="0"/>
                            </div>
                        </td>
                        <td>
                            <div className="av-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="warrenty-input">
                                <input type="number" placeholder="  "/>
                            </div>
                        </td>
                        <td>
                            <div className="qty-input">
                                <input type="number" placeholder="1"/>
                            </div>
                        </td>
                        <td>
                            <div className="rate-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                         {/*    <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                           {/*  <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="dis-lft-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                                <div className="dis-rgt-input">
                                    <input type="text" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="total-input">
                                <input type="number" placeholder="0.00"/>
                            </div>
                        </td>
                        <td>
                          {/*   <!-- === DELETE ICON === --> */}
                            <div>
                                <i className="delete-icon fa-solid fa-circle-xmark"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="7"></th>
                        <th>Item Total</th>
                        <td>
                        {/*   <!-- === DISCOUNT SECTION === --> */}
                            <div className="discount">
                                <div className="total-input">
                                    <input type="number" placeholder="0.00"/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="plus-icon">
                                <a href="#"><i className="fa-solid fa-plus"></i></a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={}></th>
                        <th>
                            <select name="" id="">
                                <optgroup label="Dis. Percent"></optgroup>
                                <option>Dis. Percent</option>
                                <optgroup label="Dis. Value"></optgroup>
                                <option>Dis. Value</option>
                            </select>
                        </th>
                    </tr>
                </tbody>
               {/*  <!-- === ITEM TOTAL CONTAINER === --> */}
                <div className="item-total-container">
                    <tbody>
                        <tr>
                            <th colSpan="7">
                                <select name="" id="">
                                    <optgroup label="Dis. Percent"></optgroup>
                                    <option>Dis. Percent</option>
                                    <optgroup label="Dis. Value"></optgroup>
                                    <option>Dis. Value</option>
                                </select>
                            </th>
                            <td>
                               {/*  <!-- === DISCOUNT SECTION === --> */}
                                <div className="discount">
                                    <div className="total-lft-input">
                                        <input type="text" placeholder="0"/>
                                    </div>
                                    <div className="total-rgt-input">
                                        <input type="text" placeholder="0"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                               {/*  <!-- === DISCOUNT SECTION === --> */}
                                <div className="discount">
                                    <div className="total-lft-input">
                                        <input type="text" placeholder="0"/>
                                    </div>
                                    <div className="total-rgt-input">
                                        <input type="text" placeholder="0"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </div>
            </table>
        </div>
            </div>
          {/*   <!-- === FOOTER SECTION === --> */}
            <div className="footer-section">
                <div className="total-vat">
                    <label htmlFor="text">Total Vat</label>
                    <input type="number" placeholder="0.000"/>
                </div>
                <div className="total-vat">
                    <label htmlFor="text">Net Payable</label>
                    <div className="submit-container">
                        <input type="number" placeholder="0.000"/>
                       {/*  <!-- === SUBMIT BUTTON === --> */}
                        <div className="submit-button">
                            <a href="index.html">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddQuotation;