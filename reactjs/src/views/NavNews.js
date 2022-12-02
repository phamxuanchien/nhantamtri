import '../views/NavNews.scss';
import { NavLink } from 'react-router-dom';

const NavNews = () => {
    return (
        <div className="menunav-news">
            <NavLink activeClassName="active1" to="/introduce/help"><i className="fas fa-angle-right"></i><span className="span-1">Cứu trợ khẩn cấp</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/eat"><i className="fas fa-angle-right"></i><span className="span-1">Xuất ăn từ thiện</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/orphanage"><i className="fas fa-angle-right"></i><span className="span-1">Cô nhi viện</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/nursing-home"><i className="fas fa-angle-right"></i><span className="span-1">Viện dưỡng lão</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/training"><i className="fas fa-angle-right"></i><span className="span-1">Giáo dục, dạy nghề</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/pilgrimage"><i className="fas fa-angle-right"></i><span className="span-1">Hành hương thiện nguyện</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/human-health"><i className="fas fa-angle-right"></i><span className="span-1">Y tế nhân đạo</span></NavLink>
            <NavLink activeClassName="active1" to="/introduce/chance-disability"><i className="fas fa-angle-right"></i><span className="span-1">Khuyết tật, cơ nhỡ</span></NavLink>
        </div>
    )
}
export default NavNews;
