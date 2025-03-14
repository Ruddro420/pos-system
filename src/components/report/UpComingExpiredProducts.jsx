import { Link } from 'react-router-dom';
import '../report/css/UpComingExpiredProducts.css'

const UpComingExpiredProducts = () => {
    return (
        <>
            <div className="cba-ucxp-category-container">
                <div className="cba-ucxp-top-menus">
                    <ul>
                        <li><Link to="/UpComingExpiredProducts-page" className="cba-ucxp-active-menu">Upcoming Expiry Product</Link></li>
                        <li><Link to="/ExpiredProducts-page" className="cba-ucxp-light-up">Expired Product</Link></li>
                    </ul>
                </div>
                <div className="cba-ucxp-list-container">
                    <div className="cba-ucxp-heading-add-new-btn">
                        <div className="cba-ucxp-heading">
                            <h2>Upcoming Expiry Product List</h2>
                        </div>
                    </div>
                    <div className="cba-ucxp-list-short-dpdwn-search-box">
                        <div className="cba-ucxp-list-short-dpdwn">
                            <h3>Show</h3>
                            <select name="10" id="">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">30</option>
                                <option value="">All</option>
                            </select>
                            <h3>entries</h3>
                        </div>
                        <div className="cba-ucxp-search-box">
                            <legend>Search: <input type="text" /></legend>
                        </div>
                    </div>
                    <div className="cba-ucxp-table-list">
                        <table>
                            <thead>
                                <tr>
                                    <th title="SL">SL</th>
                                    <th title="Product ID">Product ID</th>
                                    <th title="Product Name">Product Name</th>
                                    <th title="Manufacture Date">Manufacture Date</th>
                                    <th title="Expire Date">Expire Date</th>
                                    <th title="Expire In">Expire In</th>
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
                                    <td>In 1 Years</td>
                                    <td>
                                        <button className='cba-ucxp-restock-btn'>Restock</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td>In 1 Years</td>
                                    <td>
                                        <button className='cba-ucxp-restock-btn'>Restock</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td>In 1 Years</td>
                                    <td>
                                        <button className='cba-ucxp-restock-btn'>Restock</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td>In 1 Years</td>
                                    <td>
                                        <button className='cba-ucxp-restock-btn'>Restock</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>Potato Chips</td>
                                    <td>01/01/2022</td>
                                    <td>01/01/2023</td>
                                    <td>In 1 Years</td>
                                    <td>
                                        <button className='cba-ucxp-restock-btn'>Restock</button>
                                    </td>
                                </tr>
                                <tr className="cba-ucxp-no-data-available">
                                    <th colSpan="7">No data available in table</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cba-ucxp-entries-details-list-page-btn">
                        <div className="cba-ucxp-entries-details">
                            Showing 1 to 5 of 5 entries
                        </div>
                        <div className="cba-ucxp-list-page-btn">
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

export default UpComingExpiredProducts;