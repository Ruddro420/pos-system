import './css/SaleCounter.css'
const SaleCounter = () => {
    return (
        <>
           <div className="parent-section">
        {/* <!-- === CHILD SECTION === --> */}
        <div className="sh-child-section">
           {/*  <!-- === SALE COUNTER TOP ITEMS === --> */}
            <div className="sh-sale-counter-top-items">
                <p>Sale Counter</p>
                <a href="#"><i className="fa-solid fa-plus"></i>Add Counter</a>
            </div>
          
            {/* <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="sh-show-and-search-container">
                <div className="sh-show-container">
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
                <div className="sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
           {/*  <!-- === LINE === --> */}
            <div className="sh-line">
             
            </div>

          {/*   <!-- === TABLE SECTION === --> */}
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th className="sh-sl">SL</th>
                            <th>Conter No.</th>
                            <th className="sh-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>01</td>
                            <td>
                                <div className="editabe-container">
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
                            <td>02</td>
                            <td>02</td>
                            <td>
                                <div className="editabe-container">
                                  {/*   <!-- === DELETE ICON === --> */}
                                    <div className="delete-icon">
                                        <a href="#"><i className="fa-regular fa-trash-can"></i></a>
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
                                <div className="editabe-container">
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
                            <td>04</td>
                            <td>04</td>
                            <td>
                                <div className="editabe-container">
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
                            <td>05</td>
                            <td>05</td>
                            <td>
                                <div className="editabe-container">
                                   {/*  <!-- === DELETE ICON === --> */}
                                    <div className="delete-icon">
                                        <a href="#"><i className="fa-regular fa-trash-can"></i></a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           {/*  <!-- === SLIDE PAGES === --> */}
            <div className="sh-slider-pages">
                <p>Showing 0 to 0 of 0 entries</p>
                <div className="sh-slide-right-item">
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