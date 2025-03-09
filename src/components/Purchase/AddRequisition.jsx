import { Link } from 'react-router-dom';
import '../purchesCSS/AddRequisition.css'
const AddRequisition = () => {
    return (
        <>
           <div className="addrequisition-sh-parent-section">
        {/* <!-- === CHILD SECTION === --> */}
        <div className="addrequisition-sh-top-menu-items">
                <ul>
                    <li className="addrequisition-sh-menu-items"><Link to="/manageRequisition-page">Manage Requisition</Link></li>
                    <li className="addrequisition-sh-active-item"><Link to="/addRequisition-page">Add Requisition</Link></li>
                    <li className="addrequisition-sh-menu-items"><Link to="/managePurchase-page">Manage Purchase</Link></li>
                    <li className="addrequisition-sh-menu-items"><Link to="/addPurchase-page">Add Purchase</Link></li>
                    <li className="addrequisition-sh-menu-items"><Link to="/manageReceived-page">Manage Received</Link></li>
                    <li className="addrequisition-sh-menu-items"><Link to="/managePayment-page">Manage Payment</Link></li>
                </ul>
            </div>
        <div className="addrequisition-sh-child-section">
       {/*      <!-- === TOP MENU ITEMS === --> */}
            
      {/*       <!-- === POSE SALE CUSTOMER DETAILS === --> */}
            <div className="addrequisition-sh-pose-sale-customer-section">
            {/*     <!-- === ADD REQUISITION CONTAINER === --> */}
                <div className="addrequisition-sh-add-requisition-container">
                    <p>Add Requisition</p>
                    <div className="addrequisition-sh-requisition-list">
                        <a href="manage-requisition.html">
                            <i className='bx bx-list-ul'></i>
                            Requisition List
                        </a>
                    </div>
                </div>
               
                {/* <!-- === CUSTOMER DETAILS === --> */}
                <div className="addrequisition-sh-pose-sale-customer-details-input">
                    <div className="addrequisition-sh-customer-name">
                        <div className="addrequisition-sh-customer-name-container">
                            <label htmlFor="#">Supplier Name</label>
                            <select name="" id="">
                                <option value="Walk-In-Customer">Walk-In-Customer</option>
                                <option value="Walk-In-Customer">Subas Hembrom</option>
                            </select>
                        </div>
                        <div className="addrequisition-sh-address">
                            <label htmlFor="text">Requisition Date</label>
                            <input type="text" placeholder="2/16/2025"/>
                        </div>
                    </div>
                    <textarea name="" id="" placeholder='Remarks'></textarea>
                </div>
             {/*    <!-- === EVERY THING SEARCH BOX === --> */}
                <div className="addrequisition-everyThing-search-box">
                    <input type="text" placeholder="Enter Product Name, Product Model or Bar Code for Scan" name=""
                        id=""/>
                </div>

               {/*  <!-- === PRODUCT ALL DETAILS === --> */}
                <div className="addrequisition-sh-produt-all-details-container">
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
                                    <div className="addrequisition-sh-product-search-box"><input type="text" placeholder="Product Name"
                                            name="" id=""/></div>
                                </td>
                                <td className="addrequisition-sh-av-box"><input type="number" value="" name="barcode" id=""/></td>
                                <td className="addrequisition-sh-av-box"><input type="number" value="" name="qty" id=""/></td>
                                <td className="addrequisition-sh-qty-number-input">
                                    <input type="number" placeholder="" value="" name="rate" id=""/>
                                </td>
                                <td className="addrequisition-sh-rate-input-container">
                                    <input type="number" placeholder="" value="0.00" name="salesrate" id=""/>
                                </td>
                                <td>
                                    <div className="addrequisition-sh-discount-container">
                                        <div className="addrequisition-sh-discount-left-container">
                                            <input type="number" placeholder="" value="0.00" name="dis" id=""/>
                                        </div>
                                        <div className="addrequisition-sh-discount-right-container">
                                            <input type="number" placeholder="" value="0.00" name="dis" id=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="addrequisition-sh-vatbox-container">
                                        <div className="addrequisition-sh-vat-left-container">
                                            <input type="number" placeholder="" value="0.0" name="vat" id=""/>
                                        </div>
                                        <div className="addrequisition-sh-vat-right-container">
                                            <input type="number" placeholder="" value="0.00" name="vat" id=""/>
                                        </div>
                                    </div>
                                </td>
                                <td className="addrequisition-sh-total-contaier">
                                    <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                </td>
                                <td className="addrequisition-sh-delet-icon"><a href="#">
                                        <a href="#">
                                            <i className="fa-solid fa-circle-xmark"></i>
                                        </a>
                                    </a></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="addrequisition-sh-product-search-box"><input type="text" placeholder="Product Name"
                                            name="" id=""/></div>
                                </td>
                                <td className="addrequisition-sh-av-box"><input type="number" value="" name="barcode" id=""/></td>
                                <td className="addrequisition-sh-av-box"><input type="number" value="" name="qty" id=""/></td>
                                <td className="addrequisition-sh-qty-number-input">
                                    <input type="number" placeholder="" value="" name="rate" id=""/>
                                </td>
                                <td className="addrequisition-sh-rate-input-container">
                                    <input type="number" placeholder="" value="0.00" name="salesrate" id=""/>
                                </td>
                                <td>
                                    <div className="addrequisition-sh-discount-container">
                                        <div className="addrequisition-sh-discount-left-container">
                                            <input type="number" placeholder="" value="0.00" name="dis" id=""/>
                                        </div>
                                        <div className="addrequisition-sh-discount-right-container">
                                            <input type="number" placeholder="" value="0.00" name="dis" id=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="addrequisition-sh-vatbox-container">
                                        <div className="addrequisition-sh-vat-left-container">
                                            <input type="number" placeholder="" value="0.0" name="vat" id=""/>
                                        </div>
                                        <div className="addrequisition-sh-vat-right-container">
                                            <input type="number" placeholder="" value="0.00" name="vat" id=""/>
                                        </div>
                                    </div>
                                </td>
                                <td className="addrequisition-sh-total-contaier">
                                    <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                </td>
                                <td className="addrequisition-sh-delet-icon"><a href="#">
                                        <a href="#">
                                            <i className="fa-solid fa-circle-xmark"></i>
                                        </a>
                                    </a></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td colSpan="8"></td>
                                <td>
                                    <div className="addrequisition-sh-plus-icon-two">
                                        <a href="#"><i className="fa-solid fa-plus"></i></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- === BOTTOM ITEMS === --> */}
                <div className="addrequisition-sh-bottom-items">
                {/*     <!-- === TOTAL DISCOUNT === --> */}
                    <div className="addrequisition-sh-total-discount">
                        <p>Total Discount</p>
                        <input type="number" value="0.00" name="" id=""/>
                    </div>
                 {/*    <!-- === TOTAL DISCOUNT === --> */}
                    <div className="addrequisition-sh-total-discount">
                        <p>Total Discount</p>
                        <input type="number" value="0.00" name="" id=""/>
                    </div>
                {/*     <!-- === TOTAL DISCOUNT === --> */}
                    <div className="addrequisition-sh-total-discount">
                        <p>Total Discount</p>
                        <input type="number" value="0.00" name="" id=""/>
                    </div>
                </div>
                <div className="addrequisition-sh-submit-button">
                    <a href="#">Submit</a>
                </div>
            </div>

        </div>
    </div>  
        </>
    );
};

export default AddRequisition;