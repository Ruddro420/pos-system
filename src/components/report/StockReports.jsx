import '../report/css/StockReports.css'

const StockReports = () => {
    return (
        <>
          <div className="sh-parent-container">
      {/*   <!-- === CHILD CONTAINER === --> */}
        <div className="sar-sh-child-container">
           {/*  <!-- === STOCK REPORT CARD SECTION === --> */}
            <div className="sh-stock-report-section">
                <p>Stock Report</p>
                <a href="#"><i className="fa-solid fa-filter"></i>Filter</a>
            </div>
            <hr/>
           {/*  <!-- === FILTER DROPDOWN SECTION === --> */}
           <div className="sh-filter-drop-down-section">
                <div className="sh-draft-container">
                    <input type="text" placeholder="Select Category" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <input type="text" placeholder="Select Product" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <input type="text" placeholder="Select Brand" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <input type="text" placeholder="Select Supplier" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sh-draft-container">
                    <input type="text" placeholder="17/02/2025-17/02/2025" value="" name="" id="" autoComplete="off"/>
                </div>
               {/*  <!-- === FILTER SEARCH === --> */}
               <div className="sh-filter-search-box">
                    <i className="fa-solid fa-search"></i>Find
                </div>
               {/*  <!-- === FILTER RESET === --> */}
                <div className="sh-filter-reset-box">
                    <i className="fa-solid fa-arrows-rotate"></i>Reset
                </div>
            </div>
          {/*   <!-- === LINE === --> */}
            <div className="sh-line">
               
            </div>
          {/*   <!-- === STOCK AND QTY CONTAINER === --> */}
            <div className="sh-stock-qty-container">
                <table>
                    <tbody>
                        <tr>
                            <td className="text-start">Opening Stock:</td>
                            <td className="text-end">undefinded QTY</td>
                            <td className="text-last"></td>
                        </tr>
                        <tr>
                            <td className="text-start">Current Stock:</td>
                            <td className="text-end">undefinded QTY</td>
                            <td className="text-last"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <!-- === SHOW & FILE & SEARCH === --> */}
            <div className="show-file-search-container">
                <div className="sh-show-container">
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
                <div className="sh-file-container">
                    <a href="#">Excel</a>
                    <a href="#">Hide/Unhide Zero Value Rows</a>
                </div>
              {/*   <!-- === SHOW SEARCH CONTAINER === --> */}
                <div className="sh-show-search-container">
                    <label htmlFor="text">Search:</label>
                    <input type="search"/>
                </div>
            </div>
            {/* <!-- === PRODUCTS DETAILS TABLE === --> */}
            <div className="sh-product-details-table">
                <table>
                    <thead>
                        <tr>
                            <th className="sl" rowSpan="1" colSpan="1">SL</th>
                            <th className="sl" rowSpan="1" colSpan="1">Product Name</th>
                            <th className="sl" rowSpan="1" colSpan="1">Category</th>
                            <th className="sl" rowSpan="1" colSpan="1">Sale Price</th>
                            <th className="sl" rowSpan="1" colSpan="1">Purchase Price</th>
                            <th className="sl" rowSpan="1" colSpan="1">Opening Qty. <span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Received Qty (Purchase) <span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Delivered Qty.(Sale) <span>(-)</span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Pur. Return Qty. <span>(-)</span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Pur Return Amount <span>(-)</span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Sale Ret. Qty. <span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Sale Ret Amount <span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Wastage Qty. <span>(-)</span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Wastage Amount <span>(-)</span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Adjustment Qty. <span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Adjustment Qty. <span>(-)</span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Transfer Qty. <span>(-)</span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Transfer Rec.Qty. <span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Stock</th>
                            <th className="sl" rowSpan="1" colSpan="1">Stock Valuation</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td className="sh-total" colSpan="5">Total</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                            <td className="sh-amount">0.000</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td colSpan="20">
                                <div className="empty-text">
                                    <p>No data availabe in table</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="sh-slide-right-item">
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

export default StockReports;