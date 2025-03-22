import "../settings/css/CurrencyList.css"

const CurrencyList = () => {
    return (
        <>
            <div className="cba-currency-list-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-cult-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-culttm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-culttm-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page">VAT Settings</a></li>
                                <li><a href="/ProductSettings-page">Product Settings</a></li>
                                <li><a href="/PurchaseSettings-page">Purchase Settings</a></li>
                                <li><a href="/SaleSettings-page">Sale Settings</a></li>
                                <li><a href="/CurrencyList-page" className="cba-culttm-one-dd-active">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-culttm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-culttm-two-dd">
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
                {/* currency list container */}
                <div className="cba-cult-inner-container">
                    <div className="cba-cult-ic-head-part">
                        <h1>Currency List</h1>
                        <a href="/AddCurrency-page"><i className='cba-currency-add-btn bx bx-plus-circle'></i> Add Currency</a>
                    </div>
                    <div className="cba-cult-ic-show-entires-n-searchbox">
                        <div className="cba-cult-ic-show-entries">
                            <p>Show</p>
                            <select name="" id="">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">30</option>
                                <option value="">All</option>
                            </select>
                            <p>entires</p>
                        </div>
                        <div className="cba-cult-ic-searchbox">
                            <label htmlFor="">Search:</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="cba-cult-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Title</th>
                                    <th>Symbol</th>
                                    <th>Country</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>BDT</td>
                                    <td>BDT</td>
                                    <td>Bangladesh</td>
                                    <td><span className="cba-cult-tc-sta-ac">Active</span></td>
                                    <td>
                                        <div>
                                            <i className='cba-cult-tc-add-icon bx bx-edit'></i>
                                            <i className='cba-cult-tc-remove-icon bx bxs-trash' ></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>USD</td>
                                    <td>USD</td>
                                    <td>United State</td>
                                    <td><span className="cba-cult-tc-sta-iac">Inactive</span></td>
                                    <td>
                                        <div>
                                            <i className='cba-cult-tc-add-icon bx bx-edit'></i>
                                            <i className='cba-cult-tc-remove-icon bx bxs-trash' ></i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cba-cult-tc-pagination-con">
                        <p>Showing 1 to 10 of 50 entries</p>
                        <div className="cba-cult-tc-pagination">
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

export default CurrencyList;