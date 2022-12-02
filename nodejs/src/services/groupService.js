const db = require("../models");

let createGroup = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.descriptionHTML || !data.descriptionMarkdown || !data.address || !data.phonenumber || !data.email
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                await db.Group.create({
                    phonenumber: data.phonenumber,
                    email: data.email,
                    name: data.name,
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

let getAllGroup = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Group.findAll({

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

let getAllGroupManagers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let groupManagers = await db.User.findAll({
                where: {
                    roleId: ['R5', 'R6']
                },
                attributes: {
                    exclude: ['password', 'image']
                },
            })
            resolve({
                errCode: 0,
                data: groupManagers
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getDetailGroupById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                let data = await db.Group.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: ['name', 'address', 'descriptionHTML', 'descriptionMarkdown', 'createdAt', 'image', 'email', 'phonenumber'],
                })
                if (data && data.image) {
                    data.image = Buffer.from(data.image, 'base64').toString('binary');
                }
                if (data) {
                    let managerGroup = [];
                    managerGroup = await db.Manager.findAll({
                        where: { groupId: inputId },
                        attributes: ['managerId', 'provinceId'],
                    })
                    data.managerGroup = managerGroup;

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
    createGroup: createGroup,
    getAllGroup: getAllGroup,
    getDetailGroupById: getDetailGroupById,
    getAllGroupManagers: getAllGroupManagers
}