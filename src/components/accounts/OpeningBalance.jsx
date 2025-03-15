import './css/OpeningBalance.css'
const OpeningBalance = () => {
    return (
        <>
            {/*   <!-- === DRAFT SALE SECITON === --> */}
    <div className="ob-sh-parent">
        <div className="ob-sh-child-container">
            <div className="ob-sh-draft-sale-section">
              {/*   <!-- === DRAFT SALE TOP ITEMV === --> */}
           {     <div className="ob-sh-draft-sale-top-item">
                    <p>Opening Balance List</p>
                  {/*   <!-- === DRAFT SALE TOP RIGHT ITMES === --> */}
                    <div className="ob-sh-draft-sale-top-right-items">
                        <div onClick="showNew()" className="ob-sh-filter">
                            <i className="fa-solid fa-circle-plus"></i>
                            <a href="">Add New Opening Balance</a>
                        </div>
                        <div className="ob-sh-filter">
                            <i className="fa-solid fa-filter"></i>
                            <a href="#">Filter</a>
                        </div>
                    </div>
                </div>}
            </div>
            <hr/>
         {/*    <!-- === FILTER DROPDOWN SECTION === --> */}
            <div className="ob-sh-filter-drop-down-section">
                <div className="ob-sh-draft-container">
                    <select value="" name="" id="">
                        <option value="" name="">Select Fianacial Year</option>
                    </select>
                </div>
             {/*    <!-- === FILTER SEARCH === --> */}
                <div className="ob-sh-filter-search-box">
                    <i className="ob-fa-solid fa-search"></i>Search
                </div>
               {/*  <!-- === FILTER RESET === --> */}
                <div className="ob-sh-filter-reset-box">
                    <i className="fa-solid fa-arrows-rotate"></i>Reset
                </div>
            </div>
           {/*  <!-- === LINE === --> */}
            <div className="ob-sh-line">
                <hr/>
            </div>

          {/*   <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="ob-sh-show-and-search-container">
                <div className="ob-sh-show-container">
                    <p>Show</p>
                    <select name="" id="">
                        <option value="number" name="show">10</option>
                        <option value="number" name="show">20</option>
                        <option value="number" name="show">30</option>
                        <option value="number" name="show">40</option>
                        <option value="number" name="show">50</option>
                        <option value="number" name="show">100</option>
                    </select>
                    <p>Entries</p>
                </div>
                {/* <!-- === SEARCH === --> */}
                <div className="ob-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="ob-manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Date</th>
                            <th>Account Name</th>
                            <th className="ob-text-right">Subtype</th>
                            <th className="ob-text-right">Debit (BDT)</th>
                            <th className="ob-text-right">Credit(BDT)</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ob-text-right">Total</td>
                            <td className="ob-text-right">0.000</td>
                            <td className="ob-text-right">0.000</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td className="ob-text-middle" colSpan="6
                            ">
                                <p>No data available in table</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="ob-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="ob-sh-slide-right-item">
                    <a href="#">Previous</a>
                    <p>0</p>
                    <a href="#">Next</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- === ADD NEW OPENIGN BALANCE === -->
    <!-- ============================= --> */}
    <div className="ob-sh-add-new-oneping-balance-section">
        <div className="ob-sh-opening-balance-section">
            <p>Opening Balance</p>
            <div className="ob-sh-balance-list">
                <i className="fa-solid fa-list"></i>
                <label htmlFor="text" value="listform" name="balancelist">Balance List</label>
            </div>
        </div>
        <hr/>
      {/*   <!-- === TABLE SECTION === --> */}
        <div className="ob-sh-opening-balance-table-section">
            <table>
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Subtype</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><select name="" id="">
                                <option value="" name="">Select Amount</option>
                            </select></td>
                        <td><select name="" id="">
                                <option value="" name="">Select Subtype</option>
                            </select></td>
                        <td><input type="number"/></td>
                        <td><input type="number"/></td>
                        <td className="ob-sh-trash-icon"><i className="fa-solid fa-trash"></i></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><button>add more</button></td>
                        <td className="ob-text-right">Total</td>
                        <td><input type="text" value="0.00" name="" id=""/></td>
                        <td><input type="text" value="0.00" name="" id=""/></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>  
        </>
    );
};

export default OpeningBalance;