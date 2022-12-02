import express from "express";
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import managerController from '../controllers/managerController';
import patientController from '../controllers/patientController';
import branchController from '../controllers/branchController';
import departmentController from '../controllers/departmentController';
import groupController from '../controllers/groupController';
import projectneedhelpController from '../controllers/projectneedhelpController';
import humanneedhelpController from '../controllers/humanneedhelpController';
import newseventsController from '../controllers/newseventsController';
import benefactorController from '../controllers/benefactorController';
import submenuController from '../controllers/submenuController';
import allcodeController from '../controllers/allcodeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    // router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.get('/api/allcode', userController.getAllCode);
    router.get('/api/top-manager-home', managerController.getTopManagerHome);
    router.get('/api/get-all-managers', managerController.getAllManagers);
    router.post('/api/save-infor-managers', managerController.postInforManager);
    router.get('/api/get-detail-manager-by-id', managerController.getDetailManagerById);
    router.post('/api/bulk-create-schedule', managerController.bulkCreateSchedule);
    router.get('/api/get-schedule-manager-by-date', managerController.getScheduleByDate);
    router.get('/api/get-extra-infor-manager-by-id', managerController.getExtraInforManagerById);
    router.get('/api/get-profile-manager-by-id', managerController.getProfileManagerById);

    router.post('/api/patient-book-appointment', patientController.postBookAppointment);
    router.post('/api/verify-book-appointment', patientController.postVerifyBookAppointment);
    //API chi nhánh
    router.post('/api/create-new-branch', branchController.createBranch);
    router.get('/api/get-all-branchmanagers', branchController.getAllBranchManagers);
    router.get('/api/get-branch', branchController.getAllBranch);
    router.get('/api/get-detail-branch-by-id', branchController.getDetailBranchById);
    //API nhóm 
    router.post('/api/create-new-group', groupController.createGroup);
    router.get('/api/get-all-groupmanagers', groupController.getAllGroupManagers);
    router.get('/api/get-group', groupController.getAllGroup);
    router.get('/api/get-detail-group-by-id', groupController.getDetailGroupById);
    //API submenu
    router.post('/api/create-new-submenu', submenuController.createSubmenu);
    router.get('/api/get-submenu', submenuController.getAllSubmenu);
    router.get('/api/get-submenuprogram', submenuController.getAllSubmenuprogram);
    router.get('/api/get-submenuguide', submenuController.getAllSubmenuguide);
    router.get('/api/get-submenuaboutus', submenuController.getAllSubmenuaboutus);
    router.get('/api/get-submenucontact', submenuController.getAllSubmenucontact);
    router.get('/api/get-detail-submenu-by-id', submenuController.getDetailSubmenuById);
    //API dự án cần giúp đỡ
    router.post('/api/create-new-projectneedhelp', projectneedhelpController.createProjectneedhelp);
    router.get('/api/get-projectneedhelp', projectneedhelpController.getAllProjectneedhelp);
    router.get('/api/get-detail-projectneedhelp-by-id', projectneedhelpController.getDetailProjectneedhelpById);
    //API người cần giúp đỡ
    router.post('/api/create-new-humanneedhelp', humanneedhelpController.createHumanneedhelp);
    router.get('/api/get-humanneedhelp', humanneedhelpController.getAllHumanneedhelp);
    router.get('/api/get-detail-humanneedhelp-by-id', humanneedhelpController.getDetailHumanneedhelpById);
    //API tin tức sự kiện
    router.post('/api/create-new-newsevents', newseventsController.createNewsevents);
    router.get('/api/get-newsevents', newseventsController.getAllNewsevents);
    router.get('/api/get-detail-newsevents-by-id', newseventsController.getDetailNewseventsById);
    //API quản lý allcode
    router.post('/api/create-new-allcode', allcodeController.createAllcode);
    router.get('/api/get-allcode', allcodeController.getAllAllcode);
    router.get('/api/get-detail-allcode-by-id', allcodeController.getDetailAllcodeById);
    router.put('/api/edit-allcode', allcodeController.handleEditAllcode);
    router.delete('/api/delete-allcode', allcodeController.handleDeleteAllcode);
    //API phòng ban
    router.post('/api/create-new-department', departmentController.createDepartment);
    router.get('/api/get-all-departmentmanagers', departmentController.getAllDepartmentManagers);
    router.get('/api/get-department', departmentController.getAllDepartment);
    router.get('/api/get-detail-department-by-id', departmentController.getDetailDepartmentById);
    router.get('/api/get-list-patient-for-manager', managerController.getListPatientForManager);
    router.post('/api/send-remedy', managerController.sendRemedy);
    //API quản lý mạnh thường quân
    router.get('/api/allcode', userController.getAllCode);
    router.get('/api/top-benefactor-home', benefactorController.getTopBenefactorHome);
    router.get('/api/get-all-benefactors', benefactorController.getAllBenefactors);
    router.post('/api/save-infor-benefactors', benefactorController.postInforBenefactor);
    router.get('/api/get-detail-benefactor-by-id', benefactorController.getDetailBenefactorById);
    // router.post('/api/bulk-create-schedule', benefactorController.bulkCreateSchedule);
    // router.get('/api/get-schedule-benefactor-by-date', benefactorController.getScheduleByDate);
    // router.get('/api/get-extra-infor-benefactor-by-id', benefactorController.getExtraInforBenefactorById);
    // router.get('/api/get-profile-benefactor-by-id', benefactorController.getProfileBenefactorById);
    // router.get('/api/get-list-patient-for-benefactor', benefactorController.getListPatientForBenefactor);

    // router.get('/api/get-list-patient-for-benefactor', benefactorController.getListPatientForManager);
    // router.post('/api/send-remedy', benefactorController.sendRemedy);

    return app.use("/", router);
}
module.exports = initWebRoutes;