import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from '../Components/Projects';
import '../../CSS/home.css';
import avt from '../../Images/avt.png';
import fb from '../../Images/fb.png';
import ig from '../../Images/ig.png';
import bg_home from '../../Images/bg_home.png';
import linkedin from '../../Images/linkedin.png';
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Home() {
	const history = useHistory();

	return (
		<div className="panel-left-top">
			<div className="img-txt">
				<img className="img-avt opact" src={avt} />
				<div className="txt-infor">
					<p className="fullname">Huỳnh Phạm Quốc Đạt</p>
					<p className="work">Lập trình viên</p>
				</div>
				<div className="icon-infor">
					<a target="_blank" href="https://www.facebook.com/quocdat060120/"><img src={fb} /></a>
					<a target="_blank" href="https://www.instagram.com/quocdat060120/?hl=vi"><img src={ig} /></a>
					<a target="_blank" href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-qu%E1%BB%91c-834a12201/"><img src={linkedin} /></a>
				</div>
			</div>
			<div className="group-btn-infor">
				<NavLink to="/" className="name noselect btn-1" class='active btn-1' exact={true}>Thông tin cá nhân</NavLink>
				<NavLink to="/target" className="name noselect btn-1">Mục tiêu</NavLink>
				<NavLink to="/education" className="name noselect btn-1">Học vấn</NavLink>
				<NavLink to="/projects" className="name noselect btn-1">Projects</NavLink>
				<NavLink to="/certification" className="name noselect btn-1">Chứng chỉ</NavLink>
				<NavLink to="/other_information" className="name noselect btn-1">Thông tin khác</NavLink>
			</div>
		</div>

	);
}
