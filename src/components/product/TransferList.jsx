import './css/TransferList.css'
const TransferList = () => {
    return (
        <>
          {/*    <!-- ==Navbar--start --> */}
    <header>    
        <div className="table-header">
            <ul><li><a href="/manej.html"  className="/ManageOutlet-page">Outlet List</a></li></ul> 
            <ul><li><a href="/outlet.html" className="/AddNewOutlet-page"> Add New Outlet</a></li></ul>
            <ul><li><a href="/transfer.html" className="/NewTransfer-page">New Transfer</a></li></ul>
            <ul><li><a href="/trans-list.html" className="/TransferList-page">Transfer List</a></li></ul>
            <ul><li><a href="/trns-re.html" className="/TransferRequestList-page">Transfer Request List</a></li></ul>
        </div>
    </header>
{/*     <!-- ==navbar--end -->
     <!-- main== start --> */}
     <div className="outlet-fun-all">               
        <div className="cba-customer-container">
            <div className="cba-cusc-top-menus">
                <ul>
                    <li><a href="/customer.html" className="cba-cusc-active-menu">Customer List</a></li>
                    <li><a href="/pages/html/ancus.html" className="cba-cusc-light-up">Add New Customer</a></li>
                </ul>
            </div>
            <div className="cba-cusc-list-container">
                <div className="cba-cusc-heading-add-new-btn">
                    <div className="cba-cusc-heading">
                        <h2> Manage Transfer</h2>
                    </div>
                    <div className="cba-cusc-add-new-btn">
                        <i className='cba-cusc-add-icon bx bx-plus-circle'></i>
                        <a href="/pages/html/ancus.html">Add Transfer</a>
                    </div>
                </div>
                <div className="cba-cusc-list-short-dpdwn-search-box">
                    <div className="cba-cusc-list-short-dpdwn">
                        <h3>Show</h3>
                        <select name="10" id="">
                            <option value="">10</option>
                            <option value="">20</option>
                            <option value="">30</option>
                            <option value="">All</option>
                        </select>
                        <h3>entries</h3>
                    </div>
                    <div className="cba-cusc-search-box">
                        <legend>Search: <input type="text"/></legend>
                    </div>
                </div>
                <div className="cba-cusc-table-list">
                    <table>
                        <thead>
                            <tr>
                                <th title="SL">SL</th>
                                <th title="Code">Transfer No.</th>
                                <th title="Statug">Outlet Form</th>
                                <th title="Category Name">Outlet To</th>
                                <th title="Status">Transferred By</th>
                                <th title="Status">Total Amount (BDT)</th>                              
                                <th title="Action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>02151221</td>
                                <td>Dinajpur</td>
                                <td>Rangpur</td>
                                <td>dkddjdab</td>
                                <td>16020</td>
                                <td></td>
                                    
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>02151221</td>
                                <td>Dinajpur</td>
                                <td>Rangpur</td>
                                <td>dkddjdab</td>
                                <td>16020</td>
                                <td></td>
                                
                            </tr>

                            <tr className="cba-cusc-no-data-available"></tr>
                        </tbody>
                    </table>
                </div>
                <div className="cba-cusc-entries-details-list-page-btn">
                    <div className="cba-cusc-entries-details">
                        Showing <span>1</span> to <span>5</span> of <span>5</span> entries
                    </div>
                    <div className="cba-cusc-list-page-btn">
                        <button>Previous</button>
                        <h4><span>1</span></h4>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
     {/*  <!-- main==End --> */}   
        </>
    );
};

export default TransferList;