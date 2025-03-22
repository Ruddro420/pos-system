import "../settings/css/AddCurrency.css"
const AddCurrency = () => {
    return (
        <>
            <div className="cba-add-currency-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-addcur-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-addcurtm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-addcurtm-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page">VAT Settings</a></li>
                                <li><a href="/ProductSettings-page">Product Settings</a></li>
                                <li><a href="/PurchaseSettings-page">Purchase Settings</a></li>
                                <li><a href="/SaleSettings-page">Sale Settings</a></li>
                                <li><a href="/CurrencyList-page" className="cba-addcurtm-one-dd-active">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-addcurtm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-addcurtm-two-dd">
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
            </div>
        </>
    );
};

export default AddCurrency;