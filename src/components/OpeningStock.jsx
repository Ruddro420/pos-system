import './css/OpeningStock.css' 
const OpeningStock = () => {
    return (
        <>
             {/*  === PARENT SECTION === */} 
    <div className="sh-opcsv-parent-section">
         {/* === CHILD SECTION === */}
        <div className="sh-opcsv-child-section">
             {/* === TOP MENU ITEMS === */}
            <div className="sh-opcsv-top-menu-items">
                <ul>
                    <li className="sh-opcsv-menu-items"><a href="/StockOpeningStock-page">Opening Stock List</a></li>
                    <li className="sh-opcsv-menu-items"><a href="/addOpeningStock-page">Add Opening Stock</a></li>
                    <li className="sh-opcsv-active-item"><a href="/openingStock-page">Opening Stock CSV</a></li>
                </ul>
            </div>
            {/*  === REQUISIION LIST SECTION === */}
            <div className="sh-opcsv-draft-sale-section">
                 {/* === DRAFT SALE TOP ITEM === */}
                <div className="sh-opcsv-requisition-top-item">
                    <p>CSV File Information</p>
                     {/* === DRAFT SALE TOP RIGHT ITMES === */}
                    <div className="sh-opcsv-draft-sale-top-right-items">
                        <div className="sh-opcsv-filter">
                            <i className="fa-solid fa-circle-plus"></i>
                            <a href="opening-stock.html">Manage Opening Stock</a>
                        </div>
                    </div>
                </div>
                
                <div className="some-info-text">
                    <p>The first line in downloaded csv file sh-opcsvould remain as it is. Please do not change the order of
                        columns and Please be sure that all product is exists in your system. other wise stock will not
                        updated</p>
                </div>
                <div className="sh-opcsv-the-correct">
                    <p>The correct column order is <span>(Warehouse Name, Product name,Expiry (is not required),
                            Quantity,
                            Rate & Total Price).</span></p>
                </div>
                 {/* === DOWNLOAD BUTTON === */}
                <div className="sh-opcsv-download-button">
                    <a href="#"><i className="fa-solid fa-arrow-down"></i>Download Sample File</a>
                </div>
            </div>
            {/*  === FOOTER SECITON === */}
             <div className="sh-opcsv-footer-section">
                <div className="sh-opcsv-opening">
                    <p>Opening Stock CSV</p>
                </div>
                
                <div className="sh-opcsv-upload">
                    <p>Upload Stock CSV</p>
                    <div className="sh-opcsv-file-upload">
                        <input type="file"  name="" id=""/>
                    <label htmlFor="text">Upload</label>
                    </div>
                </div>
                <div className="sh-opcsv-submit-button">
                    <a href="#">Submit</a>
                </div>
             </div>
        </div>
    </div>
     {/* === FONT AWSOME LINK === */}
        </>
    );
};

export default OpeningStock;