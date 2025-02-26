import './css/OpeningStock.css' 

const OpeningStock = () => {
    return (
        <>
             {/*  === PARENT SECTION === */} 
     <div className="sh-parent-section">
         {/* === CHILD SECTION === */}
        <div className="sh-child-section">
             {/* === TOP MENU ITEMS === */}
            <div className="sh-top-menu-items">
                <ul>
                    <li className="sh-menu-items"><a href="opening-stock.html">Opening Stock List</a></li>
                    <li className="sh-menu-items"><a href="add-opening-stock.html">Add Opening Stock</a></li>
                    <li className="sh-active-item"><a href="stock-opening.html">Opening Stock CSV</a></li>
                </ul>
            </div>
            {/*  === REQUISIION LIST SECTION === */}
            <div className="sh-draft-sale-section">
                 {/* === DRAFT SALE TOP ITEM === */}
                <div className="sh-requisition-top-item">
                    <p>CSV File Information</p>
                     {/* === DRAFT SALE TOP RIGHT ITMES === */}
                    <div className="sh-draft-sale-top-right-items">
                        <div className="sh-filter">
                            <i className="fa-solid fa-circle-plus"></i>
                            <a href="opening-stock.html">Manage Opening Stock</a>
                        </div>
                    </div>
                </div>
                
                <div className="some-info-text">
                    <p>The first line in downloaded csv file should remain as it is. Please do not change the order of
                        columns and Please be sure that all product is exists in your system. other wise stock will not
                        updated</p>
                </div>
                <div className="sh-the-correct">
                    <p>The correct column order is <span>(Warehouse Name, Product name,Expiry (is not required),
                            Quantity,
                            Rate & Total Price).</span></p>
                </div>
                 {/* === DOWNLOAD BUTTON === */}
                <div className="sh-download-button">
                    <a href="#"><i className="fa-solid fa-arrow-down"></i>Download Sample File</a>
                </div>
            </div>
            {/*  === FOOTER SECITON === */}
             <div className="sh-footer-section">
                <div className="sh-opening">
                    <p>Opening Stock CSV</p>
                </div>
                
                <div className="sh-upload">
                    <p>Upload Stock CSV</p>
                    <div className="sh-file-upload">
                        <input type="file"  name="" id=""/>
                    <label htmlFor="text">Upload</label>
                    </div>
                </div>
                <div className="sh-submit-button">
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