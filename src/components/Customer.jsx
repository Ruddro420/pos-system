import { Link } from 'react-router-dom';
import './css/Customer.css'
const Customer = () => {
  return (
    <>
      <div className="cba-customer-container">
      <div className="cba-cusc-top-menus">
          <ul>
            <li>
              <Link to="/customer-page" className="cba-cusc-active-menu">
                Customer List
              </Link>
            </li>
            <li>
              <Link to="/ancus-page" className="cba-cusc-light-up">
                Add New Customer
              </Link>
            </li>
          </ul>
        </div> 
        <div className="cba-cusc-list-container">
          <div className="cba-cusc-heading-add-new-btn">
            <div className="cba-cusc-heading">
              <h2>Customer List</h2>
            </div>
            <div className="cba-cusc-add-new-btn">
              <i className="cba-cusc-add-icon bx bx-plus-circle"></i>
              <Link to="/ancus-page">Add New Customer</Link>
            </div>
          </div>
          <div className="cba-cusc-list-short-dpdwn-search-box">
            <div className="cba-cusc-list-short-dpdwn">
              <h3>Show</h3>
              <select name="10" id="">
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
                <option value="">All</option>
              </select>
              <h3>entries</h3>
            </div>
            <div className="cba-cusc-search-box">
              <legend>
                Search: <input type="text" />
              </legend>
            </div>
          </div>
          <div className="cba-cusc-table-list">
            <table>
              <thead>
                <tr>
                  <th title="SL">SL</th>
                  <th title="Code">Customer Name</th>
                  <th title="Category Name">Customer Number</th>
                  <th title="Status">Total Purchase</th>
                  <th title="Status">Total Points</th>
                  <th title="Status">Status</th>
                  <th title="Action">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Md Adnan Addro</td>
                  <td>019XXXXXXXX</td>
                  <td>50</td>
                  <td>
                    <span>1000</span> Points
                  </td>
                  <td>
                    <span className="cba-cusc-ls1">Level One</span>
                  </td>
                  <td>
                    <a title="Edit" href="#">
                      <i className="cba-cusc-edit-icon bx bx-edit"></i>
                    </a>
                    <a title="Delete" href="#">
                      <i className="cba-cusc-delete-icon bx bx-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Md Adnan Addro</td>
                  <td>019XXXXXXXX</td>
                  <td>50</td>
                  <td>
                    <span>500</span> Points
                  </td>
                  <td>
                    <span className="cba-cusc-ls2">Level Two</span>
                  </td>
                  <td>
                    <a title="Edit" href="#">
                      <i className="cba-cusc-edit-icon bx bx-edit"></i>
                    </a>
                    <a title="Delete" href="#">
                      <i className="cba-cusc-delete-icon bx bx-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Md Adnan Addro</td>
                  <td>019XXXXXXXX</td>
                  <td>50</td>
                  <td>
                    <span>100</span> Points
                  </td>
                  <td>
                    <span className="cba-cusc-ls3">Level Three</span>
                  </td>
                  <td>
                    <a title="Edit" href="#">
                      <i className="cba-cusc-edit-icon bx bx-edit"></i>
                    </a>
                    <a title="Delete" href="#">
                      <i className="cba-cusc-delete-icon bx bx-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr className="cba-cusc-no-data-available">
                  <th colSpan="7">No data available in table</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cba-cusc-entries-details-list-page-btn">
            <div className="cba-cusc-entries-details">
              Showing <span>1</span> to <span>3</span> of <span>3</span> entries
            </div>
            <div className="cba-cusc-list-page-btn">
              <button>Previous</button>
              <h4>1</h4>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
