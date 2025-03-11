import { Link } from 'react-router-dom';
import '../report/css/OutletWiseProduct.css'
const OutletWiseProduct = () => {
    return (
   <>
 {/*    <!-- === TOP MENU ITEMS === --> */}
 <div className="owp-sh-top-menu-items">
        <ul>
            <li className="owp-sh-menu-items"><Link to="/OutletReport-page">Outlet Wise Report</Link></li>
            <li className="owp-sh-active-item"><Link to="/OutletWiseProduct-page">Outlet Wise Product</Link></li>
            <li className="owp-sh-menu-items"><Link to="/OutletWiseVariantProduct-page">Outlet Wise Variant Product</Link></li>
        </ul>
    </div>
   {/*  <!-- === PARENT CONTAINER === --> */}
    <div className="owp-sh-parent-container">
      {/*   <!-- === CHILD CONTAINER === --> */}
        <div className="owp-sh-child-container">
           {/*  <!-- === STOCK REPORT CARD SECTION === --> */}
            <div className="owp-sh-stock-report-section">
                <p>Outlet Wise Report</p>
                <a href="#"><i className="fa-solid fa-filter"></i>Filter</a>
            </div>
            <hr/>
           {/*  <!-- === FILTER DROPDOWN SECTION === --> */}
            <div className="owp-sh-filter-drop-down-section">
                <div className="owp-sh-draft-container">
                    <select name="" id="">
                        <option value="1" name="wiselist" id="">All Outlet</option>
                        <option value="1" name="wiselist" id="">Default Outlet</option>
                    </select>
                </div>
                <div className="owp-sh-draft-container">
                    <select name="" id="">
                        <option value="1" name="wiselist" id="">All Products</option>
                    </select>
                </div>
                <div className="owp-sh-draft-container">
                    <input type="text" placeholder="17/02/2025-17/02/2025" value="" name="" id="" autoComplete="off"/>
                </div>
        {/*         <!-- === FILTER SEARCH === --> */}
                <div className="owp-sh-filter-search-box">
                    <i className="fa-solid fa-search"></i>Find
                </div>
              {/*   <!-- === FILTER RESET === --> */}
                <div className="owp-sh-filter-reset-box">
                    <i className="fa-solid fa-arrows-rotate"></i>Reset
                </div>
            </div>
           {/*  <!-- === LINE === --> */}
            <div className="owp-sh-line">
                <hr/>
            </div>
           {/*  <!-- === SHOW & FILE & SEARCH === --> */}
            <div className="owp-show-file-search-container">
                <div className="owp-sh-show-container">
                    <p>Show</p>
                    <select name="" id="">
                        <option value="10" name="show">10</option>
                        <option value="20" name="show">20</option>
                        <option value="30" name="show">30</option>
                        <option value="40" name="show">40</option>
                    </select>
                    <p>Entreis</p>
                </div>
               {/*  <!-- === FILE CONTAINER === --> */}
                <div className="owp-sh-file-container">
                    <a href="#">Excel</a>
                </div>
               {/*  <!-- === SHOW SEARCH CONTAINER === --> */}
                <div className="owp-sh-show-search-container">
                    <label htmlFor="text">Search:</label>
                    <input type="search"/>
                </div>
            </div>
           {/*  <!-- === PRODUCTS DETAILS TABLE === --> */}
            <div className="owp-sh-product-details-table">
                <table>
                    <thead>
                        <tr>
                            <th className="owp-sl" rowSpan="1" colSpan="1">SL</th>
                            <th className="owp-sl" rowSpan="1" colSpan="1">Outlet <br/> Name</th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Product <br/> Name</th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Opening <br/> Qty.<span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Received <br/> Qty. (Purchase) <span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Delivered <br/> Qty. <br/> (Sale) <br/>
                                <span> (-)</span></th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Pur. <br/> Return <br/> Qty. <br/>
                                <span>(-)</span></th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Sale <br/> Ret <br/> Qty<span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Wastage <br/> Qty. <br/><span>(-)</span>
                            </th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Adjustment <br/> Qty.<span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Transfer <br/> Qty<span>
                                    <p>(-)</p>
                                </span></th>
                            <th className="owp-sh-text-right" rowSpan="1" colSpan="1">Transfer <br/> Rec. Qty.<span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="owp-sl" rowSpan="1" colSpan="1">Stock</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th className="owp-sh-total" colSpan="2">Total</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                            <th className="owp-sh-amount">0.000</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td className="owp-sh-text-center" colSpan="13">No data availabe in table</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          {/*   <!-- === SLIDE PAGES === --> */}
            <div className="owp-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="owp-sh-slide-right-item">
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

export default OutletWiseProduct;