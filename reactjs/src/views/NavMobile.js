import '../views/NavMobile.scss';
import { NavLink } from 'react-router-dom';

const NavMobile = () => {
    return (
        <div className="menunav-mobile">
            <ul className="navbar-nav">
                <li className="nav-item"><NavLink activeClassName="active1" to="/home" exact>Trang chủ</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active1" to="/newsevents">Tin tức & Sự kiện</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active1" to="/projectneedhelp">Dự án cần giúp đỡ</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active1" to="/humanneedhelp">Hoàn cảnh cần giúp đỡ</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active1" to="/honorbenefactors">Vinh danh tấm lòng vàng</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active1" to="/publicactivity">Công khai hoạt động</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active1" to="/donation">Hướng dẫn quyên góp</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active1" to="/aboutus">Giới thiệu</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active1" to="/contact">Liên hệ</NavLink></li>
            </ul>
        </div>

    )
}
export default NavMobile;