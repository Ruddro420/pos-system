
import '../components/ChooseNow.css'
const ChooseNow = () => {
    return (
        <>
            <div className="cba-plancheckout-checkout-main-container">
        <div className="cba-plancheckout-checkout-inner-container">
            <div className="cba-plancheckout-heading-price-plan-btn">
                <div className="cba-plancheckout-heading">
                    <h2>Premium Plan</h2>
                </div>
                <div className="cba-plancheckout-price-plan-btn">
                    <i className='cba-plancheckout-add-icon bx bx-list-ul'></i>
                    <a href="/PricePlan-page">Price plan</a>
                </div>
            </div> 
            <div className="cba-plancheckout-checkout-container">
                <div className="cba-plancheckout-cc-subcon-one">
                    <div className="cba-plancheckout-package-modules-heading">
                        <h3>Package Modules<span className="cba-plancheckout-required">*</span></h3>
                    </div>
                    <div className="cba-plancheckout-package-modules-list">
                        <div className="cba-plancheckout-pm-list-one">
                            <ul>
                                <li>Sales</li>
                                <li>Report</li>
                                <li>Setting</li>
                                <li>Service</li>
                                <li>Delivery</li>
                                <li>Account</li>
                            </ul>
                        </div>
                        <div className="cba-plancheckout-pm-list-two">
                            <ul>
                                <li>Purchase</li>
                                <li>Active log</li>
                                <li>Dashboard</li>
                                <li>Stock Management</li>
                                <li>Product Managements</li>
                                <li>Customer Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="cba-plancheckout-cc-subcon-two">
                    <div className="cba-plancheckout-payment-method-duration">
                        <div className="cba-plancheckout-pmd-text">
                            <h4>Payment Method<span className="cba-plancheckout-required">*</span></h4>
                            <h4>Duration<span className="cba-plancheckout-required">*</span></h4>
                        </div>
                        <div className="cba-plancheckout-pmd-selection">
                            <select name="" id="">
                                <option value="sslcommerz">SSlcommerz</option>
                                <option value="my-credit">My Credit</option>
                            </select>
                            <select name="" id="">
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="cba-plancheckout-plan-calculation">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="6">Calculation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Invoice Date</td>
                                    <td>User Limit</td>
                                    <td>Invoice Limit</td>
                                    <td>Package Price</td>
                                    <td>Offer Amount</td>
                                    <td>Total amount</td>
                                </tr>
                                <tr>
                                    <td>01-02-2025</td>
                                    <td>01</td>
                                    <td>100</td>
                                    <td>1500</td>
                                    <td>501</td>
                                    <td>999</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cba-plancheckout-pay-btn">
                        <button>৳ 3399.00 Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </>
    );
};

export default ChooseNow;