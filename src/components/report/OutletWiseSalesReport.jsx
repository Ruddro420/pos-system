
import '../report/css/OutletWiseSalesReport.css'
const OutletWiseSalesReport = () => {
    return (
        <>
             <div className="sh-top-menu-items">
        <ul>
            <li className="sh-menu-items"><a href="/SalesReport-page">Counter Wise Sales Report</a></li>
            <li className="sh-active-item"><a href="/OutletWiseSalesReport-page">Outlet Wise Sales Report</a></li>
        </ul>
    </div>
   {/*  <!-- === COUNTER SECTION === --> */}
    <div className="counter-section">

     {/*    <!-- === TOTAL SALE SECTION === --> */}
        <div className="total-sale-section">
          {/*   <!-- === HOME ICON === --> */}
            <i className="fa-solid fa-house"></i>
         {/*    <!-- === SALE TEXT === --> */}
            <div className="sale-text">
                <p>TOTAL SALE</p>
                <h1>800 BDT</h1>
            </div>
        </div>
      {/*   <!-- === TOTAL PAID SECTION === --> */}
        <div className="total-paid-section">
        {/*     <!-- === HOME ICON === --> */}
            <i className="fa-solid fa-check"></i>
          {/*   <!-- === SALE TEXT === --> */}
            <div className="sale-text">
                <p>COUNTER 01</p>
                <h1>800 BDT</h1>
            </div>
        </div>
    </div>
   {/*  <!-- === COUNTER SECTION END === -->
    <!-- === PARENT CONTAINER === --> */}
    <div className="sh-parent-container">
       {/*  <!-- === CHILD CONTAINER === --> */}
        <div className="sh-child-container">
           {/*  <!-- === STOCK REPORT CARD SECTION === --> */}
            <div className="sh-stock-report-section">
                <p>Outlet Wise Report</p>
                <a href="#"><i className="fa-solid fa-filter"></i>Filter</a>
            </div>
            <hr/>
          {/*   <!-- === FILTER DROPDOWN SECTION === --> */}
            <div className="sh-filter-drop-down-section">
                <div className="sh-draft-container">
                    <select name="" id="">
                        <option value="1" name="wiselist" id="">All Counter</option>
                        <option value="1" name="wiselist" id="">Counter 01</option>
                        <option value="1" name="wiselist" id="">Counter 02</option>
                        <option value="1" name="wiselist" id="">Counter 03</option>
                    </select>
                </div>
                <div className="sh-draft-container">
                    <input type="text" placeholder="17/02/2025-17/02/2025" value="" name="" id="" autoComplete="off"/>
                </div>
               {/*  <!-- === FILTER SEARCH === --> */}
                <div className="sh-filter-search-box">
                    <i className="fa-solid fa-search"></i>Find
                </div>
              {/*   <!-- === FILTER RESET === --> */}
                <div className="sh-filter-reset-box">
                    <i className="fa-solid fa-arrows-rotate"></i>Reset
                </div>
            </div>
           {/*  <!-- === LINE === --> */}
            <div className="sh-line">
                <hr/>
            </div>
          {/*   <!-- === SHOW & FILE & SEARCH === --> */}
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
             {/*    <!-- === FILE CONTAINER === --> */}
                <div className="sh-file-container">
                    <a href="#">Excel</a>
                </div>
              {/*   <!-- === SHOW SEARCH CONTAINER === --> */}
                <div className="sh-show-search-container">
                    <label htmlFor="text">Search:</label>
                    <input type="search"/>
                </div>
            </div>
           {/*  <!-- === PRODUCT ALL DETAILS === --> */}
            <div className="sh-produt-all-details-container">
                <table>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Outlet Name</th>
                            <th>Product Name</th>
                            <th>Qty.</th>
                            <th>Unit Rate</th>
                            <th>Total Rate</th>
                            <th>Sales Rate</th>
                            <th>Dis%</th>
                            <th>VAT%</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                01
                            </td>
                            <td>
                                <p>Counter 01</p>
                            </td>
                            <td>
                                <div className="sh-product-search-box"><p>Product Name......</p></div>
                            </td>
                            <td className="sh-av-box"><p>01</p></td>
                            <td className="sh-qty-number-input">
                                01/kg/L.
                            </td>
                            <td className="sh-rate-input-container">
                                <p>700 tk</p>
                            </td>
                            <td>
                                <div className="sh-discount-container">
                                    <p>1000 tk</p>
                                </div>
                            </td>
                            <td>
                                <p>30%</p>
                            </td>
                            <td>
                                <p>10%</p>
                            </td>
                            <td>
                                <p>800 tk</p>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th colSpan="9">
                                <p>Sub Total:</p>
                            </th>
                            <td>
                                <p>800 tk</p>
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

export default OutletWiseSalesReport;