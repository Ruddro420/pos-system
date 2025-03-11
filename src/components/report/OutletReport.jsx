import { Link } from "react-router-dom";
import "../report/css/OutletReport.css";

const OutletReport = () => {
  return (
    <>
      <div className="or-sh-top-menu-items">
        <ul>
          <li className="or-sh-active-item">
            <Link to="/OutletReport-page">Outlet Wise Report</Link>
          </li>
          <li className="or-sh-menu-items">
            <Link to="/OutletWiseProduct-page">Outlet Wise Product</Link>
          </li>
          <li className="or-sh-menu-items">
            <Link to="/OutletWiseVariantProduct-page">
              Outlet Wise Variant Product
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- === PARENT CONTAINER === --> */}
      <div className="or-sh-parent-container">
        {/*   <!-- === CHILD CONTAINER === --> */}
        <div className="or-sh-child-container">
          {/*  <!-- === STOCK REPORT CARD SECTION === --> */}
      {    <div className="or-sh-stock-report-section">
            <p>Outlet Wise Report</p>
            <a href="#">
              <i className="fa-solid fa-filter"></i>Filter
            </a>
          </div>}
         {/*  <hr /> */}
          {/* <!-- === FILTER DROPDOWN SECTION === --> */}
          <div className="or-sh-filter-drop-down-section">
            <div className="or-sh-draft-container">
              <select name="" id="">
                <option value="1" name="wiselist" id="">
                  All Outlet
                </option>
                <option value="1" name="wiselist" id="">
                  Default Outlet
                </option>
              </select>
            </div>
            <div className="or-sh-draft-container">
              <input
                type="text"
                placeholder="17/02/2025-17/02/2025"
                value=""
                name=""
                id=""
                autoComplete="off"
              />
            </div>
            {/*   <!-- === FILTER SEARCH === --> */}
            <div className="or-sh-filter-search-box">
              <i className="fa-solid fa-search"></i>Find
            </div>
            {/*  <!-- === FILTER RESET === --> */}
            <div className="or-sh-filter-reset-box">
              <i className="fa-solid fa-arrows-rotate"></i>Reset
            </div>
          </div>
          {/*    <!-- === LINE === --> */}
          <div className="or-sh-line">
            <hr />
          </div>
          {/*   <!-- === SHOW & FILE & SEARCH === --> */}
          <div className="or-show-file-search-container">
            <div className="or-sh-show-container">
              <p>Show</p>
              <select name="" id="">
                <option value="10" name="show">
                  10
                </option>
                <option value="20" name="show">
                  20
                </option>
                <option value="30" name="show">
                  30
                </option>
                <option value="40" name="show">
                  40
                </option>
              </select>
              <p>Entreis</p>
            </div>
            {/*    <!-- === FILE CONTAINER === --> */}
            <div className="or-sh-file-container">
              <a href="#">Excel</a>
            </div>
            {/* <!-- === SHOW SEARCH CONTAINER === --> */}
            <div className="or-sh-show-search-container">
              <label htmlFor="text">Search:</label>
              <input type="search" />
            </div>
          </div>
          {/*  <!-- === PRODUCTS DETAILS TABLE === --> */}
          <div className="or-sh-product-details-table">
            <table>
              <thead>
                <tr>
                  <th className="or-sl" rowSpan="1" colSpan="1">
                    SL
                  </th>
                  <th className="or-sl" rowSpan="1" colSpan="1">
                    Outlet <br /> Name
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Opening <br /> Qty.{" "}
                    <span>
                      <p>(+)</p>
                    </span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Received Qty. <br /> (Purchase){" "}
                    <span>
                      <p>(+)</p>
                    </span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Delivered <br /> Qty. (Sale) <span>(-)</span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Pur. <br /> Return <br /> Qty. <span>(-)</span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Sale <br /> Ret. <br /> Qty.
                    <span>
                      <p>(+)</p>
                    </span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Wastage <br /> Qty<span>(-)</span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Adjustment <br /> Qty.<span>(-)</span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Adjustment <br /> Qty.
                    <span>
                      <p>(+)</p>
                    </span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Transfer <br /> Qty
                    <span>
                      <p>(-)</p>
                    </span>
                  </th>
                  <th className="or-sh-text-right" rowSpan="1" colSpan="1">
                    Transfer <br /> Rec. Qty.
                    <span>
                      <p>(+)</p>
                    </span>
                  </th>
                  <th className="sl" rowSpan="1" colSpan="1">
                    Stock
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th className="or-sh-total" colSpan="2">
                    Total
                  </th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                  <th className="or-sh-amount">0.000</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>01</td>
                  <td className="or-sh-text-center">
                    Default <br /> Outlet
                  </td>
                  <td className="or-sh-text-right">0</td>
                  <td className="or-sh-text-right">0</td>
                  <td className="or-sh-text-right">0</td>
                  <td className="or-sh-text-right">0</td>
                  <td className="or-sh-text-right">0.000</td>
                  <td className="or-sh-text-right">0.000</td>
                  <td className="or-sh-text-right">0.000</td>
                  <td className="or-sh-text-right">0.000</td>
                  <td className="or-sh-text-right">0.000</td>
                  <td className="or-sh-text-right">0.000</td>
                  <td className="or-sh-text-right">0.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  <!-- === SLIDE PAGES === --> */}
          <div className="or-sh-slider-pages">
            <p>Showing 0 to 0 of 0 entries</p>
            <div className="or-sh-slide-right-item">
              <a href="#">Previous</a>
              <p>1</p>
              <a href="#">Next</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutletReport;
