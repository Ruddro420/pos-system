import '../settings/css/ProductSettings.css'
const ProductSettings = () => {
    return (
        <>
            <div className="cba-proset-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-proset-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-protm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-protm-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page">VAT Settings</a></li>
                                <li><a href="/ProductSettings-page" className="cba-protm-one-dd-active">Product Settings</a></li>
                                <li><a href="/PurchaseSettings-page">Purchase Settings</a></li>
                                <li><a href="/SaleSettings-page">Sale Settings</a></li>
                                <li><a href="/CurrencyList-page">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-protm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-protm-two-dd">
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
                {/* setting container */}
                <div className="cba-proset-setting-onf-container">
                    {/* Head part */}
                    <div className="cba-proset-soc-head-part">
                        <h1>Product Settings</h1>
                    </div>
                    {/* middle part */}
                    <div className="cba-proset-soc-middle-part">
                        <div className="cba-proset-soc-mp-col">
                            <div className="cba-proset-soc-mp-col-row">
                                <p>Brand</p>
                                <div className="cba-proset-soc-mp-col-row-btn-box">
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                            </div>
                            <div className="cba-proset-soc-mp-col-row">
                                <p>Category</p>
                                <div className="cba-proset-soc-mp-col-row-btn-box">
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                            </div>
                        </div>
                        <div className="cba-proset-soc-mp-col">
                            <div className="cba-proset-soc-mp-col-row">
                                <p>Model</p>
                                <div className="cba-proset-soc-mp-col-row-btn-box">
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                            </div>
                            <div className="cba-proset-soc-mp-col-row">
                                <p>Sub Category</p>
                                <div className="cba-proset-soc-mp-col-row-btn-box">
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                            </div>
                        </div>
                        <div className="cba-proset-soc-mp-col">
                            <div className="cba-proset-soc-mp-col-row">
                                <p>Warranty</p>
                                <div className="cba-proset-soc-mp-col-row-btn-box">
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                            </div>
                            <div className="cba-proset-soc-mp-col-row">
                                <p>Mandatory Supplier</p>
                                <div className="cba-proset-soc-mp-col-row-btn-box">
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                            </div>
                        </div>
                        <div className="cba-proset-soc-mp-col">
                            <div className="cba-proset-soc-mp-col-row">
                                <p>Product Price Update When Purchase Or Sale</p>
                                <div className="cba-proset-soc-mp-col-row-btn-box">
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                            </div>
                            <div className="cba-proset-soc-mp-col-row">
                                <p>Product Expiry And Batch</p>
                                <div className="cba-proset-soc-mp-col-row-btn-box">
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* bottom part */}
                    <div className="cba-proset-soc-bottom-part">
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSettings;