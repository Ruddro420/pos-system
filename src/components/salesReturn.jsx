import './css/salesReturn.css'
const salesReturn = () => {
    return (
        <>
         {/*  <!-- === PARENT SECTION === --> */}
    <div className="sh-parent-section">
       {/*  <!-- === CHILD SECTION === --> */}
         <div className="sh-child-section">
           {/*  <!-- === SALE RETURN TOP ITEMS === --> */}
             <div className="sh-sale-return-top-items">
                <div className="sh-active">
                    <a href="#">Sale Return</a>
                </div>
                <div className="sh-list">
                    <a href="sale-return-list.html">Return List</a>
                </div>
             </div>
            
            {/*  <!-- === SALE NUMBER CONTAINER === --> */}
              <div className="sh-sale-number-container">
                <p>Sale No.</p>
                <input type="number" placeholder="Enter Sale No." value="" name="" id=""/>
                <a href="#">Search</a>
              </div>
         </div>
    </div>  
        </>
    );
};

export default salesReturn;