import './css/ManagePayment.css'
const ManagePayment = () => {
    return (
        <>
           <div className="sh-parent">
        <div className="sh-child-container">
            <div className="sh-draft-sale-section">
               {/*  <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="sh-draft-sale-top-item">
                    <p>Manage Payment</p>
                </div>
              
               {/*  <!-- === SHOW AND SEARCH CONTAINER === --> */}
                <div className="sh-show-and-search-container">
                    <div className="sh-show-container">
                        <p>Show</p>
                        <select name="" id="">
                            <option value="number" name="show">10</option>
                            <option value="number" name="show">20</option>
                            <option value="number" name="show">30</option>
                            <option value="number" name="show">All</option>
                        </select>
                        <p>Entries</p>
                    </div>
                   {/*  <!-- === SEARCH === --> */}
                    <div className="sh-search-container">
                        <p>Search:</p>
                        <input type="search" placeholder="" name="" id=""/>
                    </div>
                </div>
             {/*    <!-- === MANAGE SALE DETAILS SECTION === --> */}
                <div className="manage-sale-details-section">
                    <table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Sales No</th>
                                <th>Payment Method</th>
                                <th>Total Ammount (BDT)</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={6}>
                                    <p>No data available in table</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             {/*    <!-- === SLIDE PAGES === --> */}
                <div className="sh-slider-pages">
                    <p>Showing 4 to 4 of 4 entries</p>
                    <div className="sh-slide-right-item">
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

export default ManagePayment;