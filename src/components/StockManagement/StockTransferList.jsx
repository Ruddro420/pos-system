import '../StockManagement/css/StockTransferList.css';
const StockTransferList = () => {
    return (
        <>
            <div className="cba-stl-main-container">
                {/* top menu part */}
                <div className="cba-stl-top-menu">
                    <ul>
                        <li><a href="/StockTransferList-page" className='cba-stl-top-menu-active'>Stock Transfer List</a></li>
                        <li><a href="/StockNewTransfer-page">New Stock Transfer</a></li>
                        <li><a href="/StockTransferRequestList-page">Stock Transfer Request</a></li>
                    </ul>
                </div>
                {/* inner container */}
                <div className="cba-stl-inner-container">
                    {/* head part */}
                    <div className="cba-stl-ic-head-part">
                        <h2>Stock Transfer List</h2>
                        {/* filter btn */}
                        <a href=""><i className="cba-stl-ic-filter-icon bx bx bxs-filter-alt"></i> Filter</a>
                    </div>
                    <div className="cba-stl-ic-filter-part">
                        <input type="text" placeholder="Transfer No." />
                        <input type="text" placeholder='Outlet From' />
                        <input type="text" placeholder='Outlet To' />
                        <input type="text" placeholder='Transferred By' />
                        <input type="text" placeholder='Transfer Date' />
                        <div className="cba-stl-ic-fp-btn-box">
                            <button>Find</button>
                            <button>Reset</button>
                        </div>
                    </div>
                    {/* middle part */}
                    <div className="cba-stl-ic-middle-part">
                        <div className="cba-stl-ic-show-entries-searchbox-con">
                            <div className="cba-stl-ic-show-entries-block">
                                <p>Show</p>
                                <select name="" id="">
                                    <option value="">10</option>
                                    <option value="">20</option>
                                    <option value="">30</option>
                                </select>
                                <p>entries</p>
                            </div>
                            <div className="cba-stl-ic-searchbox">
                                <label htmlFor="">Search:</label>
                                <input type="text" />
                            </div>
                        </div>
                        {/* table */}
                        <div className="cba-stl-ic-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Transfer No.</th>
                                        <th>Outlet From</th>
                                        <th>Outlet To</th>
                                        <th>Transfer Date</th>
                                        <th>Transferred By</th>
                                        <th>Total Amount (BDT)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>ST-0001</td>
                                        <td>Outlet 1</td>
                                        <td>Outlet 2</td>
                                        <td>2023-01-01</td>
                                        <td>John Doe</td>
                                        <td>1000.00</td>
                                        <td>
                                            <i className="cba-stl-ic-table-edit-icon bx bx-edit"></i>
                                            <i className="cba-stl-ic-table-delete-icon bx bx-trash"></i>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={8}>No data available in table</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                            
                    </div>
                    {/* bottom part */}
                    <div className="cba-stl-ic-bottom-part">
                        <p>Showing 0 to 0 of 0 entries</p>
                        <div className="cba-stl-ic-bp-pagination-con">
                            <button>Previous</button>
                            <p>1</p>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StockTransferList;