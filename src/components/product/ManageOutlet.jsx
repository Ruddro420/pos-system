import './css/ManageOutlet.css'
const ManageOutlet = () => {
    return (
        <>
          
        <header>    
            <div className="table-header">
                <ul><li><a href="/manej.html"  className="/ManageOutlet-page">Outlet List</a></li></ul> 
                <ul><li><a href="/outlet.html" className="/LedgerReport-page "> Add New Outlet</a></li></ul>
                <ul><li><a href="/transfer.html" className="/NewTransfer-page">New Transfer</a></li></ul>
                <ul><li><a href="/trans-list.html" className="/TransferList-page">Transfer List</a></li></ul>
                <ul><li><a href="/trns-re.html" className="/TransferRequestList-page">Transfer Request List</a></li></ul>
            </div>
        </header>
      <div className="outlet-fun-all">               
        <div className="cba-customer-container">
           
            <div className="cba-cusc-list-container">
                <div className="cba-cusc-heading-add-new-btn">
                    <div className="cba-cusc-heading">
                        <h2> Outlet List</h2>
                    </div>
                    <div className="cba-cusc-add-new-btn">
                        <i className='cba-cusc-add-icon bx bx-plus-circle'></i>
                        <a href="/pages/html/ancus.html">Add New Customer</a>
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
                                <th title="Code">Outlet Name</th>
                                <th title="Statug">Email</th>
                                <th title="Category Name">Phone Number</th>
                                <th title="Status">Address</th>
                                <th title="Status">Default</th>
                                <th title="Status">Status</th>
                                <th title="Action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Default Outlate</td>
                                <td>rngpurshope@gmail.com</td>
                                <td>019XXX</td>
                                <td>Rangpur</td>
                                <td><span className="cba-cusc-ls1">Is Default</span></td>
                                <td><span className="cba-cusc-ls1">Active</span></td>
                                <td>
                                    <a title="Edit" href="#"><i className='cba-cusc-edit-icon bx bx-edit'></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Default Outlate</td>
                                <td>dnjpurshope@gmail.com</td>
                                <td>016XXX</td>
                                <td>Dinajpur</td>
                                <td><span className="cba-cusc-ls1">Is Default</span></td>
                                <td><span className="cba-cusc-ls2"> Deactive</span></td>
                                <td>
                                    <a title="Edit" href="#"><i className='cba-cusc-edit-icon bx bx-edit'></i></a>
                                </td>
                            </tr>

                            <tr className="cba-cusc-no-data-available">
                                <p>No Data availabel In Table</p>
                            </tr>   
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
        </>
    );
};

export default ManageOutlet;