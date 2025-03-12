import '../components/css/StockReport.css'
const StockReport = () => {
    return (
        <>
            <div className="sar-sh-parent-container">
         {/* === CHILD CONTAINER === */}
        <div className="sar-sh-child-container">
            {/*  === STOCK REPORT CARD SECTION === */}
            <div className="sar-sh-stock-report-section">
                <p>Stock Report</p>
                <a href="#"><i className="fa-solid fa-filter"></i>Filter</a>
            </div>
           
             {/* === FILTER DROPDOWN SECTION === */}
            <div className="sar-sh-filter-drop-down-section">
                <div className="sar-sh-draft-container">
                    <input type="text" placeholder="Select Category" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sar-sh-draft-container">
                    <input type="text" placeholder="Select Product" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sar-sh-draft-container">
                    <input type="text" placeholder="Select Brand" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sar-sh-draft-container">
                    <input type="text" placeholder="Select Supplier" value="" name="" id="" autoComplete="off"/>
                </div>
                <div className="sar-sh-draft-container">
                    <input type="text" placeholder="17/02/2025-17/02/2025" value="" name="" id="" autoComplete="off"/>
                </div>
                 {/* === FILTER SEARCH === */}
                <div className="sar-sh-filter-search-box">
                    <i className="fa-solid fa-search"></i>Find
                </div>
            {/* - === FILTER RESET === */}
                <div className="sar-sh-filter-reset-box">
                    <i className="fa-solid fa-arrows-rotate"></i>Reset
                </div>
            </div>
            {/*  === LINE === */}
            <div className="sar-sh-line">
            
            </div>
            {/*  === STOCK AND QTY CONTAINER === */}
            <div className="sar-sh-stock-qty-container">
                <table>
                    <tbody>
                        <tr>
                            <td className="sar-text-start">Opening Stock:</td>
                            <td className="sar-text-end">undefinded QTY</td>
                            <td className="sar-text-last"></td>
                        </tr>
                        <tr>
                            <td className="sar-text-start">Current Stock:</td>
                            <td className="sar-text-end">undefinded QTY</td>
                            <td className="sar-text-last"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
             {/* === SHOW & FILE & SEARCH === */}
            <div className="sar-show-file-search-container">
                <div className="sar-sh-show-container">
                    <p>Show</p>
                    <select name="" id="">
                        <option value="10" name="show">10</option>
                        <option value="20" name="show">20</option>
                        <option value="30" name="show">30</option>
                        <option value="40" name="show">40</option>
                    </select>
                    <p>Entreis</p>
                </div>
                {/*  === FILE CONTAINER === */}
                <div className="sar-sh-file-container">
                    <a href="#">Excel</a>
                    <a href="#">Hide/Unhide Zero Value Rows</a>
                </div>
                {/*  === SHOW SEARCH CONTAINER === */}
                <div className="sar-sh-show-search-container">
                    <label htmlFor="text">Search:</label>
                    <input type="search"/>
                </div>
            </div>
     {/*    - === PRODUCTS DETAILS TABLE === */}
            <div className="sar-sh-product-details-table">
                <table>
                    <thead>
                        <tr>
                            <th className="sar-sl" rowSpan="1" colSpan="1">SL</th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Product Name</th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Category</th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Sale Price</th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Purchase Price</th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Opening Qty. <span>
                                <p>(+)</p>
                                </span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Received Qty (Purchase) <span>
                                <p>(+)</p>
                                </span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Delivered Qty.(Sale) <span>(-)</span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Pur. Return Qty. <span>(-)</span></th>
                            <th className="sl" rowSpan="1" colSpan="1">Pur Return Amount <span>(-)</span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Sale Ret. Qty. <span>
                                <p>(+)</p>
                                </span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Sale Ret Amount <span>
                                <p>(+)</p>
                                </span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Wastage Qty. <span>(-)</span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Wastage Amount <span>(-)</span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Adjustment Qty. <span>
                                <p>(+)</p>
                                </span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Adjustment Qty. <span>(-)</span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Transfer Qty. <span>(-)</span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Transfer Rec.Qty. <span>
                                    <p>(+)</p>
                                </span></th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Stock</th>
                            <th className="sar-sl" rowSpan="1" colSpan="1">Stock Valuation</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td className="sar-sh-total" colSpan="5">Total</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                            <td className="sar-sh-amount">0.000</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td colSpan="sar-20">
                                No data availabe in table
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*   === SLIDE PAGES === */}
            <div className="sar-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="sar-sh-slide-right-item">
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

export default StockReport;