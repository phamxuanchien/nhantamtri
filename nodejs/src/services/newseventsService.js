const db = require("../models");

let createNewsevents = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.title || !data.imageBase64 || !data.descriptionHTML || !data.descriptionMarkdown || !data.abstract
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                await db.Newsevents.create({
                    title: data.title,
                    abstract: data.abstract,
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

let getAllNewsevents = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Newsevents.findAll({

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

let getDetailNewseventsById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                let data = await db.Newsevents.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: ['title', 'abstract', 'descriptionHTML', 'descriptionMarkdown', 'createdAt', 'image', 'updatedAt'],
                })
                if (data && data.image) {
                    data.image = Buffer.from(data.image, 'base64').toString('binary');
                }
                // if (data) {
                //     let managerNewsevents = [];
                //     managerNewsevents = await db.Benefactor.findAll({
                //         where: { newseventsId: inputId },
                //         attributes: ['benefactorId'],
                //     })
                //     data.managerNewsevents = managerNewsevents;

                // } 
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
    createNewsevents: createNewsevents,
    getAllNewsevents: getAllNewsevents,
    getDetailNewseventsById: getDetailNewseventsById,
}