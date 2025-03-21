import '../settings/css/SettingPaymentSetting.css'
const SettingPaymentSetting = () => {
    return (
        <>
            <div className="cba-sps-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-sps-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-sps-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-sps-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page" className="cba-sps-one-dd-active">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page">VAT Settings</a></li>
                                <li><a href="/ProductSettings-page">Product Settings</a></li>
                                <li><a href="/PurchaseSettings-page">Purchase Settings</a></li>
                                <li><a href="">Sale Settings</a></li>
                                <li><a href="">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-sps-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-sps-two-dd">
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
                <div className="cba-sps-details-container">
                    {/* left container */}
                    <div className="cba-sps-left-inner-con">
                        <div className="cba-sps-lic-heading-part">
                            <h1>Payment Method List</h1>
                            <button><i className='cba-sps-lic-plus-icon bx bx-plus-circle'></i>Add Payment Method</button>
                        </div>
                        <div className="cba-sps-lic-table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Payment Method</th>
                                        <th>Payment Type</th>
                                        <th>COA ID</th>
                                        <th>Status</th>
                                        <th>Icon</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Cash</td>
                                        <td>Cash</td>
                                        <td>Cash</td>
                                        <td><span className="cba-sps-lic-pms-active">Active</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Bkash</td>
                                        <td>Mobile Banking</td>
                                        <td>Bkash</td>
                                        <td><span className="cba-sps-lic-pms-active">Active</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Rocket</td>
                                        <td>Mobile Banking</td>
                                        <td>Rocket</td>
                                        <td><span className="cba-sps-lic-pms-active">Active</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Nagad</td>
                                        <td>Mobile Banking</td>
                                        <td>Nagad</td>
                                        <td><span className="cba-sps-lic-pms-inactive">Inactive</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Visa City Bank</td>
                                        <td>Cards</td>
                                        <td>Visa City Bank</td>
                                        <td><span className="cba-sps-lic-pms-active">Active</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Visa Islami Bank</td>
                                        <td>Cards</td>
                                        <td>Visa Islami Bank</td>
                                        <td><span className="cba-sps-lic-pms-active">Active</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Master Card</td>
                                        <td>Cards</td>
                                        <td>Master Card</td>
                                        <td><span className="cba-sps-lic-pms-active">Active</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>City Bank</td>
                                        <td>Net Banking</td>
                                        <td>City Bank</td>
                                        <td><span className="cba-sps-lic-pms-active">Active</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>HSBC</td>
                                        <td>Net Banking</td>
                                        <td>HSBC</td>
                                        <td><span className="cba-sps-lic-pms-active">Active</span></td>
                                        <td><img src="https://placehold.co/35x35" alt="payment method icon" /></td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-lic-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-lic-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* ----------------------------------------------------------------- */}
                    {/* left container modal content */}

                    {/* ----------------------------------------------------------------- */}
                    {/* right container */}
                    <div className="cba-sps-right-inner-con">
                        <div className="cba-sps-risc-heading-part">
                            <h1>Payment Type</h1>
                            <button><i className='cba-sps-risc-plus-icon bx bx-plus-circle'>Add Payment Type</i></button>
                        </div>
                        <div className="cba-sps-risc-table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Created at</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Net Banking</td>
                                        <td><span className='cba-sps-risc-pts-inactive'>Inactive</span></td>
                                        <td>03-02-2025 03:00 PM</td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-risc-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-risc-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mobile Banking</td>
                                        <td><span className='cba-sps-risc-pts-active'>Active</span></td>
                                        <td>03-02-2025 03:00 PM</td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-risc-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-risc-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Cards</td>
                                        <td><span className='cba-sps-risc-pts-active'>Active</span></td>
                                        <td>03-02-2025 03:00 PM</td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-risc-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-risc-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Cash</td>
                                        <td><span className='cba-sps-risc-pts-active'>Active</span></td>
                                        <td>03-02-2025 03:00 PM</td>
                                        <td>
                                            <div>
                                                <i className='cba-sps-risc-edit-icon bx bx-edit'></i>
                                                <i className='cba-sps-risc-delete-icon bx bx-trash'></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* ----------------------------------------------------------------- */}
                    {/* right container modal content */}

                    {/* ----------------------------------------------------------------- */}
                </div>
            </div>
            {/* ----------------------------------------------------------------------------------------- */}
            {/* left modal script */}
            <script>

            </script>
            {/* right modal script */}
            <script>

            </script>
        </>
    );
};

export default SettingPaymentSetting;