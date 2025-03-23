import { Link } from "react-router-dom";
import "./css/BrandPage.css";
const BrandPage = () => {
  return (
    <>
      <div className="bp-main-container">
        <div className="bp-brand-container">
          <div className="bp-top-menus">
            <ul>
              <li>
                <Link to="/brand-page" className="bp-active-menu">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/AddNewBrand-page" className="bp-light-up">
                  Add New Brand
                </Link>
              </li>
            </ul>
          </div>
          <div className="bp-list-container">
            <div className="bp-heading-add-new-btn">
              <div className="bp-heading">
                <h2>Brand List</h2>
              </div>
              <div className="bp-add-new-btn">
                <i className="bp-add-icon bx bx-plus-circle"></i>
                <Link to="/AddNewBrand-page">Add New Brand</Link>
              </div>
            </div>
            <div className="bp-list-short-dpdwn-search-box">
              <div className="bp-list-short-dpdwn">
                <h3>Show</h3>
                <select name="10" id="">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                  <option value="">All</option>
                </select>
                <h3>entries</h3>
              </div>
              <div className="bp-search-box">
                <legend>
                  Search: <input type="text" />
                </legend>
              </div>
            </div>
            <div className="bp-table-list">
              <table>
                <thead>
                  <tr>
                    <th title="SL">SL</th>
                    <th title="Code">Code</th>
                    <th title="Category Name">Brand Name</th>
                    <th title="Status">Status</th>
                    <th title="Action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>101</td>
                    <td>Apex</td>
                    <td>
                      <span className="bp-s-active">Active</span>
                    </td>
                    <td>
                      <a title="Edit" href="#">
                        <i className="bp-edit-icon bx bx-edit"></i>
                      </a>
                      <a title="Delete" href="#">
                        <i className="delete-icon bx bx-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>102</td>
                    <td>Bata</td>
                    <td>
                      <span className="bp-s-inactive">Inactive</span>
                    </td>
                    <td>
                      <a title="Edit" href="#">
                        <i className="edit-icon bx bx-edit"></i>
                      </a>
                      <a title="Delete" href="#">
                        <i className="delete-icon bx bx-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>103</td>
                    <td>Sara</td>
                    <td>
                      <span className="bp-active">Active</span>
                    </td>
                    <td>
                      <a title="Edit" href="#">
                        <i className="edit-icon bx bx-edit"></i>
                      </a>
                      <a title="Delete" href="#">
                        <i className="delete-icon bx bx-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>104</td>
                    <td>Richman</td>
                    <td>
                      <span className="bp-inactive">Inactive</span>
                    </td>
                    <td>
                      <a title="Edit" href="#">
                        <i className="edit-icon bx bx-edit"></i>
                      </a>
                      <a title="Delete" href="#">
                        <i className="delete-icon bx bx-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>105</td>
                    <td>Sailor</td>
                    <td>
                      <span className="bp-active">Active</span>
                    </td>
                    <td>
                      <a title="Edit" href="#">
                        <i className="edit-icon bx bx-edit"></i>
                      </a>
                      <a title="Delete" href="#">
                        <i className="delete-icon bx bx-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bp-entries-details-list-page-btn">
              <div className="bp-entries-details">
                Showing <span>1</span> to <span>5</span> of <span>5</span>{" "}
                entries
              </div>
              <div className="bp-list-page-btn">
                <button>Previous</button>
                <h4>
                  <span>1</span>
                </h4>
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandPage;
