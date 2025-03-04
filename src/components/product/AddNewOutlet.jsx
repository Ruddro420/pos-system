
import './css/AddNewOutlet.css'
const AddNewOutlet = () => {
    return (
        <>
             {/*  <!-- ===navbar-start==== --> */}
    <header>
        <div className="table-header">
            <ul><li><a href="/manej.html"  className="/ManageOutlet-page">Outlet List</a></li></ul> 
            <ul><li><a href="/outlet.html" className="/AddNewOutlet-page"> Add New Outlet</a></li></ul>
            <ul><li><a href="/transfer.html" className="/NewTransfer-page">New Transfer</a></li></ul>
            <ul><li><a href="/trans-list.html" className="/TransferList-page">Transfer List</a></li></ul>
            <ul><li><a href="/trns-re.html" className="/TransferRequestList-page">Transfer Request List</a></li></ul>
        </div>
    </header>
   {/*   <!-- ===navbar-end==== --> */}

      <div className="outlet-from">
            {/*  <!-- ==Form-user --> */}
             <div className="usr-frm-outl">
                <div className="container-2">
                  {/*   <!-- hed --> */}
                    <div className="cba-customer-container">
                        <div className="cba-cusc-list-container">
                            <div className="cba-cusc-heading-add-new-btn">
                                <div className="cba-cusc-heading">
                                    <h2> Add New Outlett</h2>
                                </div>
                                <div className="cba-cusc-add-new-btn">
                                    <i className="cba-cusc-add-icon bx bx-plus-circle"></i>

                                    <a href="/pages/html/ancus.html">Outlet List</a>
                                </div>
                            </div>
                        </div> 
                    </div>
                
                    </div>
                    <div className="frm-ult-usr">
                        <div className="form-group">
                            <label htmlFor="outlet-name">Outlet Name<span className="required">*</span></label>
                            <input type="text" id="outlet-name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone<span className="required">*</span></label>
                            <input type="text" id="phone"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email<span className="required">*</span></label>
                            <input type="email" id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address<span className="required">*</span></label>
                            <input type="text" id="address"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status<span className="required">*</span></label>
                            <select id="status">
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="sub-btn-outlet">
                        <button className="submit-btn">Submit</button>
                       </div>
               </div>
      </div>
              
        </>
    );
};

export default AddNewOutlet;