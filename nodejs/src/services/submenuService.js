const db = require("../models");

let createSubmenu = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.descriptionHTML || !data.descriptionMarkdown || !data.groupmenu
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                await db.Submenu.create({
                    name: data.name,
                    groupmenu: data.groupmenu,
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

let getAllSubmenu = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Submenu.findAll({
                include: [
                    { model: db.Allcode, as: 'groupmenuTypeData', attributes: ['valueEn', 'valueVi'] }
                ],
                raw: false,
                nest: true
            });
            if (data && data.length > 0) {
                data.map(item => {
                    item.image = Buffer.from(item.image, 'base64').toString('binary');
                    return item;
                })
            };

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
let getAllSubmenuprogram = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Submenu.findAll({
                where: {
                    groupmenu: 'GROUP2'
                },

            })
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
let getAllSubmenuaboutus = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Submenu.findAll({
                where: {
                    groupmenu: 'GROUP3'
                },

            })
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
let getAllSubmenuguide = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Submenu.findAll({
                where: {
                    groupmenu: 'GROUP1'
                },

            })
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
let getAllSubmenucontact = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Submenu.findAll({
                where: {
                    groupmenu: 'GROUP4'
                },

            })
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

let getDetailSubmenuById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                let data = await db.Submenu.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: ['name', 'groupmenu', 'descriptionHTML', 'descriptionMarkdown', 'createdAt', 'image'],

                    include: [
                        { model: db.Allcode, as: 'groupmenuTypeData', attributes: ['valueEn', 'valueVi'] }
                    ]
                })
                if (data && data.image) {
                    data.image = Buffer.from(data.image, 'base64').toString('binary');
                }
                else data = {}
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
    createSubmenu: createSubmenu,
    getAllSubmenu: getAllSubmenu,
    getDetailSubmenuById: getDetailSubmenuById,
    getAllSubmenuprogram: getAllSubmenuprogram,
    getAllSubmenuaboutus: getAllSubmenuaboutus,
    getAllSubmenuguide: getAllSubmenuguide,
    getAllSubmenucontact: getAllSubmenucontact
}