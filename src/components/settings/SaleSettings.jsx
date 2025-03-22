import "../settings/css/SaleSettings.css"
const SaleSettings = () => {
    return (
        <>
            <div className="cba-saleset-container">
                {/* <!-- sale settings top menus --> */}
                <div className="cba-saleset-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-salestm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-salestm-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page">VAT Settings</a></li>
                                <li><a href="/ProductSettings-page">Product Settings</a></li>
                                <li><a href="/PurchaseSettings-page">Purchase Settings</a></li>
                                <li><a href="/SaleSettings-page" className="cba-salestm-one-dd-active">Sale Settings</a></li>
                                <li><a href="/CurrencyList-page">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-salestm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-salestm-two-dd">
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
                {/* sale setting container */}
                <div className="cba-saleset-setting-container">
                    {/* Head part */}
                    <div className="cba-saleset-sc-head-part">
                        <h1>Sale Settings</h1>
                    </div>
                    {/* Middle part */}
                    <div className="cba-saleset-sc-middle-part">
                        {/* row 1 input / select */}
                        <div className="cba-saleset-sc-mp-row1">
                            <div className="cba-saleset-sc-mpr1-input-box">
                                <label htmlFor="">Default Sale Discount<span className="cba-saleset-required">*</span></label>
                                <div>
                                    <span>%</span>
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="cba-saleset-sc-mpr1-select-box">
                                <label htmlFor="">Default Sale VAT</label>
                                <select name="" id="">
                                    <option value="">Default Sales VAT</option>
                                </select>
                            </div>
                            <div className="cba-saleset-sc-mpr1-select-box">
                                <label htmlFor="">Sale VAT Setting</label>
                                <select name="" id="">
                                    <option value="">VAT With Expenses</option>
                                    <option value="">VAT Without Expenses</option>
                                </select>
                            </div>
                        </div>
                        {/* row 2 select */}
                        <div className="cba-saleset-sc-mp-row2">
                            <div className="cba-saleset-sc-mpr2-select-box">
                                <label htmlFor="">Sales Item Addition Method</label>
                                <select name="" id="">
                                    <option value="">Add item in new row</option>
                                    <option value="">Increase item quantity if it already exists</option>
                                </select>
                            </div>
                            <div className="cba-saleset-sc-mpr2-select-box">
                                <label htmlFor="">Sale Submit Button Print Option</label>
                                <select name="" id="">
                                    <option value="">Both (POS & A4)</option>
                                    <option value="">POS Only</option>
                                    <option value="">A4 Only</option>
                                </select>
                            </div>
                        </div>
                        {/* row 3 button */}
                        <div className="cba-saleset-sc-mp-row3">
                            <div className="cba-saleset-sc-mpr3-col">
                                <div className="cba-saleset-sc-mpr3-cols-row">
                                    <p>Multiple Payment</p>
                                    <div className="cba-saleset-sc-mpr3-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                                <div className="cba-saleset-sc-mpr3-cols-row">
                                    <p>Sale Dashboard</p>
                                    <div className="cba-saleset-sc-mpr3-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                                <div className="cba-saleset-sc-mpr3-cols-row">
                                    <p>Draft Sale</p>
                                    <div className="cba-saleset-sc-mpr3-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-saleset-sc-mpr3-col">
                                <div className="cba-saleset-sc-mpr3-cols-row">
                                    <p>Sale Counter Daily Close</p>
                                    <div className="cba-saleset-sc-mpr3-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                                <div className="cba-saleset-sc-mpr3-cols-row">
                                    <p>Allow Over Selling<i className='cba-ssc-mpr3-clos-ned-icon bx bxs-help-circle'></i></p>
                                    <div className="cba-saleset-sc-mpr3-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-saleset-sc-mpr3-col">
                                <div className="cba-saleset-sc-mpr3-cols-row">
                                    <p>Sale Discount %</p>
                                    <div className="cba-saleset-sc-mpr3-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                                <div className="cba-saleset-sc-mpr3-cols-row">
                                    <p>Vouchers Auto Approval<i className='cba-ssc-mpr3-clos-mande-icon bx bxs-info-circle'></i></p>
                                    <div className="cba-saleset-sc-mpr3-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row 4 textarea */}
                        <div className="cba-saleset-sc-mp-row4">
                            <div className="cba-saleset-sc-mpr4-textarea-box">
                                <label htmlFor="">Sales Terms & Conditions</label>
                                <textarea name="" id="">Refund and Exchange are accepted within 14 days from the day of purchase.</textarea>
                            </div>
                            <div className="cba-saleset-sc-mpr4-textarea-box">
                                <label htmlFor="">Thank you message</label>
                                <textarea name="" id="">Thank You For Shopping With Us</textarea>
                            </div>
                        </div>
                    </div>
                    {/* Bottom part */}
                    <div className="cba-saleset-sc-bottom-part">
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SaleSettings;