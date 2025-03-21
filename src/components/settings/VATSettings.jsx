import '../settings/css/VATSettings.css'
const VATSettings = () => {
    return (
        <>
            <div className="cba-vat-setting-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-vst-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-vsttm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-vsttm-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page" className="cba-vsttm-one-dd-active">VAT Settings</a></li>
                                <li><a href="/ProductSettings-page">Product Settings</a></li>
                                <li><a href="">Purchase Settings</a></li>
                                <li><a href="">Sale Settings</a></li>
                                <li><a href="">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-vsttm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-vsttm-two-dd">
                                <li><a href="/SettingUserList-page">User List</a></li>
                                <li><a href="/SettingAddUser-page">User Add</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu three --> */}
                        <li><a href="/SettingActivityLog-page">
                            Activity Log
                        </a></li>
                    </ul>
                </div>
                {/* details container */}
                <div className="cba-vst-details-container">
                    {/* top container */}
                    <div className="cba-vst-dc-top-container">
                        <div className="cba-vst-dc-tc-head-part">
                            <h1>VAT Settings</h1>
                        </div>
                        <div className="cba-vst-dc-tc-middle-part">
                            <table>
                                <thead>
                                    <tr>
                                        <th>VAT Name<span className='cba-vst-required'>*</span></th>
                                        <th>VAT Number<span>*</span></th>
                                        <th>VAT Percentage<span>*</span></th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><i className='cba-vst-dc-tc-mp-remove-icon bx bx-x'></i></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}></td>
                                        <td><i className='cba-vst-dc-tc-mp-add-icon bx bx-plus'></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cba-vst-dc-tc-bottom-part">
                            <input type="submit" value="Save" />
                        </div>
                    </div>
                    {/* bottom container */}
                    <div className="cba-vst-dc-bottom-container">
                        <div className="cba-vst-dc-bc-heading">
                            <h3>User List</h3>
                            <a href="/SettingAddUser-page"><i className='cba-vst-dc-bc-user-add-icon bx bx-plus-circle'></i>Add   User</a>
                        </div>
                        <div className="cba-vst-dc-bc-show-n-searchbox-con">
                            <div className="cba-vst-dc-bc-show-con">
                                <p>Show</p>
                                <select>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>All</option>
                                </select>
                                <p>entries</p>
                            </div>
                            <div className="cba-vst-dc-bc-searchbox-con">
                                <label htmlFor="">Search:</label>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="cba-vst-dc-bc-table-con">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>VAT Group Name</th>
                                        <th>Total VAT Percentage</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='cba-vst-dc-bc-no-data-in-table' colSpan={4}>No data available in the table</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cba-vst-dc-bc-pagination-con">
                            <p>Showing 1 to 10 of 50 entries</p>
                            <div className="cba-vst-dc-bc-pagination">
                                <button>Previous</button>
                                <p>1</p>
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VATSettings;