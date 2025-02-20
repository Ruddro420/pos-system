import { Link } from 'react-router-dom';
import './css/Ancus.css'
const Ancus = () => {
  return (
    <>
      <div className="cba-add-new-cus-container">
        <div className="cba-ancus-top-menus">
          <ul>
            <li>
              <Link to="/customer-page" className="cba-ancus-light-up">
                Customer
              </Link>
            </li>
            <li>
              <Link
                to="/ancus-page"
                className="cba-ancus-active-menu"
              >
                Add New Customer
              </Link>
            </li>
          </ul>
        </div>
        <div className="cba-ancus-add-container">
          <div className="cba-ancus-heading-add-new-btn">
            <div className="cba-ancus-heading">
              <h2>Add Customer</h2>
            </div>
            <div className="cba-ancus-cate-list-btn">
              <i className="cba-ancus-add-icon bx bx-list-ul"></i>
              <Link to="/customer-page">Customer List</Link>
            </div>
          </div>
          <div className="cba-ancus-category-add-field">
            <div className="cba-ancus-form-con">
              <div className="cba-ancus-label">
                <label htmlFor="customer-name">
                  Customer Name<span className="cba-ancus-required">*</span>
                </label>
                <label htmlFor="customer-number">
                  Customer Number<span className="cba-ancus-required">*</span>
                </label>
              </div>
              <div className="cba-ancus-input">
                <input
                  type="text"
                  name="customer-name"
                  id="customer-name"
                  placeholder="Customer Name"
                />
                <input
                  type="text"
                  name="customer-number"
                  id="customer-number"
                  placeholder="Customer Number"
                />
                <div className="cba-ancus-submit-btn">
                  <input type="submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ancus;
