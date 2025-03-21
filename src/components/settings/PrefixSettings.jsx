import '../settings/css/PrefixSettings.css'
const PrefixSettings = () => {
    return (
        <>
            <div className="cba-preset-container">
                {/* <!-- prefix top menus --> */}
                <div className="cba-preset-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-pretm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-pretm-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page" className="cba-pretm-one-dd-active">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page">VAT Settings</a></li>
                                <li><a href="">Product Settings</a></li>
                                <li><a href="">Purchase Settings</a></li>
                                <li><a href="">Sale Settings</a></li>
                                <li><a href="">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-pretm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-pretm-two-dd">
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
                {/* prefix settings container */}
                <div className="cba-preset-inner-con">
                    {/* Top part */}
                    <div className="cba-preset-ic-head-part">
                        <h1>Prefix Settings</h1>
                    </div>
                    {/* Middle */}
                    <div className="cba-preset-ic-middle-part">
                        <div className="cba-preset-ic-middle-part-col1">
                            <div className="cba-preset-ic-mp-col1-input-box">
                                <label htmlFor="">Purchase Requisition No.</label>
                                <input type="text" placeholder='PRN-' required/>
                            </div>
                            <div className="cba-preset-ic-mp-col1-input-box">
                                <label htmlFor="">Purchase Return No.</label>
                                <input type="text" placeholder='PRTN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col1-input-box">
                                <label htmlFor="">Sale Draft No.</label>
                                <input type="text" placeholder='SDN-'required />
                            </div>
                            <div className="cba-preset-ic-mp-col1-input-box">
                                <label htmlFor="">Wastage No.</label>
                                <input type="text" placeholder='WN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col1-input-box">
                                <label htmlFor="">Service Invoice No.</label>
                                <input type="text" placeholder='SEIN-' required />
                            </div>
                        </div>
                        <div className="cba-preset-ic-middle-part-col2">
                            <div className="cba-preset-ic-mp-col2-input-box">
                                <label htmlFor="">Purchase No.</label>
                                <input type="text" placeholder='PN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col2-input-box">
                                <label htmlFor="">Sale Quotation No.</label>
                                <input type="text" placeholder='SQN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col2-input-box">
                                <label htmlFor="">Sale Return No.</label>
                                <input type="text" placeholder='SRN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col2-input-box">
                                <label htmlFor="">Delivery No.</label>
                                <input type="text" placeholder='DN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col2-input-box">
                                <label htmlFor="">Transfer No.</label>
                                <input type="text" placeholder='TN-' required />
                            </div>
                        </div>
                        <div className="cba-preset-ic-middle-part-col3">
                            <div className="cba-preset-ic-mp-col3-input-box">
                                <label htmlFor="">Purchase Received No.</label>
                                <input type="text" placeholder='PRDN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col3-input-box">
                                <label htmlFor="">Sale Invoice No.</label>
                                <input type="text" placeholder='SAIN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col3-input-box">
                                <label htmlFor="">Stock Adjustment No.</label>
                                <input type="text" placeholder='SAN-' required />
                            </div>
                            <div className="cba-preset-ic-mp-col3-input-box">
                                <label htmlFor="">Employee ID</label>
                                <input type="text" placeholder='EI-' required />
                            </div>
                        </div>
                    </div>
                    {/* Bottom part */}
                    <div className="cba-preset-ic-bottom-part">
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrefixSettings;