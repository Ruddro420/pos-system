import '../settings/css/SettingAddUser.css'
const SettingAddUser = () => {
    return (
        <>
            <div className="cba-setting-adu-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-settings-adu-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-stm-adu-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-stm-adu-one-dd">
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
                        <li className="cba-stm-adu-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-stm-adu-two-dd">
                                <li><a href="/SettingUserList-page">User List</a></li>
                                <li><a href="/SettingAddUser-page" className="cba-stm-adu-two-dd-active">User Add</a></li>
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

export default SettingAddUser;