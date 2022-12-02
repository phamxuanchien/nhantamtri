import benefactorService from "../services/benefactorService";


let getTopBenefactorHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await benefactorService.getTopBenefactorHome(+limit);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllBenefactors = async (req, res) => {
    try {
        let benefactors = await benefactorService.getAllBenefactors();
        return res.status(200).json(benefactors)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let postInforBenefactor = async (req, res) => {
    try {
        let response = await benefactorService.saveDetailInforBenefactor(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getDetailBenefactorById = async (req, res) => {
    try {
        let infor = await benefactorService.getDetailBenefactorById(req.query.id);
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
        let infor = await benefactorService.bulkCreateSchedule(req.body);
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
        let infor = await benefactorService.getScheduleByDate(req.query.benefactorId, req.query.date);
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

let getExtraInforBenefactorById = async (req, res) => {
    try {
        let infor = await benefactorService.getExtraInforBenefactorById(req.query.benefactorId);
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

let getProfileBenefactorById = async (req, res) => {
    try {
        let infor = await benefactorService.getProfileBenefactorById(req.query.benefactorId);
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

let getListPatientForBenefactor = async (req, res) => {
    try {
        let infor = await benefactorService.getListPatientForBenefactor(req.query.benefactorId, req.query.date);
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
        let infor = await benefactorService.sendRemedy(req.body);
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
    getTopBenefactorHome: getTopBenefactorHome,
    getAllBenefactors: getAllBenefactors,
    postInforBenefactor: postInforBenefactor,
    getDetailBenefactorById: getDetailBenefactorById,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleByDate: getScheduleByDate,
    getExtraInforBenefactorById: getExtraInforBenefactorById,
    getProfileBenefactorById: getProfileBenefactorById,
    getListPatientForBenefactor: getListPatientForBenefactor,
    sendRemedy: sendRemedy
}