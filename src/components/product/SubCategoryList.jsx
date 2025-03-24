import { Link } from "react-router-dom";
import './css/SubCategoryList.css'
const SubCategoryList = () => {
    return (
        <>
           <div className="sc-category-container">
        <div className="sc-top-menus">
            <ul>
                <li><Link  to ="/category-page" className="light-up">Category</Link></li>
                <li><Link  to ="/AddNewCategory-page" className="light-up">Add New Category</Link></li>
                <li><Link   to="/AddSubCategory-page" className="light-up">Add Sub Category</Link></li>
                <li><Link  to ="/SubCategoryList-page" className="asc-active-menu">Sub Category List</Link></li>
            </ul>
        </div>
        <div className="sc-list-container">
            <div className="sc-heading-add-new-btn">
                <div className="sc-heading">
                    <h2>Category List</h2>
                </div>
                <div className="sc-add-new-btn">
                    <i className='add-icon bx bx-plus-circle'></i>
                    <a href="/inner-pages/html/anc.html">Add New Sub Category</a>
                </div>
            </div>
            <div className="sc-list-short-dpdwn-search-box">
                <div className="sc-list-short-dpdwn">
                    <h3>Show</h3>
                    <select name="10" id="">
                        <option value="">10</option>
                        <option value="">20</option>
                        <option value="">30</option>
                        <option value="">All</option>
                    </select>
                    <h3>entries</h3>
                </div>
                <div className="sc-search-box">
                    <label>Search: <input type="text"/></label>
                </div>
            </div>
            <div className="sc-table-list">
                <table>
                    <thead>
                        <tr>
                            <th title="SL">SL</th>
                            <th title="Code">Code</th>
                            <th title="Category Name">Sub Category Name</th>
                            <th title="Category Name">Category Name</th>
                            <th title="Status">Status</th>
                            <th title="Action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>101</td>
                            <td>Dry Food</td>
                            <td>Dry Food</td>
                            <td><span className="sc-active">Active</span></td>
                            <td>
                                <a title="Edit" href="#"><i className='sc-edit-icon bx bx-edit'></i></a>
                                <a title="Delete" href="#"><i className='sc-delete-icon bx bx-trash'></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>102</td>
                            <td>Beverage Item</td>
                            <td>Beverage Item</td>
                            <td><span className="sc-inactive">Inactive</span></td>
                            <td>
                                <a title="Edit" href="#"><i className='sc-edit-icon bx bx-edit'></i></a>
                                <a title="Delete" href="#"><i className='sc-delete-icon bx bx-trash'></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>103</td>
                            <td>Chocolate</td>
                            <td>Chocolate</td>
                            <td><span className="sc-active">Active</span></td>
                            <td>
                                <a title="Edit" href="#"><i className='sc-edit-icon bx bx-edit'></i></a>
                                <a title="Delete" href="#"><i className='sc-delete-icon bx bx-trash'></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>104</td>
                            <td>Bakery Food</td>
                            <td>Bakery Food</td>
                            <td><span className="sc-inactive">Inactive</span></td>
                            <td>
                                <a title="Edit" href="#"><i className='sc-edit-icon bx bx-edit'></i></a>
                                <a title="Delete" href="#"><i className='sc-delete-icon bx bx-trash'></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>105</td>
                            <td>Masala</td>
                            <td>Masala</td>
                            <td><span className="sc-active">Active</span></td>
                            <td>
                                <a title="Edit" href="#"><i className='sc-edit-icon bx bx-edit'></i></a>
                                <a title="Delete" href="#"><i className='sc-delete-icon bx bx-trash'></i></a>
                            </td>
                        </tr>
                        <tr className="sc-no-data-available">
                            <th colSpan="6">No data available in table</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="sc-entries-details-list-page-btn">
                <div className="sc-entries-details">
                    <p>Showing 1 to 1 of 1 entries</p>
                </div>
                <div className="sc-list-page-btn">
                    <button>Previous</button>
                    <h4>1</h4>
                    <button>Next</button>
                </div>
            </div>
        </div>
    </div>   
        </>
    );
};

export default SubCategoryList;