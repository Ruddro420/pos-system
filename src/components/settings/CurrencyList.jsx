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
                
            </div>
        </>
    );
};

export default CurrencyList;