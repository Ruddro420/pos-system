import { Link } from 'react-router-dom';
import './css/SubType.css'
const SubType = () => {
    return (
        <>
            <div className="sh-parent">
      {/*   <!-- === TOP MENU ITEMS === --> */}
        <div className="sh-top-menu-items">
            <ul>
                <li className="sh-menu-items"><Link to="/SubAccounts-page">Sub Account</Link></li>
                <li className="sh-active-item"><Link to="/SubType-page">Subtype</Link></li>
            </ul>
        </div>
        <div className="sh-child-container">
            <div className="sh-draft-sale-section">
              {/*   <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="sh-draft-sale-top-item">
                    <p>Sub Account List</p>
                    <div className="sh-sub-account">
                        <i className="fa-solid fa-circle-plus"></i> Add Subtype
                    </div>
                </div>
            </div>
            <hr/>
          {/*   <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="sh-show-and-search-container">
                <div className="sh-show-container">
                    <p>Show</p>
                    <select name="" id="">
                        <option value="number" name="show">10</option>
                        <option value="number" name="show">20</option>
                        <option value="number" name="show">30</option>
                        <option value="number" name="show">40</option>
                        <option value="number" name="show">50</option>
                        <option value="number" name="show">100</option>
                    </select>
                    <p>Entries</p>
                </div>
               {/*  <!-- === SEARCH === --> */}
                <div className="sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="manage-sale-details-section">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Account Subtype Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>None</td>
                            <td className="text-center">
                                <p>Active</p>
                            </td>
                            <td className="sh-icon-container">
                                <div className="sh-edit-trash-icon">
                                    <div className="sh-edit-icon">
                                        <i className="fa-solid fa-edit"></i>
                                    </div>
                                    <div className="sh-trash-icon">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>Supplier</td>
                            <td className="text-center">
                                <p>Active</p>
                            </td>
                            <td className="sh-icon-container">
                                <div className="sh-edit-trash-icon">
                                    <div className="sh-edit-icon">
                                        <i className="fa-solid fa-edit"></i>
                                    </div>
                                    <div className="sh-trash-icon">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>Customer</td>
                            <td className="text-center">
                                <p>Active</p>
                            </td>
                            <td className="sh-icon-container">
                                <div className="sh-edit-trash-icon">
                                    <div className="sh-edit-icon">
                                        <i className="fa-solid fa-edit"></i>
                                    </div>
                                    <div className="sh-trash-icon">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td>Employee</td>
                            <td className="text-center">
                                <p>Active</p>
                            </td>
                            <td className="sh-icon-container">
                                <div className="sh-edit-trash-icon">
                                    <div className="sh-edit-icon">
                                        <i className="fa-solid fa-edit"></i>
                                    </div>
                                    <div className="sh-trash-icon">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          {/*   <!-- === SLIDE PAGES === --> */}
            <div className="sh-slider-pages">
                <p>Showing 1 to 4 of 4 entries</p>
                <div className="sh-slide-right-item">
                    <a href="#">Previous</a>
                    <p>1</p>
                    <a href="#">Next</a>
                </div>
            </div>
        </div>

    </div>  
        </>
    );
};

export default SubType;