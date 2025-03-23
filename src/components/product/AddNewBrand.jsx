import { Link } from "react-router-dom";

import './css/AddNewBrand.css'
const AddNewBrand = () => {
    return (
        <>
      <div className="anb-add-new-brand">
        <div className="anb-top-menus">
            <ul>
                <ul>
                    <li><Link to="/brand-page" className="anb-light-up">Brands</Link></li>
                    <li><Link to="/AddNewBrand-page" className="anb-active-menu">Add New Brand</Link></li>
                </ul>
            </ul>
        </div>
        <div className="anb-add-container">
            <div className="anb-heading-add-new-btn">
                <div className="anb-heading">
                    <h4>Add Brand</h4>
                </div>
                <div className="anb-brand-list-btn">
                    <i className='anb-add-icon bx bx-list-ul'></i>
                    <Link to="/brand-page">Brand List</Link>
                </div>
            </div>
            <div className="anb-brand-add-field">
                <div className="anb-form-con">
                    <div className="anb-label">
                        <label htmlFor="brand-name">Brand Name<span className="anb-required">*</span></label>
                        <label htmlFor="brand-name">Status<span className="anb-required">*</span></label>
                    </div>
                    <div className="anb-input">
                        <input type="text" name="brand-name" id="brand-name" placeholder="Brand Name"/>
                        <select title="" name="Status" id="#">
                            <option value="">-- Select Status --</option>
                            <option title="Active" value="active">Active</option>
                            <option title="Inactive" value="inactive">Inactive</option>
                        </select>
                        <div className="anb-submit-btn">
                            <input type="submit"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div> 
        </>
    );
};

export default AddNewBrand;