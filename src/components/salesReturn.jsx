import '../components/css/saleReturn.css'
const salesReturn = () => {
    return (
        <>
          <div className="cba-salereturn-container">
            {/* <!-- top menus --> */}
            <div className="cba-salereturn-top-menus">
              <ul>
                <li><a href="/salesReturn-page" className='cba-salereturn-active-menu'>Sales Return</a></li>
                <li><a href="/SelsReturnList-page" className='cba-salereturn-light-up'>Sales Return List</a></li>
              </ul>
            </div>
            {/* <!-- input area --> */}
            <div className="cba-salereturn-input-area-con">
              <div className="cba-salereturn-iac-heading">
                <h2>Sales Return</h2>
              </div>
              <div className="cba-salereturn-iac-input-area">
                <div className="cba-salereturn-iac-lain">
                  <label htmlFor="">Sales No.<span className='required'>*</span></label>
                  <input type="text" placeholder='Enter Sales No.' />
                </div>
                <div className="cba-salereturn-iac-subbtn">
                  <input type="submit" value={"Search"} />
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default salesReturn;