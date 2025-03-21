import "../settings/css/PurchaseSettings.css"
const PurchaseSettings = () => {
    return (
        <>
            <div className="cba-purset-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-purset-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-purstm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-purstm-one-dd">
                                <li><a href="/ApplicationSettings-page">Application</a></li>
                                <li><a href="/SettingPaymentSetting-page">Payment Settings</a></li>
                                <li><a href="/PrefixSettings-page">Prefix Settings</a></li>
                                <li><a href="/VATSettings-page">VAT Settings</a></li>
                                <li><a href="/ProductSettings-page">Product Settings</a></li>
                                <li><a href="/PurchaseSettings-page" className="cba-purstm-one-dd-active">Purchase Settings</a></li>
                                <li><a href="">Sale Settings</a></li>
                                <li><a href="">Currency</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu two --> */}
                        <li className="cba-purstm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-purstm-two-dd">
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
                <div className="cba-purset-setting-container">
                    {/* head part */}
                    <div className="cba-purset-sc-head-part">
                        <h1>Purchase Settings</h1>
                    </div>
                    {/* middle part */}
                    <div className="cba-purset-sc-middle-part">
                        <div className="cba-purset-sc-middle-part-row1">
                            {/* row 1 select */}
                            <div className="cba-purset-sc-middle-part-row1-select-box">
                                <label htmlFor="">Purchase item addition method</label>
                                <select name="" id="">
                                    <option value="">Add item in New Row</option>
                                    <option value="">Increase item quantity if it already exists</option>
                                </select>
                            </div>
                            <div className="cba-purset-sc-middle-part-row1-select-box">
                                <label htmlFor="">Print Type</label>
                                <select name="" id="">
                                    <option value="">No Print</option>
                                    <option value="">A4 Size Print</option>
                                    <option value="">POS Print</option>
                                </select>
                            </div>
                        </div>
                        {/* row 2 button */}
                        <div className="cba-purset-sc-middle-part-row2">
                            <div className="cba-purset-sc-mpr2-col">
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>Purchase Requisition<i className='cba-psc-mpr2-clos-mande-icon bx bxs-info-circle'></i></p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>Purchase Status<i className='cba-psc-mpr2-clos-mande-icon bx bxs-info-circle'></i></p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Default Outlet</button>
                                        <button>Multiple Outlet</button>
                                    </div>
                                </div>
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>VAT JV Include<i className='cba-psc-mpr2-clos-mande-icon bx bxs-info-circle'></i></p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-purset-sc-mpr2-col">
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>Lot Number<i className='cba-psc-mpr2-clos-mande-icon bx bxs-info-circle'></i></p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>Purchase QR Code</p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Show</button>
                                        <button>Hide</button>
                                    </div>
                                </div>
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>Vouchers Auto Approval<i className='cba-psc-mpr2-clos-mande-icon bx bxs-info-circle'></i></p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-purset-sc-mpr2-col">
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>Editing product price from purchase screen<i className='cba-psc-mpr2-clos-mande-icon bx bxs-info-circle'></i></p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>Purchase Dashboard</p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Enable</button>
                                        <button>Disable</button>
                                    </div>
                                </div>
                                <div className="cba-purset-sc-mpr2-cols-row">
                                    <p>Sales Rate Display</p>
                                    <div className="cba-purset-sc-mpr2-col-row-btn-box">
                                        <button>Show</button>
                                        <button>Hide</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row 3 textarea */}
                        <div className="cba-purset-sc-middle-part-row3">
                            <label htmlFor="">Purchase Terms & Conditions</label>
                            <textarea name="" id="" placeholder="Write Your Condition Here."></textarea>
                        </div>
                    </div>
                    {/* bottom part */}
                    <div className="cba-purset-sc-bottom-part">
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchaseSettings;