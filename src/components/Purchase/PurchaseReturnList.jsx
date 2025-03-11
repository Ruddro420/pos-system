import '../purchesCSS/PurchaseReturnList.css'

const PurchaseReturnList = () => {
    return (
        <>
            <div className="cba-PurchaseReturnList-container">
                {/* <!-- top menus --> */}
                <div className="cba-PurchaseReturnList-top-menus">
                    <ul>
                        <li><a href="/PurchaseReturn-page" className='cba-PurchaseReturnList-light-up'>Purchase Return</a></li>
                        <li><a href="/PurchaseReturnList-page" className='cba-PurchaseReturnList-active-menu'>Purchase Return List</a></li>
                    </ul>
                </div>
                {/* <!-- details container --> */}
                <div className="cba-PurchaseReturnList-details-container">
                    <div className="cba-PurchaseReturnList-dc-topbar">
                        <div className="cba-PurchaseReturnList-dc-heading">
                            <h2>Purchase Return List</h2>
                        </div>
                        <div className="cba-PurchaseReturnList-addnbtn">
                            <div className="cba-PurchaseReturnList-add-new-btn">
                                <i className='cba-PurchaseReturnList-add-icon bx bx-plus-circle'></i>
                                <a href="/PurchaseReturn-page" className='cba-PurchaseReturnList-add-btn'>Add Purchase Return</a>
                            </div>
                        </div>
                    </div>
                    <div className="cba-PurchaseReturnList-entries-print-searchbox">
                        <div className="cba-PurchaseReturnList-entries-block">
                            <h3>Show</h3>
                            <select name="" id="">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">30</option>
                                <option value="">All</option>
                            </select>
                            <h3>entries</h3>
                        </div>
                        <div className="cba-PurchaseReturnList-print-block">
                            <h2>Copy</h2>
                            <h2>CSV</h2>
                            <h2>Excel</h2>
                            <h2>PDF</h2>
                            <h2>Print</h2>
                        </div>
                        <div className="cba-PurchaseReturnList-searchbox-block">
                            <label htmlFor="">Search:</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="cba-PurchaseReturnList-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Chalan No</th>
                                    <th>Return No</th>
                                    <th>Receive No</th>
                                    <th>Supplier Name</th>
                                    <th>Return Date</th>
                                    <th>Total Amount (BDT)</th>
                                    <th>Payment Status(BDT)</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>514561</td>
                                    <td>265854</td>
                                    <td>265854</td>
                                    <td>MD Adnan Addro</td>
                                    <td>06-03-2025</td>
                                    <td>8000</td>
                                    <td>Paid</td>
                                    <td><i className='cba-PurchaseReturnList-table-edit-icon bx bx-edit'></i></td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>514561</td>
                                    <td>265854</td>
                                    <td>265854</td>
                                    <td>MD Adnan Addro</td>
                                    <td>06-03-2025</td>
                                    <td>8000</td>
                                    <td>Paid</td>
                                    <td><i className='cba-PurchaseReturnList-table-edit-icon bx bx-edit'></i></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={9}>No data available in table</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="cba-PurchaseReturnList-dc-bottombar">
                        <div className="cba-PurchaseReturnList-dc-bottombar-left">
                            <p>Showing 1 to 1 of 1 entries</p>
                        </div>
                        <div className="cba-PurchaseReturnList-dc-bottombar-right">
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

export default PurchaseReturnList;