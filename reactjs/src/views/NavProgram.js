import '../views/NavProgram.scss';
import { NavLink } from 'react-router-dom';

const NavProgram = () => {
    return (
        <div className="menunav-program">
            <NavLink activeClassName="active1" to="/introduce/charity"><i className="fas fa-angle-right"></i><span className="span-1">Quỹ từ thiện</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/human"><i className="fas fa-angle-right"></i><span className="span-1">Quỹ đầu tư và phát triển nguồn nhân lực</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/medical"><i className="fas fa-angle-right"></i><span className="span-1">Quỹ đầu tư và phát triển y tế</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/education"><i className="fas fa-angle-right"></i><span className="span-1">Quỹ đầu tư và phát triển giáo dục</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/culture"><i className="fas fa-angle-right"></i><span className="span-1">Quỹ bảo tồn phát triển văn hóa truyền thống</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/science"><i className="fas fa-angle-right"></i><span className="span-1">Quỹ ứng dụng khoa học kỹ thuật</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/environment"><i className="fas fa-angle-right"></i><span className="span-1">Quỹ bảo vệ môi trường</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/disaster"><i className="fas fa-angle-right"></i><span className="span-1">Quỹ ngăn ngừa và hạn chế rủi ro thiên tai</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/academy"><i className="fas fa-angle-right"></i><span className="span-1">Học viện Nhân Tâm Trí</span></NavLink>
        </div>
    )
}
export default NavProgram;
