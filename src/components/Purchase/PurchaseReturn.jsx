import '../purchesCSS/PurchaseReturn.css'
const PurchaseReturn = () =>{
    return(
        <>
          <div className="sh-parent-section">
       {/*  <!-- === SALE RETURN TOP ITEMS === --> */}
        <div className="sh-sale-return-top-items">
            <div className="sh-active">
                <a href="purchase-return.html">Purchase Return</a>
            </div>
            <div className="sh-list">
                <a href="purchase-return-list.html">Purchase Return List</a>
            </div>
        </div>
      {/*   <!-- === CHILD SECTION === --> */}
        <div className="sh-child-section">
          {/*   <!-- === SALE NUMBER CONTAINER === --> */}
            <div className="sh-purchase-return">
                <p>Purchase Return</p>
            </div>
            <hr/>
            <div className="sh-sale-number-container">
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