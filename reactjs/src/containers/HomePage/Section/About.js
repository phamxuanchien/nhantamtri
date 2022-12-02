import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {
    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    các chương trình hành động của chúng tôi
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/Hb4qMTCn8HM"
                        // title="#6 Project Structure - Giải Thích Cấu Trúc Dự Án React | Khóa Học React ULTIMATE"
                        // frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowfullscreen
                        >
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            592 lượt xem  Đã công chiếu vào 7 thg 7, 2022  Trong video này, chúng ta sẽ cùng nhau làm rõ:
                            ✔ Cấu trúc của dự án React
                            ✔ Ý nghĩa của tất cả các file trong dự án React
                            ✔ Khái niệm Component đối với React
                            Chi tiết và cụ thể, các bạn cùng theo dõi video này nhé ❤
                        </p>
                    </div>

                </div>
            </div>
        );
    }

}

// const mapStateToProps = state => {
//     return {
//         isLoggedIn: state.user.isLoggedIn,
//         language: state.app.language,

//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         changelanguageAppRedux: (language) => dispatch(changelanguageApp(language))
//     };
// };

export default connect()(About);
