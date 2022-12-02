import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DetailBranch.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import ManagerSchedule from '../Manager/ManagerSchedule';
import ManagerExtraInfor from '../Manager/ManagerExtraInfor';
import ProfileManager from '../Manager/ProfileManager';
import { getAllDetailBranchById, getAllCodeService } from '../../../services/userService';
import _ from 'lodash';
import { LANGUAGES } from '../../../utils';


class DetailBranch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrManagerId: [],
            dataDetailBranch: {},
            listProvince: []
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getAllDetailBranchById({
                id: id,
                location: 'ALL'
            });
            let resProvince = await getAllCodeService('PROVINCE');
            if (res && res.errCode === 0 && resProvince && resProvince.errCode === 0) {
                let data = res.data;
                let arrManagerId = [];
                if (data && !_.isEmpty(res.data)) {
                    let arr = data.managerBranch;
                    if (arr && arr.length > 0) {
                        arr.map(item => {
                            arrManagerId.push(item.managerId)
                        })
                    }
                }
                let dataProvince = resProvince.data;
                if (dataProvince && dataProvince.length > 0) {
                    dataProvince.unshift({
                        createdAt: null,
                        keyMap: "ALL",
                        type: "PROVINCE",
                        valueEn: "ALL",
                        valueVi: "Toàn quốc",
                    })
                }
                this.setState({
                    dataDetailBranch: res.data,
                    arrManagerId: arrManagerId,
                    listProvince: dataProvince ? dataProvince : []
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    handleOnChangeSelect = async (event) => {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let location = event.target.value;
            let res = await getAllDetailBranchById({
                id: id,
                location: location
            });
            if (res && res.errCode === 0) {
                let data = res.data;
                let arrManagerId = [];
                if (data && !_.isEmpty(res.data)) {
                    let arr = data.managerBranch;
                    if (arr && arr.length > 0) {
                        arr.map(item => {
                            arrManagerId.push(item.managerId)
                        })
                    }
                }
                this.setState({
                    dataDetailBranch: res.data,
                    arrManagerId: arrManagerId,
                })
            }
        }
    }
    render() {
        let { arrManagerId, dataDetailBranch, listProvince } = this.state;
        let { language } = this.props;
        return (
            <div className="detail-branch-container">
                <HomeHeader />
                <div className="detail-branch-body">
                    <div className="description-branch">
                        {dataDetailBranch && !_.isEmpty(dataDetailBranch)
                            &&
                            <div dangerouslySetInnerHTML={{ __html: dataDetailBranch.descriptionHTML }}>

                            </div>
                        }
                    </div>
                    <div className="search-sp-manager">
                        <select onChange={(event) => this.handleOnChangeSelect(event)}>
                            {listProvince && listProvince.length > 0 &&
                                listProvince.map((item, index) => {
                                    return (
                                        <option key={index} value={item.keyMap}>
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    )
                                })}
                        </select>
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
                                        //dataTime={dataTime}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailBranch);
