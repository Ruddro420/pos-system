import './css/NewTransfer.css'
const NewTransfer = () => {
    return (
        <>
         {/*      <!-- <==Navbar-start==> --> */}
    <header>
        <div className="table-header">
            <ul><li><a href="/manej.html"  className="cba-cusc-active-menu">Outlet List</a></li></ul> 
            <ul><li><a href="/outlet.html" className="/LedgerReport-page "> Add New Outlet</a></li></ul>
            <ul><li><a href="/transfer.html" className="/NewTransfer-page">New Transfer</a></li></ul>
            <ul><li><a href="/trans-list.html" className="cba-cusc-light-up">Transfer List</a></li></ul>
            <ul><li><a href="/trns-re.html" className="cba-cusc-light-up">Transfer Request List</a></li></ul>
        </div>
    </header>
{/*     <!-- <==Navbar-End==> --> */}

    <div className="all-trns-du">
        {/*      <!-- ==ditls-from== --> */}
         <div className="container-1">
             <h2>Outlet to Outlet Transfer</h2>
                <div className="from">
                  <div className="fst-col-frm">
                     <div className="form-group">
                        <label htmlFor="outlet-from">Outlet From<span className="required">*</span></label>
                           <select id="outlet-from">
                            <option>Select Outlet</option>
                          </select>
                      </div>
                        <div className="form-group">
                          <label htmlFor="outlet-to">Outlet To<span className="required">*</span></label>
                          <select id="outlet-to">
                             <option>Select Outlet</option>
                         </select>
                        </div>
                </div>
                 <div className="snd-col-frm">
                   <div className="form-group">
                       <label htmlFor="transfer-date">Transfer Date<span className="required">*</span></label>
                       <input type="date" id="transfer-date"/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="details">Details</label>
                       <textarea id="details" placeholder="Details"></textarea>
                   </div>
                 </div>
             </div>
    </div>
    {/* <!-- ==function==--> */}
        <div className="container-2">
                <input type="text" className="search-bar-2" placeholder="Enter Product Name, Product Model or Bar Code for Scan"/>
        
                <table>
                    <thead>
                       <tr>
                              <th>Product Name<span className="required">*</span></th>
                              <th>Available Qty.</th>
                              <th>Quantity<span className="required">*</span></th>
                              <th>Rate<span className="required">*</span></th>
                              <th>Total</th>
                               <th>Action</th>
                      </tr>
                    </thead>
                     <tbody>
                      <tr>
                            <td><input type="text" placeholder="Please enter 1 or more characters"/></td>
                            <td><input type="text" value="0.00" readOnly/></td>
                            <td><input type="number" value="1"/></td>
                            <td><input type="text" value="0.00" readOnly/></td>
                            <td><input type="text" value="0.00" readOnly/></td>
                             <td>
                                <button className="btn select">Select Serial</button>
                                <button className="btn delete">✖</button>
                            </td>
                     </tr>
                </tbody>
                 </table>
    
             <div className="total-amount">
                 <span>Total Amount:</span>
                 <input type="text" value="0.00" readOnly/>
             </div>
            <button className="btn transfer">Transfer</button>
            </div>
    </div>  
        </>
    );
};

export default NewTransfer;