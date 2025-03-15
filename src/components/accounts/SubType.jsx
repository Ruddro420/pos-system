import { Link } from 'react-router-dom';
import './css/SubType.css'
const SubType = () => {
    return (
        <>
            <div className="st-sh-parent">
      {/*   <!-- === TOP MENU ITEMS === --> */}
        <div className="st-sh-top-menu-items">
            <ul>
                <li className="st-sh-menu-items"><Link to="/SubAccounts-page">Sub Account</Link></li>
                <li className="st-sh-active-item"><Link to="/SubType-page">Subtype</Link></li>
            </ul>
        </div>
        <div className="st-sh-child-container">
            <div className="st-sh-draft-sale-section">
              {/*   <!-- === DRAFT SALE TOP ITEMV === --> */}
                <div className="st-sh-draft-sale-top-item">
                    <p>Sub Account List</p>
                    <div className="st-sh-sub-account">
                        <i className="fa-solid fa-circle-plus"></i> Add Subtype
                    </div>
                </div>
            </div>
            <hr/>
          {/*   <!-- === SHOW AND SEARCH CONTAINER === --> */}
            <div className="st-sh-show-and-search-container">
                <div className="st-sh-show-container">
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
                <div className="st-sh-search-container">
                    <p>Search:</p>
                    <input type="search" placeholder="" name="" id=""/>
                </div>
            </div>
           {/*  <!-- === MANAGE SALE DETAILS SECTION === --> */}
            <div className="st-manage-sale-details-section">
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
                            <td className="st-text-center">
                                <p>Active</p>
                            </td>
                            <td className="st-sh-icon-container">
                                <div className="st-sh-edit-trash-icon">
                                    <div className="st-sh-edit-icon">
                                        <i className="fa-solid fa-edit"></i>
                                    </div>
                                    <div className="st-sh-trash-icon">
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
                            <td className="st-text-center">
                                <p>Active</p>
                            </td>
                            <td className="st-sh-icon-container">
                                <div className="st-sh-edit-trash-icon">
                                    <div className="st-sh-edit-icon">
                                        <i className="fa-solid fa-edit"></i>
                                    </div>
                                    <div className="st-sh-trash-icon">
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
                            <td className="st-text-center">
                                <p>Active</p>
                            </td>
                            <td className="st-sh-icon-container">
                                <div className="st-sh-edit-trash-icon">
                                    <div className="st-sh-edit-icon">
                                        <i className="fa-solid fa-edit"></i>
                                    </div>
                                    <div className="st-sh-trash-icon">
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
                            <td className="st-text-center">
                                <p>Active</p>
                            </td>
                            <td className="st-sh-icon-container">
                                <div className="st-sh-edit-trash-icon">
                                    <div className="st-sh-edit-icon">
                                        <i className="fa-solid fa-edit"></i>
                                    </div>
                                    <div className="st-sh-trash-icon">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          {/*   <!-- === SLIDE PAGES === --> */}
            <div className="st-sh-slider-pages">
                <p>Showing 1 to 4 of 4 entries</p>
                <div className="st-sh-slide-right-item">
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