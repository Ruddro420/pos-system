import '../settings/css/SettingActivityLog.css'
const SettingActivityLog = () => {
    return (
        <>
            <div className="cba-actilog-container">
                {/* <!-- Support top menus --> */}
                <div className="cba-actilog-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-actilogtm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-actilogtm-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page">VAT Settings</a></li>
                                <li><a href="/ProductSettings-page">Product Settings</a></li>
                                <li><a href="/PurchaseSettings-page">Purchase Settings</a></li>
                                <li><a href="/SaleSettings-page">Sale Settings</a></li>
                                <li><a href="">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-actilogtm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-actilogtm-two-dd">
                                <li><a href="/SettingUserList-page">User List</a></li>
                                <li><a href="/SettingAddUser-page">User Add</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu three --> */}
                        <li className="cba-actilogtm-three"><a href="/SettingActivityLog-page">
                            Activity Log
                        </a></li>
                    </ul>
                </div>
                {/* <!-- activity log details --> */}
                <div className="cba-actilog-details-container">
                    <div className="cba-actilog-details-toppart">
                        <div className="cba-actilog-details-toppart-heading">
                            <h2>Activity Log</h2>
                        </div>
                        <div className="cba-actilog-dt-delete-filter-btn">
                            <button><i className='bx bxs-trash'></i> Delete Selected Item</button>
                            <button><i className='bx bxs-filter-alt' ></i> Filter</button>
                        </div>
                    </div>
                    <div className="cba-actilog-details-subcon">
                        <div className="cba-addfb-input-btn">
                            <div className="cba-addfb-input">
                                <input type="text" placeholder="User Name"/>
                                <input type="text" placeholder="Log Date"/>
                            </div>
                            <div className="cba-addfb-btn">
                                <input type="submit" value="find"/>
                                <input type="reset" value="reset"/>
                            </div>
                        </div>
                        <div className="cba-adsubcon-inner-con">
                            <div className="cba-adsubcon-ic-list-filter-searchbox">
                                <div className="cba-adscifl-short-dpdwn">
                                    <h3>Show</h3>
                                    <select name="10" id="">
                                        <option value="">10</option>
                                        <option value="">20</option>
                                        <option value="">30</option>
                                        <option value="">All</option>
                                    </select>
                                    <h3>entries</h3>
                                </div>
                                <div className="cba-adscifl-search-box">
                                    <label>Search:</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="cba-actilog-details-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th><label htmlFor="alldataselected">Select All <input type="checkbox" id="alldataselected"/></label></th>
                                            <th>Date</th>
                                            <th>Log Name</th>
                                            <th>Description</th>
                                            <th>Done By</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td><label htmlFor="selectit">Select <input type="checkbox" id="selectit" className='docstik'/></label></td>
                                            <td>05-03-2025</td>
                                            <td>Application</td>
                                            <td>Changed the favicon</td>
                                            <td>MD Adnan Addro</td>
                                            <td><i className='cba-adt-edit-icon bx bx-edit'></i></td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td><label htmlFor="selectitt">Select <input type="checkbox" id="selectitt" className='docstik'/></label></td>
                                            <td>05-03-2025</td>
                                            <td>Application</td>
                                            <td>Changed the favicon</td>
                                            <td>MD Adnan Addro</td>
                                            <td><i className='cba-adt-edit-icon bx bx-edit'></i></td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td><label htmlFor="selectittt">Select <input type="checkbox" id="selectittt" className='docstik'/></label></td>
                                            <td>05-03-2025</td>
                                            <td>Application</td>
                                            <td>Changed the favicon</td>
                                            <td>MD Adnan Addro</td>
                                            <td><i className='cba-adt-edit-icon bx bx-edit'></i></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="7">No data available in table</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="cba-adtl-entries-count-pagechange-btn">
                                <div className="cba-adtl-entries-count">
                                    <p>Showing 1 to 3 of 3 entries</p>
                                </div>
                                <div className="cba-adtl-pagechange-btn">
                                    <button>Previous</button>
                                    <p>1</p>
                                    <button>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingActivityLog;