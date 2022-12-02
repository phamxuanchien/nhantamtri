import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DonationDonor.scss';


class DonationDonor extends Component {
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
            <div className="donor-container">
                <div className="donor-title"><label>thông tin của nhà hảo tâm</label></div>
                <div className="donor-content">
                    <div className="donation-info-person"><span className="donation-info-person-span">Thông tin cá nhân</span></div>
                    <div className="form-group-input">
                        <div className="input-group mb-3 col-6">

                            <div className="input-group-prepend">
                                <span className="input-group-text">Họ và tên người quyên góp:</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Fullname" />
                        </div>
                        <div className="input-group mb-3 col-6">

                            <div className="input-group-prepend">
                                <span className="input-group-text">Tên công bố:</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                    </div>
                    <div className="form-group-input">
                        <div className="input-group mb-3 col-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Địa chỉ email:</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-3 col-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số điện thoại:</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Phone number" />
                        </div>
                    </div>
                    <div className="form-group-input">
                        <div className="input-group mb-3 col-12">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Địa chỉ:</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                    </div>
                    <div className="donation-info"><span className="donation-info-span">Thông tin quyên góp</span></div>
                    <div className="form-group-input">
                        <div className="input-group mb-3 col-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số tiền quyên góp:</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Money" />
                        </div>
                        <div className="input-group mb-3 col-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Hình thức quyên góp:</span>
                            </div>
                            <select class="form-control" id="sel1">
                                <option>Chuyển khoản</option>
                                <option>Quyên góp trực tiếp bằng tiền mặt</option>
                                <option>Quyên góp bằng vật chất</option>
                                <option>Hình thức khác</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group-input">
                        <div className="input-group mb-3 col-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Yêu cầu sử dụng vào:</span>
                            </div>
                            <select class="form-control" id="sel1">
                                <option>Tất cả - Quỹ sẽ phân bổ cho dự án cấp thiết nhất</option>
                                <option>Quỹ từ thiện Nhân Tâm Trí</option>
                                <option>Quỹ đầu tư và phát triển nguồn nhân lực Nhân Tâm Trí</option>
                                <option>Quỹ đầu tư và phát triển giáo dục Nhân Tâm Trí</option>
                                <option>Quỹ đầu tư và phát triển y tế Nhân Tâm Trí</option>
                                <option>Quỹ ngăn ngừa và hạn chế rủi ro thiên tai Nhân Tâm Trí</option>
                                <option>Học viện Nhân Tâm Trí</option>
                                <option>Quỹ nghiên cứu và ứng dụng khoa học kỹ thuật Nhân Tâm Trí</option>
                                <option>Quỹ bảo tồn và phát triển văn hóa truyền thống Nhân Tâm Trí</option>
                                <option>Quỹ phát triển xanh và bảo vệ môi trường Nhân Tâm Trí</option>
                            </select>
                        </div>
                        <div className="input-group mb-3 col-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Ngày quyên góp:</span>
                            </div>
                            <input type="date" className="form-control" placeholder="date" />
                        </div>
                    </div>
                    <div className="message-group">
                        <div className="form-group">
                            <label className="comment">Lời nhắn nhủ của nhà hảo tâm:</label>
                            <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Gởi thông tin</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DonationDonor);
