import './css/CategoryPage.css'
const CategoryPage = () => {
    return (
        <>
            <div className="category-container">
                <div className="top-menus">
                    <ul>
                        <li><a href="/index.html" className="active-menu">Category</a></li>
                        <li><a href="/inner-pages/html/anc.html" className="light-up">Add New Category</a></li>
                        <li><a href="/inner-pages/html/asc.html" className="light-up">Add Sub Category</a></li>
                        <li><a href="/inner-pages/html/scl.html" className="light-up">Sub Category List</a></li>
                    </ul>
                </div>

                <div className="list-container">
                    <div className="heading-add-new-btn">
                        <div className="heading">
                            <h2>Category List</h2>
                        </div>
                        <div className="add-new-btn">
                            <i className='add-icon bx bx-plus-circle'></i>
                            <a href="/inner-pages/html/anc.html">Add New Category</a>
                        </div>
                    </div>
                    <div className="list-short-dpdwn-search-box">
                        <div className="list-short-dpdwn">
                            <h3>Show</h3>
                            <select name="10" id="">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">30</option>
                                <option value="">All</option>
                            </select>
                            <h3>entries</h3>
                        </div>
                        <div className="search-box">
                            <legend>Search: <input type="text"/></legend>
                        </div>
                    </div>
                    <div className="table-list">
                        <table>
                            <thead>
                                <tr>
                                    <th title="SL">SL</th>
                                    <th title="Code">Code</th>
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
                                    <td><span className="active">Active</span></td>
                                    <td>
                                        <a title="Edit" href="#"><i className='edit-icon bx bx-edit'></i></a>
                                        <a title="Delete" href="#"><i className='delete-icon bx bx-trash'></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>102</td>
                                    <td>Beverage Item</td>
                                    <td><span className="inactive">Inactive</span></td>
                                    <td>
                                        <a title="Edit" href="#"><i className='edit-icon bx bx-edit'></i></a>
                                        <a title="Delete" href="#"><i className='delete-icon bx bx-trash'></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>103</td>
                                    <td>Chocolate</td>
                                    <td><span className="active">Active</span></td>
                                    <td>
                                        <a title="Edit" href="#"><i className='edit-icon bx bx-edit'></i></a>
                                        <a title="Delete" href="#"><i className='delete-icon bx bx-trash'></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>104</td>
                                    <td>Bakery Food</td>
                                    <td><span className="inactive">Inactive</span></td>
                                    <td>
                                        <a title="Edit" href="#"><i className='edit-icon bx bx-edit'></i></a>
                                        <a title="Delete" href="#"><i className='delete-icon bx bx-trash'></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>105</td>
                                    <td>Masala</td>
                                    <td><span className="active">Active</span></td>
                                    <td>
                                        <a title="Edit" href="#"><i className='edit-icon bx bx-edit'></i></a>
                                        <a title="Delete" href="#"><i className='delete-icon bx bx-trash'></i></a>
                                    </td>
                                </tr>
                                <tr className="no-data-available">
                                    <th colSpan="5">No data available in table</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="entries-details-list-page-btn">
                        <div className="entries-details">
                            Showing <span>1</span> to <span>5</span> of <span>5</span> entries
                        </div>
                        <div className="list-page-btn">
                            <button>Previous</button>
                            <h4><span>1</span></h4>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryPage;