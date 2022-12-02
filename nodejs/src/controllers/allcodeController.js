import allcodeService from '../services/allcodeService';

let createAllcode = async (req, res) => {
    try {
        let infor = await allcodeService.createAllcode(req.body);
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

let getAllAllcode = async (req, res) => {
    try {
        let infor = await allcodeService.getAllAllcode();
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

let getDetailAllcodeById = async (req, res) => {
    try {
        let infor = await allcodeService.getDetailAllcodeById(req.query.id);
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
let handleDeleteAllcode = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await allcodeService.deleteAllcode(req.body.id);
    return res.status(200).json(message);
}
let handleEditAllcode = async (req, res) => {
    let data = req.body;
    let message = await allcodeService.updateAllcodeData(data);
    return res.status(200).json(message)
}

module.exports = {
    createAllcode: createAllcode,
    getAllAllcode: getAllAllcode,
    getDetailAllcodeById: getDetailAllcodeById,
    handleDeleteAllcode: handleDeleteAllcode,
    handleEditAllcode: handleEditAllcode
}