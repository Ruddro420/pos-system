import { Link } from 'react-router-dom';
import './css/AddSubCategory.css'
const AddSubCategory = () => {
    return (
        <>
            <div className="asc-add-sub-container">
        <div className="asc-top-menus">
            <ul>
            <li><Link  to ="/category-page" className="asc-light-up">Category</Link></li>
                <li><Link  to ="/AddNewCategory-page" className="asc-light-up">Add New Category</Link></li>
                <li><Link   to="/AddSubCategory-page" className="asc-active-menu">Add Sub Category</Link></li>
                <li><Link  to ="/SubCategoryList-page" className="asc-light-up">Sub Category List</Link></li>
            </ul>
        </div>
        <div className="asc-add-container">
            <div className="asc-heading-add-new-btn">
                <div className="asc-heading">
                    <h2>Add Sub Category</h2>
                </div>
                <div className="asc-subc-list-btn">
                    <i className='asc-add-icon bx bx-list-ul'></i>
                    <a href="/index.html">Sub Category List</a>
                </div>
            </div>
            <div className="asc-category-add-field">
                <div className="asc-form-con">
                    <div className="asc-label">
                        <label htmlFor="category-name">Sub Category Name<span className="asc-required">*</span></label>
                        <label htmlFor="category-name">Category<span className="asc-required">*</span></label>
                        <label htmlFor="category-name">Status<span className="asc-required">*</span></label>
                    </div>
                    <div className="input">
                        <input type="text" name="category-name" id="category-name" placeholder="Category Name"/>
                        <select title="" name="Category" id="#">
                            <option title="" value="">-- Select Category --</option>
                            <option title="" value="">Dry Food</option>
                            <option title="" value="">Beverage Item</option>
                            <option title="" value="">Chocolate</option>
                            <option title="" value="">Bakery Item</option>
                            <option title="" value="">Masala</option>
                        </select>
                        <select title="" name="Status" id="#">
                            <option title="" value="">-- Select Status --</option>
                            <option title="Active" value="active">Active</option>
                            <option title="Inactive" value="inactive">Inactive</option>
                        </select>
                        <div className="asc-asc-submit-btn">
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

export default AddSubCategory;