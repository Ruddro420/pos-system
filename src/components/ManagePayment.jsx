import './css/ManagePayment.css'
const ManagePayment = () => {
    return (
        <>
           <div className="mana-sale-payment-sh-parent">
        <div className="mana-sale-payment-sh-child-container">
            <div className="mana-sale-payment-sh-draft-sale-section">
               {/*  <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="mana-sale-payment-sh-draft-sale-top-item">
                    <p>Manage Payment</p>
                </div>
               {/*  <!-- === SHOW AND SEARCH CONTAINER === --> */}
                <div className="mana-sale-payment-sh-show-and-search-container">
                    <div className="mana-sale-payment-sh-show-container">
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
                    <div className="mana-sale-payment-sh-search-container">
                        <p>Search:</p>
                        <input type="search" placeholder="" name="" id=""/>
                    </div>
                </div>
             {/*    <!-- === MANAGE SALE DETAILS SECTION === --> */}
                <div className="mana-sale-payment-manage-sale-details-section">
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
                <div className="mana-sale-payment-sh-slider-pages">
                    <p>Showing 4 to 4 of 4 entries</p>
                    <div className="mana-sale-payment-sh-slide-right-item">
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