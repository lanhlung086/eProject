import React from "react";
import './cssngoc/thucamon.css';
export default function Thanks(){
    return(
        <>
            <section>
                <div>
                    <img src="imgs/mau_thu_cam_on_khach_hang_da_su_dung_dich_vu_2.jpg" height={450} width="100%" /></div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className={123}>
                            <div className="col-md-6">
                                <h1 className="loicamon">Thanks for your purchase</h1>
                                <br />
                                <span className="chube">
              Thank you for visiting us and making your first purchase.
            </span>
                                <span className="chube">We're glad that you found what you were looking for.</span>
                                <span className="chube">It is our goal that you are always happy with what you bought from us, so please let us know if your buying experience was anything short of excellent.</span>
                                <span className="chube">We look forward to seeing you again. Have a great day.</span>
                            </div>
                            <div className="col-md-6">
                                <h1 className="loicamon">Leave us a review</h1>
                                <h4>Write reviews:</h4>
                                <form className="fromcoment">
                                    <textarea rows={6} cols={65} name="description" defaultValue={""} required/>
                                    <input type="submit" name="submit" value="Send" className="send" style={{width: 100, height: 35, marginLeft: 222}} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}