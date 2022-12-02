import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './PublicActivity.scss';
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/HomeFooter';
import ListMenuImage from '../../containers/HomePage/Section/ListMenuImage';


class PublicActivity extends Component {
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
            <div className="public-activity-container">
                <HomeHeader />
                <div className="public-activity-body col-12">
                    <div className="public-activity-title"><span className="span-title">Minh bạch hoạt động</span></div>
                    <div className="public-activity-content">
                        <div className="pa-content-left col-lg-9 col-md-12">
                            <div className="pa-content-left-litle">Thông tin các hoạt động</div>
                            <div className="pa-content-left-content">
                                <div>Tổng số tiền đã quyên góp được:
                                    <div>Cụ thể theo từng chương trình:</div>
                                </div>
                                <div>Các dự án đã triển khai: kết quả cụ thể</div>
                                <div>Kết quả các hoạt động thiện nguyện: kết quả cụ thể</div>
                                <div>Hoạt động của từng cơ sở nhân đạo trực thuộc: kết quả cụ thể</div>
                            </div>
                            <div className="pa-content-right-content-mobile">
                                <div className="pa-content-right-litle">Báo cáo tài chính</div>
                                <div>Báo cáo tài chính tháng 9/2022</div>
                                <div>Báo cáo tài chính tháng 10/2022</div>
                                <div>Báo cáo tài chính tháng 11/2022</div>
                                <div>Báo cáo tài chính tháng 12/2022</div>
                                <div>Báo cáo tài chính năm/2022</div>
                            </div>
                        </div>
                        <div className="pa-content-right col-lg-3 col-md-12">
                            <div className="pa-content-right-litle">Báo cáo tài chính</div>
                            <div className="pa-content-right-content">
                                <div>Báo cáo tài chính tháng 9/2022</div>
                                <div>Báo cáo tài chính tháng 10/2022</div>
                                <div>Báo cáo tài chính tháng 11/2022</div>
                                <div>Báo cáo tài chính tháng 12/2022</div>
                                <div>Báo cáo tài chính năm/2022</div>
                            </div>
                            <div className="pa-content-right-down">
                                <ListMenuImage />
                            </div>
                        </div>
                    </div>
                </div>
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(PublicActivity);
