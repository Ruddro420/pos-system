import "./css/StockManagementCSS/MySubscription.css";
const MySubscription = () => {
  return (
    <>
      <div className="cba-mysubdetails-subscription-container">
        <div className="cba-mysubdetails-list-container">
          <div className="cba-mysubdetails-heading-add-new-btn">
            <div className="cba-mysubdetails-heading">
              <h2>My Subscription</h2>
            </div>
          </div>
          <div className="cba-mysubdetails-list-short-dpdwn-search-box">
            <div className="cba-mysubdetails-list-short-dpdwn">
              <h3>Show</h3>
              <select name="10" id="">
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
                <option value="">All</option>
              </select>
              <h3>entries</h3>
            </div>
            <div className="cba-mysubdetails-search-box">
              <legend>
                Search: <input type="text" />
              </legend>
            </div>
          </div>
          <div className="cba-mysubdetails-table-list">
            <table>
              <thead>
                <tr>
                  <th title="SL">SL</th>
                  <th title="Subscription ID">Subscription ID</th>
                  <th title="Package Name">Package Name</th>
                  <th title="Total Amount">Total Amount</th>
                  <th title="Created at">Created at</th>
                  <th title="Next Invoice Date">Next Invoice Date</th>
                  <th title="Remaining Day">Remaining Day</th>
                  <th title="Package Duration">Package Duration</th>
                  <th title="Package Status">Payment Status</th>
                  <th title="Active Status">Active Status</th>
                  <th title="Action">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1101</td>
                  <td>Basic</td>
                  <td>
                    <span className="cba-mysubdetails-tk-symbol">৳</span> 999
                  </td>
                  <td>01-02-2025</td>
                  <td>01-03-2025</td>
                  <td>28 Days</td>
                  <td>1 Month</td>
                  <td>
                    <span className="cba-mysubdetails-payment-received">Received</span>
                  </td>
                  <td>
                    <span className="cba-mysubdetails-active">Active</span>
                  </td>
                  <td>
                    <div className="cba-mysubdetails-action-btn">
                      <a title="Edit" href="#">
                        <i className="cba-mysubdetails-edit-icon bx bx-edit"></i>
                      </a>
                      <a title="Delete" href="#">
                        <i className="cba-mysubdetails-delete-icon bx bx-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1102</td>
                  <td>Stater</td>
                  <td>
                    <span className="cba-mysubdetails-tk-symbol">৳</span> 2499
                  </td>
                  <td>01-03-2025</td>
                  <td>01-04-2025</td>
                  <td>30 Days</td>
                  <td>1 Month</td>
                  <td>
                    <span className="cba-mysubdetails-payment-pending">Pending</span>
                  </td>
                  <td>
                    <span className="cba-mysubdetails-inactive">Inactive</span>
                  </td>
                  <td>
                    <div className="cba-mysubdetails-action-btn">
                      <a title="Edit" href="#">
                        <i className="cba-mysubdetails-edit-icon bx bx-edit"></i>
                      </a>
                      <a title="Delete" href="#">
                        <i className="cba-mysubdetails-delete-icon bx bx-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1103</td>
                  <td>Premium</td>
                  <td>
                    <span className="cba-mysubdetails-tk-symbol">৳</span> 3399
                  </td>
                  <td>01-04-2025</td>
                  <td>01-05-2025</td>
                  <td>30 Days</td>
                  <td>1 Month</td>
                  <td>
                    <span className="cba-mysubdetails-payment-due">Due</span>
                  </td>
                  <td>
                    <span className="cba-mysubdetails-inactive">Inactive</span>
                  </td>
                  <td>
                    <div className="cba-mysubdetails-action-btn">
                      <a title="Edit" href="#">
                        <i className="cba-mysubdetails-edit-icon bx bx-edit"></i>
                      </a>
                      <a title="Delete" href="#">
                        <i className="cba-mysubdetails-delete-icon bx bx-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="cba-mysubdetails-no-data-available">
                  <th colSpan="11">No data available in table</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cba-mysubdetails-entries-details-list-page-btn">
            <div className="cba-mysubdetails-entries-details">
              Showing 1 to 3 of 3 entries
            </div>
            <div className="cba-mysubdetails-list-page-btn">
              <button>Previous</button>
              <h4>
                1
              </h4>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySubscription;
