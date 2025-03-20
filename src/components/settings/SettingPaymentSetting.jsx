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
                                <li><a href="">Prefix Settings</a></li>
                                <li><a href="">VAT Settings</a></li>
                                <li><a href="">Product Settings</a></li>
                                <li><a href="">Purchase Settings</a></li>
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
                
            </div>
        </>
    );
};

export default SettingPaymentSetting;