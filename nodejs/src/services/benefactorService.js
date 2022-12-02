import db from "../models/index";
require('dotenv').config();
import _ from 'lodash';
import emailService from './emailService';

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;

let getTopBenefactorHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                limit: limitInput,
                where: { roleId: 'R10' },
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
            if (users && users.image) {
                users.image = Buffer.from(users.image, 'base64').toString('binary');
            }
            resolve({
                errCode: 0,
                data: users
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllBenefactors = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let benefactors = await db.User.findAll({
                where: { roleId: 'R10' },
                attributes: {
                    exclude: ['password', 'image']
                },
                include: [
                    {
                        model: db.Markdown,
                        attributes: ['description', 'contentHTML', 'contentMarkdown'],
                    }
                ],
                raw: false,
                nest: true
            })
            resolve({
                errCode: 0,
                data: benefactors
            })
        } catch (e) {
            reject(e);
        }
    })
}

let checkRequiredFields = (inputData) => {
    let arrFields = ['benefactorId', 'contentHTML', 'contentMarkdown',
        'selectedPayment', 'money',
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

let saveDetailInforBenefactor = (inputData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkObj = checkRequiredFields(inputData);
            if (checkObj.isValid === false) {
                //báo lỗi khi truyền thông tin thiếu
                // if (!inputData.benefactorId || !inputData.contentHTML
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
                        benefactorId: inputData.benefactorId
                    })
                } else if (inputData.action === 'EDIT') {
                    let benefactorMarkdown = await db.Markdown.findOne({
                        where: { benefactorId: inputData.benefactorId },
                        raw: false
                    })
                    if (benefactorMarkdown) {
                        benefactorMarkdown.contentHTML = inputData.contentHTML;
                        benefactorMarkdown.contentMarkdown = inputData.contentMarkdown;
                        benefactorMarkdown.description = inputData.description;
                        benefactorMarkdown.updateAt = new Date();
                        await benefactorMarkdown.save()
                    }
                }
                //upsert to Benefactor infor table
                let benefactorInfor = await db.Benefactor.findOne({
                    where: {
                        benefactorId: inputData.benefactorId,
                    },
                    raw: false
                })

                if (benefactorInfor) {
                    //update
                    benefactorInfor.benefactorId = inputData.benefactorId;
                    benefactorInfor.paymentId = inputData.selectedPayment;
                    benefactorInfor.donateActivityId = inputData.selectedDonateActivity;
                    benefactorInfor.money = inputData.money;

                    benefactorInfor.projectneedhelpId = inputData.projectneedhelpId;
                    benefactorInfor.nameProjectneedhelp = inputData.nameProjectneedhelp;
                    benefactorInfor.humanneedhelpId = inputData.humanneedhelpId;
                    benefactorInfor.nameHumanneedhelp = inputData.nameHumanneedhelp;

                    benefactorInfor.nameDonateActivity = inputData.nameDonateActivity;

                    await benefactorInfor.save()

                } else {
                    //create
                    await db.Benefactor.create({
                        benefactorId: inputData.benefactorId,
                        paymentId: inputData.selectedPayment,
                        donateActivityId: inputData.selectedDonateActivity,
                        money: inputData.money,

                        projectneedhelpId: inputData.selectedProjectneedhelp,
                        humanneedhelpId: inputData.selectedHumanneedhelp,
                        nameHumanneedhelp: inputData.nameHumanneedhelp,
                        nameProjectneedhelp: inputData.nameProjectneedhelp,
                        nameDonateActivity: inputData.nameDonateActivity,

                    })
                }

                resolve({
                    errCode: 0,
                    errMessage: 'Save infor benefactor succeed!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getDetailBenefactorById = (inputId) => {
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
                        // { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                        {
                            model: db.Benefactor,
                            attributes: {
                                exclude: ['id', 'benefactorId']
                            },
                            include: [
                                // { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
                                // { model: db.Allcode, as: 'provinceTypeData', attributes: ['valueEn', 'valueVi'] },

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
            if (!data.arrSchedule || !data.benefactorId || !data.formatedDate) {
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
                        where: { benefactorId: data.benefactorId, date: data.formatedDate },
                        attributes: ['timeType', 'date', 'benefactorId', 'maxNumber'],
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

let getScheduleByDate = (benefactorId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!benefactorId || !date) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let dataSchedule = await db.Schedule.findAll({
                    where: {
                        benefactorId: benefactorId,
                        date: date
                    },
                    include: [
                        { model: db.Allcode, as: 'timeTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.User, as: 'benefactorData', attributes: ['firstName', 'lastName'] }, //có thể lấy thêm chức danh hoặc các trường khác
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

let getExtraInforBenefactorById = (idInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!idInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let data = await db.Benefactor.findOne({
                    where: {
                        benefactorId: idInput
                    },
                    attributes: {
                        exclude: ['id', 'benefactorId']
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

let getProfileBenefactorById = (inputId) => {
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
                            model: db.Benefactor,
                            attributes: {
                                exclude: ['id', 'benefactorId']
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

let getListPatientForBenefactor = (benefactorId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!benefactorId || !date) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let data = await db.Booking.findAll({
                    where: {
                        statusId: 'S2',
                        benefactorId: benefactorId,
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
            if (!data.email || !data.benefactorId || !data.patientId || !data.timeType || !data.imgBase64) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })

            } else {
                //update patient status
                let appointment = await db.Booking.findOne({
                    where: {
                        benefactorId: data.benefactorId,
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
    getTopBenefactorHome: getTopBenefactorHome,
    getAllBenefactors: getAllBenefactors,
    saveDetailInforBenefactor: saveDetailInforBenefactor,
    getDetailBenefactorById: getDetailBenefactorById,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleByDate: getScheduleByDate,
    getExtraInforBenefactorById: getExtraInforBenefactorById,
    getProfileBenefactorById: getProfileBenefactorById,
    getListPatientForBenefactor: getListPatientForBenefactor,
    sendRemedy: sendRemedy,
}