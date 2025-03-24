import { Link } from 'react-router-dom'
import './css/AddNewCategory.css'
const AddNewCategory = () => {
    return (
        <>
             <div className="anc-add-new-container">
        <div className="anc-top-menus">
            <ul>
            <li><Link  to ="/category-page" className="anc-light-up">Category</Link></li>
                <li><Link  to ="/AddNewCategory-page" className="anc-active-menu">Add New Category</Link></li>
                <li><Link   to="/AddSubCategory-page" className="anc-light-up">Add Sub Category</Link></li>
                <li><Link  to ="/SubCategoryList-page" className="anc-light-up">Sub Category List</Link></li>
            </ul>
        </div>
        <div className="anc-add-container">
            <div className="anc-heading-add-new-btn">
                <div className="anc-heading">
                    <h2>Add Category</h2>
                </div>
                <div className="anc-cate-list-btn">
                    <i className='anc-add-icon bx bx-list-ul'></i>
                    <a href="/index.html">Category List</a>
                </div>
            </div>
            <div className="anc-category-add-field">
                <div className="anc-form-con">
                    <div className="anc-label">
                        <label htmlFor="category-name">Category Name<span className="anc-required">*</span></label>
                        <label htmlFor="category-name">Status<span className="anc-required">*</span></label>
                    </div>
                    <div className="anc-input">
                        <input type="text" name="category-name" id="category-name" placeholder="Category Name"/>
                        <select title="" name="Status" id="#">
                            <option value="">-- Select Status --</option>
                            <option title="Active" value="active">Active</option>
                            <option title="Inactive" value="inactive">Inactive</option>
                        </select>
                        <div className="anc-submit-btn">
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

export default AddNewCategory;