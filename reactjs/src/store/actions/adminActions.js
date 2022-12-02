import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService, getAllUsers,
    deleteUserService, editUserService, getTopManagerHomeService, getAllManagers, saveDetailManagerService,
    getAllBranch, getAllDepartment, getAllProjectneedhelp, getAllHumanneedhelp, getAllNewsevents, getAllBenefactors,
    getTopBenefactorHomeService, saveDetailBenefactorService, getAllGroup, getAllSubmenu, createNewAllcode,
    getAllAllcode, editAllcode, deleteAllcode, getAllBranchManagers, getAllDepartmentManagers, getAllGroupManagers,
    getAllSubmenuprogram, getAllSubmenuguide, getAllSubmenuaboutus, getAllSubmenucontact

} from "../../services/userService";
import { toast } from "react-toastify";


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSucess(res.data))
            } else {
                dispatch(fetchGenderFailded());
            }

        } catch (e) {
            dispatch(fetchGenderFailded());
            console.log('fetchGenderStart error', e)
        }
    }
}



export const fetchGenderSucess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailded = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})

export const fetchStageStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_STAGE_START })
            let res = await getAllCodeService("STAGE");
            if (res && res.errCode === 0) {
                dispatch(fetchStageSucess(res.data))
            } else {
                dispatch(fetchStageFailded());
            }

        } catch (e) {
            dispatch(fetchStageFailded());
            console.log('fetchStageStart error', e)
        }
    }
}



export const fetchStageSucess = (stageData) => ({
    type: actionTypes.FETCH_STAGE_SUCCESS,
    data: stageData
})

export const fetchStageFailded = () => ({
    type: actionTypes.FETCH_STAGE_FAILDED
})

export const fetchGroupmenuStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GROUPMENU_START })
            let res = await getAllCodeService("GROUPMENU");
            if (res && res.errCode === 0) {
                dispatch(fetchGroupmenuSucess(res.data))
            } else {
                dispatch(fetchGroupmenuFailded());
            }

        } catch (e) {
            dispatch(fetchGroupmenuFailded());
            console.log('fetchGroupmenuStart error', e)
        }
    }
}



export const fetchGroupmenuSucess = (groupmenuData) => ({
    type: actionTypes.FETCH_GROUPMENU_SUCCESS,
    data: groupmenuData
})

export const fetchGroupmenuFailded = () => ({
    type: actionTypes.FETCH_GROUPMENU_FAILDED
})

export const fetchOactivityStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_OACTIVITY_START })
            let res = await getAllCodeService("OACTIVITY");
            if (res && res.errCode === 0) {
                dispatch(fetchOactivitySucess(res.data))
            } else {
                dispatch(fetchOactivityFailded());
            }

        } catch (e) {
            dispatch(fetchOactivityFailded());
            console.log('fetchOactivityStart error', e)
        }
    }
}

export const fetchOactivitySucess = (oactivityData) => ({
    type: actionTypes.FETCH_OACTIVITY_SUCCESS,
    data: oactivityData
})

export const fetchOactivityFailded = () => ({
    type: actionTypes.FETCH_OACTIVITY_FAILDED
})



export const fetchManageStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_MANAGE_START })
            let res = await getAllCodeService("MANAGE");
            if (res && res.errCode === 0) {
                dispatch(fetchManageSucess(res.data))
            } else {
                dispatch(fetchManageFailded());
            }

        } catch (e) {
            dispatch(fetchManageFailded());
            console.log('fetchManageStart error', e)
        }
    }
}



export const fetchManageSucess = (manageData) => ({
    type: actionTypes.FETCH_MANAGE_SUCCESS,
    data: manageData
})

export const fetchManageFailded = () => ({
    type: actionTypes.FETCH_MANAGE_FAILDED
})

export const fetchProgramStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_PROGRAM_START })
            let res = await getAllCodeService("PROGRAM");
            if (res && res.errCode === 0) {
                dispatch(fetchProgramSucess(res.data))
            } else {
                dispatch(fetchProgramFailded());
            }

        } catch (e) {
            dispatch(fetchProgramFailded());
            console.log('fetchProgramStart error', e)
        }
    }
}



export const fetchProgramSucess = (programData) => ({
    type: actionTypes.FETCH_PROGRAM_SUCCESS,
    data: programData
})

export const fetchProgramFailded = () => ({
    type: actionTypes.FETCH_PROGRAM_FAILDED
})

//POSITION
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSucess(res.data))
            } else {
                dispatch(fetchPositionFailded());
            }

        } catch (e) {
            dispatch(fetchPositionFailded());
            console.log('fetchPositionStart error', e)
        }
    }
}

export const fetchPositionSucess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailded = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})

//ROLE
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSucess(res.data))
            } else {
                dispatch(fetchRoleFailded());
            }

        } catch (e) {
            dispatch(fetchRoleFailded());
            console.log('fetchRoleStart error', e)
        }
    }
}

export const fetchRoleSucess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailded = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED
})

//Tất cả tin tức
export const fetchAllNewseventsStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllNewsevents("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllNewseventsSucess(res))
            } else {
                toast.error("Fetch all newsevents failded!");
                dispatch(fetchAllNewseventsFailded());
            }

        } catch (e) {
            toast.error("Fetch all newsevents failded!");
            dispatch(fetchAllNewseventsFailded());
            console.log('fetchAllNewseventsStart error', e)
        }
    }
}

export const fetchAllNewseventsSucess = (data) => ({
    type: actionTypes.FETCH_ALL_NEWSEVENTS_SUCCESS,
    newsevents: data
})

export const fetchAllNewseventsFailded = () => ({
    type: actionTypes.FETCH_ALL_NEWSEVENTS_FAILDED,
})

//Tất cả menu submenu
export const fetchAllSubmenuStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllSubmenu("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllSubmenuSucess(res))
            } else {
                toast.error("Fetch all submenu failded!");
                dispatch(fetchAllSubmenuFailded());
            }

        } catch (e) {
            toast.error("Fetch all newsevents failded!");
            dispatch(fetchAllSubmenuFailded());
            console.log('fetchAllSubmenuStart error', e)
        }
    }
}

export const fetchAllSubmenuSucess = (data) => ({
    type: actionTypes.FETCH_ALL_SUBMENU_SUCCESS,
    submenu: data
})

export const fetchAllSubmenuFailded = () => ({
    type: actionTypes.FETCH_ALL_SUBMENU_FAILDED,
})

//Tất cả menu submenuprogram
export const fetchAllSubmenuprogramStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllSubmenuprogram();
            if (res && res.errCode === 0) {
                dispatch(fetchAllSubmenuprogramSucess(res))
            } else {
                toast.error("Fetch all submenuProgram failded!");
                dispatch(fetchAllSubmenuprogramFailded());
            }

        } catch (e) {
            toast.error("Fetch all submenuProgram failded!");
            dispatch(fetchAllSubmenuprogramFailded());
            console.log('fetchAllSubmenuprogramStart error', e)
        }
    }
}

export const fetchAllSubmenuprogramSucess = (data) => ({
    type: actionTypes.FETCH_ALL_SUBMENUPROGRAM_SUCCESS,
    submenuProgram: data
})

export const fetchAllSubmenuprogramFailded = () => ({
    type: actionTypes.FETCH_ALL_SUBMENUPROGRAM_FAILDED,
})
//Tất cả menu submenuGUIDE
export const fetchAllSubmenuguideStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllSubmenuguide();
            if (res && res.errCode === 0) {
                dispatch(fetchAllSubmenuguideSucess(res))
            } else {
                toast.error("Fetch all submenuGuide failded!");
                dispatch(fetchAllSubmenuguideFailded());
            }

        } catch (e) {
            toast.error("Fetch all submenuGuide failded!");
            dispatch(fetchAllSubmenuguideFailded());
            console.log('fetchAllSubmenuguideStart error', e)
        }
    }
}

export const fetchAllSubmenuguideSucess = (data) => ({
    type: actionTypes.FETCH_ALL_SUBMENUGUIDE_SUCCESS,
    submenuGuide: data
})

export const fetchAllSubmenuguideFailded = () => ({
    type: actionTypes.FETCH_ALL_SUBMENUGUIDE_FAILDED,
})
//Tất cả menu submenuaboutaboutus
export const fetchAllSubmenuaboutusStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllSubmenuaboutus();
            if (res && res.errCode === 0) {
                dispatch(fetchAllSubmenuaboutusSucess(res))
            } else {
                toast.error("Fetch all submenuAboutus failded!");
                dispatch(fetchAllSubmenuaboutusFailded());
            }

        } catch (e) {
            toast.error("Fetch all submenuAboutus failded!");
            dispatch(fetchAllSubmenuaboutusFailded());
            console.log('fetchAllSubmenuaboutusStart error', e)
        }
    }
}

export const fetchAllSubmenuaboutusSucess = (data) => ({
    type: actionTypes.FETCH_ALL_SUBMENUABOUTUS_SUCCESS,
    submenuAboutus: data
})

export const fetchAllSubmenuaboutusFailded = () => ({
    type: actionTypes.FETCH_ALL_SUBMENUABOUTUS_FAILDED,
})
//Tất cả menu submenucontact
export const fetchAllSubmenucontactStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllSubmenucontact();
            if (res && res.errCode === 0) {
                dispatch(fetchAllSubmenucontactSucess(res))
            } else {
                toast.error("Fetch all submenucontact failded!");
                dispatch(fetchAllSubmenucontactFailded());
            }

        } catch (e) {
            toast.error("Fetch all submenucontact failded!");
            dispatch(fetchAllSubmenucontactFailded());
            console.log('fetchAllSubmenucontactStart error', e)
        }
    }
}

export const fetchAllSubmenucontactSucess = (data) => ({
    type: actionTypes.FETCH_ALL_SUBMENUCONTACT_SUCCESS,
    submenuContact: data
})

export const fetchAllSubmenucontactFailded = () => ({
    type: actionTypes.FETCH_ALL_SUBMENUCONTACT_FAILDED,
})

//Tất cả nhóm group
export const fetchAllGroupStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllGroup("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllGroupSucess(res))
            } else {
                toast.error("Fetch all group failded!");
                dispatch(fetchAllGroupFailded());
            }

        } catch (e) {
            toast.error("Fetch all group failded!");
            dispatch(fetchAllGroupFailded());
            console.log('fetchAllGroupStart error', e)
        }
    }
}

export const fetchAllGroupSucess = (data) => ({
    type: actionTypes.FETCH_ALL_GROUP_SUCCESS,
    group: data
})

export const fetchAllGroupFailded = () => ({
    type: actionTypes.FETCH_ALL_GROUP_FAILDED,
})

//tất cả groupManager
export const fetchAllGroupManagers = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllGroupManagers();
            if (res && res.errCode === 0) {
                dispatch(fetchAllGroupManagersSucess(res))
            } else {
                toast.error("Fetch all groupManager failded!");
                dispatch(fetchAllGroupManagersFailded());
            }

        } catch (e) {
            toast.error("Fetch all groupManager failded!");
            dispatch(fetchAllGroupManagersFailded());
            console.log('fetchAllGroupManagersStart error', e)
        }
    }
}

export const fetchAllGroupManagersSucess = (data) => ({
    type: actionTypes.FETCH_ALL_GROUPMANAGER_SUCCESS,
    groupManager: data
})

export const fetchAllGroupManagersFailded = () => ({
    type: actionTypes.FETCH_ALL_GROUPMANAGER_FAILDED,
})


//tất cả branch
export const fetchAllBranchStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllBranch("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllBranchSucess(res))
            } else {
                toast.error("Fetch all Branch failded!");
                dispatch(fetchAllBranchFailded());
            }

        } catch (e) {
            toast.error("Fetch all Branch failded!");
            dispatch(fetchAllBranchFailded());
            console.log('fetchAllBranchStart error', e)
        }
    }
}

export const fetchAllBranchSucess = (data) => ({
    type: actionTypes.FETCH_ALL_BRANCH_SUCCESS,
    branch: data
})

export const fetchAllBranchFailded = () => ({
    type: actionTypes.FETCH_ALL_BRANCH_FAILDED,
})
//tất cả branchManager
export const fetchAllBranchManagers = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllBranchManagers();
            if (res && res.errCode === 0) {
                dispatch(fetchAllBranchManagersSucess(res))
            } else {
                toast.error("Fetch all branchManager failded!");
                dispatch(fetchAllBranchManagersFailded());
            }

        } catch (e) {
            toast.error("Fetch all branchManager failded!");
            dispatch(fetchAllBranchManagersFailded());
            console.log('fetchAllBranchManagersStart error', e)
        }
    }
}

export const fetchAllBranchManagersSucess = (data) => ({
    type: actionTypes.FETCH_ALL_BRANCHMANAGER_SUCCESS,
    branchManager: data
})

export const fetchAllBranchManagersFailded = () => ({
    type: actionTypes.FETCH_ALL_BRANCHMANAGER_FAILDED,
})

//tất cả department
export const fetchAllDepartmentStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDepartment("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllDepartmentSucess(res))
            } else {
                toast.error("Fetch all Department failded!");
                dispatch(fetchAllDepartmentFailded());
            }

        } catch (e) {
            toast.error("Fetch all Department failded!");
            dispatch(fetchAllDepartmentFailded());
            console.log('fetchAllDepartmentStart error', e)
        }
    }
}

export const fetchAllDepartmentSucess = (data) => ({
    type: actionTypes.FETCH_ALL_DEPARTMENT_SUCCESS,
    department: data
})

export const fetchAllDepartmentFailded = () => ({
    type: actionTypes.FETCH_ALL_DEPARTMENT_FAILDED,
})

//tất cả departmentManager
export const fetchAllDepartmentManagers = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDepartmentManagers();
            if (res && res.errCode === 0) {
                dispatch(fetchAllDepartmentManagersSucess(res))
            } else {
                toast.error("Fetch all departmentManager failded!");
                dispatch(fetchAllDepartmentManagersFailded());
            }

        } catch (e) {
            toast.error("Fetch all departmentManager failded!");
            dispatch(fetchAllDepartmentManagersFailded());
            console.log('fetchAllDepartmentManagersStart error', e)
        }
    }
}

export const fetchAllDepartmentManagersSucess = (data) => ({
    type: actionTypes.FETCH_ALL_DEPARTMENTMANAGER_SUCCESS,
    departmentManager: data
})

export const fetchAllDepartmentManagersFailded = () => ({
    type: actionTypes.FETCH_ALL_DEPARTMENTMANAGER_FAILDED,
})

//BRANCH
export const fetchBranchStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("BRANCH");
            if (res && res.errCode === 0) {
                dispatch(fetchBranchSucess(res.data))
            } else {
                dispatch(fetchBranchFailded());
            }

        } catch (e) {
            dispatch(fetchBranchFailded());
            console.log('fetchBranchStart error', e)
        }
    }
}

export const fetchBranchSucess = (branchData) => ({
    type: actionTypes.FETCH_BRANCH_SUCCESS,
    data: branchData
})

export const fetchBranchFailded = () => ({
    type: actionTypes.FETCH_BRANCH_FAILDED
})

//DEPARTMENT
export const fetchDepartmentStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("DEPARTMENT");
            if (res && res.errCode === 0) {
                dispatch(fetchDepartmentSucess(res.data))
            } else {
                dispatch(fetchDepartmentFailded());
            }

        } catch (e) {
            dispatch(fetchDepartmentFailded());
            console.log('fetchDepartmentStart error', e)
        }
    }
}

export const fetchDepartmentSucess = (departmentData) => ({
    type: actionTypes.FETCH_DEPARTMENT_SUCCESS,
    data: departmentData
})

export const fetchDepartmentFailded = () => ({
    type: actionTypes.FETCH_DEPARTMENT_FAILDED
})


//Tất cả dự án cần giúp đỡ
export const fetchAllProjectneedhelpStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllProjectneedhelp("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllProjectneedhelpSucess(res))
            } else {
                toast.error("Fetch all projectneedhelp failded!");
                dispatch(fetchAllProjectneedhelpFailded());
            }

        } catch (e) {
            toast.error("Fetch all projectneedhelp failded!");
            dispatch(fetchAllProjectneedhelpFailded());
            console.log('fetchAllProjectneedhelpStart error', e)
        }
    }
}

export const fetchAllProjectneedhelpSucess = (data) => ({
    type: actionTypes.FETCH_ALL_PROJECTNEEDHELP_SUCCESS,
    projectneedhelp: data
})

export const fetchAllProjectneedhelpFailded = () => ({
    type: actionTypes.FETCH_ALL_PROJECTNEEDHELP_FAILDED,
})

//Tất cả hoàn cảnh cần giúp đỡ
export const fetchAllHumanneedhelpStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllHumanneedhelp("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllHumanneedhelpSucess(res))
            } else {
                toast.error("Fetch all humanneedhelp failded!");
                dispatch(fetchAllHumanneedhelpFailded());
            }

        } catch (e) {
            toast.error("Fetch all humanneedhelp failded!");
            dispatch(fetchAllHumanneedhelpFailded());
            console.log('fetchAllHumanneedhelpStart error', e)
        }
    }
}

export const fetchAllHumanneedhelpSucess = (data) => ({
    type: actionTypes.FETCH_ALL_HUMANNEEDHELP_SUCCESS,
    humanneedhelp: data
})

export const fetchAllHumanneedhelpFailded = () => ({
    type: actionTypes.FETCH_ALL_HUMANNEEDHELP_FAILDED,
})
//All Allcode
export const editAllAllcode = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editAllcode(data);
            if (res && res.errCode === 0) {
                toast.success("Update the allcode succeed!");
                dispatch(editAllcodeSuccess())
                dispatch(fetchAllAllcodesStart());
            } else {
                toast.error("Update the allcode failded!");
                dispatch(editAllcodeFailded());
            }

        } catch (e) {
            toast.error("Update the allcode failded!");
            dispatch(editAllcodeFailded());
            console.log('editAllcodeFailded error', e)
        }
    }
}

export const editAllcodeSuccess = () => ({
    type: actionTypes.EDIT_ALLCODE_SUCCESS,
})

export const editAllcodeFailded = () => ({
    type: actionTypes.EDIT_ALLCODE_FAILDED,
})

export const createNewAAllcode = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewAllcode(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new allcode succeed!");
                dispatch(saveAllcodeSuccess())
                dispatch(fetchAllAllcodesStart());
            } else {
                dispatch(saveAllcodeFailded());
            }

        } catch (e) {
            dispatch(saveAllcodeFailded());
            console.log('saveAllcodeFailded error', e)
        }
    }
}
export const saveAllcodeSuccess = () => ({
    type: actionTypes.CREATE_ALLCODE_SUCCESS
})
export const saveAllcodeFailded = () => ({
    type: actionTypes.CREATE_ALLCODE_FAILDED
})

export const fetchAllAllcodesStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllAllcode("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllAllcodesSucess(res))
            } else {
                toast.error("Fetch all allcode failded!");
                dispatch(fetchAllAllcodesFailded());
            }

        } catch (e) {
            toast.error("Fetch all allcode failded!");
            dispatch(fetchAllAllcodesFailded());
            console.log('fetchAllAllcodesStart error', e)
        }
    }
}
export const fetchAllAllcodesSucess = (data) => ({
    type: actionTypes.FETCH_ALL_ALLCODES_SUCCESS,
    allcodes: data
})

export const fetchAllAllcodesFailded = () => ({
    type: actionTypes.FETCH_ALL_ALLCODES_FAILDED,
})

export const deleteAAllcode = (allcodeId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteAllcode(allcodeId);
            if (res && res.errCode === 0) {
                toast.success("Delete the allcode succeed!");
                dispatch(deleteAllcodeSuccess())
                dispatch(fetchAllAllcodesStart());
            } else {
                toast.error("Delete the allcode failded!");
                dispatch(deleteAllcodeFailded());
            }

        } catch (e) {
            toast.error("Delete the allcode failded!");
            dispatch(deleteAllcodeFailded());
            console.log('deleteAllcodeFailded error', e)
        }
    }
}
export const deleteAllcodeSuccess = () => ({
    type: actionTypes.DELETE_ALLCODE_SUCCESS,
})

export const deleteAllcodeFailded = () => ({
    type: actionTypes.DELETE_ALLCODE_FAILDED,
})

//all user
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed!");
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailded());
            }

        } catch (e) {
            dispatch(saveUserFailded());
            console.log('saveUserFailded error', e)
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailded = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSucess(res.users.reverse()))
            } else {
                toast.error("Fetch all user failded!");
                dispatch(fetchAllUsersFailded());
            }

        } catch (e) {
            toast.error("Fetch all user failded!");
            dispatch(fetchAllUsersFailded());
            console.log('fetchAllUsersStart error', e)
        }
    }
}
export const fetchAllUsersSucess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailded = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED,
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("Delete the user succeed!");
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete the user failded!");
                dispatch(deleteUserFailded());
            }

        } catch (e) {
            toast.error("Delete the user failded!");
            dispatch(deleteUserFailded());
            console.log('deleteUserFailded error', e)
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailded = () => ({
    type: actionTypes.DELETE_USER_FAILDED,
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Update the user succeed!");
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Update the user failded!");
                dispatch(editUserFailded());
            }

        } catch (e) {
            toast.error("Update the user failded!");
            dispatch(editUserFailded());
            console.log('editUserFailded error', e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFailded = () => ({
    type: actionTypes.EDIT_USER_FAILDED,
})
//quản lý manager
export const fetchTopManager = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopManagerHomeService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_MANAGERS_SUCCESS,
                    dataManagers: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_MANAGERS_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_MANAGERS_FAILDED: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_MANAGERS_FAILDED
            })
        }
    }
}

export const fetchAllManagers = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllManagers();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_MANAGERS_SUCCESS,
                    dataDr: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_MANAGERS_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_MANAGERS_FAILDED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_MANAGERS_FAILDED
            })
        }
    }
}

export const saveDetailManager = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailManagerService(data);
            if (res && res.errCode === 0) {
                toast.success("Save Infor Detail succeed!")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_MANAGER_SUCCESS,
                })
            } else {
                toast.error("Save Infor Detail error!")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_MANAGER_FAILDED
                })
            }
        } catch (e) {
            toast.error("Save Infor Detail error!")
            console.log('SAVE_DETAIL_MANAGER_FAILDED: ', e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_MANAGER_FAILDED
            })
        }
    }
}

export const fetchAllScheduleTime = (type) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILDED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED
            })
        }
    }
}

//get managerPrice
export const getRequiredManagerInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_REQUIRED_MANAGER_INFOR_START })
            let resPrice = await getAllCodeService("PRICE");
            let resPayment = await getAllCodeService("PAYMENT");
            let resProvince = await getAllCodeService("PROVINCE");
            let resBranch = await getAllBranch();
            let resDepartment = await getAllDepartment();
            let resProjectneedhelp = await getAllProjectneedhelp();
            let resHumanneedhelp = await getAllHumanneedhelp();
            let resNewsevents = await getAllNewsevents();

            if (resPrice && resPrice.errCode === 0
                && resPayment && resPayment.errCode === 0
                && resProvince && resProvince.errCode === 0
                && resBranch && resBranch.errCode === 0
                && resDepartment && resDepartment.errCode === 0
                && resProjectneedhelp && resProjectneedhelp.errCode === 0
                && resHumanneedhelp && resHumanneedhelp.errCode === 0
                && resNewsevents && resNewsevents.errCode === 0
            ) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data,
                    resBranch: resBranch.data,
                    resDepartment: resDepartment.data,
                    resProjectneedhelp: resProjectneedhelp.data,
                    resHumanneedhelp: resHumanneedhelp.data,
                    resNewsevents: resNewsevents.data
                }
                dispatch(fetchRequiredManagerInforSuccess(data))
            } else {
                dispatch(fetchRequiredManagerInforFailded());
            }

        } catch (e) {
            dispatch(fetchRequiredManagerInforFailded());
            console.log('fetchRequiredManagerInforFailded error', e)
        }
    }
}



export const fetchRequiredManagerInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_MANAGER_INFOR_SUCCESS,
    data: allRequiredData
})

export const fetchRequiredManagerInforFailded = () => ({
    type: actionTypes.FETCH_REQUIRED_MANAGER_INFOR_FAILDED
})

//quản lý mạnh thường quân
export const fetchTopBenefactor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopBenefactorHomeService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_BENEFACTORS_SUCCESS,
                    dataBenefactors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_BENEFACTORS_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_BENEFACTORS_FAILDED: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_BENEFACTORS_FAILDED
            })
        }
    }
}

export const fetchAllBenefactors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllBenefactors();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_BENEFACTOR_SUCCESS,
                    dataDr: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_BENEFACTOR_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_BENEFACTOR_FAILDED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_BENEFACTOR_FAILDED
            })
        }
    }
}

export const saveDetailBenefactor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailBenefactorService(data);
            if (res && res.errCode === 0) {
                toast.success("Save Infor Detail succeed!")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_BENEFACTOR_SUCCESS,
                })
            } else {
                toast.error("Save Infor Detail error!")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_BENEFACTOR_FAILDED
                })
            }
        } catch (e) {
            toast.error("Save Infor Detail error!")
            console.log('SAVE_DETAIL_BENEFACTOR_FAILDED: ', e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_BENEFACTOR_FAILDED
            })
        }
    }
}

//get select tất cả trong benefactor
export const getRequiredBenefactorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_REQUIRED_BENEFACTOR_INFOR_START })
            let resPayment = await getAllCodeService("PAYMENT");
            let resOactivity = await getAllCodeService("OACTIVITY");
            let resProjectneedhelp = await getAllProjectneedhelp();
            let resHumanneedhelp = await getAllHumanneedhelp();

            if (
                resPayment && resPayment.errCode === 0
                && resOactivity && resOactivity.errCode === 0
                && resProjectneedhelp && resProjectneedhelp.errCode === 0
                && resHumanneedhelp && resHumanneedhelp.errCode === 0
            ) {
                let data = {
                    resPayment: resPayment.data,
                    resOactivity: resOactivity.data,
                    resProjectneedhelp: resProjectneedhelp.data,
                    resHumanneedhelp: resHumanneedhelp.data,
                }
                dispatch(fetchRequiredBenefactorInforSuccess(data))
            } else {
                dispatch(fetchRequiredBenefactorInforFailded());
            }

        } catch (e) {
            dispatch(fetchRequiredBenefactorInforFailded());
            console.log('fetchRequiredBenefactorInforFailded error', e)
        }
    }
}



export const fetchRequiredBenefactorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_BENEFACTOR_INFOR_SUCCESS,
    data: allRequiredData
})

export const fetchRequiredBenefactorInforFailded = () => ({
    type: actionTypes.FETCH_REQUIRED_BENEFACTOR_INFOR_FAILDED
})
