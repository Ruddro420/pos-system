import { Link } from 'react-router-dom';
import './css/AddOpeningStock.css'
const AddOpeningStock = () => {
  return (
    <>
      {/* === PARENT SECTION === */}
      <div className="sh-adostock-parent-section">
        {/* === CHILD SECTION === */}
        <div className="sh-adostock-child-section">
          {/* === TOP MENU ITEMS === */}
          <div className="sh-adostock-top-menu-items">
            <ul>
              <li className="sh-adostock-menu-items">
                <Link to="/StockOpeningStock-page">Opening Stock List</Link>
              </li>
              <li className="sh-adostock-active-item">
                <Link to="/addOpeningStock-page">Add Opening Stock</Link>
              </li>
              <li className="sh-adostock-menu-items">
                <Link to="/openingStock-page">Opening Stock CSV</Link>
              </li>
            </ul>
          </div>
          {/* === REQUISIION LIST SECTION === */}
          <div className="sh-adostock-draft-sale-section">
            {/* === DRAFT SALE TOP ITEM === */}
            <div className="sh-adostock-requisition-top-item">
              <p>Add Opening Stock</p>
            </div>

            {/* === OUTLET CONTAINER === */}
            <div className="sh-adostock-outlet-container">
              <p>Outlet</p>
              <input type="number" placeholder="Default Outlet" name="" id="" />
            </div>
            {/* === EVERTHING SEARCH BOX === */}
            <div className="sh-adostock-everything-search-container">
              <input
                type="search"
                placeholder="Enter Product Name, Product Model or Bar Code for Scan"
              />
            </div>
            {/* === PRODUCT ALL DETAILS === */}
            <div className="sh-adostock-produt-all-details-container">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Av.Qty.</th>
                    <th>Barcode</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="sh-adostock-product-search-box">
                        <input
                          type="text"
                          placeholder="Product Name"
                          name=""
                          id=""
                        />
                      </div>
                    </td>
                    <td className="sh-adostock-avqty-box">
                      <input type="number" value="0" name="avqty" id="" />
                    </td>
                    <td className="sh-adostock-barcoee-box">
                      <input type="number" value="" name="barcode" id="" />
                    </td>
                    <td className="sh-adostock-qty-number-input">
                      <input
                        type="number"
                        placeholder=""
                        value="1"
                        name="qty"
                        id=""
                      />
                    </td>
                    <td className="sh-adostock-rate-input-container">
                      <input
                        type="number"
                        placeholder=""
                        value="0.00"
                        name="rate"
                        id=""
                      />
                    </td>
                    <td className="sh-adostock-total-contaier">
                      <input
                        type="number"
                        placeholder=""
                        value="0.00"
                        name="total"
                        id=""
                      />
                    </td>
                    <td className="sh-adostock-delet-icon">
                      <a href="#">
                        <a href="#">
                          <i className="fa-solid fa-circle-xmark"></i>
                        </a>
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="sh-adostock-total-text-end" rowSpan="1" colSpan="5">
                      Total Amount:
                    </td>
                    <td className="sh-adostock-total-contaier">
                      <input
                        type="number"
                        placeholder=""
                        value="0.00"
                        name="total"
                        id=""
                      />
                    </td>
                    <td>
                      <div className="sh-adostock-plus-icon-two">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sh-adostock-submit-button">
              <a href="#">Save</a>
            </div>
          </div>
        </div>
      </div>

      {/* === FONT AWSOME LINK === */}
    </>
  );
};

export default AddOpeningStock;
