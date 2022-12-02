import db from "../models/index";
require('dotenv').config();
import _ from 'lodash';
import emailService from './emailService';

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;

let getTopManagerHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                limit: limitInput,
                where: { roleId: 'R2' },
                order: [['createdAt', 'DESC']],
                attributes: {
                    exclude: ['password']
                },
                include: [
                    { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] },
                ],
                raw: true,
                nest: true
            })
            resolve({
                errCode: 0,
                data: users
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllManagers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let managers = await db.User.findAll({
                where: { roleId: 'R2' },
                attributes: {
                    exclude: ['password', 'image']
                },
            })
            resolve({
                errCode: 0,
                data: managers
            })
        } catch (e) {
            reject(e);
        }
    })
}

let checkRequiredFields = (inputData) => {
    let arrFields = ['managerId', 'contentHTML', 'contentMarkdown', 'action',
        'selectedPrice', 'selectedPayment', 'selectedProvince', 'nameDepartment',
        'addressDepartment', 'note', 'branchId'
    ]
    let isValid = true;
    let element = '';
    for (let i = 0; i < arrFields.length; i++) {
        if (!inputData[arrFields[i]]) {
            isValid = false;
            element = arrFields[i]
            break;
        }
    }
    return {
        isValid: isValid,
        element: element
    }
}

let saveDetailInforManager = (inputData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkObj = checkRequiredFields(inputData);
            if (checkObj.isValid === false) {
                //báo lỗi khi truyền thông tin thiếu
                // if (!inputData.managerId || !inputData.contentHTML
                //     || !inputData.contentMarkdown || !inputData.action
                //     || !inputData.selectedPrice || !inputData.selectedPayment
                //     || !inputData.selectedProvince || !inputData.nameDepartment
                //     || !inputData.addressDepartment || !inputData.note
                // ) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing parameter:${checkObj.element}`
                })
            } else {
                //upsert to markdown
                if (inputData.action === 'CREATE') {
                    await db.Markdown.create({
                        contentHTML: inputData.contentHTML,
                        contentMarkdown: inputData.contentMarkdown,
                        description: inputData.description,
                        managerId: inputData.managerId
                    })
                } else if (inputData.action === 'EDIT') {
                    let managerMarkdown = await db.Markdown.findOne({
                        where: { managerId: inputData.managerId },
                        raw: false
                    })
                    if (managerMarkdown) {
                        managerMarkdown.contentHTML = inputData.contentHTML;
                        managerMarkdown.contentMarkdown = inputData.contentMarkdown;
                        managerMarkdown.description = inputData.description;
                        managerMarkdown.updateAt = new Date();
                        await managerMarkdown.save()
                    }
                }
                //upsert to Manager infor table
                let managerInfor = await db.Manager.findOne({
                    where: {
                        managerId: inputData.managerId,
                    },
                    raw: false
                })

                if (managerInfor) {
                    //update
                    managerInfor.managerId = inputData.managerId;
                    managerInfor.priceId = inputData.selectedPrice;
                    managerInfor.paymentId = inputData.selectedPayment;
                    managerInfor.provinceId = inputData.selectedProvince;
                    managerInfor.nameDepartment = inputData.nameDepartment;
                    managerInfor.addressDepartment = inputData.addressDepartment;
                    managerInfor.note = inputData.note;

                    managerInfor.branchId = inputData.branchId;
                    managerInfor.nameBranch = inputData.nameBranch;
                    managerInfor.addressBranch = inputData.addressBranch;
                    managerInfor.departmentId = inputData.departmentId;
                    managerInfor.groupId = inputData.groupId;
                    managerInfor.nameGroup = inputData.nameGroup;
                    managerInfor.addressGroup = inputData.addressGroup;
                    managerInfor.projectneedhelpId = inputData.projectneedhelpId;
                    managerInfor.nameProjectneedhelp = inputData.nameProjectneedhelp;
                    managerInfor.addressProjectneedhelp = inputData.addressProjectneedhelp;
                    managerInfor.humanneedhelpId = inputData.humanneedhelpId;
                    managerInfor.nameHumanneedhelp = inputData.nameHumanneedhelp;
                    managerInfor.addressHumanneedhelp = inputData.addressHumanneedhelp;
                    managerInfor.newseventsId = inputData.newseventsId;
                    managerInfor.nameNewsevents = inputData.nameNewsevents;
                    managerInfor.addressNewsevents = inputData.addressNewsevents;
                    await managerInfor.save()

                } else {
                    //create
                    await db.Manager.create({
                        managerId: inputData.managerId,
                        priceId: inputData.selectedPrice,
                        paymentId: inputData.selectedPayment,
                        provinceId: inputData.selectedProvince,

                        departmentId: inputData.departmentId,
                        nameDepartment: inputData.nameDepartment,
                        addressDepartment: inputData.addressDepartment,
                        note: inputData.note,
                        branchId: inputData.branchId,
                        nameBranch: inputData.nameBranch,
                        addressBranch: inputData.addressBranch,
                        groupId: inputData.groupId,
                        nameGroup: inputData.nameGroup,
                        addressGroup: inputData.addressGroup,
                        projectneedhelpId: inputData.projectneedhelpId,
                        nameProjectneedhelp: inputData.nameProjectneedhelp,
                        addressProjectneedhelp: inputData.addressProjectneedhelp,
                        humanneedhelpId: inputData.humanneedhelpId,
                        nameHumanneedhelp: inputData.nameHumanneedhelp,
                        addressHumanneedhelp: inputData.addressHumanneedhelp,
                        newseventsId: inputData.newseventsId,
                        nameNewsevents: inputData.nameNewsevents,
                        addressNewsevents: inputData.addressNewsevents,

                    })
                }

                resolve({
                    errCode: 0,
                    errMessage: 'Save infor manager succeed!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getDetailManagerById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                let data = await db.User.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: {
                        exclude: ['password']
                    },
                    include: [
                        {
                            model: db.Markdown,
                            attributes: ['description', 'contentHTML', 'contentMarkdown'],
                        },
                        { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                        {
                            model: db.Manager,
                            attributes: {
                                exclude: ['id', 'managerId']
                            },
                            include: [
                                { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'provinceTypeData', attributes: ['valueEn', 'valueVi'] },

                            ]
                        },
                    ],
                    raw: false,
                    nest: true
                })
                if (data && data.image) {
                    data.image = Buffer.from(data.image, 'base64').toString('binary');
                }
                if (!data) data = {};
                resolve({
                    errCode: 0,
                    data: data
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}
let bulkCreateSchedule = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.arrSchedule || !data.managerId || !data.formatedDate) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                let schedule = data.arrSchedule;
                if (schedule && schedule.length > 0) {
                    schedule = schedule.map(item => {
                        item.maxNumber = MAX_NUMBER_SCHEDULE;
                        return item;
                    })
                }
                let existing = await db.Schedule.findAll(
                    {
                        where: { managerId: data.managerId, date: data.formatedDate },
                        attributes: ['timeType', 'date', 'managerId', 'maxNumber'],
                        raw: true
                    });
                // if (existing && existing.length > 0) {
                //     existing = existing.map(item => {
                //         item.date = new Date(item.date).getTime();
                //         return item;
                //     })
                // }
                let toCreate = _.differenceWith(schedule, existing, (a, b) => {
                    return a.timeType === b.timeType && +a.date === +b.date;
                });
                if (toCreate && toCreate.length > 0) {
                    await db.Schedule.bulkCreate(toCreate);

                }
                resolve({
                    errCode: 0,
                    errMessage: 'ok'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getScheduleByDate = (managerId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!managerId || !date) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let dataSchedule = await db.Schedule.findAll({
                    where: {
                        managerId: managerId,
                        date: date
                    },
                    include: [
                        { model: db.Allcode, as: 'timeTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.User, as: 'managerData', attributes: ['firstName', 'lastName'] }, //có thể lấy thêm chức danh hoặc các trường khác
                    ],
                    raw: false,
                    nest: true
                })
                if (!dataSchedule) dataSchedule = [];
                resolve({
                    errCode: 0,
                    data: dataSchedule
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getExtraInforManagerById = (idInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!idInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let data = await db.Manager.findOne({
                    where: {
                        managerId: idInput
                    },
                    attributes: {
                        exclude: ['id', 'managerId']
                    },
                    include: [
                        { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'provinceTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
                    ],
                    raw: false,
                    nest: true
                })
                if (!data) data = [];
                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getProfileManagerById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let data = await db.User.findOne({
                    where: {
                        Id: inputId
                    },
                    attributes: {
                        exclude: ['password']
                    },
                    include: [
                        {
                            model: db.Markdown,
                            attributes: ['description', 'contentHTML', 'contentMarkdown'],
                        },
                        { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                        {
                            model: db.Manager,
                            attributes: {
                                exclude: ['id', 'managerId']
                            },
                            include: [
                                { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'provinceTypeData', attributes: ['valueEn', 'valueVi'] },

                            ]
                        },
                    ],
                    raw: false,
                    nest: true
                })
                if (data && data.image) {
                    data.image = Buffer.from(data.image, 'base64').toString('binary');
                }
                if (!data) data = {};
                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getListPatientForManager = (managerId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!managerId || !date) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let data = await db.Booking.findAll({
                    where: {
                        statusId: 'S2',
                        managerId: managerId,
                        date: date
                    },
                    include: [
                        {
                            model: db.User, as: 'patientData', attributes: ['email', 'firstName', 'address', 'gender'],
                            include: [
                                { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] },
                            ]
                        },
                        {
                            model: db.Allcode, as: 'timeTypeDataPatient', attributes: ['valueEn', 'valueVi']
                        }
                    ],
                    raw: false,
                    nest: true
                })
                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let sendRemedy = (data) => {

    return new Promise(async (resolve, reject) => {

        try {
            if (!data.email || !data.managerId || !data.patientId || !data.timeType || !data.imgBase64) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })

            } else {
                //update patient status
                let appointment = await db.Booking.findOne({
                    where: {
                        managerId: data.managerId,
                        patientId: data.patientId,
                        timeType: data.timeType,
                        statusId: 'S2'

                    },
                    raw: false
                })
                if (appointment) {
                    appointment.statusId = 'S3';
                    await appointment.save()
                }
                //send email remedy
                await emailService.sendAttachment(data);
                resolve({
                    errCode: 0,
                    errMessage: 'ok'
                })
            }
        } catch (e) {
            reject(e);
        }

    })
}

module.exports = {
    getTopManagerHome: getTopManagerHome,
    getAllManagers: getAllManagers,
    saveDetailInforManager: saveDetailInforManager,
    getDetailManagerById: getDetailManagerById,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleByDate: getScheduleByDate,
    getExtraInforManagerById: getExtraInforManagerById,
    getProfileManagerById: getProfileManagerById,
    getListPatientForManager: getListPatientForManager,
    sendRemedy: sendRemedy,
}