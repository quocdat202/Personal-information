import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../../CSS/home.css';
import avt from '../../Images/avt.png';
import fb from '../../Images/fb.png';
import ig from '../../Images/ig.png';
import linkedin from '../../Images/linkedin.png';
export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="panel-left">
                    <div className="img-icon">
                        <img className="img-avt" src={avt}/>
                        <p className="fullname">Huỳnh Phạm Quốc Đạt</p>
                        <div className="icon-infor">
                            <a target="_blank" href="https://www.facebook.com/quocdat060120/"><img src={fb}/></a>
                            <a target="_blank" href="https://www.instagram.com/quocdat060120/?hl=vi"><img src={ig}/></a>
                            <a target="_blank" href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-qu%E1%BB%91c-834a12201/"><img src={linkedin}/></a>
                        </div>
                    </div>
                    <div className="group-btn-infor">
                        <button type="button" className="name noselect btn-1">thông tin cá nhân</button>
                        <button type="button" className="name noselect btn-infor">Mục tiêu</button>
                        <button type="button" className="name noselect btn-infor">Học vấn</button>
                        <button type="button" className="name noselect btn-infor">Chứng chỉ</button>
                        <button type="button" className="name noselect btn-infor">Thông tin khác</button>
                    </div>
                </div>
                <div className="panel-right"></div>
            </div>
        </div>
    );
}
