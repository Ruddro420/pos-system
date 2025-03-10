import "../report/css/PurchaseReport.css";
const PurchaseReport = () => {
  return (
    <>
      <div className="pr-counter-section">
        {/* <!-- === TOTAL SALE SECTION === --> */}
        <div className="pr-total-sale-section">
          {/*  <!-- === HOME ICON === --> */}
          <i className="pr-fa-solid fa-house"></i>
          {/* <!-- === SALE TEXT === --> */}
          <div className="pr-sale-text">
            <p>TOTAL PRODUCT Purchase</p>
            <h1>0 BDT</h1>
          </div>
        </div>
        {/* <!-- === TOTAL PAID SECTION === --> */}
        <div className="pr-total-paid-section">
          {/*   <!-- === HOME ICON === --> */}
          <i className="pr-fa-solid fa-check"></i>
          {/*  <!-- === SALE TEXT === --> */}
          <div className="pr-sale-text">
            <p>TOTAL PAID</p>
            <h1>0 BDT</h1>
          </div>
        </div>
        {/* <!-- === TOTAL DUE SECTION === --> */}
        <div className="pr-total-due-section">
          {/*     <!-- === HOME ICON === --> */}
          <i className="pr-fa-solid fa-triangle-exclamation"></i>
          {/*   <!-- === SALE TEXT === --> */}
          <div className="pr-sale-text">
            <p>TOTAL DUE</p>
            <h1>0 BDT</h1>
          </div>
        </div>
      </div>
      {/* <!-- === COUNTER SECTION END === --> */}

      {/* <!-- === MANAGE SECTION === --> */}
      <div className="pr-manage-section">
        {/* <!-- === MANAGE CONTAINER === --> */}
        <div className="pr-manage-container">
          <p>Purchase Report</p>
          {/* <!-- === FILTER AND ADD SECTION === --> */}
          <div className="pr-filter-add-new">
            <div className="pr-filter-container">
              <i className="pr-fa-solid fa-filter"></i>
              <a href="#">Filter</a>
            </div>
          </div>
        </div>
        {/* <!-- === LINE === --> */}
        <hr />
        {/* <!-- === FILTER CONTAINER ITEMS === --> */}
        <div className="pr-filter-container-items">
          <div className="pr-invoice-box">
            <input type="number" placeholder="Invoice" />
          </div>
          <div className="pr-select-input-container">
            <select name="" id="">
              <option value="Outlet">Outlet</option>
              <option value="Outlet"></option>
              <option value="Outlet"></option>
            </select>
          </div>
          <div className="pr-select-input-container">
            <select name="" id="">
              <option value="Outlet">Shop Name</option>
              <option value="Outlet">All</option>
              <option value="Outlet">Walk-In-Customer</option>
            </select>
          </div>
          {/* <!-- === SALE DATE INPUT BOX === --> */}
          <div className="pr-sale-date-input-box">
            <input type="Search" placeholder="Sale Date" name="" id="" />
          </div>
          {/*  <!-- === FIND BUTTON === --> */}
          <div className="pr-sh-button-container">
            <div className="pr-sh-find-button">
              <a href="#">Find</a>
            </div>
            <div className="pr-sh-reset-button">
              <a href="#">Reset</a>
            </div>
          </div>
        </div>
        <hr />
        {/* <!-- === SHOW AND SEARCH SECTION === --> */}
        <div className="pr-show-and-search-section">
          {/*  <!-- === SHOW CONTAINER === --> */}
          <div className="pr-show-container">
            <p>Show</p>
            <select name="" id="">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
            </select>
            <p>Entries</p>
          </div>
          {/*  <!-- === SEARCH CONTAINER === --> */}
          <div className="pr-search-container">
            <label htmlFor="Search">Search:</label>
            <input type="Search" placeholder="" />
          </div>
        </div>
        {/* <!-- === MANAGE SALE DETAILS SECTION === --> */}
        <div className="pr-manage-sale-details-section">
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
            <tbody>
                <tr>
                  <td colSpan={10}>
                    <p>No data available in table</p>
                  </td>
                </tr>
              </tbody>
          </table>
      
        
        </div>
        {/* <!-- === SLIDE PAGES === --> */}
        <div className="pr-sh-slider-pages">
          <p>Showing 4 to 4 of 4 entries</p>
          <div className="pr-sh-slide-right-item">
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
