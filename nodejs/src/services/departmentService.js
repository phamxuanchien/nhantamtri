const db = require("../models");

let createDepartment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.departmentName || !data.imageBase64 || !data.descriptionHTML || !data.descriptionMarkdown || !data.address ||
                !data.phonenumber || !data.branchName || !data.email || !data.departmentManager || !data.departmentId || !data.departmentCode
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                await db.Department.create({
                    phonenumber: data.phonenumber,
                    email: data.email,
                    branchName: data.branchName,
                    departmentName: data.departmentName,
                    departmentCode: data.departmentCode,
                    departmentId: data.departmentId,
                    departmentManager: data.departmentManager,
                    address: data.address,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown
                })

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

let getAllDepartment = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Department.findAll({

            });
            if (data && data.length > 0) {
                data.map(item => {
                    item.image = Buffer.from(item.image, 'base64').toString('binary');
                    return item;
                })
            }

            resolve({
                errMessage: 'ok',
                errCode: 0,
                data
            })

        } catch (e) {
            reject(e);
        }
    })
}

let getAllDepartmentManagers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let departmentManagers = await db.User.findAll({
                where: {
                    roleId: 'R4'
                },
                attributes: {
                    exclude: ['password', 'image']
                },
            })
            resolve({
                errCode: 0,
                data: departmentManagers
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getDetailDepartmentById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                let data = await db.Department.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: ['departmentName', 'departmentCode', 'branchName', 'departmentId', 'departmentManager', 'address', 'descriptionHTML', 'descriptionMarkdown', 'createdAt', 'image', 'email', 'phonenumber', 'updatedAt'],
                })
                if (data && data.image) {
                    data.image = Buffer.from(data.image, 'base64').toString('binary');
                }
                if (data) {
                    let managerDepartment = [];
                    managerDepartment = await db.Manager.findAll({
                        where: { departmentId: inputId },
                        attributes: ['managerId', 'provinceId'],
                    })
                    data.managerDepartment = managerDepartment;

                } else data = {}
                resolve({
                    errCode: 0,
                    errMessage: 'ok',
                    data
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createDepartment: createDepartment,
    getAllDepartment: getAllDepartment,
    getDetailDepartmentById: getDetailDepartmentById,
    getAllDepartmentManagers: getAllDepartmentManagers,
}