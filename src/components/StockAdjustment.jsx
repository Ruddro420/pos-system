import "../components/css/StockAdjustment.css";
const StockAdjustment = () => {
  return (
    <>
      {/*  === PARENT SECTION ==   */}
      <div className="sa-sh-parent-section">
        {/*  === CHILD SECTION ==    */}
        <div className="sa-sh-child-section">
          {/*  - === TOP MENU ITEMS ==  */}
          <div className="sa-sh-top-menu-items">
            <ul>
              <li className="sa-sh-active-item">
                <a href="addjustment-list.html">Addjustment List</a>
              </li>
              <li className="sa-sh-menu-items">
                <a href="new-addjustment.html">New Addjustment</a>
              </li>
            </ul>
          </div>
          {/*   === REQUISIION LIST SECTION ==  */}
          <div className="sa-sh-draft-sale-section">
            <div className="sa-sh-draft-sale-container">
              {/*  - === DRAFT SALE TOP ITEMV ==  */}
              <div className="sa-sh-requisition-top-item">
                <p>Manage Addjustment</p>
                {/*  === DRAFT SALE TOP RIGHT ITMES == */}
                <div className="sa-sh-draft-sale-top-right-items">
                  <div className="sa-sh-filter">
                    <i className="fa-solid fa-filter"></i>
                    <a href="#">Filter</a>
                  </div>
                  <div className="sa-sh-filter">
                    <i className="fa-solid fa-circle-plus"></i>
                    <a href="new-addjustment.html">New Addjustment</a>
                  </div>
                </div>
              </div>
            </div>

            {/* === FILTER DROPDOWN SECTION == */}
            <div className="sa-sh-filter-drop-down-section">
              <div className="sa-sh-draft-container">
                {
                  <input
                    type="text"
                    placeholder="Select Requisition No."
                    value=""
                    name=""
                    id=""
                    autoComplete="off"
                  />
                }
              </div>
              <div className="sa-sh-draft-container">
                <input
                  type="text"
                  placeholder="All Supplier"
                  value=""
                  name=""
                  id=""
                  autoComplete="off"
                />
              </div>
              <div className="sa-sh-draft-container">
                <input
                  type="text"
                  placeholder="02/16/2025-02/16/2025"
                  value=""
                  name=""
                  id=""
                  autoComplete="off"
                />
              </div>
              {/*  === FILTER SEARCH ==  */}
              <div className="sa-sh-filter-search-box">
                <i className="fa-solid fa-search"></i>Find
              </div>
              {/*  === FILTER RESET == */}
              <div className="sa-sh-filter-reset-box">
                <i className="fa-solid fa-arrows-rotate"></i>Reset
              </div>
            </div>
            {/* === LINE == */}
            <div className="sa-sh-line"></div>
            {/*  === SHOW AND SEARCH CONTAINER ==  */}
            <div className="sa-sh-show-and-search-container">
              <div className="sa-sh-show-container">
                <p>Show</p>
                <select name="">
                  <option value="number" name="show">
                    10
                  </option>
                  <option value="number" name="show">
                    20
                  </option>
                  <option value="number" name="show">
                    30
                  </option>
                  <option value="number" name="show">
                    40
                  </option>
                  <option value="number" name="show">
                    50
                  </option>
                  <option value="number" name="show">
                    100
                  </option>
                </select>
                <p>Entries</p>
              </div>

              <div className="sa-sh-search-container">
                <p>Search:</p>
                <input type="search" placeholder="" name="" id="" />
              </div>
            </div>

            <div className="sa-manage-sale-details-section">
              <table>
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Addjustment No.</th>
                    <th>Date</th>
                    <th>Outlate Name</th>
                    <th>Added By</th>
                    <th>Total Amount (BDT)</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </table>
              {/*  === EMPTY SECTION ==    */}
              <div className="sa-empty-section">
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
            <div className="sa-sh-slider-pages">
              <p>Showing 0 to 0 of 0 entries</p>
              <div className="sa-sh-slide-right-item">
                <a href="#">Previous</a>
                <p>1</p>
                <a href="#">Next</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockAdjustment;
