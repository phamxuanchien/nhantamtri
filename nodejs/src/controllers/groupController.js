import groupService from '../services/groupService';

let createGroup = async (req, res) => {
    try {
        let infor = await groupService.createGroup(req.body);
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


let getAllGroupManagers = async (req, res) => {
    try {
        let groupManager = await groupService.getAllGroupManagers();
        return res.status(200).json(groupManager)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllGroup = async (req, res) => {
    try {
        let infor = await groupService.getAllGroup();
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

let getDetailGroupById = async (req, res) => {
    try {
        let infor = await groupService.getDetailGroupById(req.query.id);
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
    createGroup: createGroup,
    getAllGroup: getAllGroup,
    getDetailGroupById: getDetailGroupById,
    getAllGroupManagers: getAllGroupManagers,
}