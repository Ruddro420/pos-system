import "./css/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
      {/*   <!-- === DASHBOARD TOP TITLE === --> */}
        <div className="dashboard-top-title">
            <h2>Welcome, John Doe</h2>
           {/*  <!-- === DASHBOARD TOP TITLE RIGHT ITMES === --> */}
            <div className="dashboard-top-title-right-item-section">
             {/*    <!-- === BUTTONS === --> */}
                <div className="dash-right-item-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="gray">
                        <path
                            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                    </svg>
                    <p>Dashboard</p>
                </div>
                <div className="dash-right-item-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
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

       {/*  <!-- === TOTAL REVIEWS === --> */}
        <div className="total-reviews-section">
           {/*  <!-- === REVIEW CONTAINER === --> */}
            <div className="review-container">
                <img src="/public/dashboard/today-sale.svg" alt=""/>
                <div className="review-text">
                    <p>Today Product Sale</p>
                    <h3>0:00</h3>
                </div>
            </div>
           {/*  <!-- === REVIEW CONTAINER === --> */}
            <div className="review-container">
                <img src="/public/dashboard/today-purchase.svg" alt=""/>
                <div className="review-text">
                    <p>Today Purchase</p>
                    <h3>0:00</h3>
                </div>
            </div>
            {/* <!-- === REVIEW CONTAINER === --> */}
            <div className="review-container">
                <img src="/public/dashboard/tota-productl-sale.svg" alt=""/>
                <div className="review-text">
                    <p>Total Product Sale</p>
                    <h3>0:00</h3>
                </div>
            </div>
           {/*  <!-- === REVIEW CONTAINER === --> */}
            <div className="review-container">
                <img src="/public/dashboard/today-purchase.svg" alt=""/>
                <div className="review-text">
                    <p>Total Purchase</p>
                    <h3>0:00</h3>
                </div>
            </div>
        </div>
       {/*  <!-- === TOTAL REVIEWS === --> */}
        <div className="total-reviews-section">
           {/*  <!-- === REVIEW CONTAINER === --> */}
            <div className="review-container">
                <img src="/public/dashboard/today-sale-return.png" alt=""/>
                <div className="review-text">
                    <p>Today Sale Return</p>
                    <h3>0:00</h3>
                </div>
            </div>
           {/*  <!-- === REVIEW CONTAINER === --> */}
            <div className="review-container">
                <img src="/public/dashboard/total purchase.svg" alt=""/>
                <div className="review-text">
                    <p>Total Purchase Return</p>
                    <h3>0:00</h3>
                </div>
            </div>
            {/* <!-- === REVIEW CONTAINER === --> */}
            <div className="review-container">
                <img src="/public/dashboard/total-expense.svg" alt=""/>
                <div className="review-text">
                    <p>Total Expenses</p>
                    <h3>0:00</h3>
                </div>
            </div>
           {/*  <!-- === REVIEW CONTAINER === --> */}
            <div className="review-container">
                <img src="/public/dashboard/total income.svg" alt=""/>
                <div className="review-text">
                    <p>Total Income</p>
                    <h3>0:00</h3>
                </div>
            </div>
        </div>
        {/* <!-- === SALES AND INVENTORY GRAPH SECTION === --> */}
        <div className="sales-and-inventory-graph-section">
           {/*  <!-- === SALES SECTION === --> */}
            <div className="seles-section">
                <div className="seles-text">
                    <h1>Sales Graph(Last 30 Days)</h1>
                    {/* <!-- === CALENDAR === --> */}
                    <div className="sales-calendar">
                        <img src="/public/dashboard/calendar icon.svg" alt=""/>
                        <input type="date"/>
                    </div>
                </div>
                {/* <!-- === LINE === --> */}
                <hr/>
               {/*  <!-- === SALES MENU ICON === --> */}
                <div className="sales-menu-icon">
                    <img src="/public/dashboard/menu icon.svg" alt=""/>
                </div>
               {/*  <!-- === SALES GRAPH IMAGE === --> */}
                <div className="sales-graph-image">
                    <img src="/public/dashboard/sales graph.svg" alt=""/>
                </div>
            </div>


          {/*   <!-- === INVENTORY SECTION === --> */}
            <div className="inventory-section">
                {/* <!-- === INVENTORY TEXT === --> */}
                <div className="inventory-text">
                    <h1>Inventory Graph</h1>
                    <hr/>
                </div>
              {/*   <!-- === INVENTORY BOTTOM ITEMS === --> */}
                <div className="inventory-bottom-item-container">
                   {/*  <!-- === AVAILABLE STOCK SECTION === --> */}
                    <div className="availabe-stock-section">
                        <div className="circle"></div>
                     {/*    <!-- === TEXT === --> */}
                        <div className="available-text">
                            <p>Available Stock</p>
                            <h1>0%</h1>
                        </div>
                    </div>
                   {/*  <!-- === AVAILABLE STOCK SECTION === --> */}
                    <div className="availabe-stock-section">
                        <div className="circle-two"></div>
                       {/*  <!-- === TEXT === --> */}
                        <div className="available-text">
                            <p>Low Stock</p>
                            <h1>0%</h1>
                        </div>
                    </div>
                  {/*   <!-- === AVAILABLE STOCK SECTION === --> */}
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



      {/*   <!-- === PURCHASE AND MOST SELLING GRAPH SECTION === --> */}
        <div className="sales-and-inventory-graph-section">
           {/*  <!-- === SALES SECTION === --> */}
            <div className="seles-section">
                <div className="seles-text">
                    <h1>Last 15 Days Purchase</h1>
                   {/*  <!-- === CALENDAR === --> */}
                    <div className="sales-calendar">
                        <img src="/public/dashboard/calendar icon.svg" alt=""/>
                        <input type="date"/>
                    </div>
                </div>
                {/* <!-- === LINE === --> */}
                <hr/>
               {/*  <!-- === SALES MENU ICON === --> */}
                <div className="sales-menu-icon">
                    <img src="/public/dashboard/menu icon.svg" alt=""/>
                </div>
              {/*   <!-- === SALES GRAPH IMAGE === --> */}
                <div className="sales-graph-image">
                    <img src="/public/dashboard/15 days graph.svg" alt=""/>
                </div>
            </div>


           {/*  <!-- === MOST SELLING SECTION === --> */}
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
        </div>
      {/*   <!-- === FINANCIAL SECTION === --> */}
        <div className="financial-section">
          {/*   <!-- === FINANCIAL TEXT === --> */}
            <div className="financial-text">
                <h1>Financial Graph</h1>
               {/*  <!-- === FINANCIAL CAlENDER SECTION === --> */}
                <div className="financial-calendar-container">
                    <img src="/public/dashboard/calendar icon.svg" alt=""/>
                    <input type="date"/>
                </div>
            </div>
            <hr/>
           {/*  <!-- === FINANCIAL ICONS === --> */}
             <div className="financial-icons">
                <img src="/public/dashboard/plus icon.svg" alt=""/>
                <img src="/public/dashboard/minus icon.svg" alt=""/>
                <img src="/public/dashboard/plus search icon.svg" alt=""/>
                <img src="/public/dashboard/hand icon.svg" alt=""/>
                <img src="/public/dashboard/home icon.svg" alt=""/>
                <img src="/public/dashboard/menu icon.svg" alt=""/>
            </div>
            <div className="financial-graph-image">
                <img src="/public/dashboard/financial graph-png.png" alt=""/>
            </div>
        </div>
    </div>



    </>
  );
};

export default Dashboard;
