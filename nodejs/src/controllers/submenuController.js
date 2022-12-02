import submenuService from '../services/submenuService';

let createSubmenu = async (req, res) => {
    try {
        let infor = await submenuService.createSubmenu(req.body);
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

let getAllSubmenu = async (req, res) => {
    try {
        let infor = await submenuService.getAllSubmenu();
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
let getAllSubmenuprogram = async (req, res) => {
    try {
        let infor = await submenuService.getAllSubmenuprogram();
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

let getAllSubmenuguide = async (req, res) => {
    try {
        let infor = await submenuService.getAllSubmenuguide();
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
let getAllSubmenuaboutus = async (req, res) => {
    try {
        let infor = await submenuService.getAllSubmenuaboutus();
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

let getAllSubmenucontact = async (req, res) => {
    try {
        let infor = await submenuService.getAllSubmenucontact();
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
let getDetailSubmenuById = async (req, res) => {
    try {
        let infor = await submenuService.getDetailSubmenuById(req.query.id);
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
    createSubmenu: createSubmenu,
    getAllSubmenu: getAllSubmenu,
    getDetailSubmenuById: getDetailSubmenuById,
    getAllSubmenuprogram: getAllSubmenuprogram,
    getAllSubmenuaboutus: getAllSubmenuaboutus,
    getAllSubmenuguide: getAllSubmenuguide,
    getAllSubmenucontact: getAllSubmenucontact
}