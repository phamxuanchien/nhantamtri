const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILDED: 'FETCH_GENDER_FAILDED',

    FETCH_STAGE_START: 'FETCH_STAGE_START',
    FETCH_STAGE_SUCCESS: 'FETCH_STAGE_SUCCESS',
    FETCH_STAGE_FAILDED: 'FETCH_STAGE_FAILDED',

    FETCH_OACTIVITY_START: 'FETCH_OACTIVITY_START',
    FETCH_OACTIVITY_SUCCESS: 'FETCH_OACTIVITY_SUCCESS',
    FETCH_OACTIVITY_FAILDED: 'FETCH_OACTIVITY_FAILDED',

    FETCH_MANAGE_START: 'FETCH_MANAGE_START',
    FETCH_MANAGE_SUCCESS: 'FETCH_MANAGE_SUCCESS',
    FETCH_MANAGE_FAILDED: 'FETCH_MANAGE_FAILDED',

    FETCH_PROGRAM_START: 'FETCH_PROGRAM_START',
    FETCH_PROGRAM_SUCCESS: 'FETCH_PROGRAM_SUCCESS',
    FETCH_PROGRAM_FAILDED: 'FETCH_PROGRAM_FAILDED',

    FETCH_GROUPMENU_START: 'FETCH_GROUPMENU_START',
    FETCH_GROUPMENU_SUCCESS: 'FETCH_GROUPMENU_SUCCESS',
    FETCH_GROUPMENU_FAILDED: 'FETCH_GROUPMENU_FAILDED',

    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILDED: 'FETCH_POSITION_FAILDED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILDED: 'FETCH_ROLE_FAILDED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILDED: 'CREATE_USER_FAILDED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILDED: 'EDIT_USER_FAILDED',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILDED: 'DELETE_USER_FAILDED',


    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAILDED: 'FETCH_ALL_USERS_FAILDED',

    //allcode
    CREATE_ALLCODE_SUCCESS: 'CREATE_ALLCODE_SUCCESS',
    CREATE_ALLCODE_FAILDED: 'CREATE_ALLCODE_FAILDED',

    EDIT_ALLCODE_SUCCESS: 'EDIT_ALLCODE_SUCCESS',
    EDIT_ALLCODE_FAILDED: 'EDIT_ALLCODE_FAILDED',

    FETCH_ALL_ALLCODES_SUCCESS: 'FETCH_ALL_ALLCODES_SUCCESS',
    FETCH_ALL_ALLCODES_FAILDED: 'FETCH_ALL_ALLCODES_FAILDED',

    FETCH_TOP_MANAGERS_SUCCESS: 'FETCH_TOP_MANAGERS_SUCCESS',
    FETCH_TOP_MANAGERS_FAILDED: 'FETCH_TOP_MANAGERS_FAILDED',

    DELETE_ALLCODE_SUCCESS: 'DELETE_ALLCODE_SUCCESS',
    DELETE_ALLCODE_FAILDED: 'DELETE_ALLCODE_FAILDED',

    //manage
    FETCH_ALL_MANAGERS_SUCCESS: 'FETCH_ALL_MANAGERS_SUCCESS',
    FETCH_ALL_MANAGERS_FAILDED: 'FETCH_ALL_MANAGERS_FAILDED',

    SAVE_DETAIL_MANAGER_SUCCESS: 'SAVE_DETAIL_MANAGER_SUCCESS',
    SAVE_DETAIL_MANAGER_FAILDED: 'SAVE_DETAIL_MANAGER_FAILDED',

    //t???t c??? tin t???c s??? ki???n
    FETCH_ALL_NEWSEVENTS_SUCCESS: 'FETCH_ALL_NEWSEVENTS_SUCCESS',
    FETCH_ALL_NEWSEVENTS_FAILDED: 'FETCH_ALL_NEWSEVENTS_FAILDED',

    //t???t c??? group
    FETCH_ALL_GROUP_SUCCESS: 'FETCH_ALL_GROUP_SUCCESS',
    FETCH_ALL_GROUP_FAILDED: 'FETCH_ALL_GROUP_FAILDED',

    //t???t c??? groupManager
    FETCH_ALL_GROUPMANAGER_SUCCESS: 'FETCH_ALL_GROUPMANAGER_SUCCESS',
    FETCH_ALL_GROUPMANAGER_FAILDED: 'FETCH_ALL_GROUPMANAGER_FAILDED',


    //t???t c??? branch
    FETCH_ALL_BRANCH_SUCCESS: 'FETCH_ALL_BRANCH_SUCCESS',
    FETCH_ALL_BRANCH_FAILDED: 'FETCH_ALL_BRANCH_FAILDED',

    //t???t c??? branchManager
    FETCH_ALL_BRANCHMANAGER_SUCCESS: 'FETCH_ALL_BRANCHMANAGER_SUCCESS',
    FETCH_ALL_BRANCHMANAGER_FAILDED: 'FETCH_ALL_BRANCHMANAGER_FAILDED',

    //t???t c??? department
    FETCH_ALL_DEPARTMENT_SUCCESS: 'FETCH_ALL_DEPARTMENT_SUCCESS',
    FETCH_ALL_DEPARTMENT_FAILDED: 'FETCH_ALL_DEPARTMENT_FAILDED',

    //t???t c??? departmentManager
    FETCH_ALL_DEPARTMENTMANAGER_SUCCESS: 'FETCH_ALL_DEPARTMENTMANAGER_SUCCESS',
    FETCH_ALL_DEPARTMENTMANAGER_FAILDED: 'FETCH_ALL_DEPARTMENTMANAGER_FAILDED',

    //branch
    FETCH_BRANCH_SUCCESS: 'FETCH_BRANCH_SUCCESS',
    FETCH_BRANCH_FAILDED: 'FETCH_BRANCH_FAILDED',

    //department
    FETCH_DEPARTMENT_SUCCESS: 'FETCH_DEPARTMENT_SUCCESS',
    FETCH_DEPARTMENT_FAILDED: 'FETCH_DEPARTMENT_FAILDED',

    //t???t c??? submenu
    FETCH_ALL_SUBMENU_SUCCESS: 'FETCH_ALL_SUBMENU_SUCCESS',
    FETCH_ALL_SUBMENU_FAILDED: 'FETCH_ALL_SUBMENU_FAILDED',

    FETCH_ALL_SUBMENUPROGRAM_SUCCESS: 'FETCH_ALL_SUBMENUPROGRAM_SUCCESS',
    FETCH_ALL_SUBMENUPROGRAM_FAILDED: 'FETCH_ALL_SUBMENUPROGRAM_FAILDED',

    FETCH_ALL_SUBMENUGUIDE_SUCCESS: 'FETCH_ALL_SUBMENUGUIDE_SUCCESS',
    FETCH_ALL_SUBMENUGUIDE_FAILDED: 'FETCH_ALL_SUBMENUGUIDE_FAILDED',

    FETCH_ALL_SUBMENUABOUTUS_SUCCESS: 'FETCH_ALL_SUBMENUABOUTUS_SUCCESS',
    FETCH_ALL_SUBMENUABOUTUS_FAILDED: 'FETCH_ALL_SUBMENUABOUTUS_FAILDED',

    FETCH_ALL_SUBMENUCONTACT_SUCCESS: 'FETCH_ALL_SUBMENUCONTACT_SUCCESS',
    FETCH_ALL_SUBMENUCONTACT_FAILDED: 'FETCH_ALL_SUBMENUCONTACT_FAILDED',

    //t???t c??? d??? ??n c???n gi??p ?????
    FETCH_ALL_PROJECTNEEDHELP_SUCCESS: 'FETCH_ALL_PROJECTNEEDHELP_SUCCESS',
    FETCH_ALL_PROJECTNEEDHELP_FAILDED: 'FETCH_ALL_PROJECTNEEDHELP_FAILDED',

    //t???t c??? ho??n c???nh c???n gi??p ?????
    FETCH_ALL_HUMANNEEDHELP_SUCCESS: 'FETCH_ALL_HUMANNEEDHELP_SUCCESS',
    FETCH_ALL_HUMANNEEDHELP_FAILDED: 'FETCH_ALL_HUMANNEEDHELP_FAILDED',

    //qu???n l?? m???nh th?????ng qu??n
    FETCH_TOP_BENEFACTORS_SUCCESS: 'FETCH_TOP_BENEFACTORS_SUCCESS',
    FETCH_TOP_BENEFACTORS_FAILDED: 'FETCH_TOP_BENEFACTORS_FAILDED',

    FETCH_ALL_BENEFACTOR_SUCCESS: 'FETCH_ALL_BENEFACTOR_SUCCESS',
    FETCH_ALL_BENEFACTOR_FAILDED: 'FETCH_ALL_BENEFACTOR_FAILDED',

    SAVE_DETAIL_BENEFACTOR_SUCCESS: 'SAVE_DETAIL_BENEFACTOR_SUCCESS',
    SAVE_DETAIL_BENEFACTOR_FAILDED: 'SAVE_DETAIL_BENEFACTOR_FAILDED',

    FETCH_REQUIRED_BENEFACTOR_INFOR_START: 'FETCH_REQUIRED_BENEFACTOR_INFOR_START',
    FETCH_REQUIRED_BENEFACTOR_INFOR_SUCCESS: 'FETCH_REQUIRED_BENEFACTOR_INFOR_SUCCESS',
    FETCH_REQUIRED_BENEFACTOR_INFOR_FAILDED: 'FETCH_REQUIRED_BENEFACTOR_INFOR_FAILDED',



    FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS: 'FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS',
    FETCH_ALLCODE_SCHEDULE_TIME_FAILDED: 'FETCH_ALLCODE_SCHEDULE_TIME_FAILDED',

    FETCH_REQUIRED_MANAGER_INFOR_START: 'FETCH_REQUIRED_MANAGER_INFOR_START',
    FETCH_REQUIRED_MANAGER_INFOR_SUCCESS: 'FETCH_REQUIRED_MANAGER_INFOR_SUCCESS',
    FETCH_REQUIRED_MANAGER_INFOR_FAILDED: 'FETCH_REQUIRED_MANAGER_INFOR_FAILDED',

})

export default actionTypes;