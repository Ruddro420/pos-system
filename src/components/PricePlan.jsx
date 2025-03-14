import { Link } from "react-router-dom";
import "./css/PricePlan.css";
const PricePlan = () => {
  return (
    <>
      <div className="cba-planpricing-pricing-container">
        <div className="cba-planpricing-heading-part">
          <h2>Our Pricing</h2>
        </div>
        <div className="cba-planpricing-pricing-cart-container">
          <div className="cba-planpricing-pricing-cart">
            <div className="cba-planpricing-pricing-cart-header">
              <img src="/public/SubcriptionImg/home.png" alt="starter plan" />
              <h3>Basic</h3>
              <div className="cba-planpricing-pricing">
                <span className="cba-planpricing-money-sign">৳</span>
                <h2>900</h2>
                <span className="cba-planpricing-package-v">/mo</span>
                <span className="cba-planpricing-regular-price">
                  ৳<s>1,500</s>
                </span>
              </div>
            </div>
            <div className="cba-planpricing-features-list-one">
              <ul>
                <li><i className="cba-planpricing-flo-icon bx bx-file"></i>Invoice Limit 100 / mo</li>
                <li><i className="cba-planpricing-flo-icon bx bx-user-circle"></i>User Limit 1</li>
              </ul>
            </div>
            <div className="cba-planpricing-features-list-two">
              <ul>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>Sale</li>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>Report</li>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>Setting</li>
                <li><i className="cba-planpricing-flt-icon-i bx bx-x"></i>Service</li>
                <li><i className="cba-planpricing-flt-icon-i bx bx-x"></i>Delivery</li>
                <li><i className="cba-planpricing-flt-icon-i bx bx-x"></i>Accounts</li>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>Purchase</li>
                <li><i className="cba-planpricing-flt-icon-i bx bx-x"></i>Activity Log</li>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>Dashboard</li>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>User Management</li>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>Stock Management</li>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>Product Management</li>
                <li><i className="cba-planpricing-flt-icon-a bx bx-check"></i>Customer Management</li>
              </ul>
            </div>
            <div className="cba-planpricing-pricing-cart-btn">
            <Link to="/ChooseNow-page">  <button>Choose Now</button></Link>
            </div>
          </div>
         <div className="cba-planpricing-pricing-cart">
                        <div className="cba-planpricing-pricing-cart-header">
                            <img src="/public/SubcriptionImg/briefcase.png" alt="starter plan"/>
                                <h3>Starter</h3>
                              <div className="cba-planpricing-pricing">
                                    <span className="cba-planpricing-money-sign">৳</span>
                                    <h2>2499</h2>
                                    <span className="cba-planpricing-package-v">/mo</span>
                                    <span className="cba-planpricing-regular-price">৳<s>2999</s></span>
                                </div>
                        </div>
                        <div className="cba-planpricing-features-list-one">
                            <ul>
                                <li><i className='cba-planpricing-flo-icon bx bx-file'></i>Invoice Limit 100 / mo</li>
                                <li><i className='cba-planpricing-flo-icon bx bx-user-circle'></i>User Limit 1</li>
                            </ul>
                        </div>
                        <div className="cba-planpricing-features-list-two">
                            <ul>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Sale</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Report</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Setting</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Service</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Delivery</li>
                                <li><i className='cba-planpricing-flt-icon-i bx bx-x'></i>Accounts</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Purchase</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Activity Log</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Dashboard</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>User Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Stock Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Product Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Customer Management</li>
                            </ul>
                        </div>
                        <div className="cba-planpricing-pricing-cart-btn">
                          <Link to="/ChooseNow-page"><button>Choose Now</button></Link>
                        </div>
                    </div>
                    <div className="cba-planpricing-pricing-cart pricing-cart-premium">
                        <div className="cba-planpricing-pricing-cart-header">
                            <img src="/public/SubcriptionImg/premium-quality.png" alt="starter plan"/>
                                <h3>Premium</h3>
                                <div className="cba-planpricing-pricing">
                                    <span className="cba-planpricing-money-sign">৳</span>
                                    <h2>3399</h2>
                                    <span className="cba-planpricing-package-v">/mo</span>
                                    <span className="cba-planpricing-regular-price">৳<s>4199</s></span>
                                </div>
                        </div>
                        <div className="cba-planpricing-features-list-one">
                            <ul>
                                <li><i className='cba-planpricing-flo-icon bx bx-file'></i>Invoice Limit 100 / mo</li>
                                <li><i className='cba-planpricing-flo-icon bx bx-user-circle'></i>User Limit 1</li>
                            </ul>
                        </div>
                        <div className="cba-planpricing-features-list-two">
                            <ul>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Sale</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Report</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Setting</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Service</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Delivery</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Accounts</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Purchase</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Activity Log</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Dashboard</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>User Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Stock Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Product Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Customer Management</li>
                            </ul>
                        </div>
                        <div className="cba-planpricing-pricing-cart-btn">
                        <Link to="/ChooseNow-page">  <button>Choose Now</button></Link>
                        </div>
                    </div>
                    <div className="cba-planpricing-pricing-cart">
                        <div className="cba-planpricing-pricing-cart-header">
                            <img src="/public/SubcriptionImg/grocery-store.png" alt="starter plan"/>
                                <h3>Enterprise</h3>
                                <div className="cba-planpricing-pricing">
                                    <span className="cba-planpricing-money-sign">৳</span>
                                    <h2>5000</h2>
                                    <span className="cba-planpricing-package-v">/mo</span>
                                    <span className="cba-planpricing-regular-price">৳<s>5500</s></span>
                                </div>
                        </div>
                        <div className="cba-planpricing-features-list-one">
                            <ul>
                                <li><i className='cba-planpricing-flo-icon bx bx-file'></i>Invoice Limit 100 / mo</li>
                                <li><i className='cba-planpricing-flo-icon bx bx-user-circle'></i>User Limit 1</li>
                            </ul>
                        </div>
                        <div className="cba-planpricing-features-list-two">
                            <ul>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Sale</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Report</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Setting</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Service</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Delivery</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Accounts</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Purchase</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Activity Log</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Dashboard</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>User Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Stock Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Product Management</li>
                                <li><i className='cba-planpricing-flt-icon-a bx bx-check'></i>Customer Management</li>
                            </ul>
                        </div>
                        <div className="cba-planpricing-pricing-cart-btn">
                          <Link to="/ChooseNow-page">  <button>Choose Now</button></Link>
                        </div>
                    </div> 
        </div>
      </div>
    </>
  );
};

export default PricePlan;
