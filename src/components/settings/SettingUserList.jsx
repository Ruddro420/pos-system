import '../settings/css/SettingUserList.css'
const SettingUserList = () => {
    return (
        <>
            <div className="cba-setting-uls-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-settings-uls-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-stm-uls-one">
                            Software Setup<i className='cba-top-uls-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-stm-uls-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="">Payment Settings</a></li>
                                <li><a href="">Prefix Settings</a></li>
                                <li><a href="">VAT Settings</a></li>
                                <li><a href="">Product Settings</a></li>
                                <li><a href="">Purchase Settings</a></li>
                                <li><a href="">Sale Settings</a></li>
                                <li><a href="">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-stm-uls-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-stm-uls-two-dd">
                                <li><a href="/SettingUserList-page" className="cba-stm-uls-two-dd-active">User List</a></li>
                                <li><a href="">User Add</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu three --> */}
                        <li><a href="/SettingActivityLog-page">
                            Activity Log
                        </a></li>
                    </ul>
                </div>
                {/* setting User list container */}
                <div className="cba-settings-uls-details-con">
                    <div className="cba-setting-uls-dc-heading">
                        <h3>User List</h3>
                        <button><i className='cba-setting-user-add-icon bx bx-plus-circle'></i>Add User</button>
                    </div>
                    <div className="cba-setting-uls-dc-show-n-searchbox-con">
                        <div className="cba-setting-uls-dc-show-con">
                            <p>Show</p>
                            <select>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>All</option>
                            </select>
                            <p>entries</p>
                        </div>
                        <div className="cba-setting-uls-dc-searchbox-con">
                            <label htmlFor="">Search:</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="cba-setting-uls-dc-table-con">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile No.</th>
                                    <th>Role</th>
                                    <th>Image</th>
                                    <th>Created Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>MD Adnan Addro</td>
                                    <td>mdadnanaddro@gamil.com</td>
                                    <td>0123456789</td>
                                    <td><span className='cba-setting-uls-dc-table-role-style'>Super Admin</span></td>
                                    <td><img src="https://placehold.co/40x40" alt="" /></td>
                                    <td>24-08-2022 at 10:00 am</td>
                                    <td><span className='cba-setting-uls-dc-table-status-as'>Active</span></td>
                                    <td><i className='cba-setting-uls-dc-table-edit-icon bx bx-edit'></i></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>MD Adnan Addro</td>
                                    <td>mdadnanaddro@gamil.com</td>
                                    <td>0123456789</td>
                                    <td><span className='cba-setting-uls-dc-table-role-style'>Admin</span></td>
                                    <td><img src="https://placehold.co/40x40" alt="" /></td>
                                    <td>24-08-2022 at 10:00 am</td>
                                    <td><span className='cba-setting-uls-dc-table-status-ins'>Inactive</span></td>
                                    <td><i className='cba-setting-uls-dc-table-edit-icon bx bx-edit'></i></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>MD Adnan Addro</td>
                                    <td>mdadnanaddro@gamil.com</td>
                                    <td>0123456789</td>
                                    <td><span className='cba-setting-uls-dc-table-role-style'>Cashier</span></td>
                                    <td><img src="https://placehold.co/40x40" alt="" /></td>
                                    <td>24-08-2022 at 10:00 am</td>
                                    <td><span className='cba-setting-uls-dc-table-status-as'>Active</span></td>
                                    <td><i className='cba-setting-uls-dc-table-edit-icon bx bx-edit'></i></td>
                                </tr>
                                <tr>
                                    <td className='cba-no-data-in-table' colSpan={9}>No data avauilable in the table</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cba-setting-uls-dc-pagination-con">
                        <p>Showing 1 to 10 of 50 entries</p>
                        <div className="cba-setting-uls-dc-pagination">
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

export default SettingUserList;