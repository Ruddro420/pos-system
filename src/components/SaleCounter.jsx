import './css/SaleCounter.css'
const SaleCounter = () => {
    return (
        <>
           <div className="salecounter-parent-section">
        {/* <!-- === CHILD SECTION === --> */}
        <div className="salecounter-sh-child-section">
           {/*  <!-- === SALE COUNTER TOP ITEMS === --> */}
            <div className="salecounter-sh-sale-counter-top-items">
                <p>Sale Counter</p>
                <a href="#"><i className="fa-solid fa-plus"></i> Add Counter</a>
            </div>
          
            {/* <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="salecounter-sh-show-and-search-container">
                <div className="salecounter-sh-show-container">
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
                <div className="salecounter-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
           {/*  <!-- === LINE === --> */}
            <div className="salecounter-sh-line">
             
            </div>

          {/*   <!-- === TABLE SECTION === --> */}
            <div className="salecounter-table-section">
                <table>
                    <thead>
                        <tr>
                            <th className="salecounter-sh-sl">SL</th>
                            <th>Conter No.</th>
                            <th className="salecounter-sh-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>01</td>
                            <td>
                                <div className="salecounter-editable-container">
                                   {/*  <!-- === DELETE ICON === --> */}
                                    <div>
                                        <a href="#"><i className="delete-icon fa-regular fa-trash-can"></i></a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>02</td>
                            <td>02</td>
                            <td>
                                <div className="salecounter-editable-container">
                                  {/*   <!-- === DELETE ICON === --> */}
                                    <div>
                                        <a href="#"><i className="delete-icon fa-regular fa-trash-can"></i></a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>03</td>
                            <td>03</td>
                            <td>
                                <div className="salecounter-editable-container">
                                   {/*  <!-- === DELETE ICON === --> */}
                                    <div>
                                        <a href="#"><i className="delete-icon fa-regular fa-trash-can"></i></a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>04</td>
                            <td>04</td>
                            <td>
                                <div className="salecounter-editable-container">
                                   {/*  <!-- === DELETE ICON === --> */}
                                    <div>
                                        <a href="#"><i className="delete-icon fa-regular fa-trash-can"></i></a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>05</td>
                            <td>05</td>
                            <td>
                                <div className="salecounter-editable-container">
                                   {/*  <!-- === DELETE ICON === --> */}
                                    <div>
                                        <a href="#"><i className="delete-icon fa-regular fa-trash-can"></i></a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="salecounter-sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="salecounter-sh-slide-right-item">
                    <a href="#">Previous</a>
                    <p>1</p>
                    <a href="#">Next</a>
                </div>
            </div>

        </div>
    </div>  
        </>
    );
};

export default SaleCounter;