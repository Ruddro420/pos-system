import './css/PrintBarcodeLabels.css'
const PrintBarcodeLabels = () => {
    return (
        <>
          <div className="quotation-list-section">
   {/*      <!-- === quotation-container === --> */}
        <div className="quotation-container">
            <p>Print Barcode Labels</p>
        </div>
        <hr/>
      {/*   <!-- === QUOTATION SECOND SECTION === --> */}
        <div className="quotation-second-section">
            <div className="show-container">
                <p>Add items to create labels</p>
            </div>
            <div>
                <label className="switch">
                    <input type="checkbox" checked/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>

        <div className="add-items-search">
            <div className="add-items-search-box">
                <input type="text" placeholder="Enter Product Name, Product Model or Bar Code for Scan" name="" id=""/>
            </div>
        </div>

    {/*     <!-- === TABLE SECTION === --> */}
        <div className="table-section">
            <table>
                <thead>
                    <tr>
                        <th>Item Information*</th>
                        <th>Unit</th>
                        <th>Variant</th>
                        <th>Price</th>
                        <th>No. Of Labels*</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="sh-product-search-box">
                                <input type="text" placeholder="Service Name" name="" id=""/>
                            </div>
                        </td>
                        <td className="sh-total-container">
                            <input type="number" placeholder="Unit" readOnly="readonly" name="" id=""/>
                        </td>
                        <td className="sh-total-select">
                            <select name="Variant" id="">
                                <option value="selectOn">Select On</option>
                            </select>
                        </td>
                        <td>
                            <div className="sh-product-price-box">
                                <input type="number" name="" id=""/>
                            </div>
                        </td>
                        <td>
                            <div className="sh-product-price-box">
                                <input type="number" placeholder="0.00" value="1" name="" id=""/>
                            </div>
                        </td>
                        <td>
                            <div className="editable-container">
                                
                               {/*  <!-- === DELETE ICON === --> */}
                                <div className="delete-icon">
                                    <a href="#">
                                        <i className="fa fa-close"></i>
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan="5"></td>
                        <td>
                            <div className="editable-container">
                                
                              {/*   <!-- === Plus ICON === --> */}
                                <div className="plus-icon">
                                    <a href="#">
                                        <i className="fa fa-plus text-light"></i>
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

     {/*    <!-- Labels Setting Information to Display --> */}
        <div className="quotation-second-section">
            <div className="show-container">
                <p>Labels Setting Information to Display</p>
            </div>
        </div>
        <div className="labels-setting-section">
            <div className="labels-setting-container">
                <div className="labels-setting">
                    <div className="labels-title">
                        <p>Company Name</p>
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="sh-product-search-box">
                    <input type="text" placeholder="Service Name" name="" id=""/>
                </div>
            </div>
            <div className="labels-setting-container">
                <div className="labels-setting">
                    <div className="labels-title">
                        <p>Company Name</p>
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="sh-product-search-box">
                    <input type="text" placeholder="Service Name" name="" id=""/>
                </div>
            </div>
            <div className="labels-setting-container">
                <div className="labels-setting">
                    <div className="labels-title">
                        <p>Company Name</p>
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="sh-product-search-box">
                    <input type="text" placeholder="Service Name" name="" id=""/>
                </div>
            </div>
        </div>
      {/*   <!-- Labels Setting Information to Display END-->
         
        <!-- === SALE QUOTATION BOTTOM ITEMS === --> */}
        <div className="sale-quotation-bottom-items">
            <button>Submit</button>
        </div>

    </div>   
    <div className="footer-container">
        <p>@2025.All Rights Reserved.</p>
        <p>Design By: inspiredigitalbd</p>
    </div>
        </>
    );
};

export default PrintBarcodeLabels;