import '../purchesCSS/PurchaseReturn.css'
const PurchaseReturn = () =>{
    return(
        <>
          <div className="SaleReturn-sh-parent-section">
       {/*  <!-- === SALE RETURN TOP ITEMS === --> */}
        <div className="SaleReturn-sh-sale-return-top-items">
            <div className="SaleReturn-sh-active">
                <a href="/PurchaseReturn-page">Purchase Return</a>
            </div>
            <div className="SaleReturn-sh-list">
                <a href="/PurchaseReturnList-page">Purchase Return List</a>
            </div>
        </div>
      {/*   <!-- === CHILD SECTION === --> */}
        <div className="SaleReturn-sh-child-section">
          {/*   <!-- === SALE NUMBER CONTAINER === --> */}
            <div className="SaleReturn-sh-purchase-return">
                <p>Purchase Return</p>
            </div>
            <hr/>
            <div className="SaleReturn-sh-sale-number-container">
                <p>Purchase No.</p>
                <input type="number" placeholder="Enter Receive No." value="" name="" id=""/>
                <a href="#">Search</a>
            </div>
        </div>

    </div>
        </>
    )
}

export default PurchaseReturn;