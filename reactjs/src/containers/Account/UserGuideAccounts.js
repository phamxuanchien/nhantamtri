import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './UserGuideAccounts.scss';


class UserGuideAccounts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {


        }
    }

    render() {


        return (
            <div className="userguideaccount-container">
                <div className="userguideaccount-body">
                    <div className="userguideaccount-title">
                        <span className="userguideaccount-title-span">Hướng dẫn đăng ký tài khoản</span>
                    </div>
                    <div className="userguideaccount-content">
                        <div className="userguideaccount-content-title"><span className="userguideaccount-content-title-span">Đối với mạnh thường quân</span></div>
                        <div className="userguideaccount-content-honor"><p className="userguideaccount-content-honor-p">Khi quý vị điền thông tin quyên góp gởi cho chúng tôi thì quý vị đã có sẵn tài khoản tại Nhân Tâm Trí
                        </p>
                            <p>* Với tên đăng nhập: chính là địa chỉ email quý vị đã nhập khi gởi thông tin cho chúng tôi</p>
                            <p>* Mật khẩu: mặc định là: 123456</p>
                            <p>Quý vị có thể sử dụng tài khoản này để đăng nhập hệ thống xem thông tin nội bộ và giám sát hoạt động của chúng tôi</p>
                            <p>Lưu ý: sau khi đăng nhập vào hệ thống quý vị có thể đổi lại thông tin tài khoản theo ý mình</p>
                        </div>
                        <div className="userguideaccount-content-title"><span className="userguideaccount-content-title-span">Đối với thành viên hoặc đối tác của Nhân Tâm Trí</span></div>
                        <div className="userguideaccount-content-staff">
                            <p>Sau khi quý vị đăng ký tài khoản thành công có thể đăng nhập hệ thống Nhân Tâm Trí như người dùng bình thường, với tài khoản này quý vị có thể tra cứu các thông tin tại mục "HOẠT ĐỘNG" của chúng tôi.
                                Để đăng nhập được vào hệ thống nội bộ quý vị phải chờ ban quản trị xác nhận và phân quyền. Thông tin chi tiết sẽ được gởi
                                cho quý vị qua email đã đăng ký.</p>
                        </div>
                        <div className="userguideaccount-content-thanks"><p className="userguideaccount-content-thanks-span">Xin chân thành cám ơn sự quan tâm của quý vị !</p></div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserGuideAccounts);
