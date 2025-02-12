import './css/Dashboard.css'
const Dashboard = () => {
    return (
        <>
            <nav>
                {/* <!-- === DASHBOARD TOP TITLE === --> */}
                <div className="dashboard-top-title">
                    <h2>Welcome, John Doe</h2>
                    {/* <!-- === DASHBOARD TOP TITLE RIGHT ITMES === --> */}
                    <div className="dashboard-top-title-right-item-section">
                        {/* <!-- === BUTTONS === --> */}
                        <div className="dash-right-item-button">

                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="gray">
                                <path
                                    d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                            </svg>
                            <p>Dashboard</p>
                        </div>
                        <div className="dash-right-item-button">
                            <svg xmlns=" " height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="gray">
                                <path
                                    d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                            </svg>
                            <p>Tutorial</p>
                        </div>
                        <div className="dash-right-item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="gray">
                                <path
                                    d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                            </svg>
                            <p>Announcement</p>
                        </div>
                    </div>
                </div>
                {/*    <!-- === TOTAL REVIEWS === --> */}
                <div className="total-reviews-section">
                    {/*  <!-- === REVIEW CONTAINER === --> */}
                    <div className="review-container">
                        <img src="/public/dashboard/today-sale.svg" alt="" />
                        <div className="review-text">
                            <p>Today Product Sale</p>
                            <h3>0:00</h3>
                        </div>
                    </div>
                    {/*    <!-- === REVIEW CONTAINER === --> */}
                    <div className="review-container">

                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 84 84" fill="none">
                            <rect width="84" height="84" rx="10" fill="#2B51B0" fillOpacity="0.13"></rect>
                            <rect x="13" y="13" width="58" height="58" rx="10" fill="#2B51B0"></rect>
                            <path fillRule="evenodd" clipRule="evenodd" d="M31.7931 29H48.5517C49.2928 29 50.0032 29.2942 50.5264 29.8184C51.0506 30.3416 51.3448 31.052 51.3448 31.7931V41.1025C53.8372 42.4367 55.5345 45.065 55.5345 48.0862C55.5345 52.4537 51.9882 56 47.6207 56C44.4142 56 41.6509 54.0886 40.408 51.3448H31.7931C31.052 51.3448 30.3416 51.0506 29.8184 50.5265C29.2942 50.0032 29 49.2928 29 48.5517C29 44.6563 29 35.6886 29 31.7931C29 31.052 29.2942 30.3416 29.8184 29.8184C30.3416 29.2942 31.052 29 31.7931 29ZM47.6207 42.0345C50.9603 42.0345 53.6724 44.7466 53.6724 48.0862C53.6724 51.4258 50.9603 54.1379 47.6207 54.1379C44.2811 54.1379 41.569 51.4258 41.569 48.0862C41.569 44.7466 44.2811 42.0345 47.6207 42.0345ZM46.1441 47.6207H48.5517C49.7118 47.6207 50.3533 48.2761 50.3505 49.0135C50.3486 49.7537 49.7025 50.4138 48.5517 50.4138H46.6897C46.1757 50.4138 45.7586 50.8309 45.7586 51.3448C45.7586 51.8588 46.1757 52.2759 46.6897 52.2759H48.5517C51.0255 52.2759 52.207 50.6102 52.2126 49.021C52.2191 47.4298 51.0506 45.7586 48.5517 45.7586H46.1441L46.4169 45.4858C46.78 45.1227 46.78 44.5324 46.4169 44.1693C46.0538 43.8062 45.4635 43.8062 45.1004 44.1693L43.2383 46.0314C42.8743 46.3945 42.8743 46.9848 43.2383 47.3479L45.1004 49.21C45.4635 49.5731 46.0538 49.5731 46.4169 49.21C46.78 48.8469 46.78 48.2566 46.4169 47.8935L46.1441 47.6207ZM36.4483 30.8621H31.7931C31.5464 30.8621 31.309 30.9598 31.1349 31.1349C30.9598 31.309 30.8621 31.5464 30.8621 31.7931V48.5517C30.8621 48.7984 30.9598 49.0359 31.1349 49.21C31.309 49.385 31.5464 49.4828 31.7931 49.4828H39.8298C39.7488 49.0293 39.7069 48.5629 39.7069 48.0862C39.7069 43.7187 43.2532 40.1724 47.6207 40.1724C48.2622 40.1724 48.885 40.2488 49.4828 40.3931V31.7931C49.4828 31.5464 49.385 31.309 49.21 31.1349C49.0359 30.9598 48.7984 30.8621 48.5517 30.8621H43.8966V34.2352C43.8966 34.8311 43.6107 35.3915 43.1284 35.7416C42.6462 36.0917 42.0252 36.1904 41.4582 36.0051L40.1138 35.5675L38.9118 35.9781C38.3429 36.1718 37.7154 36.0796 37.2266 35.7305C36.7378 35.3804 36.4483 34.8162 36.4483 34.2156V30.8621ZM38.3103 30.8621H42.0345V34.2352C41.2571 33.982 40.3949 33.7008 40.3949 33.7008C40.2041 33.6384 39.9974 33.6403 39.8065 33.7054L38.3103 34.2156V30.8621Z" fill="white"></path>
                        </svg>
                        <div className="review-text">
                            <p>Today Purchase</p>
                            <h3>0:00</h3>
                        </div>
                    </div>
                    {/*  <!-- === REVIEW CONTAINER === --> */}
                    <div className="review-container">
                        <img src="/public/dashboard/tota-productl-sale.svg" alt="" />
                        <div className="review-text">
                            <p>Total Product Sale</p>
                            <h3>0:00</h3>
                        </div>
                    </div>
                    {/*    <!-- === REVIEW CONTAINER === --> */}
                    <div className="review-container">
                        <img src="/public/dashboard/today-purchase.svg" alt="" />
                        <div className="review-text">
                            <p>Total Purchase</p>
                            <h3>0:00</h3>
                        </div>
                    </div>
                </div>
                {/*   <!-- === TOTAL REVIEWS === --> */}
                <div className="total-reviews-section">
                    {/* <!-- === REVIEW CONTAINER === --> */}
                    <div className="review-container">
                        <img src="/public/dashboard/today-sale-return.png" alt="" />
                        <div className="review-text">
                            <p>Today Sale Return</p>
                            <h3>0:00</h3>
                        </div>
                    </div>
                    {/*     <!-- === REVIEW CONTAINER === --> */}
                    <div className="review-container">
                        <img src="/public/dashboard/total purchase.svg" alt="" />
                        <div className="review-text">
                            <p>Total Purchase Return</p>
                            <h3>0:00</h3>
                        </div>
                    </div>
                    {/*     <!-- === REVIEW CONTAINER === --> */}
                    <div className="review-container">
                        <img src="/public/dashboard/total-expense.svg" alt="" />
                        <div className="review-text">
                            <p>Total Expenses</p>
                            <h3>0:00</h3>
                        </div>
                    </div>
                    {/*    <!-- === REVIEW CONTAINER === --> */}
                    <div className="review-container">
                        <img src="/public/dashboard/total income.svg" alt="" />
                        <div className="review-text">
                            <p>Total Income</p>
                            <h3>0:00</h3>
                        </div>
                    </div>
                </div>
                {/*  <!-- === SALES AND INVENTORY GRAPH SECTION === --> */}
                <div className="sales-and-inventory-graph-section">
                    {/*   <!-- === SALES SECTION === --> */}
                    <div className="seles-section">
                        <div className="seles-text">
                            <h1>Sales Graph(Last 30 Days)</h1>
                            {/*    <!-- === CALENDAR === --> */}
                            <div className="sales-calendar">
                                <img src="/public/dashboard/calendar icon.svg" alt="" />
                               <input type="date" />
                               <input type="date" />
                            </div>
                        </div>
                        {/*<!-- === LINE === --> */}

                        {/*   <!-- === SALES MENU ICON === --> */}
                        <div className="sales-menu-icon">
                            <img src="/public/dashboard/menu icon.svg" alt="" />
                        </div>
                        {/*    <!-- === SALES GRAPH IMAGE === --> */}
                        <div className="sales-graph-image">
                            <img src="/public/dashboard/sales graph.svg" alt="" />
                        </div>
                    </div>
                    {/*    <!-- === INVENTORY SECTION === --> */}
                    <div className="inventory-section">
                        {/*   <!-- === INVENTORY TEXT === --> */}
                        <div className="inventory-text">
                            <h1>Inventory Graph</h1>
                            {/*  <hr> */}
                        </div>
                        {/*    <!-- === INVENTORY BOTTOM ITEMS === --> */}
                        <div className="inventory-bottom-item-container">
                            {/*    <!-- === AVAILABLE STOCK SECTION === --> */}
                            <div className="availabe-stock-section">
                                <div className="circle"></div>
                                {/*        <!-- === TEXT === --> */}
                                <div className="available-text">
                                    <p>Available Stock</p>
                                    <h1>0%</h1>
                                </div>
                            </div>
                            {/*          <!-- === AVAILABLE STOCK SECTION === --> */}
                            <div className="availabe-stock-section">
                                <div className="circle-two"></div>
                                {/*    <!-- === TEXT === --> */}
                                <div className="available-text">
                                    <p>Low Stock</p>
                                    <h1>0%</h1>
                                </div>
                            </div>
                            {/*    <!-- === AVAILABLE STOCK SECTION === --> */}
                            <div className="availabe-stock-section">
                                <div className="circle-three"></div>
                                {/*  <!-- === TEXT === --> */}
                                <div className="available-text">
                                    <p>Stock Out</p>
                                    <h1>0%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  <!-- === PURCHASE AND MOST SELLING GRAPH SECTION === --> */}
                <div className="sales-and-inventory-graph-section">
                    {/*  <!-- === SALES SECTION === --> */}
                    <div className="seles-section">
                        <div className="seles-text">
                            <h1>Last 15 Days Purchase</h1>
                            {/* <!-- === CALENDAR === --> */}
                            <div className="sales-calendar">
                                <img src="./calendar icon.svg" alt="" />
                                <input type="date" />
                                <input type="date" />
                            </div>
                        </div>
                        {/*    <!-- === LINE === --> */}
                        {/* </hr> */}
                        {/*   <!-- === SALES MENU ICON === --> */}
                        <div className="sales-menu-icon">
                            <img src="/public/dashboard/menu icon.svg" alt="" />
                        </div>
                        {/*  <!-- === SALES GRAPH IMAGE === --> */}
                        <div className="sales-graph-image">
                            <img src="/public/dashboard/15 days graph.svg" alt="" />
                        </div>
                    </div>
                </div>
                {/*    <!-- === MOST SELLING SECTION === --> */}
                <div className="most-selling-section">
                    {/*  <!-- === MOST SELLING TEXT === --> */}
                    <div className="most-selling-text">
                        <h1>Monst Selling Product</h1>
                        <a href="#">View More</a>
                    </div>
                    <div className="most-selling-item-container">
                        <div className="item">
                            <p>Item</p>
                        </div>
                        <div className="price">
                            <p>Price(AVG)</p>
                        </div>
                        <div className="all-time">
                            <p>All Time(QTY)</p>
                        </div>
                    </div>
                </div>

                {/*   <!-- === FINANCIAL SECTION === --> */}
                <div className="financial-section">
                    {/*  <!-- === FINANCIAL TEXT === --> */}
                    <div className="financial-text">
                        <h1>Financial Graph</h1>
                        {/*     <!-- === FINANCIAL CAlENDER SECTION === --> */}
                        <div className="financial-calendar-container">
                            <img src="/public/dashboard/calendar icon.svg" alt="" />
                            <input type="date" />
                            <input type="date" />
                        </div>
                    </div>
                    {/*  <hr> */}
                    {/*   <!-- === FINANCIAL ICONS === --> */}
                    <div className="financial-icons">
                        <img src="/public/dashboard/plus icon.svg" alt="" />
                        <img src="/public/dashboard/minus icon.svg" alt="" />
                        <img src="/public/dashboard/plus search icon.svg" alt="" />
                        <img src="/public/dashboard/hand icon.svg" alt="" />
                        <img src="/public/dashboard/home icon.svg" alt="" />
                        <img src="/public/dashboard/menu icon.svg" alt="" />
                    </div>
                    <div className="financial-graph-image">
                        <img src="/public/dashboard/financial graph-png.png" alt="" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Dashboard;