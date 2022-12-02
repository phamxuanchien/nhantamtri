const db = require("../models");

let createProjectneedhelp = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.imageBase64 || !data.descriptionHTML || !data.descriptionMarkdown || !data.address || !data.phonenumber || !data.email
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                await db.Projectneedhelp.create({
                    name: data.name,
                    address: data.address,
                    location: data.location,
                    purpose: data.purpose,
                    program: data.program,
                    cost: data.cost,
                    begin: data.begin,
                    operate: data.operate,
                    managename: data.managename,
                    manage: data.manage,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                    email: data.email,
                    phonenumber: data.phonenumber,
                    stage: data.stage,
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

let getAllProjectneedhelp = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Projectneedhelp.findAll({
                include: [
                    { model: db.Allcode, as: 'stageData', attributes: ['valueEn', 'valueVi'] },
                ],
                raw: true,
                nest: true
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

let getDetailProjectneedhelpById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                let data = await db.Projectneedhelp.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: ['name', 'address', 'descriptionHTML', 'descriptionMarkdown', 'createdAt', 'program',
                        'image', 'email', 'phonenumber', 'location', 'purpose', 'cost', 'begin', 'operate', 'managename', 'manage', 'stage'
                    ],
                })
                if (data && data.image) {
                    data.image = Buffer.from(data.image, 'base64').toString('binary');
                }
                if (data) {
                    let managerProjectneedhelp = [];
                    managerProjectneedhelp = await db.Benefactor.findAll({
                        where: { projectneedhelpId: inputId },
                        attributes: ['benefactorId'],
                    })
                    data.managerProjectneedhelp = managerProjectneedhelp;

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
    createProjectneedhelp: createProjectneedhelp,
    getAllProjectneedhelp: getAllProjectneedhelp,
    getDetailProjectneedhelpById: getDetailProjectneedhelpById,
}