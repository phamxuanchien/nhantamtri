import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DetailDepartment.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import ManagerSchedule from '../Manager/ManagerSchedule';
import ManagerExtraInfor from '../Manager/ManagerExtraInfor';
import ProfileManager from '../Manager/ProfileManager';
import { getAllDetailDepartmentById, getAllCodeService } from '../../../services/userService';
import _ from 'lodash';
import { LANGUAGES } from '../../../utils';


class DetailDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrManagerId: [],
            dataDetailDepartment: {},
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getAllDetailDepartmentById({
                id: id,
            });

            if (res && res.errCode === 0) {
                let data = res.data;
                let arrManagerId = [];
                if (data && !_.isEmpty(res.data)) {
                    let arr = data.managerDepartment;
                    if (arr && arr.length > 0) {
                        arr.map(item => {
                            arrManagerId.push(item.managerId)
                        })
                    }
                }

                this.setState({
                    dataDetailDepartment: res.data,
                    arrManagerId: arrManagerId,

                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    render() {
        let { arrManagerId, dataDetailDepartment } = this.state;
        // let { language } = this.props;
        return (
            <div className="detail-department-container">
                <HomeHeader />
                <div className="detail-department-body">
                    <div className="description-department">
                        {dataDetailDepartment && !_.isEmpty(dataDetailDepartment)
                            &&
                            <>
                                <div>{dataDetailDepartment.name}</div>
                                <div dangerouslySetInnerHTML={{ __html: dataDetailDepartment.descriptionHTML }}>

                                </div>
                            </>
                        }
                    </div>

                    {arrManagerId && arrManagerId.length > 0 && arrManagerId.map((item, index) => {
                        return (
                            <div className="each-manager" key={index}>
                                <div className="dt-content-left">
                                    <div className="profile-manager">
                                        <ProfileManager
                                            managerId={item}
                                            isShowDescriptionManager={true}
                                            isShowLinkDetail={true}
                                            isShowPrice={false}
                                        // dataTime={dataTime}
                                        />
                                    </div>
                                </div>
                                <div className="dt-content-right">
                                    <div className="manager-schedule">
                                        <ManagerSchedule
                                            managerIdFromParent={item}
                                        />
                                    </div>
                                    <div className="manager-extra-infor">
                                        <ManagerExtraInfor
                                            managerIdFromParent={item}
                                        />
                                    </div>
                                </div>

                            </div>
                        )
                    })}

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDepartment);
