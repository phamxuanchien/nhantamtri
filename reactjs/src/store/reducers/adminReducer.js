import actionTypes from '../actions/actionTypes';


const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    stage: [],
    manage: [],
    program: [],
    branch: [],
    department: [],
    groupmenus: [],
    oactivity: [],
    users: [],
    newsevents: [],
    projectneedhelp: [],
    humanneedhelp: [],
    topBenefactors: [],
    allManagers: [],
    allBenefactors: [],
    allScheduleTime: [],
    allSubmenu: [],
    allGroups: [],
    allBranchs: [],
    allDepartments: [],
    allcodes: [],
    allBranchManagers: [],
    allDepartmentManagers: [],
    allGroupManagers: [],
    allRequiredManagerInfor: [],
    allSubmenuGuide: [],
    allSubmenuProgram: [],
    allSubmenuContact: [],
    allSubmenuAboutus: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAILDED:
            state.isLoadingGender = false;
            state.gender = [];
            return {
                ...state
            }
        case actionTypes.FETCH_STAGE_SUCCESS:
            state.stage = action.data;
            state.isLoadingStage = false;
            return {
                ...state
            }
        case actionTypes.FETCH_STAGE_FAILDED:
            state.isLoadingStage = false;
            state.stage = [];
            return {
                ...state
            }
        case actionTypes.FETCH_OACTIVITY_SUCCESS:
            state.oactivity = action.data;
            state.isLoadingStage = false;
            return {
                ...state
            }
        case actionTypes.FETCH_OACTIVITY_FAILDED:
            state.isLoadingStage = false;
            state.oactivity = [];
            return {
                ...state
            }
        case actionTypes.FETCH_MANAGE_SUCCESS:
            state.manage = action.data;
            state.isLoadingManage = false;
            return {
                ...state
            }
        case actionTypes.FETCH_MANAGE_FAILDED:
            state.isLoadingManage = false;
            state.manage = [];
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_FAILDED:
            state.positions = [];
            return {
                ...state
            }
        case actionTypes.FETCH_PROGRAM_SUCCESS:
            state.programs = action.data;
            state.isLoadingManage = false;
            return {
                ...state
            }
        case actionTypes.FETCH_PROGRAM_FAILDED:
            state.isLoadingManage = false;
            state.programs = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAILDED:
            state.roles = [];
            return {
                ...state
            }
        case actionTypes.FETCH_BRANCH_SUCCESS://branch
            state.branch = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_BRANCH_FAILDED:
            state.branch = [];
            return {
                ...state
            }
        case actionTypes.FETCH_DEPARTMENT_SUCCESS://department
            state.department = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_DEPARTMENT_FAILDED:
            state.department = [];
            return {
                ...state
            }
        case actionTypes.FETCH_GROUPMENU_SUCCESS:
            state.groupmenus = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_GROUPMENU_FAILDED:
            state.groupmenus = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_FAILDED:
            state.users = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_ALLCODES_SUCCESS://allcode
            state.allcodes = action.allcodes;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_ALLCODES_FAILDED:
            state.allcodes = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_BRANCH_SUCCESS://all branch
            state.allBranchs = action.branch;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_BRANCH_FAILDED:
            state.allBranchs = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_BRANCHMANAGER_SUCCESS://quản lý branchManager
            state.allBranchManagers = action.branchManager;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_BRANCHMANAGER_FAILDED:
            state.allBranchManagers = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DEPARTMENT_SUCCESS://all department
            state.allDepartments = action.department;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DEPARTMENT_FAILDED:
            state.allDepartments = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DEPARTMENTMANAGER_SUCCESS://quản lý departmentManager
            state.allDepartmentManagers = action.departmentManager;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_DEPARTMENTMANAGER_FAILDED:
            state.allDepartmentManagers = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_NEWSEVENTS_SUCCESS://tin tức
            state.newsevents = action.newsevents;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_NEWSEVENTS_FAILDED:
            state.newsevents = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_PROJECTNEEDHELP_SUCCESS://dự án cần giúp đỡ
            state.projectneedhelp = action.projectneedhelp;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_PROJECTNEEDHELP_FAILDED:
            state.projectneedhelp = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_HUMANNEEDHELP_SUCCESS://hoàn cảnh cần giúp đỡ
            state.humanneedhelp = action.humanneedhelp;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_HUMANNEEDHELP_FAILDED:
            state.humanneedhelp = [];
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_BENEFACTOR_SUCCESS:
            state.topBenefactors = action.dataBenefactors;
            return {
                ...state
            }

        case actionTypes.FETCH_TOP_BENEFACTOR_FAILDED:
            state.topBenefactors = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_MANAGERS_SUCCESS:
            state.allManagers = action.dataDr;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_MANAGERS_FAILDED:
            state.allManagers = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_BENEFACTOR_SUCCESS://quản lý mạnh thường quân
            state.allBenefactors = action.dataDr;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_BENEFACTOR_FAILDED:
            state.allBenefactors = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_GROUP_SUCCESS://quản lý group
            state.allGroups = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_GROUP_FAILDED:
            state.allGroups = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_GROUPMANAGER_SUCCESS://quản lý groupManager
            state.allGroupManagers = action.groupManager;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_GROUPMANAGER_FAILDED:
            state.allGroupManagers = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_SUBMENU_SUCCESS://quản lý submenu
            state.allSubmenu = action.submenu;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_SUBMENU_FAILDED:
            state.allSubmenu = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_SUBMENUPROGRAM_SUCCESS://quản lý submenuprogram
            state.allSubmenuProgram = action.submenuProgram;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_SUBMENUPROGRAM_FAILDED:
            state.allSubmenuProgram = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_SUBMENUGUIDE_SUCCESS://quản lý submenuguide
            state.allSubmenuGuide = action.submenuGuide;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_SUBMENUGUIDE_FAILDED:
            state.allSubmenuGuide = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_SUBMENUCONTACT_SUCCESS://quản lý submenucontact
            state.allSubmenuContact = action.submenuContact;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_SUBMENUCONTACT_FAILDED:
            state.allSubmenuContact = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_SUBMENUABOUTUS_SUCCESS://quản lý submenuaboutus
            state.allSubmenuAboutus = action.submenuAboutus;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_SUBMENUABOUTUS_FAILDED:
            state.allSubmenuAboutus = [];
            return {
                ...state
            }

        case actionTypes.FETCH_TOP_BENEFACTORS_SUCCESS://quan ly benefactor
            state.topBenefactors = action.dataBenefactors;
            return {
                ...state
            }

        case actionTypes.FETCH_TOP_BENEFACTORS_FAILDED:
            state.topBenefactors = [];
            return {
                ...state
            }

        case actionTypes.FETCH_REQUIRED_BENEFACTOR_INFOR_SUCCESS:
            state.allRequiredBenefactorInfor = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_REQUIRED_BENEFACTOR_INFOR_FAILDED:
            state.allRequiredBenefactorInfor = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS:
            state.allScheduleTime = action.dataTime;
            return {
                ...state
            }

        case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED:
            state.allScheduleTime = [];
            return {
                ...state
            }

        case actionTypes.FETCH_REQUIRED_MANAGER_INFOR_SUCCESS:
            state.allRequiredManagerInfor = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_REQUIRED_MANAGER_INFOR_FAILDED:
            state.allRequiredManagerInfor = [];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;