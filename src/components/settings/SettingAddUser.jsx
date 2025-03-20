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
                {/* add user container */}
                <div className="cba-settings-adu-adduser-container">
                    {/* email box */}
                    <div className="cba-setting-adu-auc-name-box">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                    {/* email box */}
                    <div className="cba-setting-adu-auc-email-box">
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder='Enter your email' />
                    </div>
                    {/* mobile box */}
                    <div className="cba-setting-adu-auc-mobile-box">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" placeholder='Enter your mobile number' />
                    </div>
                    {/* password box */}
                    <div className="cba-setting-adu-auc-password-box">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Enter your login password' />
                    </div>
                    {/* role box */}
                    <div className="cba-setting-adu-auc-role-box">
                        <label htmlFor="">Role</label>
                        <select name="" id="">
                            <option value="">- Select Role -</option>
                            <option value="">Super Admin</option>
                            <option value="">Admin</option>
                            <option value="1">User</option>
                        </select>
                    </div>
                    {/* image box */}
                    <div className="cba-setting-adu-auc-image-box">
                        <label htmlFor="">Image</label>
                        <input type="file" title='Upload your image'/>
                    </div>
                    {/* status box */}
                    <div className="cba-setting-adu-auc-status-box">
                        <label htmlFor="">Status</label>
                        <select name="" id="">
                            <option value="">- Select Status -</option>
                            <option value="">Active</option>
                            <option value="">Inactive</option>
                        </select>
                    </div>
                    {/* submit button con */}
                    <div className="cba-setting-adu-auc-submit-btn-box">
                        <button>Submit</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingAddUser;