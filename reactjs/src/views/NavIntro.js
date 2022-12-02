import '../views/NavIntro.scss';
import { NavLink } from 'react-router-dom';


const NavIntro = () => {

    return (
        <div className="menunav-intro">
            <NavLink activeClassName="active1" to="/introduce/intro"><i className="fas fa-angle-right"></i><span className="span-1">Giới thiệu</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/history"><i className="fas fa-angle-right"></i><span className="span-1">Lịch sử</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/organization"><i className="fas fa-angle-right"></i><span className="span-1">Tổ chức</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/rule"><i className="fas fa-angle-right"></i><span className="span-1">Quy tắc ứng xử</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/accountant"><i className="fas fa-angle-right"></i><span className="span-1">Bộ máy kế toán nội bộ</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/volunteer"><i className="fas fa-angle-right"></i><span className="span-1">Quy chế tình nguyện viên</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/partner"> <i className="fas fa-angle-right"></i><span className="span-1">Để trở thành đối tác của NTT</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/honor"><i className="fas fa-angle-right"></i><span className="span-1">vinh danh cao quý</span></NavLink>
        </div>
    )
}
export default NavIntro;
