import { Link } from 'react-router-dom';
import './css/NewWastage.css'
const NewWastage = () =>{
    return(
        <>
            <div className="nw-sh-parent-section">
       {/*  <!-- === CHILD SECTION === --> */}
        <div className="nw-sh-child-section">
          {/*   <!-- === TOP MENU ITEMS === --> */}
            <div className="nw-sh-top-menu-items">
                <ul>
                    <li className="sh-active-item"><Link to="/newWastage -page">New Wastage</Link></li>
                    <li className="sh-menu-items"><Link to="/wastage-page">Wastage List</Link></li>
                </ul>
            </div>
          {/*   <!-- === REQUISIION LIST SECTION === --> */}
            <div className="nw-sh-draft-sale-section">
              {/*   <!-- === DRAFT SALE TOP ITEM === --> */}
                <div className="nw-sh-requisition-top-item">
                    <p>New Wastage</p>
                </div>
                <hr/>
                <div className="nw-sh-input-form-and-text-box">
             {/*        <!-- === OUTLET CONTAINER === --> */}
                    <div className="nw-sh-input-form-section">
                        <div className="nw-sh-outlet-container">
                            <p>Date</p>
                            <input type="number" placeholder="18/02/2025" name="" id=""/>
                        </div>
                        <div className="nw-sh-outlet-container">
                            <p>Outlet</p>
                            <input type="number" placeholder="Default Outlet" name="" id=""/>
                        </div>
                    </div>
                    <div className="nw-text-aria-box">
                        <label htmlFor="text">Details</label>
                        <textarea name="" placeholder="Details" id=""></textarea>
                    </div>
                </div>
                {/* <!-- === EVERTHING SEARCH BOX === --> */}
                <div className="nw-sh-everything-search-container">
                    <input type="search" placeholder="Enter Product Name, Product Model or Bar Code for Scan"/>
                </div>
              {/*   <!-- === PRODUCT ALL DETAILS === --> */}
                <div className="nw-sh-produt-all-details-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Av.Qty.</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="nw-sh-product-search-box"><input type="text" placeholder="Product Name"
                                            name="" id=""/></div>
                                </td>
                                <td className="nw-sh-avqty-box"><input type="number" value="0" name="avqty" id=""/></td>
                                <td className="nw-sh-barcoee-box"><input type="number" value="" name="barcode" id=""/></td>
                                <td className="nw-sh-qty-number-input">
                                    <input type="number" placeholder="" value="1" name="qty" id=""/>
                                </td>
                                <td className="nw-sh-rate-input-container">
                                    <input type="number" placeholder="" value="0.00" name="rate" id=""/>
                                </td>
                                <td className="nw-sh-total-contaier">
                                    <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="nw-sh-total-text-end" rowSpan="1" colSpan="4">Total Amount:</td>
                                <td className="nw-sh-total-contaier">
                                    <input type="number" placeholder="" value="0.00" name="total" id=""/>
                                </td>
                                <td>
                                    <div className="nw-sh-plus-icon-two">
                                        <a href="#"><i className="fa-solid fa-plus"></i></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="nw-sh-submit-button">
                    <a href="#">Save</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default NewWastage;