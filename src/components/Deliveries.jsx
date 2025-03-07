import './css/Deliveries.css'
const Deliveries = () => {
    return (
        <>
            <div className="cba-delivery-container">
                <div className="cba-delivery-list-container">
                    <div className="cba-delivery-heading-add-new-btn">
                        <div className="cba-delivery-heading">
                            <h2>Delivery List</h2>
                        </div>
                        <div className="cba-delivery-add-new-btn">
                            <i className='cba-delivery-add-icon bx bx-plus-circle'></i>
                            <a href="/inner-page/html/anb.html">Add New Delivery</a>
                        </div>
                    </div>
                    <div className="cba-delivery-list-short-dpdwn-search-box">
                        <div className="cba-delivery-list-short-dpdwn">
                            <h3>Show</h3>
                            <select name="10" id="">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">30</option>
                                <option value="">All</option>
                            </select>
                            <h3>entries</h3>
                        </div>
                        <div className="cba-delivery-search-box">
                            <legend>Search:</legend>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="cba-delivery-table-list">
                        <table>
                            <thead>
                                <tr>
                                    <th title="SL">SL</th>
                                    <th title="Order ID">Order ID</th>
                                    <th title="Product Name">Product Name</th>
                                    <th title="Customer Name">Customer Name</th>
                                    <th title="Number">Number</th>
                                    <th title="Address">Address</th>
                                    <th title="Payment Status">Payment Status</th>
                                    <th title="Delivery Ststus">Delivery Ststus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>10152</td>
                                    <td>iPhone 14 - Blue - 128GB</td>
                                    <td>MD Adnan Addro</td>
                                    <td>109XXXXXXXX</td>
                                    <td>Kamal Kachna, Rangpur Sadar, Rangpur</td>
                                    <td><span className="cba-delivery-ps-cod">Cash on Delivery</span></td>
                                    <td><span className="cba-delivery-ds-ocon">Order Confirmed</span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10152</td>
                                    <td>iPhone 14 - Blue - 128GB</td>
                                    <td>MD Adnan Addro</td>
                                    <td>109XXXXXXXX</td>
                                    <td>Kamal Kachna, Rangpur Sadar, Rangpur</td>
                                    <td><span className="cba-delivery-ps-paid">Paid</span></td>
                                    <td><span className="cba-delivery-ds-otw">On The Way</span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>10152</td>
                                    <td>iPhone 14 - Blue - 128GB</td>
                                    <td>MD Adnan Addro</td>
                                    <td>109XXXXXXXX</td>
                                    <td>Kamal Kachna, Rangpur Sadar, Rangpur</td>
                                    <td><span className="cba-delivery-ps-cod">Cash on Delivery</span></td>
                                    <td><span className="cba-delivery-ds-deld">Delivered</span></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr style={{backgroundColor: 'var(--gray-black)', color: 'var(--black)'}}>
                                    <td colSpan={8}>No data available in table</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="cba-delivery-entries-details-list-page-btn">
                        <div className="cba-delivery-entries-details">
                            <p>Showing 1 to 3 of 3 entries</p>
                        </div>
                        <div className="cba-delivery-list-page-btn">
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

export default Deliveries;