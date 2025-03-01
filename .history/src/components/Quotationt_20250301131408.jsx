import './../components/css/Quotationt.css'

const Quotationt = () => {
    return (
        <>
              {/*  === TOP SECTION === */}
    <div className="top-section">
   
        <a href="add-quotation.html">Add Quotation</a>
        <div className="quotation-list">
            <a href="#">Quotation List</a>
        </div>
    </div>

    {/*  === QUOTATION LIST SECTION === */}
    <div className="quotation-list-section">
        {/*  === quotation-container === */}
        <div className="quotation-container">
            <p>Quotation List</p>
            <div className="quotation-right-container">
                <ul>
                    <li>
                    <i className='bx bxs-filter-alt'></i>
                        <a href="#">Filter </a>
                    </li>
                    <li>
                    <i className='bx bx-plus-circle'></i> 
                        <a href="add-quotation.html">Add Quotation</a>
                    </li>
                </ul>
            </div>
        </div>

        {/*  === QUOTATION SECOND SECTION === */}
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
         {/* === TABLE SECTION === */}
        <div className="table-section">
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Customer Name</th>
                        <th>Quotation Number</th>
                        <th>Quotation Date</th>
                        <th>Amount (BTD)</th>
                        <th>Status</th>
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
                        <td><span>Active</span></td>
                        <td>
                            <div className="editabe-container">
                                 {/* === EDIT ICON === */}
                                <div className="edit-icon">
                                    <a href="#">
                                    </a>
                                </div>
                                {/*  === DELETE ICON === */}
                                <div className="delete-icon">
                                    <a href="#"></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>02</td>
                        <td>Omuk</td>
                        <td>8644</td>
                        <td>18-02-2025</td>
                        <td>5449</td>
                        <td><b>Deactive</b></td>
                        <td>
                            <div className="editabe-container">
                                {/*  === EDIT ICON === */}
                                <div className="edit-icon">
                                    <a href="#"></a>
                                </div>
                                {/*  === DELETE ICON === */}
                                <div className="delete-icon">
                                    <a href="#"></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>03</td>
                        <td>Omuk</td>
                        <td>8655</td>
                        <td>18-02-2025</td>
                        <td>5449</td>
                        <td><span>Active</span></td>
                        <td>
                            <div className="editabe-container">
                                 {/* === EDIT ICON === */}
                                <div className="edit-icon">
                                    <a href="#"></a>
                                </div>
                                {/*  === DELETE ICON === */}
                                <div className="delete-icon">
                                    <a href="#"></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>04</td>
                        <td>Omuk</td>
                        <td>8666</td>
                        <td>18-02-2025</td>
                        <td>5449</td>
                        <td><span>Active</span></td>
                        <td>
                            <div className="editabe-container">
                               {/*   === EDIT ICON === */}
                                <div className="edit-icon">
                                    <a href="#"></a>
                                </div>
                                {/*  === DELETE ICON === */}
                                <div className="delete-icon">
                                    <a href="#"></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>05</td>
                        <td>Omuk</td>
                        <td>8677</td>
                        <td>18-02-2025</td>
                        <td>5449</td>
                        <td><b>Deactive</b></td>
                        <td>
                            <div className="editabe-container">
                                 {/* === EDIT ICON === */}
                                <div className="edit-icon">
                                    <a href="#"></a>
                                </div>
                                {/*  === DELETE ICON === */}
                                <div className="delete-icon">
                                    <a href="#"><RiDeleteBin6Line /></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>no data available in table</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
         {/* === SLIDE PAGES === */}
        <div className="sh-slider-pages">
            <p>Showing 0 to 0 of 0 entries</p>
            <div className="sh-slide-right-item">
                <a href="#">Previous</a>
                <p>1</p>
                <a href="#">Next</a>
            </div>
        </div>

    </div>
        </>
    );
};

export default Quotationt;