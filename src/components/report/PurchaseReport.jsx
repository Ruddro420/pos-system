import "../report/css/PurchaseReport.css";
const PurchaseReport = () => {
  return (
    <>
      <div className="counter-section">
        {/* <!-- === TOTAL SALE SECTION === --> */}
        <div className="total-sale-section">
          {/*  <!-- === HOME ICON === --> */}
          <i className="fa-solid fa-house"></i>
          {/* <!-- === SALE TEXT === --> */}
          <div className="sale-text">
            <p>TOTAL PRODUCT Purchase</p>
            <h1>0 BDT</h1>
          </div>
        </div>
        {/* <!-- === TOTAL PAID SECTION === --> */}
        <div className="total-paid-section">
          {/*   <!-- === HOME ICON === --> */}
          <i className="fa-solid fa-check"></i>
          {/*  <!-- === SALE TEXT === --> */}
          <div className="sale-text">
            <p>TOTAL PAID</p>
            <h1>0 BDT</h1>
          </div>
        </div>
        {/* <!-- === TOTAL DUE SECTION === --> */}
        <div className="total-due-section">
          {/*     <!-- === HOME ICON === --> */}
          <i className="fa-solid fa-triangle-exclamation"></i>
          {/*   <!-- === SALE TEXT === --> */}
          <div className="sale-text">
            <p>TOTAL DUE</p>
            <h1>0 BDT</h1>
          </div>
        </div>
      </div>
      {/* <!-- === COUNTER SECTION END === --> */}

      {/* <!-- === MANAGE SECTION === --> */}
      <div className="manage-section">
        {/* <!-- === MANAGE CONTAINER === --> */}
        <div className="manage-container">
          <p>Purchase Report</p>
          {/* <!-- === FILTER AND ADD SECTION === --> */}
          <div className="filter-add-new">
            <div className="filter-container">
              <i className="fa-solid fa-filter"></i>
              <a href="#">Filter</a>
            </div>
          </div>
        </div>
        {/* <!-- === LINE === --> */}
        <hr />
        {/* <!-- === FILTER CONTAINER ITEMS === --> */}
        <div className="filter-container-items">
          <div className="invoice-box">
            <input type="number" placeholder="Invoice" />
          </div>
          <div className="select-input-container">
            <select name="" id="">
              <option value="Outlet">Outlet</option>
              <option value="Outlet"></option>
              <option value="Outlet"></option>
            </select>
          </div>
          <div className="select-input-container">
            <select name="" id="">
              <option value="Outlet">Shop Name</option>
              <option value="Outlet">All</option>
              <option value="Outlet">Walk-In-Customer</option>
            </select>
          </div>
          {/* <!-- === SALE DATE INPUT BOX === --> */}
          <div className="sale-date-input-box">
            <input type="text" placeholder="Sale Date" name="" id="" />
          </div>
          {/*  <!-- === FIND BUTTON === --> */}
          <div className="sh-button-container">
            <div className="sh-find-button">
              <a href="#">Find</a>
            </div>
            <div className="sh-reset-button">
              <a href="#">Reset</a>
            </div>
          </div>
        </div>
        <hr />
        {/* <!-- === SHOW AND SEARCH SECTION === --> */}
        <div className="show-and-search-section">
          {/*  <!-- === SHOW CONTAINER === --> */}
          <div className="show-container">
            <p>Show</p>
            <select name="" id="">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
            </select>
            <p>Entries</p>
          </div>
          {/*  <!-- === SEARCH CONTAINER === --> */}
          <div className="search-container">
            <label htmlFor="text">Search:</label>
            <input type="search" />
          </div>
        </div>
        {/* <!-- === MANAGE SALE DETAILS SECTION === --> */}
        <div className="manage-sale-details-section">
          <table>
            <thead>
              <tr>
                <th>SL</th>
                <th>Invoice No</th>
                <th>Input Invoice No</th>
                <th>Outlet</th>
                <th>Shop Name</th>
                <th>Date</th>
                <th>Total Amount (BDT)</th>
                <th>Paid Amount (BDT)</th>
                <th>Due Amount (BDT)</th>
                <th>Payment Status</th>
              </tr>
            </thead>
          </table>
          {/*     <!-- === EMPTY SECTION === --> */}
          <div className="empty-section">
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>No data available in table</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- === SLIDE PAGES === --> */}
        <div className="sh-slider-pages">
          <p>Showing 4 to 4 of 4 entries</p>
          <div className="sh-slide-right-item">
            <a href="#">Previous</a>
            <p>1</p>
            <a href="#">Next</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseReport;
