import'./css/PendingVouchers.css'
const PendingVouchers = () => {
    return (
        <>
            <div className="pv-sh-parent">
        <div className="pv-sh-child-container">
            <div className="pv-sh-draft-sale-section">
               {/*  <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="pv-sh-draft-sale-top-item">
                    <p>Pending Voucher List</p>
                    <div className="pv-sh-sub-account">
                        <div className="pv-sh-filter">
                            <i className="fa-solid fa-filter"></i>filter
                        </div>
                        <p>Approve All Check</p>
                    </div>
                </div>
            </div>
            <hr/>
          {/*   <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="pv-sh-show-and-search-container">
                <div className="pv-sh-show-container">
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
               {/*  <!-- === SEARCH === --> */}
                <div className="pv-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
          {/*   <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="pv-manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>All</th>
                            <th>Date</th>
                            <th>Voucher No</th>
                            <th>Date</th>
                            <th>Account Name</th>
                            <th>Remarks</th>
                            <th>Sub Type</th>
                            <th>Reserved Account</th>
                            <th>Debit </th>
                            <th>Credit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pv-text-center" colSpan="11">No data availabe in tabel</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="pv-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="pv-sh-slide-right-item">
                    <a href="#">Previous</a>
                    <p>0</p>
                    <a href="#">Next</a>
                </div>
            </div>
        </div>

    </div> 
        </>
    );
};

export default PendingVouchers;
