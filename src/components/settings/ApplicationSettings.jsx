import '../settings/css/ApplicationSettings.css'
const ApplicationSettings = () => {
    return (
        <>
            <div className="cba-settings-container">
                {/* <!-- settings top menus --> */}
                <div className="cba-settings-top-menubar">
                    <ul>
                        {/* <!-- menu one --> */}
                        <li className="cba-stm-one">
                            Software Setup<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu one dropdown menu --> */}
                            <ul className="cba-stm-one-dd">
                                <li><a href="/ApplicationSettings-page" className="cba-stm-one-dd-active">Application</a></li>
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
                        <li className="cba-stm-two">
                            User Management<i className='cba-top-menu-arrow bx bx-chevron-down'></i>
                            {/* <!-- menu two dropdown menu --> */}
                            <ul className="cba-stm-two-dd">
                                <li><a href="">User List</a></li>
                                <li><a href="">Role List</a></li>
                            </ul>
                        </li>
                        {/* <!-- menu three --> */}
                        <li><a href="/SettingActivityLog-page">
                            Activity Log
                        </a></li>
                    </ul>
                </div>
                {/* <!-- todo: inner Container --> */}
                <div className="cba-settings-inner-container">
                    <div className="cba-stng-incon-toppart">
                        <div className="cba-stng-incon-toppart-heading">
                            <h2>Edit Application</h2>
                        </div>
                    </div>
                    <div className="cba-stng-incon-middlepart">
                        <div className="cba-stng-incon-middlepart-text-input-field">
                            {/*<!-- col 1 -->*/}
                            <div className="cba-stng-incon-middlepart-text-input-field-col1">
                                <div className="cba-stng-incon-mp-tif-col1-input-label">
                                    <label htmlFor="">Title<span className="required">*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col1-input-label">
                                    <label htmlFor="">Phone<span className="required">*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col1-input-label">
                                    <label htmlFor="">Address<span className="required">*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col1-input-label">
                                    <label htmlFor="">Website<span className="required">*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col1-input-label">
                                    <label htmlFor="">Currency<span className="required">*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col1-input-label">
                                    <label htmlFor="">Language<span className="required">*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col1-input-label">
                                    <label htmlFor="">Floating Number<span className="required">*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col1-input-label">
                                    <label htmlFor="">Return Type<span className="required">*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col1-fxd-date">
                                    <div className="cba-stng-incon-mp-tif-col1-fxd-date-top">
                                        <label htmlFor="">Fixed Date</label>
                                        <input type="button" value="Enable"/>
                                        <input type="button" value="Disable"/>
                                    </div>
                                    <div className="cba-stng-incon-mp-tif-col1-fxd-date-bottom">
                                        <label htmlFor="">Please fixed your sale date</label>
                                        <input type="date"/>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- col 2 --> */}
                            <div className="cba-stng-incon-middlepart-text-input-field-col2">
                                <div className="cba-stng-incon-mp-tif-col2-input-label">
                                    <label htmlFor="">Email Address<span className="required">*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col2-input-label">
                                    <label htmlFor="">VAT No<span className="required">*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col2-input-label">
                                    <label htmlFor="">Time Zone<span className="required">*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col2-input-label">
                                    <label htmlFor="">Footer Text<span className="required">*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col2-input-label">
                                    <label htmlFor="">Negative Amount Symbol<span className="required">*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col2-input-label">
                                    <label htmlFor="">Direction<span className="required">*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col2-input-label">
                                    <label htmlFor="">Country<span className="required">*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col2-vat-btn">
                                    VAT Calculation 
                                    <button>Enable</button>
                                    <button>Disable</button>
                                </div>
                                <div className="cba-stng-incon-mp-tif-col2-input-label">
                                    <label htmlFor="">Product Wise Vat Calculation</label>
                                    <select name="" id="">
                                        <option value="">Before Discount</option>
                                        <option value="">After Discount</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- todo: working on --> */}
                            <div className="cba-stng-incon-middlepart-text-input-field-col3">
                                <div className="cba-stng-incon-middlepart-fif-input-one">
                                    <h3>Logo</h3>
                                    <img src="https://placehold.co/135x45" alt="logo-img"/>
                                    <div className="cba-simfio-fileupload">
                                        <input type="file" id="logo-img"/>
                                        <label htmlFor="logo-img">Upload</label>
                                    </div>
                                    <span>Recommended pixel (135 X 45)</span>
                                </div>
                                <div className="cba-stng-incon-middlepart-fif-input-one">
                                    <h3>Sidebar Logo</h3>
                                    <img src="https://placehold.co/150x45" alt="logo-img"/>
                                    <div className="cba-simfio-fileupload">
                                        <input type="file" id="sidebar-logo-img"/>
                                        <label htmlFor="sidebar-logo-img">Upload</label>
                                    </div>
                                    <span>Recommended pixel (150 X 45)</span>
                                </div>
                                <div className="cba-stng-incon-middlepart-fif-input-one">
                                    <h3>Sidebar Collapsed Logo</h3>
                                    <img src="https://placehold.co/90x90" alt="logo-img"/>
                                    <div className="cba-simfio-fileupload">
                                        <input type="file" id="sidebar-collapsed-logo-img"/>
                                        <label htmlFor="sidebar-collapsed-logo-img">Upload</label>
                                    </div>
                                    <span>Recommended pixel (90 X 90)</span>
                                </div>
                                <div className="cba-stng-incon-middlepart-fif-input-one">
                                    <h3>Login Image</h3>
                                    <img src="https://placehold.co/250x100" alt="logo-img"/>
                                    <div className="cba-simfio-fileupload">
                                        <input type="file" id="login-img"/>
                                        <label htmlFor="login-img">Upload</label>
                                    </div>
                                    <span>Recommended pixel (250 X 100)</span>
                                </div>
                                <div className="cba-stng-incon-middlepart-fif-input-one">
                                    <h3>Favicon</h3>
                                    <img src="https://placehold.co/60x60" alt="logo-img"/>
                                    <div className="cba-simfio-fileupload">
                                        <input type="file" id="favicon-img"/>
                                        <label htmlFor="favicon-img">Upload</label>
                                    </div>
                                    <span>Recommended pixel (60 X 60)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cba-stng-incon-bottompart">
                        <input type="submit"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplicationSettings;