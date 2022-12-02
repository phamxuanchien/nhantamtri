import managerService from "../services/managerService";


let getTopManagerHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await managerService.getTopManagerHome(+limit);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllManagers = async (req, res) => {
    try {
        let managers = await managerService.getAllManagers();
        return res.status(200).json(managers)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let postInforManager = async (req, res) => {
    try {
        let response = await managerService.saveDetailInforManager(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getDetailManagerById = async (req, res) => {
    try {
        let infor = await managerService.getDetailManagerById(req.query.id);
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
let bulkCreateSchedule = async (req, res) => {
    try {
        let infor = await managerService.bulkCreateSchedule(req.body);
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

let getScheduleByDate = async (req, res) => {
    try {
        let infor = await managerService.getScheduleByDate(req.query.managerId, req.query.date);
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

let getExtraInforManagerById = async (req, res) => {
    try {
        let infor = await managerService.getExtraInforManagerById(req.query.managerId);
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

let getProfileManagerById = async (req, res) => {
    try {
        let infor = await managerService.getProfileManagerById(req.query.managerId);
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

let getListPatientForManager = async (req, res) => {
    try {
        let infor = await managerService.getListPatientForManager(req.query.managerId, req.query.date);
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

let sendRemedy = async (req, res) => {
    try {
        let infor = await managerService.sendRemedy(req.body);
        return res.status(200).json(
            infor
        )
        //res.status(200).json({'success' : true, 'result': result})
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}
module.exports = {
    getTopManagerHome: getTopManagerHome,
    getAllManagers: getAllManagers,
    postInforManager: postInforManager,
    getDetailManagerById: getDetailManagerById,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleByDate: getScheduleByDate,
    getExtraInforManagerById: getExtraInforManagerById,
    getProfileManagerById: getProfileManagerById,
    getListPatientForManager: getListPatientForManager,
    sendRemedy: sendRemedy
}