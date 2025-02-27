import "./css/GuiPos.css";
const GuiPos = () => {
  return (
    <>
      <nav className="nav-item">
        <div className="top-navbar-items">
          <div className="sh-top-nav-left-section">
            <div className="sh-top-nav-left-conatiner">
              <div className="sh-search-box">
                <input type="search" placeholder="Scan your products" />
              </div>

              <div className="sh-scaner-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#2B51B0"
                >
                  <path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h320q45 0 68 38t3 78l-80 160q-11 20-29.5 32T520-520h-81l-11 40h12q17 0 28.5 11.5T480-440v80q0 17-11.5 28.5T440-320h-54l-30 112q-11 39-43 63.5T240-120Zm0-80q14 0 24-8t14-21l78-291h-83l-72 270q-5 19 7 34.5t32 15.5Zm40-400h240l80-160H280q-33 0-56.5 23.5T200-680q0 33 23.5 56.5T280-600Zm480-160-25-54 145-66 24 55-144 65Zm120 280-145-65 25-55 144 66-24 54ZM760-650v-60h160v60H760Zm-360-30Zm-85 160Z" />
                </svg>
              </div>

              <div className="sh-product">
                <a href="#">Product</a>
              </div>

              <div className="sh-scan">
                <a href="#">Scan</a>
              </div>
            </div>

            {/* === TOP LEFT NAVBAR RIGHT CONATAINER ===  */}
            <div className="sh-top-left-nav-right-container">
              <div className="sh-all-category">
                <a href="#">All category</a>
              </div>
              {/*    === WINDOW ICON COANTAINER === */}
              <div className="sh-window-icon-container">
                {/* === SPLIT ICON == */}
                <div className="sh-split-icon">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="gray"
                    >
                      <path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-400v-160 160Zm0 400v-160 160Z" />
                    </svg>
                  </a>
                </div>
                {/*     === WINDOW ICON === */}
                <div className="sh-window-icon">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#2B51B0"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm320-320v240h240v-240H520Zm0-80h240v-240H520v240Zm-80 0v-240H200v240h240Zm0 80H200v240h240v-240Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*    === TOP NAVBAR RIGHT SECITON === */}
          <div className="sh-top-nav-right-seciton">
            <div className="sh-top-nabbar-right-container">
              {/*  === SEARCH CUSTOMER BOX === */}
              <div className="sh-search-customer-box">
                <input type="search" placeholder="Search customer" />
              </div>
              {/*   === PERSON ICON === */}
              <div className="sh-person-icon">
             {/*  <svg
                  width="19px"
                  height="19px"
                  viewBox="0 0 19 19"
                  version="1.1"
                  // eslint-disable-next-line react/no-unknown-property
                  xmlns="http://www.w3.org/2000/svg"
                  // eslint-disable-next-line react/no-unknown-property
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="customer-icon"
                >
                  <defs>
                    <linearGradient
                      x1="14.5524094%"
                      y1="14.6909544%"
                      x2="82.7722259%"
                      y2="85.2519444%"
                      id="linearGradient-1"
                    >
                      <stop stopColor="#C444FB" offset="0%"></stop>
                      <stop stopColor="#5B56D7" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="POS-Design---Dokan-P2"
                      transform="translate(-759.000000, -27.000000)"
                    >
                      <g
                        id="Group"
                        transform="translate(759.000000, 27.000000)"
                      >
                        <circle
                          id="Oval"
                          fill="url(#linearGradient-1)"
                          fillRule="nonzero"
                          cx="9.5"
                          cy="9.5"
                          r="9.5"
                        ></circle>
                        <g
                          id="flaticon1543304699-svg-2"
                          transform="translate(9.500000, 9.500000) scale(-1, 1) translate(-9.500000, -9.500000) translate(6.000000, 5.000000)"
                        >
                          <g id="flaticon1543304699-svg">
                            <path
                              d="M3.31578947,4.40159143 C4.27870463,4.40159143 5.0593751,3.41627143 5.0593751,2.20080857 C5.0593751,0.98532 4.80306952,0 3.31578947,0 C1.82850943,0 1.57215436,0.98532 1.57215436,2.20080857 C1.57215436,3.41627143 2.35282482,4.40159143 3.31578947,4.40159143 Z"
                              id="Path"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              d="M0.0616980658,7.82884897 C0.0604730658,7.62453402 0.0592480658,7.77128348 0.0616980658,7.82884897 Z"
                              id="Path"
                              fill="#000000"
                            ></path>
                            <path
                              d="M6.64682715,7.85749962 C6.65070632,7.82585407 6.64815424,7.63794608 6.64682715,7.85749962 Z"
                              id="Path"
                              fill="#000000"
                            ></path>
                            <path
                              d="M6.60522584,7.67306571 C6.57293401,5.5557 6.30682954,4.95236571 4.27051414,4.57045714 C4.27051414,4.57045714 3.98387156,4.95002571 3.31576473,4.95002571 C2.64765789,4.95002571 2.36096583,4.57045714 2.36096583,4.57045714 C0.34687117,4.9482 0.0645836606,5.54258571 0.0274666143,7.60428 C0.0244230165,7.77263143 0.0230125687,7.78147714 0.0224681854,7.76193429 C0.0225919089,7.79855143 0.0227403771,7.86628286 0.0227403771,7.98438857 C0.0227403771,7.98438857 0.507538492,9 3.31576473,9 C6.12394148,9 6.60878908,7.98438857 6.60878908,7.98438857 C6.60878908,7.90850571 6.60883857,7.85574 6.6089128,7.81984286 C6.60836842,7.83192857 6.60727965,7.80850286 6.60522584,7.67306571 Z"
                              id="Path"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>  */}
              </div>
              {/*   === PLUS ICON === */}
              <div className="sh-plus-icon">+</div>
            </div>
            {/*  === MORE VERT ICON === */}
            <div className="sh-more-vert-icon">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="gray"
                >
                  <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/*  === PRODUCT SECTIONS === */}
      <section>
        {/* === PRODUCT CONTAINER === */}
        <div className="product-container">
          <div className="image-section">
            {/* === IMAGE === */}
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/red-chillies-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Handpicked Red Chillies</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/pulses-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Pulses From Organic Farm</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/orage-juice-kariz-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Fresh Orange Juice</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/sanitizer-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Hand Sanitizer</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/eggs-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Farm Fresh Eggs</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/organic-honey-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Fresh Organic Honey</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/edible-oil-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Natural Extracted Edible Oil</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/coffee-asorted-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Assorted Coffee</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/wheat-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Wheat From Organic Farms</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/diabetic-cookies-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Diabetic Cookies</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/face-wash-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Organic Face Scrub</p>
              </div>
            </div>
            <div className="image-container">
              <div className="sh-image">
                <a href="#">
                  <img src="/public/guiPos/cashew-butter-500-300x300.jpg" alt="" />
                </a>
              </div>
              <div className="sh-product-name">
                <p>Cashew Butter</p>
              </div>
            </div>
          </div>

          <div className="parent-container-two">
            {/* === PRODUCT DETAILS SECTIONS === */}
            <div className="product-details-section">
              {/* === NAME BOX SECTION === */}
              <div className="sh-name-box-section">
                <div className="sh-product-text">
                  <p>Product</p>
                </div>
                {/*   === QTY === */}
                <div className="sh-qty">
                  <p>Qty</p>
                </div>
                {/* === PRICE === */}
                <div className="sh-price">
                  <p>Price</p>
                </div>
              </div>
              {/*    - === PRODUCT COLLECT BOX === */}
              <div className="sh-product-collect-box">
                {/*   === IMAGE === */}
                <div className="empty-image">
                  <img src="/public/guiPos/empty-cart.png" alt="" />
                </div>
              </div>
              {/*        === SUB TOTAL BOX === */}
              <div className="sh-subtotal-box">
                <div className="sh-sub-total">
                  <h4>Subtotal</h4>
                </div>
                <div className="sh-price-total">
                  <h4>$0.00</h4>
                </div>
              </div>
              {/*  === ADD BOX === */}
              <div className="add-section">
                <div className="add-discount">
                  <a href="#">Add Discount</a>
                </div>
                <div className="add-discount">
                  <a href="#">Add Fee</a>
                </div>
                <div className="add-discount">
                  <a href="#">Add Note</a>
                </div>
              </div>
              {/*  === PAY NOW BOX === */}
              <div className="pay-now-box">
                <div className="paynow">
                  <h3>Pay Now</h3>
                </div>
                <div className="pay-dollar">
                  <h3>$0.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*    === BUTTOM BUTTON SECTION === */}
      <div className="buttom-button-section">
        <div className="button-container">
          {/* - === BUTTON ONE === */}
          <div className="button-one">
            <img src="/public/guiPos/download (6).svg" alt="" />
            <a href="#">Split Payment</a>
          </div>
          {/*  === BUTTON TWO === */}
          <div className="button-two">
            <img src="/public/guiPos/download (5).svg" alt="" />
            <a href="#">Card</a>
          </div>
          {/*     === BUTTON THREE === */}
          <div className="button-three">
            <img src="/public/guiPos/download (7).svg" alt="" />
            <a href="#">Cash</a>
          </div>
          {/*   === BUTTON FOUR === */}
          <div className="button-four">
            <img src="/public/guiPos/mony.svg" alt="" />
            <a href="#">Draft</a>
          </div>
          {/*  === BUTTON FIVE === */}
          <div className="button-five">
            <img src="/public/guiPos/download (4).svg" alt="" />
            <a href="#">Discount</a>
          </div>
          {/* - === BUTTON SIX === */}
          <div className="button-six">
            <img src="/public/guiPos/download (2).svg" alt="" />
            <a href="#">Expense</a>
          </div>
          {/*   === BUTTON SEVEN === */}
          <div className="button-seven">
            <img src="img/download (3).svg" alt="" />
            <a href="#">Deu</a>
          </div>
          {/*  === BUTTON EIGHT === */}
          <div className="button-eight">
            <img src="/public/guiPos/download (1).svg" alt="" />
            <a href="#">Calculator</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuiPos;
