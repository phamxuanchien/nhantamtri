const db = require("../models");

let createAllcode = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.keyMap || !data.type || !data.valueVi || !data.valueEn
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                await db.Allcode.create({
                    keyMap: data.keyMap,
                    type: data.type,
                    valueVi: data.valueVi,
                    valueEn: data.valueEn,

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

let getAllAllcode = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Allcode.findAll({

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

let getDetailAllcodeById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                let data = await db.Allcode.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: ['keyMape', 'type', 'valueEn', 'valueVi', 'createdAt'],
                })
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
let deleteAllcode = (allcodeId) => {
    return new Promise(async (resolve, reject) => {
        let allcodes = await db.Allcode.findOne({
            where: { id: allcodeId }
        })
        if (!allcodes) {
            resolve({
                errCode: 2,
                errMessage: 'The user is not exist'
            })
        }
        await db.Allcode.destroy({
            where: { id: allcodeId }
        })
        resolve({
            errCode: 0,
            message: 'The user is deleted'
        })
    })
}
let updateAllcodeData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.keyMap || !data.type || !data.valueEn || !data.valueVi) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameters!'
                })
            }
            let allcode = await db.Allcode.findOne({
                where: { id: data.id },
                raw: false
            })
            if (allcode) {
                allcode.keyMap = data.keyMap;
                allcode.type = data.type;
                allcode.valueEn = data.valueEn;
                allcode.valueVi = data.valueVi;
                await allcode.save();
                resolve({
                    errCode: 0,
                    message: 'Update the user succeed!'
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'user is not found'
                });

            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createAllcode: createAllcode,
    getAllAllcode: getAllAllcode,
    getDetailAllcodeById: getDetailAllcodeById,
    deleteAllcode: deleteAllcode,
    updateAllcodeData: updateAllcodeData,
}