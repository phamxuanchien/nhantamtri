import '../views/Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="menunav">
            <NavLink activeClassName="active1" to="/home" exact>TRANG CHỦ</NavLink>
            <NavLink activeClassName="active1" to="/newsevents">TIN TỨC</NavLink>
            <NavLink activeClassName="active1" to="/projectneedhelp">DỰ ÁN CẦN GIÚP</NavLink>
            <NavLink activeClassName="active1" to="/humanneedhelp">HOÀN CẢNH CẦN GIÚP</NavLink>
            <NavLink activeClassName="active1" to="/honorbenefactors">VINH DANH</NavLink>
            <NavLink activeClassName="active1" to="/publicactivity">HOẠT ĐỘNG</NavLink>
            <NavLink activeClassName="active1" to="/donation">QUYÊN GÓP</NavLink>
            <NavLink activeClassName="active1" to="/aboutus">VỀ CHÚNG TÔI</NavLink>
            <NavLink activeClassName="active1" to="/contact">LIÊN HỆ</NavLink>

        </div>
    )
}
export default Nav;