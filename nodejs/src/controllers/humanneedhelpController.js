import humanneedhelpService from '../services/humanneedhelpService';

let createHumanneedhelp = async (req, res) => {
    try {
        let infor = await humanneedhelpService.createHumanneedhelp(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllHumanneedhelp = async (req, res) => {
    try {
        let infor = await humanneedhelpService.getAllHumanneedhelp();
        return res.status(200).json(
            infor
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getDetailHumanneedhelpById = async (req, res) => {
    try {
        let infor = await humanneedhelpService.getDetailHumanneedhelpById(req.query.id);
        return res.status(200).json(
            infor
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports = {
    createHumanneedhelp: createHumanneedhelp,
    getAllHumanneedhelp: getAllHumanneedhelp,
    getDetailHumanneedhelpById: getDetailHumanneedhelpById,
}