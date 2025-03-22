import { Link } from 'react-router-dom';
import '../purchesCSS/AddPurchase.css'

const AddPurchase = () => {
    return (
      <>
         <div className="add-purchase-sh-parent-section">
           {/*  <!-- === TOP MENU ITEMS === --> */}
            <div className="add-purchase-sh-top-menu-items">
                <ul>
                    <li className="add-purchase-sh-menu-items"><Link to="/manageRequisition-page">Manage Requisition</Link></li>
                    <li className="add-purchase-sh-menu-items"><Link to="/addRequisition-page">Add Requisition</Link></li>
                    <li className="add-purchase-sh-menu-items"><Link to="/managePurchase-page">Manage Purchase</Link></li>
                    <li className="add-purchase-sh-active-item"><Link to="/addPurchase-page">Add Purchase</Link></li>
                    <li className="add-purchase-sh-menu-items"><Link to="/manageReceived-page">Manage Received</Link></li>
                    <li className="add-purchase-sh-menu-items"><Link to="/PurManagePayment-page">Manage Payment</Link></li>
                </ul>
            </div>
        {/*<!-- === CHILD SECTION === --> */}
        <div className="add-purchase-sh-child-section">
          {/*<!-- === REQUISIION LIST SECTION === --> */}
            <div className="add-purchase-sh-draft-sale-section">
                <div className="add-purchase-sh-draft-sale-container">
                    {/* <!-- === DRAFT SALE TOP ITEMV === --> */}
                    <div className="add-purchase-sh-requisition-top-item">
                        <p>Add Purchase (Receive)</p>
                        <div className="add-purchase-sh-filter">
                            <a href="#">Manage Purchase</a>
                        </div>
                    </div>
                    
                   {/*  <!-- === CUSTMER SECTION === --> */}
                        <div className="add-purchase-sh-customer-section">
                            {/* <!-- === CUSTOMER DETAILES === --> */}
                        <div className="add-purchase-details-subcon">
                            <div className="add-purchase-sh-suctomer-details">
                                <div className="add-purchase-sh-supplier-name">
                                    <p>Supplier Name</p>
                                    <input type="text" placeholder="Select Supplier Name" value="" name="" id=""/>
                                </div>
                                <div className="add-purchase-sh-supplier-name">
                                    <p>Chalan No</p>
                                    <input type="text" placeholder="Chanal No" value="" name="" id=""/>
                                </div>
                            </div>
                            {/*  <!-- === LIST === --> */}
                            <div className="add-purchase-sh-list-container">
                                <div className="add-purchase-sh-supplier-name">
                                    <p>Purchase Date</p>
                                    <input type="text" placeholder="" value="02/16/2025" name="" id=""/>
                                </div>

                                <div className="add-purchase-comment-boxx">
                                    <p>Remarks</p>
                                    <textarea placeholder="Remarks" name="" id=""></textarea>
                                </div>
                            </div>
                            {/*  <!-- === COMMENT BOX === --> */}
                            <div className="add-purchase-comment-box">
                                <div className="add-purchase-sh-list">
                                    <input type="radio" value="list" name="regularpurchase" id='regular-purchase'/>
                                    <label htmlFor="regular-purchase">Regular Purchase</label>
                                </div>
                                <div className="add-purchase-sh-list">
                                    <input type="radio" value="list" name="regularpurchase" id='draft-sale'/>
                                    <label htmlFor="draft-sale">Draft Sale</label>
                                </div>
                            </div>
                        </div>
                       {/*  <!-- === EVERYTHING SEARCH BOX === --> */}
                        <div className="add-purchase-everyThing-search-box">
                            <input type="search" placeholder="Enter Product Name, Product Model or Bar Code for Scan" name="" id=""/>
                        </div>
                      {/*   <!-- === PRODUCT ALL DETAILS === --> */}
                        <div className="add-purchase-sh-produt-all-details-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Stock</th>
                                        <th>Barcode</th>
                                        <th>Qty.</th>
                                        <th>Unit Rate</th>
                                        <th>Total Rate</th>
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
                                            <div className="add-purchase-sh-product-search-box"><input type="text"
                                                    placeholder="Product Name" name="" id=""/></div>
                                        </td>
                                        <td className="add-purchase-sh-total-contaier">
                                            <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                        </td>
                                        <td className="add-purchase-sh-av-box"><input type="number" value="" name="barcode" id=""/></td>
                                        <td className="add-purchase-sh-av-box"><input type="number" value="1" name="qty" id=""/></td>
                                        <td className="add-purchase-sh-qty-number-input">
                                            <input type="number" placeholder="" value="0.00" name="rate" id=""/>
                                        </td>
                                        <td className="add-purchase-sh-rate-input-container">
                                            <input type="number" placeholder="" value="0.00" name="salesrate" id=""/>
                                        </td>
                                        <td>
                                            <div className="add-purchase-sh-discount-container">
                                                <div className="add-purchase-sh-discount-left-container">
                                                    <input type="number" placeholder="" value="0.00" name="dis" id=""/>
                                                </div>
                                                <div className="add-purchase-sh-discount-right-container">
                                                    <input type="number" placeholder="" value="0.00" name="dis" id=""/>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="add-purchase-sh-vatbox-container">
                                                <div className="add-purchase-sh-vat-left-container">
                                                    <input type="number" placeholder="" value="0.0" name="vat" id=""/>
                                                </div>
                                                <div className="add-purchase-sh-vat-right-container">
                                                    <input type="number" placeholder="" value="0.00" name="vat" id=""/>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="add-purchase-sh-vatbox-container">
                                                <div className="add-purchase-sh-vat-left-container">
                                                    <input type="number" placeholder="" value="0.0" name="vat" id=""/>
                                                </div>
                                                <div className="add-purchase-sh-vat-right-container">
                                                    <input type="number" placeholder="" value="0.00" name="vat" id=""/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="add-purchase-sh-total-contaier">
                                            <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                        </td>
                                        <td className="add-purchase-sh-delet-icon">
                                            <a href="#">
                                                <i className="fa-solid fa-circle-xmark"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="9">
                                            <p>Pay Amount:</p>
                                        </td>
                                        <td className="add-purchase-sh-total-contaier">
                                            <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                        </td>
                                        <td>
                                            <div className="add-purchase-sh-plus-icon-two">
                                                <a href="#"><i className="fa-solid fa-plus"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="9">
                                            <p>Change Amount:</p>
                                        </td>
                                        <td className="add-purchase-sh-total-contaier">
                                            <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  {/*   <!-- === FOOTER === --> */}
    <div className="add-purchase-sh-footer-section">
        <div className="add-purchase-footer-items">
            <div className="add-purchase-sh-footer-total-container">
                <p>Total</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="add-purchase-sh-footer-total-container">
                <p>Product Discount</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="add-purchase-sh-footer-total-container">
                <p>Total VAT</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="add-purchase-sh-footer-total-container">
                <p>Previous Due</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="add-purchase-sh-footer-total-container">
                <p>Net Total</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="add-purchase-sh-footer-total-container">
                <p>Current Due</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            {/*  <!-- === FOOTER BUTTONS === --> */}
            <div className="add-purchase-sh-footer-buttona">
                <a href="#">Payment</a>
                <a href="#">Submit</a>
            </div>
        </div>
    </div>
      </>
    );
};

export default AddPurchase;