import { Link } from 'react-router-dom';
import '../purchesCSS/AddRequisition.css'
const AddRequisition = () => {
    return (
        <>
           <div className="sh-parent-section">
        {/* <!-- === CHILD SECTION === --> */}
        <div className="sh-child-section">
       {/*      <!-- === TOP MENU ITEMS === --> */}
            <div className="sh-top-menu-items">
                <ul>
                    <li className="sh-menu-items"><Link to="/manageRequisition-page">Manage Requisition</Link></li>
                    <li className="sh-active-item"><a href="/addRequisition-page">Add Requisition</a></li>
                    <li className="sh-menu-items"><a href="/addPurchase-page">Add Purchase</a></li>
                    <li className="sh-menu-items"><a href="/manageReceived-page">Manage Purchase</a></li>
                    <li className="sh-menu-items"><a href="/manageReceived-page">Manage Received</a></li>
                    <li className="sh-menu-items"><a href="/managePayment-page">Manage Payment</a></li>
                </ul>
            </div>
      {/*       <!-- === POSE SALE CUSTOMER DETAILS === --> */}
            <div className="sh-pose-sale-customer-section">
            {/*     <!-- === ADD REQUISITION CONTAINER === --> */}
                <div className="sh-add-requisition-container">
                    <p>Add Requisition</p>
                    <div className="sh-requisition-list">
                        <a href="manage-requisition.html">Requisition</a>
                    </div>
                </div>
               
                {/* <!-- === CUSTOMER DETAILS === --> */}
                <div className="sh-pose-sale-customer-details-input">
                    <div className="sh-customer-name">
                        <label htmlFor="#">Supplier Name</label>
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
                        <div className="sh-address">
                            <label htmlFor="text">Requisition Date</label>
                            <input type="text" placeholder="2/16/2025"/>
                        </div>
                    </div>
                    <textarea name="" id=""></textarea>
                </div>
             {/*    <!-- === EVERY THING SEARCH BOX === --> */}
                <div className="everyThing-search-box">
                    <input type="text" placeholder="Enter Product Name, Product Model or Bar Code for Scan" name=""
                        id=""/>
                </div>

               {/*  <!-- === PRODUCT ALL DETAILS === --> */}
                <div className="sh-produt-all-details-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Barcode</th>
                                <th>Qty.</th>
                                <th>Rate</th>
                                <th>Sales Rate</th>
                                <th>Dis%</th>
                                <th>VAT%</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="sh-product-search-box"><input type="text" placeholder="Product Name"
                                            name="" id=""/></div>
                                </td>
                                <td className="sh-av-box"><input type="number" value="" name="barcode" id=""/></td>
                                <td className="sh-av-box"><input type="number" value="1" name="qty" id=""/></td>
                                <td className="sh-qty-number-input">
                                    <input type="number" placeholder="" value="" name="rate" id=""/>
                                </td>
                                <td className="sh-rate-input-container">
                                    <input type="number" placeholder="" value="0.00" name="salesrate" id=""/>
                                </td>
                                <td>
                                    <div className="sh-discount-container">
                                        <div className="sh-discount-left-container">
                                            <input type="number" placeholder="" value="0.00" name="dis" id=""/>
                                        </div>
                                        <div className="sh-discount-right-container">
                                            <input type="number" placeholder="" value="0.00" name="dis" id=""/>
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
                                    <input type="number" placeholder="" value="0.00" name="total" id=""/>
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
                                    <div className="sh-product-search-box"><input type="text" placeholder="Product Name"
                                            name="" id=""/></div>
                                </td>
                                <td className="sh-av-box"><input type="number" value="" name="barcode" id=""/></td>
                                <td className="sh-av-box"><input type="number" value="" name="qty" id=""/></td>
                                <td className="sh-qty-number-input">
                                    <input type="number" placeholder="" value="1" name="rate" id=""/>
                                </td>
                                <td className="sh-rate-input-container">
                                    <input type="number" placeholder="" value="0.00" name="salesrate" id=""/>
                                </td>
                                <td>
                                    <div className="sh-discount-container">
                                        <div className="sh-discount-left-container">
                                            <input type="number" placeholder="" value="0.00" name="dis" id=""/>
                                        </div>
                                        <div className="sh-discount-right-container">
                                            <input type="number" placeholder="" value="0.00" name="dis" id=""/>
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
                                    <input type="number" placeholder="" value="0.00" name="total" id=""/>
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
                                <th colSpan="8"></th>
                                <td>
                                    <div className="sh-plus-icon-two">
                                        <a href="#"><i className="fa-solid fa-plus"></i></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- === BOTTOM ITEMS === --> */}
                <div className="sh-bottom-items">
                {/*     <!-- === TOTAL DISCOUNT === --> */}
                    <div className="sh-total-discount">
                        <p>Total Discount</p>
                        <input type="number" value="0.00" name="" id=""/>
                    </div>
                 {/*    <!-- === TOTAL DISCOUNT === --> */}
                    <div className="sh-total-discount">
                        <p>Total Discount</p>
                        <input type="number" value="0.00" name="" id=""/>
                    </div>
                {/*     <!-- === TOTAL DISCOUNT === --> */}
                    <div className="sh-total-discount">
                        <p>Total Discount</p>
                        <input type="number" value="0.00" name="" id=""/>
                    </div>
                </div>
                <div className="sh-submit-button">
                    <a href="#">Submit</a>
                </div>
            </div>

        </div>
    </div>  
        </>
    );
};

export default AddRequisition;