import { Link } from 'react-router-dom';
import '../report/css/ExpiredProducts.css'

const ExpiredProducts = () => {
    return (
        <>
            <div className="cba-exp-category-container">
                <div className="cba-exp-top-menus">
                    <ul>
                        <li><Link to="/UpComingExpiredProducts-page" className="cba-exp-light-up">Upcoming Expiry Product</Link></li>
                        <li><Link to="/ExpiredProducts-page" className="cba-exp-active-menu">Expired Product</Link></li>
                    </ul>
                </div>
                <div className="cba-exp-list-container">
                    <div className="cba-exp-heading-add-new-btn">
                        <div className="cba-exp-heading">
                            <h2>Expired Product List</h2>
                        </div>
                    </div>
                    <div className="cba-exp-list-short-dpdwn-search-box">
                        <div className="cba-exp-list-short-dpdwn">
                            <h3>Show</h3>
                            <select name="10" id="">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">30</option>
                                <option value="">All</option>
                            </select>
                            <h3>entries</h3>
                        </div>
                        <div className="cba-exp-search-box">
                            <legend>Search: <input type="text" /></legend>
                        </div>
                    </div>
                    <div className="cba-exp-table-list">
                        <table>
                            <thead>
                                <tr>
                                    <th title="SL">SL</th>
                                    <th title="Product ID">Product ID</th>
                                    <th title="Product Name">Product Name</th>
                                    <th title="Manufacture Date">Manufacture Date</th>
                                    <th title="Expire Date">Expire Date</th>
                                    <th title="Status">Status</th>
                                    <th title="Action">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td><span className='cba-exp-status-expired'>Expired</span></td>
                                    <td className='cba-exp-action-btn'>
                                        <button className='cba-exp-restock-btn'>Restock</button>
                                        <button className='cba-exp-remove-btn'>Remove</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td><span className='cba-exp-status-expired'>Expired</span></td>
                                    <td className='cba-exp-action-btn'>
                                        <button className='cba-exp-restock-btn'>Restock</button>
                                        <button className='cba-exp-remove-btn'>Remove</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td><span className='cba-exp-status-expired'>Expired</span></td>
                                    <td className='cba-exp-action-btn'>
                                        <button className='cba-exp-restock-btn'>Restock</button>
                                        <button className='cba-exp-remove-btn'>Remove</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td><span className='cba-exp-status-expired'>Expired</span></td>
                                    <td className='cba-exp-action-btn'>
                                        <button className='cba-exp-restock-btn'>Restock</button>
                                        <button className='cba-exp-remove-btn'>Remove</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td><span className='cba-exp-status-expired'>Expired</span></td>
                                    <td className='cba-exp-action-btn'>
                                        <button className='cba-exp-restock-btn'>Restock</button>
                                        <button className='cba-exp-remove-btn'>Remove</button>
                                    </td>
                                </tr>
                                <tr className="cba-exp-no-data-available">
                                    <th colSpan="7">No data available in table</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cba-exp-entries-details-list-page-btn">
                        <div className="cba-exp-entries-details">
                            Showing 1 to 5 of 5 entries
                        </div>
                        <div className="cba-exp-list-page-btn">
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

export default ExpiredProducts;