import "../StockManagement/css/StockTransferRequestlist.css";
const StockTransferRequestlist = () => {
    return (
        <>
            <div className="cba-strl-main-container">
                {/* top menu part */}
                <div className="cba-strl-top-menu">
                    <ul>
                        <li><a href="/StockTransferList-page">Stock Transfer List</a></li>
                        <li><a href="/StockNewTransfer-page">New Stock Transfer</a></li>
                        <li><a href="/StockTransferRequestrlist-page" className='cba-strl-top-menu-active'>Stock Transfer Request</a></li>
                    </ul>
                </div>
                {/* inner container */}
                <div className="cba-strl-inner-container">
                    {/* head part */}
                    <div className="cba-strl-ic-head-part">
                        <h2>Stock Transfer Request List</h2>
                        {/* filter btn */}
                        <a href=""><i className="cba-strl-ic-filter-icon bx bx bxs-filter-alt"></i> Filter</a>
                    </div>
                    <div className="cba-strl-ic-filter-part">
                        <input type="text" placeholder="Transfer No." />
                        <input type="text" placeholder='Outlet From' />
                        <input type="text" placeholder='Outlet To' />
                        <input type="text" placeholder='Transferred By' />
                        <input type="text" placeholder='Transfer Date' />
                        <div className="cba-strl-ic-fp-btn-box">
                            <button>Find</button>
                            <button>Reset</button>
                        </div>
                    </div>
                    {/* middle part */}
                    <div className="cba-strl-ic-middle-part">
                        <div className="cba-strl-ic-show-entries-searchbox-con">
                            <div className="cba-strl-ic-show-entries-block">
                                <p>Show</p>
                                <select name="" id="">
                                    <option value="">10</option>
                                    <option value="">20</option>
                                    <option value="">30</option>
                                </select>
                                <p>entries</p>
                            </div>
                            <div className="cba-strl-ic-searchbox">
                                <label htmlFor="">Search:</label>
                                <input type="text" />
                            </div>
                        </div>
                        {/* table */}
                        <div className="cba-strl-ic-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Transfer No.</th>
                                        <th>Outlet From</th>
                                        <th>Outlet To</th>
                                        <th>Transfer Date</th>
                                        <th>Transferred By</th>
                                        <th>Approved By</th>
                                        <th>Status</th>
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
                                        <td>Addro</td>
                                        <td><span className='cba-strl-ic-table-sta-pnd'>Pending</span></td>
                                        <td>
                                            <i className="cba-strl-ic-table-edit-icon bx bx-edit"></i>
                                            <i className="cba-strl-ic-table-delete-icon bx bx-trash"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>ST-0001</td>
                                        <td>Outlet 1</td>
                                        <td>Outlet 2</td>
                                        <td>2023-01-01</td>
                                        <td>John Doe</td>
                                        <td>Addro</td>
                                        <td><span className='cba-strl-ic-table-sta-apvd'>Approved</span></td>
                                        <td>
                                            <i className="cba-strl-ic-table-edit-icon bx bx-edit"></i>
                                            <i className="cba-strl-ic-table-delete-icon bx bx-trash"></i>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={9}>No data available in table</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                            
                    </div>
                    {/* bottom part */}
                    <div className="cba-strl-ic-bottom-part">
                        <p>Showing 0 to 0 of 0 entries</p>
                        <div className="cba-strl-ic-bp-pagination-con">
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

export default StockTransferRequestlist;