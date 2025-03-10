import '../purchesCSS/AddPurchase.css'

const AddPurchase = () => {
    return (
      <>
         <div className="sh-parent-section">
       {/*  <!-- === CHILD SECTION === --> */}
        <div className="sh-child-section">
           {/*  <!-- === TOP MENU ITEMS === --> */}
            <div className="sh-top-menu-items">
                <ul>
                    <li className="sh-menu-items"><link href="/manageRequisition-page">Manage Requisition</link></li>
                    <li className="sh-menu-items"><link href="/addRequisition-page">Add Requisition</link></li>
                    <li className="sh-menu-items"><link href="/managePurchase-page">Manage Purchase</link></li>
                    <li className="sh-active-item"><link href="/addPurchase-page">Add Purchase</link></li>
                    <li className="sh-menu-items"><link href="/manageReceived-page">Manage Received</link></li>
                    <li className="sh-menu-items"><link href="/managePayment-page">Manage Payment</link></li>
                </ul>
            </div>
          {/*   <!-- === REQUISIION LIST SECTION === --> */}
            <div className="sh-draft-sale-section">
                <div className="sh-draft-sale-container">
                    {/* <!-- === DRAFT SALE TOP ITEMV === --> */}
                    <div className="sh-requisition-top-item">
                        <p>Add Purchase (Receive)</p>
                        <div className="sh-filter">
                            <a href="#">Manage Purchase</a>
                        </div>
                    </div>
                   
                   {/*  <!-- === CUSTMER SECTION === --> */}
                    <div className="sh-customer-section">
                       {/*  <!-- === CUSTOMER DETAILES === --> */}
                        <div className="sh-suctomer-details">
                            <div className="sh-supplier-name">
                                <p>Supplier Name</p>
                                <input type="text" placeholder="Select Supplier Name" value="" name="" id=""/>
                            </div>
                            <div className="sh-supplier-name">
                                <p>Chalan No</p>
                                <input type="text" placeholder="Chanal No" value="" name="" id=""/>
                            </div>
                            <div className="sh-supplier-name">
                                <p>Purchase Date</p>
                                <input type="text" placeholder="" value="02/16/2025" name="" id=""/>
                            </div>
                        </div>
                       {/*  <!-- === LIST === --> */}
                        <div className="sh-list-container">
                            <div className="sh-list">
                                <input type="radio" value="list" name="regularpurchase"/>
                                <p>Regular Purchase</p>
                            </div>
                            <div className="sh-list">
                                <input type="radio" value="list" name="regularpurchase"/>
                                <p>Draft Sale</p>
                            </div>
                        </div>
                       {/*  <!-- === COMMENT BOX === --> */}
                        <div className="comment-box">
                            <textarea placeholder="Remarks" name="" id=""></textarea>
                        </div>
                       {/*  <!-- === EVERYTHING SEARCH BOX === --> */}
                        <div className="everyThing-search-box">
                            <input type="search" placeholder="Enter Product Name, Product Model or Bar Code for Scan"
                                name="" id=""/>
                        </div>
                      {/*   <!-- === PRODUCT ALL DETAILS === --> */}
                        <div className="sh-produt-all-details-container">
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
                                            <div className="sh-product-search-box"><input type="text"
                                                    placeholder="Product Name" name="" id=""/></div>
                                        </td>
                                        <td className="sh-total-contaier">
                                            <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                        </td>
                                        <td className="sh-av-box"><input type="number" value="" name="barcode" id=""/></td>
                                        <td className="sh-av-box"><input type="number" value="1" name="qty" id=""/></td>
                                        <td className="sh-qty-number-input">
                                            <input type="number" placeholder="" value="0.00" name="rate" id=""/>
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
                                        <th colSpan="10">
                                            <div className="sh-additional">
                                                <a href="#"><i className="fa-solid fa-circle-plus"></i>Add Additional
                                                    Expenses</a>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="sh-plus-icon-two">
                                                <a href="#"><i className="fa-solid fa-plus"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan="9">
                                            <p>Pay Amount:</p>
                                        </th>
                                        <td className="sh-total-contaier">
                                            <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan="9">
                                            <p>Change Amount:</p>
                                        </th>
                                        <td className="sh-total-contaier">
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
    <div className="sh-footer-section">
        <div className="footer-items">
            <div className="sh-footer-total-container">
                <p>Total</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="sh-footer-total-container">
                <p>Product Discount</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="sh-footer-total-container">
                <p>Total VAT</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="sh-footer-total-container">
                <p>Previous Due</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="sh-footer-total-container">
                <p>Net Total</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
            <div className="sh-footer-total-container">
                <p>Current Due</p>
                <input type="number" value="0.00" name="" id=""/>
            </div>
        </div>
       {/*  <!-- === FOOTER BUTTONS === --> */}
         <div className="sh-footer-buttona">
            <a href="#">Payment</a>
            <a href="#">Submit</a>
         </div>
    </div>
      </>
    );
};

export default AddPurchase;