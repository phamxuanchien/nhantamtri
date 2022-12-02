import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('api/login', { email, password });
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

//quản lý bác sĩ
const getTopManagerHomeService = (limit) => {
    return axios.get(`/api/top-manager-home?limit=${limit}`)
}

const getAllManagers = () => {
    return axios.get(`/api/get-all-managers`)
}

const saveDetailManagerService = (data) => {
    return axios.post('/api/save-infor-managers', data)
}

const getDetailInforManager = (inputId) => {
    return axios.get(`/api/get-detail-manager-by-id?id=${inputId}`)
}

const saveBulkScheduleManager = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}

const getScheduleManagerByDate = (managerId, date) => {
    return axios.get(`/api/get-schedule-manager-by-date?managerId=${managerId}&date=${date}`)
}

const getExtraInforManagerById = (managerId) => {
    return axios.get(`/api/get-extra-infor-manager-by-id?managerId=${managerId}`)
}

const getProfileManagerById = (managerId) => {
    return axios.get(`/api/get-profile-manager-by-id?managerId=${managerId}`)
}

const postBookAppointment = (data) => {
    return axios.post(`/api/patient-book-appointment`, data)
}
const postVerifyBookAppointment = (data) => {
    return axios.post(`/api/verify-book-appointment`, data)
}
//API chi nhánh
const createNewBranch = (data) => {
    return axios.post(`/api/create-new-branch`, data)
}

const getAllBranchManagers = (data) => {
    return axios.get(`/api/get-all-branchmanagers`, data)
}
const getAllBranch = () => {
    return axios.get(`/api/get-branch`)
}

const getAllDetailBranchById = (data) => {
    return axios.get(`/api/get-detail-branch-by-id?id=${data.id}&location=${data.location}`)
}
//API phòng ban
const createNewDepartment = (data) => {
    return axios.post(`/api/create-new-department`, data)
}

const getAllDepartmentManagers = (data) => {
    return axios.get(`/api/get-all-departmentmanagers`, data)
}

const getAllDepartment = () => {
    return axios.get(`/api/get-department`)
}

const getAllDetailDepartmentById = (data) => {
    return axios.get(`/api/get-detail-department-by-id?id=${data.id}`)
}
//API quản lý nhóm
const createNewGroup = (data) => {
    return axios.post(`/api/create-new-group`, data)
}

const getAllGroupManagers = (data) => {
    return axios.get(`/api/get-all-groupmanagers`, data)
}
const getAllGroup = () => {
    return axios.get(`/api/get-group`)
}

const getAllDetailGroupById = (data) => {
    return axios.get(`/api/get-detail-group-by-id?id=${data.id}&location=${data.location}`)
}
//API chi quản lý Submenu
const createNewSubmenu = (data) => {
    return axios.post(`/api/create-new-submenu`, data)
}
const getAllSubmenuprogram = (data) => {
    return axios.get(`/api/get-submenuprogram`, data)
}
const getAllSubmenuguide = (data) => {
    return axios.get(`/api/get-submenuguide`, data)
}
const getAllSubmenuaboutus = (data) => {
    return axios.get(`/api/get-submenuaboutus`, data)
}
const getAllSubmenucontact = (data) => {
    return axios.get(`/api/get-submenucontact`, data)
}
const getAllSubmenu = () => {
    return axios.get(`/api/get-submenu`)
}

const getAllDetailSubmenuById = (data) => {
    return axios.get(`/api/get-detail-submenu-by-id?id=${data.id}&location=${data.location}`)
}
//API chi quản lý Allcode
const createNewAllcode = (data) => {
    return axios.post(`/api/create-new-allcode`, data)
}

const getAllAllcode = () => {
    return axios.get(`/api/get-allcode`)
}

const getAllDetailAllcodeById = (data) => {
    return axios.get(`/api/get-detail-allcode-by-id?id=${data.id}&location=${data.location}`)
}
const deleteAllcode = (allcodeId) => {
    // return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-allcode', {
        data: {
            id: allcodeId
        }
    });
}
const editAllcode = (inputData) => {
    return axios.put('/api/edit-allcode', inputData);
}
//API dự án cần giúp đỡ

const createNewProjectneedhelp = (data) => {
    return axios.post(`/api/create-new-projectneedhelp`, data)
}

const getAllProjectneedhelp = () => {
    return axios.get(`/api/get-projectneedhelp`)
}

const getAllDetailProjectneedhelpById = (data) => {
    return axios.get(`/api/get-detail-projectneedhelp-by-id?id=${data.id}`)
}
//API người cần giúp đỡ

const createNewHumanneedhelp = (data) => {
    return axios.post(`/api/create-new-humanneedhelp`, data)
}

const getAllHumanneedhelp = () => {
    return axios.get(`/api/get-humanneedhelp`)
}

const getAllDetailHumanneedhelpById = (data) => {
    return axios.get(`/api/get-detail-humanneedhelp-by-id?id=${data.id}`)
}
//API tin tức, sự kiện

const createNewNewsevents = (data) => {
    return axios.post(`/api/create-new-newsevents`, data)
}

const getAllNewsevents = () => {
    return axios.get(`/api/get-newsevents`)
}

const getAllDetailNewseventsById = (data) => {
    return axios.get(`/api/get-detail-newsevents-by-id?id=${data.id}`)
}

//quản lý mạnh thường quân
const getTopBenefactorHomeService = (limit) => {
    return axios.get(`/api/top-benefactor-home?limit=${limit}`)
}

const getAllBenefactors = () => {
    return axios.get(`/api/get-all-benefactors`)
}

const saveDetailBenefactorService = (data) => {
    return axios.post('/api/save-infor-benefactors', data)
}

const getDetailInforBenefactor = (inputId) => {
    return axios.get(`/api/get-detail-benefactor-by-id?id=${inputId}`)
}

// const saveBulkScheduleBenefactor = (data) => {
//     return axios.post('/api/bulk-create-schedule', data)
// }

// const getScheduleBenefactorByDate = (benefactorId, date) => {
//     return axios.get(`/api/get-schedule-benefactor-by-date?benefactorId=${managerId}&date=${date}`)
// }

// const getExtraInforBenefactorById = (benefactorId) => {
//     return axios.get(`/api/get-extra-infor-benefactor-by-id?benefactorId=${benefactorId}`)
// }

// const getProfileBenefactorById = (benefactorId) => {
//     return axios.get(`/api/get-profile-benefactor-by-id?benefactorId=${benefactorId}`)
// }

// const postBookAppointment = (data) => {
//     return axios.post(`/api/patient-book-appointment`, data)
// }
// const postVerifyBookAppointment = (data) => {
//     return axios.post(`/api/verify-book-appointment`, data)
// }



const getAllPatientForManager = (data) => {
    return axios.get(`/api/get-list-patient-for-manager?managerId=${data.managerId}&date=${data.date}`)
}
const postSendRemedy = (data) => {
    return axios.post('/api/send-remedy', data)
}

export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService, getTopManagerHomeService, getAllManagers,
    saveDetailManagerService, getDetailInforManager, saveBulkScheduleManager, getScheduleManagerByDate,
    getExtraInforManagerById, getProfileManagerById, postBookAppointment, postVerifyBookAppointment,
    createNewBranch, getAllBranch, getAllDetailBranchById, createNewDepartment, getAllDepartment,
    getAllDetailDepartmentById, getAllPatientForManager, postSendRemedy,
    createNewProjectneedhelp, getAllProjectneedhelp, getAllDetailProjectneedhelpById,
    createNewHumanneedhelp, getAllHumanneedhelp, getAllDetailHumanneedhelpById,
    createNewNewsevents, getAllNewsevents, getAllDetailNewseventsById,
    getAllBenefactors, saveDetailBenefactorService, getDetailInforBenefactor, getTopBenefactorHomeService,
    createNewGroup, getAllGroup, getAllDetailGroupById, createNewSubmenu, getAllSubmenu, getAllDetailSubmenuById,
    createNewAllcode, getAllAllcode, getAllDetailAllcodeById, deleteAllcode, editAllcode, getAllBranchManagers,
    getAllDepartmentManagers, getAllGroupManagers, getAllSubmenuprogram, getAllSubmenuguide, getAllSubmenuaboutus,
    getAllSubmenucontact
};