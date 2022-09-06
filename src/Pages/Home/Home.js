import React from 'react'
import '../../CSS/home.css';
import avt from '../../Images/avt.png';
export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="panel-left">
                    <div className="img-icon">
                        <img src={avt}/>
                        <p className="fullname">Huỳnh Phạm Quốc Đạt</p>
                    </div>
                    <div className="btn-infor"></div>
                </div>
                <div className="panel-right"></div>
            </div>
        </div>
    );
}
