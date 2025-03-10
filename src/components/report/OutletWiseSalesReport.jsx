
import '../report/css/OutletWiseSalesReport.css'
const OutletWiseSalesReport = () => {
    return (
        <>
    <div className="owsr-sh-top-menu-items">
        <ul>
            <li className="owsr-sh-menu-items"><a href="/SalesReport-page">Counter Wise Sales Report</a></li>
            <li className="owsr-sh-active-item"><a href="/OutletWiseSalesReport-page">Outlet Wise Sales Report</a></li>
        </ul>
    </div>
   {/*  <!-- === COUNTER SECTION === --> */}
    <div className="owsr-counter-section">

     {/*    <!-- === TOTAL SALE SECTION === --> */}
        <div className="owsr-total-sale-section">
          {/*   <!-- === HOME ICON === --> */}
            <i className="owsr-fa-solid fa-house"></i>
         {/*    <!-- === SALE TEXT === --> */}
            <div className="owsr-sale-text">
                <p>TOTAL SALE</p>
                <h1>800 BDT</h1>
            </div>
        </div>
      {/*   <!-- === TOTAL PAID SECTION === --> */}
        <div className="owsr-total-paid-section">
        {/*     <!-- === HOME ICON === --> */}
            <i className="owsr-fa-solid fa-check"></i>
          {/*   <!-- === SALE TEXT === --> */}
            <div className="owsr-sale-text">
                <p>COUNTER 01</p>
                <h1>800 BDT</h1>
            </div>
        </div>
    </div>
   {/*  <!-- === COUNTER SECTION END === -->
    <!-- === PARENT CONTAINER === --> */}
    <div className="owsr-sh-parent-container">
       {/*  <!-- === CHILD CONTAINER === --> */}
        <div className="owsr-sh-child-container">
           {/*  <!-- === STOCK REPORT CARD SECTION === --> */}
            <div className="owsr-sh-stock-report-section">
                <p>Outlet Wise Report</p>
                <a href="#"><i className="owsr-fa-solid fa-filter"></i>Filter</a>
            </div>
            <hr/>
          {/*   <!-- === FILTER DROPDOWN SECTION === --> */}
            <div className="owsr-sh-filter-drop-down-section">
               

            <div className="owsr-sh-draft-container">
                    <select name="" id="">
                        <option value="1" name="wiselist" id="">All Counter</option>
                        <option value="1" name="wiselist" id="">Counter 01</option>
                        <option value="1" name="wiselist" id="">Counter 02</option>
                        <option value="1" name="wiselist" id="">Counter 03</option>
                    </select>
                </div>
                <div className="owsr-sh-draft-container">
                    <input type="text" placeholder="17/02/2025-17/02/2025" value="" name="" id="" autoComplete="off"/>
                </div>
               {/*  <!-- === FILTER SEARCH === --> */}
                <div className="owsr-sh-filter-search-box">
                    <i className="owsr-fa-solid fa-search"></i>Find
                </div>
              {/*   <!-- === FILTER RESET === --> */}
                <div className="owsr-sh-filter-reset-box">
                    <i className="owsr-fa-solid fa-arrows-rotate"></i>Reset
                </div>
            </div>
           {/*  <!-- === LINE === --> */}
            <div className="owsr-sh-line">
                <hr/>
            </div>
          {/*   <!-- === SHOW & FILE & SEARCH === --> */}
            <div className="owsr-show-file-search-container">
                <div className="owsr-sh-show-container">
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
                <div className="owsr-sh-file-container">
                    <a href="#">Excel</a>
                </div>
              {/*   <!-- === SHOW SEARCH CONTAINER === --> */}
                <div className="owsr-sh-show-search-container">
                    <label htmlFor="text">Search:</label>
                    <input type="search"/>
                </div>
            </div>
           {/*  <!-- === PRODUCT ALL DETAILS === --> */}
            <div className="owsr-sh-produt-all-details-container">
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
                                <div className="owsr-sh-product-search-box"><p>Product Name......</p></div>
                            </td>
                            <td className="owsr-sh-av-box"><p>01</p></td>
                            <td className="owsr-sh-qty-number-input">
                                01/kg/L.
                            </td>
                            <td className="owsr-sh-rate-input-container">
                                <p>700 tk</p>
                            </td>
                            <td>
                                <div className="owsr-sh-discount-container">
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
            <div className="owsr-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="owsr-sh-slide-right-item">
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