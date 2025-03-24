import { Link } from 'react-router-dom';
import './css/AddSubCategory.css'
const AddSubCategory = () => {
    return (
        <>
            <div className="add-sub-container">
        <div className="top-menus">
            <ul>
            <li><Link  to ="/category-page" className="light-up">Category</Link></li>
                <li><Link  to ="/AddNewCategory-page" className="light-up">Add New Category</Link></li>
                <li><Link   to="/AddSubCategory-page" className="light-up">Add Sub Category</Link></li>
                <li><Link  to ="/SubCategoryList-page" className="active-menu">Sub Category List</Link></li>
            </ul>
        </div>
        <div className="add-container">
            <div className="heading-add-new-btn">
                <div className="heading">
                    <h2>Add Sub Category</h2>
                </div>
                <div className="subc-list-btn">
                    <i className='add-icon bx bx-list-ul'></i>
                    <a href="/index.html">Sub Category List</a>
                </div>
            </div>
            <div className="category-add-field">
                <div className="form-con">
                    <div className="label">
                        <label htmlFor="category-name">Sub Category Name<span className="required">*</span></label>
                        <label htmlFor="category-name">Category<span className="required">*</span></label>
                        <label htmlFor="category-name">Status<span className="required">*</span></label>
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
                        <div className="submit-btn">
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