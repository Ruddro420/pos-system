import '../components/css/saleReturn.css'
const salesReturn = () => {
    return (
        <>
          <div className="cba-sare-container">
            {/* <!-- top menus --> */}
            <div className="cba-sare-top-menus">
              <ul>
                <li><a href="/salesReturn-page" className='cba-sare-active-menu'>Sales Return</a></li>
                <li><a href="/SelsReturnList-page" className='cba-sare-light-up'>Sales Return List</a></li>
              </ul>
            </div>
            {/* <!-- input area --> */}
            <div className="cba-sare-input-area-con">
              <div className="cba-sare-iac-heading">
                <h2>Sales Return</h2>
              </div>
              <div className="cba-sare-iac-input-area">
                <div className="cba-sare-iac-lain">
                  <label htmlFor="">Sales No.<span className='required'>*</span></label>
                  <input type="text" placeholder='Enter Sales No.' />
                </div>
                <div className="cba-sare-iac-subbtn">
                  <input type="submit" value={"Search"} />
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default salesReturn;