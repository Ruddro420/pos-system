import './css/SelsReturnList.css'
const SelsReturnList = () => {
    return (
        <>
            <div className="sales-return-list-container">
                {/* <!-- top menus --> */}
                <div className="cba-sarl-top-menus">
                    <ul>
                        <li><a href="/SalesReturn-page" className='cba-sarl-light-up'>Sales Return</a></li>
                        <li><a href="" className='cba-sarl-active-menu'>Sales Return List</a></li>
                    </ul>
                </div>
                {/* <!-- details container --> */}
                <div className="cba-sarl-details-container">
                    <div className="cba-sarl-dc-topbar">
                        <div className="cba-sarl-dc-heading">
                            <h2>Sales Return List</h2>
                        </div>
                        <div className="cba-sarl-addnbtn">
                            <div className="cba-sarl-add-new-btn">
                                <i className='cba-sarl-add-icon bx bx-plus-circle'></i>
                                <a href="" className='cba-sarl-add-btn'>Add Sale Return</a>
                            </div>
                        </div>
                    </div>
                    <div className="cba-sarl-entries-print-searchbox">
                        <div className="cba-sarl-entries-block">
                            <h3>Show</h3>
                            <select name="" id="">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">30</option>
                                <option value="">All</option>
                            </select>
                            <h3>entries</h3>
                        </div>
                        <div className="cba-sarl-print-block">
                            <h2>Copy</h2>
                            <h2>CSV</h2>
                            <h2>Excel</h2>
                            <h2>PDF</h2>
                            <h2>Print</h2>
                        </div>
                        <div className="cba-sarl-searchbox-block">
                            <label htmlFor="">Search:</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="cba-sarl-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Sale No.</th>
                                    <th>Return No</th>
                                    <th>Customer Name</th>
                                    <th>Return Date</th>
                                    <th>Total Amount (BDT)</th>
                                    <th>Payment Status</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>514561</td>
                                    <td>265854</td>
                                    <td>MD Adnan Addro</td>
                                    <td>06-03-2025</td>
                                    <td>8000</td>
                                    <td>Paid</td>
                                    <td><i className='bx bx-edit'></i></td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>514561</td>
                                    <td>265854</td>
                                    <td>MD Adnan Addro</td>
                                    <td>06-03-2025</td>
                                    <td>8000</td>
                                    <td>Paid</td>
                                    <td><i className='bx bx-edit'></i></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={8}>No data available in table</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="cba-sarl-dc-bottombar">
                        <div className="cba-sarl-dc-bottombar-left">
                            <p>Showing 1 to 1 of 1 entries</p>
                        </div>
                        <div className="cba-sarl-dc-bottombar-right">
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

export default SelsReturnList;