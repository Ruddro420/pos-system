import "../StockManagement/css/StockNewTransfer.css";
const StockNewTransfer = () => {
    return (
        <>
            <div className="cba-snt-main-container">
                {/* top menu part */}
                <div className="cba-snt-top-menu">
                    <ul>
                        <li><a href="/StockTransferList-page">Stock Transfer List</a></li>
                        <li><a href="/StockNewTransfer-page" className='cba-snt-top-menu-active'>New Stock Transfer</a></li>
                        <li><a href="/StockTransferRequestList-page">Stock Transfer Request</a></li>
                    </ul>
                </div>
                {/* inner container */}
                <div className="cba-snt-inner-container">
                    <div className="cba-snt-ic-head-part">
                        <h2>New Stock Transfer</h2>
                    </div>
                    <div className="cba-snt-ic-middle-part">
                        {/* row 1 */}
                        <div className="cba-snt-mp-row1">
                            <div className="cba-snt-mp-row1-col1">
                                
                            </div>
                            <div className="cba-snt-mp-row1-col2"></div>
                        </div>
                        {/* row 2 */}
                        <div className="cba-snt-mp-row2">
                            <input type="text" placeholder="Enter Product Name, Product Model or Bar Code For Scan" />
                        </div>
                        {/* row 3 */}
                        <div className="cba-snt-mp-row3"></div>
                    </div>
                    <div className="cba-snt-ic-bottom-part"></div>
                </div>
            </div>
        </>
    );
};

export default StockNewTransfer;