import './css/PosSale.css'
const PosSale = () => {
    return (
        <>
            <div className="cba-possale-container">
                {/* Top Part */}
                <div className="cba-possale-inner-con-top-part">
                    
                </div>
                {/* Bottom Part */}
                <div className="cba-possale-inner-con-bottom-part">
                    <div className="cba-pic-bp-calculation-overview">
                        <div className="cba-pic-bp-co-total-discount-con">
                            <label htmlFor="">Total Discount</label>
                            <input type="text" placeholder='0' disabled />
                        </div>
                        <div className="cba-pic-bp-co-total-vat-con">
                            <label htmlFor="">Total Vat</label>
                            <input type="text" placeholder='0.000' disabled />
                        </div>
                        <div className="cba-pic-bp-co-previous-due-con">
                            <label htmlFor="">Previous Due</label>
                            <input type="text" placeholder='0' disabled />
                        </div>
                        <div className="cba-pic-bp-co-net-total-con">
                            <label htmlFor="">Net Total</label>
                            <input type="text" placeholder='0.000' disabled />
                        </div>
                        <div className="cba-pic-bp-co-current-due-con">
                            <label htmlFor="">Current Due</label>
                            <input type="text" placeholder='0.000' disabled />
                        </div>
                        <div className="cba-pic-bp-co-submit-btn-con">
                            <input type="submit" value='Submit' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PosSale;