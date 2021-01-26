import React from 'react';
import "./css/footer.css";

export default function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-title">
                        <div className="title-main">
                            <h2 className="title-title">CONTACT</h2>
                            <i className="fas fa-phone">   <strong className="strong">Phone</strong>: (024) 3 519 1202</i><br />
                            <i className="fas fa-phone">   <strong className="strong">Hotline</strong>: 094 268 9368</i><br />
                            <i className="fas fa-envelope">   <strong className="strong">Email</strong>: khaiyeuduy@thanhtung.com</i><br />
                            {/*<i className="fas fa-clock">   <strong className="strong">Mở cửa</strong>: Thứ 2 - Chủ nhật: 8:30 - 21:00</i>*/}
                        </div>
                        <div className="title-main">
                            <h2 className="title-title">POLICY</h2>
                            <a href="#"> <i className="fas fa-chevron-right" />Personal information security</a><br />
                            <a href="#"> <i className="fas fa-chevron-right" />Payment Policy</a><br />
                            <a href="#"> <i className="fas fa-chevron-right" />Return Policy</a><br />
                            <a href="#"> <i className="fas fa-chevron-right" />Warranty Policy</a><br />
                        </div>
                        <div className="title-main">
                            <h2 className="title-title">PAYMENT</h2>
                            <a className="title-title-a" href="#"><i className="fab fa-cc-visa" /></a>
                            <a className="title-title-a" href="#"><i className="fab fa-cc-mastercard" /></a>
                            <a id="fake-a" className="title-title-a" href="#"><i className="fas fa-wallet" /></a>
                            <h2 className="title-title">CERTIFICATION</h2>
                            <i className="far fa-heart"> </i>
                            <i className="fas fa-users"> </i>
                        </div>
                        <div className="title-main">
                            <h2 className="title-title">SOCIAL NETWORK</h2>
                            <a href="#" className="fab fa-facebook title-title-a"> </a>
                            <a href="#" className="fab fa-instagram title-title-a"> </a>
                            <a href="#" className="fab fa-skype title-title-a"> </a>
                        </div>
                    </div>
                    <div className="text">
                    </div>
                </div>
                {/*            <div class="footer">*/}
                {/*                <a href="" class="button">Niềm Vui Lập Trình</a>*/}
                {/*            </div>*/}
                {/* Kết Thúc Nội Dung Cho Footer*/}
                {/* Bắt Đầu  Hiệu Ứng Gợn Sóng*/}
                <div className="wave" />
                <div className="wave wave2" />
                <div className="wave wave3" />
                {/* Kết Thúc Hiệu Ứng Gợn Sóng*/}
            </div>
        </footer>
        )
}