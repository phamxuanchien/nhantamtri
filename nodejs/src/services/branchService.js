const db = require("../models");

let createBranch = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.branchName || !data.imageBase64 || !data.descriptionHTML || !data.descriptionMarkdown ||
                !data.address || !data.phonenumber || !data.email || !data.branchId || !data.branchManager || !data.branchCode
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                await db.Branch.create({
                    phonenumber: data.phonenumber,
                    email: data.email,
                    branchName: data.branchName,
                    branchCode: data.branchCode,
                    branchId: data.branchId,
                    branchManager: data.branchManager,
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

let getAllBranchManagers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let branchManagers = await db.User.findAll({
                where: {
                    roleId: ['R2', 'R1', 'R3']
                },
                attributes: {
                    exclude: ['password', 'image']
                },
            })
            resolve({
                errCode: 0,
                data: branchManagers
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllBranch = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Branch.findAll({

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

let getDetailBranchById = (inputId, location) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId || !location) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                let data = await db.Branch.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: ['branchName', 'branchCode', 'branchId', 'branchManager', 'address', 'descriptionHTML', 'descriptionMarkdown', 'createdAt', 'image', 'email', 'phonenumber', 'updatedAt'],
                })
                if (data && data.image) {
                    data.image = Buffer.from(data.image, 'base64').toString('binary');
                }
                if (data) {
                    let managerBranch = [];
                    if (location === 'ALL') {
                        managerBranch = await db.Manager.findAll({
                            where: { branchId: inputId },
                            attributes: ['managerId', 'provinceId'],
                        })
                    } else {
                        managerBranch = await db.Manager.findAll({
                            where: {
                                branchId: inputId,
                                provinceId: location
                            },
                            attributes: ['managerId', 'provinceId'],
                        })
                    }
                    data.managerBranch = managerBranch;
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
    createBranch: createBranch,
    getAllBranch: getAllBranch,
    getDetailBranchById: getDetailBranchById,
    getAllBranchManagers: getAllBranchManagers,
}