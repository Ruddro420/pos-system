import './css/SelsReturnList.css'

const SelsReturnList = () => {
    return (
        <>
          <div className="sh-parent-section">
{/* <!-- === CHILD SECTION === --> */}
<div className="sh-child-section">
{/*     <!-- === SALE RETURN TOP ITEMS === --> */}
    <div className="sh-sale-return-top-items">
        <div className="sh-list">
            <a href="sale-return.html">Sale Return</a>
        </div>
        <div className="sh-active">
            <a href="/SelsReturnList-page">Return List</a>
        </div>
    </div>
  
{/*     <!-- === QUOTATION LIST SECTION === --> */}
    <div className="quotation-list-section">
        {/* !-- === quotation-container === --> */}
        <div className="quotation-container">
            <p>Sale Return List</p>
        </div>
        
       {/*  <!-- === QUOTATION SECOND SECTION === --> */}
        <div className="quotation-second-section">
            <div className="show-container">
                <p>Show</p>
                <select>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
                <p>entries</p>
            </div>
            <div className="download-file-container">
                <ul>
                    <li>
                        <i className="fa-solid fa-file-csv"></i>
                        <a href="#">CSV</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-file-excel"></i>
                        <a href="#">Excel</a>
                    </li>
                </ul>
            </div>

            <div className="search-container">
                <label htmlFor="text">Search:</label>
                <input type="search"/>
            </div>
        </div>
       {/*  <!-- === TABLE SECTION === --> */}
        <div className="table-section">
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Sale No.</th>
                        <th>Return No</th>
                        <th>Customer Name</th>
                        <th>Return Date</th>
                        <th>Total Amount(BDT)</th>
                        <th>Payment Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Omuk</td>
                        <td>8633</td>
                        <td>18-02-2025</td>
                        <td>5449</td>
                        <td>20,000.00</td>
                        <td><span>Paid</span></td>
                        <td>
                            <div className="editabe-container">
                               {/*  <!-- === EDIT ICON === --> */}
                                <div className="edit-icon">
                                    <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                                </div>
                               {/*  <!-- === DELETE ICON === --> */}
                                <div className="delete-icon">
                                    <a href="#"><i className="fa-regular fa-trash-can"></i></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Omuk</td>
                        <td>8633</td>
                        <td>18-02-2025</td>
                        <td>5449</td>
                        <td>20,000.00</td>
                        <td><span>Paid</span></td>
                        <td>
                            <div className="editabe-container">
                               {/*  <!-- === EDIT ICON === --> */}
                                <div className="edit-icon">
                                    <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                                </div>
                                {/* <!-- === DELETE ICON === --> */}
                                <div className="delete-icon">
                                    <a href="#"><i className="fa-regular fa-trash-can"></i></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Omuk</td>
                        <td>8633</td>
                        <td>18-02-2025</td>
                        <td>5449</td>
                        <td>20,000.00</td>
                        <td><span>Paid</span></td>
                        <td>
                            <div className="editabe-container">
                               {/*  <!-- === EDIT ICON === --> */}
                                <div className="edit-icon">
                                    <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                                </div>
                              {/*   <!-- === DELETE ICON === --> */}
                                <div className="delete-icon">
                                    <a href="#"><i className="fa-regular fa-trash-can"></i></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>no data available in table</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
             </table>   
        </div>
       {/*  <!-- === SLIDE PAGES === --> */}
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

export default SelsReturnList;